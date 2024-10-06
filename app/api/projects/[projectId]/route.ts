import { Project } from "@/data/interfaces"; // Importing the Project interface for type safety
import clientPromise from "@/libs/mongodb"; // Importing a promise that resolves to the MongoDB client
import { Db, MongoClient } from "mongodb"; // Importing necessary MongoDB types
import { NextResponse } from "next/server"; // Importing NextResponse to construct HTTP responses

/**
 * Handles dynamic GET requests to retrieve a specific project 
 * by its ID from the MongoDB database. The project ID is provided 
 * as a dynamic parameter in the URL, allowing for clean and RESTful 
 * access to individual project data.
 * 
 * URL: /api/projects/{projectId}
 * Method: GET
 * 
 * This function connects to the MongoDB client, queries the 'projects' 
 * collection for the project with the specified ID, and returns the 
 * project details if found.
 * 
 * @param {Request} request - The incoming request object. This object contains the HTTP request details, including 
 *                            headers, method, and any other request metadata. It can be used to inspect the request 
 *                            and determine how to respond appropriately.
 * 
 * @param {{ params: { projectId: string } }} params - An object containing the dynamic route parameters. Specifically, this includes:
 *                                                     - projectId {string}: The unique identifier of the project being 
 *                                                       requested, extracted from the URL. This ID is used to fetch the 
 *                                                       corresponding project document from the database.
 * 
 * @returns {Promise<NextResponse>} A JSON response containing the project details with a 200 status code on success, 
 *                                  or a 404 status code if the project is not found, or a 500 status code on error.
 */
export async function GET(request: Request, { params }: { params: { projectId: string } }): Promise<NextResponse> {
    
    // Testing:
    // console.dir(request);
    // console.log("Request received"); // Log to indicate that a request has been received
    // console.dir(params); // Log the parameters to inspect the projectId

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

        // Fetch the project with the specific ID from the 'projects' collection
        /**
         * Retrieves a single project document from the 'projects' collection.
         * This document includes the project data but excludes the automatically generated ObjectId.
         * 
         * @type {Project | null} The project document retrieved, or null if not found.
         */
        const result: Project | null = await db.collection('projects').findOne(
            { id: params.projectId }, // Find the project with the specified ID
            { projection: { _id: 0 }} // Exclude the _id field from the result
        ) as Project | null; // Assert that the result is of type Project or null

        // Check if the project was found
        if (!result) {
            // Return a 404 response if the project does not exist
            return NextResponse.json({ error: 'Project not found' }, { status: 404 });
        }

        // Testing:
        // console.dir(result); // Log the project data for debugging purposes

        // Return the successful response with status 200
        /**
         * Constructs a JSON response containing the project data.
         * 
         * This response indicates successful data retrieval with a 200 status code.
         * 
         * @returns {NextResponse} A JSON response object containing:
         *   - `project` {Project}: The project object retrieved from the database.
         *   - `status` {number}: HTTP status code set to 200, indicating a successful request.
         */
        return NextResponse.json(result, { status: 200 }); // Return the project as JSON with a 200 status code

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
            { message: 'Error retrieving project data', error: error instanceof Error ? error.message : 'Unknown error' }, 
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
