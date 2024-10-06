import clientPromise from "@/libs/mongodb"; // Importing the promise that resolves to the MongoDB client instance
import { Db, MongoClient, ObjectId, WithId, Document } from "mongodb"; // Importing ObjectId to work with MongoDB document IDs
import { NextResponse } from "next/server"; // Importing NextResponse to construct HTTP responses

/**
 * Handles GET requests to retrieve a specific document from the MongoDB database.
 *
 * URL: /api/test
 * Method: GET
 * 
 * This function connects to the MongoDB client, queries the 'test' collection for a document 
 * by its unique ID, and returns the retrieved data in the response.
 * 
 * @param {Request} request - The incoming HTTP request object.
 * @returns {Promise<NextResponse>} A JSON response indicating success or failure, 
 *                                  with a 200 status code on success or a 500 status code on error.
 */
export async function GET(request: Request): Promise<NextResponse> {
    console.log("Request received"); // Log to indicate that a request has been received

    try {
        // Establish a connection to the MongoDB client
        /**
         * The MongoDB client instance used to interact with the database.
         * @type {MongoClient}
         */
        const client: MongoClient = await clientPromise; // Await the MongoDB client promise to connect to the database

        /**
         * The MongoDB database instance for the 'portfolio' database.
         * @type {Db}
         */
        const db: Db = client.db('portfolio'); // Select the 'portfolio' database for operations

        console.log(request); // Log the incoming request for debugging purposes

        // Query the 'projects' collection for a document with the specified ObjectId
        /**
         * The result of the database query, which retrieves a single document.
         * @type {WithId<Document> | null}
         */
        const result: WithId<Document> | null = await db.collection('projects').findOne({ _id: new ObjectId('67041a43daae89a8bdbd41ed') }); // Find the document by its ID

        // Testing:
        // console.log(result); // Log the result for debugging purposes

        // Return a successful response with the retrieved data
        /**
         * Constructs a JSON response indicating successful retrieval of data.
         * 
         * This response includes a message confirming the success of the operation 
         * and the result obtained from the database query.
         * 
         * @returns {NextResponse} A JSON response object with the following structure:
         *   - `message` {string}: A message indicating that the data retrieval was successful.
         *   - `result` {Document|null}: The document retrieved from the database; 
         *     can be null if no document was found.
         *   - `status` {number}: HTTP status code set to 200, indicating that the 
         *     request was processed successfully.
         */
        return NextResponse.json(
            { message: 'Data retrieved successfully', result }, // Include the result in the response body
            { status: 200 } // HTTP status code indicating successful retrieval
        );
    } catch (error) {
        // Log any database errors for debugging
        console.error("Database error:", error); // Log the error details

        // Return an error response indicating failure to retrieve data
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
            { status: 500 } // HTTP status code for internal server error
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
