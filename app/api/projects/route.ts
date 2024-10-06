import { Project } from "@/data/interfaces"; // Importing the Project interface for type safety
import clientPromise from "@/libs/mongodb"; // Importing a promise that resolves to the MongoDB client
import { Db, MongoClient, WithId } from "mongodb"; // Importing necessary MongoDB types
import { NextResponse } from "next/server"; // Importing NextResponse to construct HTTP responses

/**
 * Handles GET requests to retrieve projects data from the MongoDB database.
 * 
 * URL: /api/projects
 * Method: GET
 * This function connects to the MongoDB client, queries the 'projects' collection,
 * and maps the results to the Project interface. 
 * 
 * @returns {Promise<NextResponse>} A JSON response containing an array of projects with a 200 status code on success,
 *                                  or a 500 status code on error.
 */
export async function GET(): Promise<NextResponse> {
    try {
        // Connect to the MongoDB client
        /**
         * The MongoDB client instance used to interact with the database.
         * @type {MongoClient}
         */
        const client: MongoClient = await clientPromise; // Await the MongoDB client promise to establish connection

        /**
         * The MongoDB database instance for the 'portfolio' database.
         * @type {Db}
         */
        const db: Db = client.db('portfolio'); // Select the 'portfolio' database for further operations

        // Fetch all projects from the 'projects' collection and convert to an array
        /**
         * An array of project documents retrieved from the 'projects' collection.
         * Each document includes the project data along with an automatically generated ObjectId.
         * @type {WithId<Project>[]}
         */
        const result: WithId<Project>[] = await db.collection('projects').find({}).toArray() as WithId<Project>[]; // Find all documents in the collection

        // Testing:
        // console.dir(result); // Log the project data for debugging purposes
        
        // Map the result to conform to the Project interface
        /**
         * An array of projects mapped to the Project interface, excluding MongoDB's default _id property.
         * @type {Project[]}
         */
        const projects: Project[] = result.map((project) => ({
            id: project.id, // Project ID
            title: project.title, // Project title
            shortDescription: project.shortDescription, // Short description of the project
            overview: project.overview, // Detailed overview of the project
            technologies: project.technologies, // Array of technologies used in the project
            github: project.github, // GitHub link for the project
        }));

        // Return the successful response with status 200
        /**
         * Constructs a JSON response containing the array of projects.
         * 
         * This response indicates successful data retrieval with a 200 status code.
         * 
         * @returns {NextResponse} A JSON response object containing:
         *   - `projects` {Project[]}: An array of projects retrieved from the database.
         *   - `status` {number}: HTTP status code set to 200, indicating a successful request.
         */
        return NextResponse.json(projects, 
            { status: 200 } // Return the projects as JSON with a 200 status code
        );

    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        
        // Return the error response with status 500
        /**
         * Constructs a JSON response indicating an error that occurred during data retrieval.
         * 
         * This response includes a message describing the error and provides additional 
         * details if they are available.
         * 
         * @returns {NextResponse} A JSON response object with the following structure:
         *   - `message` {string}: A brief description indicating that an error occurred 
         *     while attempting to retrieve data.
         *   - `error` {string}: A detailed error message if available; otherwise, 
         *     a fallback message stating 'Unknown error'.
         *   - `status` {number}: HTTP status code set to 500, indicating an internal 
         *     server error.
         */
        return NextResponse.json(
            { message: 'Error retrieving data', error: error instanceof Error ? error.message : 'Unknown error' }, 
            { status: 500 } // Indicate a server error if something goes wrong
        );
    }
}

/**
 * Handles HTTP requests for unsupported methods (POST, PUT, PATCH, DELETE, HEAD, OPTIONS).
 * 
 * This function responds to requests with a message indicating that the method is not implemented,
 * returning a 405 status code to indicate that the requested method is not allowed.
 * 
 * @returns {NextResponse} A JSON response indicating that the method is not implemented,
 *                        with a 405 status code.
 */
function unsupportedMethodHandler(): NextResponse {
    /**
     * Constructs a JSON response indicating that the requested method is not implemented.
     * 
     * The response body contains the message "Methods not implemented", and the status
     * is set to 405 to signal that the method is not allowed.
     * 
     * @type {NextResponse} The response object that will be sent back to the client.
     */
    return NextResponse.json("Methods not implemented", { status: 405 });
}

// Exporting the unsupportedMethodHandler function as the default response for unsupported methods (POST, PUT, PATCH, DELETE, HEAD, OPTIONS)
// This allows the function to handle requests that use these HTTP methods.
export { 
    unsupportedMethodHandler as POST, 
    unsupportedMethodHandler as PUT, 
    unsupportedMethodHandler as PATCH, 
    unsupportedMethodHandler as DELETE, 
    unsupportedMethodHandler as HEAD, 
    unsupportedMethodHandler as OPTIONS
};
