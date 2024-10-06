import { ContactFormData } from "@/data/interfaces"; // Importing the ContactFormData interface for type safety
import clientPromise from "@/libs/mongodb"; // Importing the promise that resolves to the MongoDB client
import { Db, InsertOneResult, MongoClient } from "mongodb"; // Importing necessary MongoDB types
import { NextResponse } from "next/server"; // Importing NextResponse to construct HTTP responses

/**
 * Handles POST requests to submit form data to the MongoDB database.
 * 
 * URL: /api/sendForm
 * Method: POST
 * 
 * This function validates the incoming request, checks the Content-Type,
 * parses the JSON body, and inserts the data into the 'forms' collection in the MongoDB database.
 * 
 * @param {Request} request - The incoming HTTP request containing form data.
 * @returns {Promise<NextResponse>} A JSON response indicating success or failure,
 *                                  with a 201 status code on success, or a 400/500 status code on error.
 */
export async function POST(request: Request): Promise<NextResponse> {
    // Check Content-Type header
    /**
     * The Content-Type header from the incoming request.
     * @type {string | null}
     */
    const contentType: string | null = request.headers.get("Content-Type"); // Retrieve the Content-Type header from the request
    if (contentType !== "application/json") {
        // Return an error response if the Content-Type is not application/json
        return NextResponse.json(
            { message: 'Invalid Content-Type. Expected application/json.' }, 
            { status: 400 } // HTTP status code for bad request
        );
    }

    try {
        // Attempt to parse the JSON body of the request
        /**
         * The parsed JSON data from the request body.
         * @type {ContactFormData}
         */
        const data: ContactFormData = await request.json(); // Parse the request body as JSON
        // Testing
        // console.dir(data); // Log the parsed data for debugging purposes

        // Validate required fields to ensure all necessary data is present
        if (!data.name || !data.email || !data.message) {
            // Return an error response if any required fields are missing
            return NextResponse.json(
                { message: 'Missing required fields: name, email, message.' }, 
                { status: 400 } // HTTP status code for bad request
            );
        }

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

        // Insert the parsed data into the specified MongoDB collection
        /**
         * The result of the database insert operation.
         * 
         * This operation inserts the form data into the 'forms' collection, along with the current date and time.
         * The 'submittedDateTime' field is set to the current date and time when the data is inserted.
         * 
         * @type {InsertOneResult}
         * @returns {Promise<InsertOneResult>} A promise that resolves to the result of the insert operation,
         *                                     containing details such as the inserted ID and other metadata.
         */
        const result: InsertOneResult = await db.collection('forms').insertOne({
            ...data,                // Spread the existing form data
            submittedDateTime: new Date() // Add the current date and time as a new field
        });

        // Testing:
        console.dir(result); // Log the result of the insert operation for debugging

        // Return a success response indicating the form was submitted successfully
        /**
         * Constructs a JSON response indicating that the form submission was successful.
         * 
         * This response includes a success message and a status code indicating resource creation.
         * 
         * @returns {NextResponse} A JSON response object containing:
         *   - `message` {string}: A message indicating the successful submission of the form.
         *   - `status` {number}: HTTP status code set to 201, indicating successful resource creation.
         */
        return NextResponse.json(
            { message: 'Form submitted successfully' }, 
            { status: 201 } // HTTP status code for successful resource creation
        );
    } catch (error) {
        // Handle JSON parsing errors specifically
        if (error instanceof SyntaxError) {
            // Return an error response if the JSON format is invalid
            return NextResponse.json(
                { message: 'Invalid JSON format.' }, 
                { status: 400 } // HTTP status code for bad request
            );
        }

        // Log any other errors for debugging purposes
        console.error("Error adding data:", error); // Log the error details

        // Return an error response with a status code of 500 for server errors
        /**
         * Constructs a JSON response indicating an error that occurred while attempting to add data.
         * 
         * This response includes a message describing the error and provides additional 
         * details if they are available.
         * 
         * @returns {NextResponse} A JSON response object with the following structure:
         *   - `message` {string}: A brief description indicating that an error occurred 
         *     while attempting to add data.
         *   - `error` {string}: A detailed error message if available; otherwise, 
         *     a fallback message stating 'Unknown error'.
         *   - `status` {number}: HTTP status code set to 500, indicating an internal 
         *     server error.
         */
        return NextResponse.json(
            { message: `Error adding data `, error: error instanceof Error ? error.message : 'Unknown error' }, 
            { status: 500 } // HTTP status code for internal server error
        );
    }
}

/**
 * Handles HTTP requests for unsupported methods (GET, PUT, PATCH, DELETE, HEAD, OPTIONS).
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

// Exporting the unsupportedMethodHandler function as the default response for unsupported methods (GET, PUT, PATCH, DELETE, HEAD, OPTIONS)
// This allows the function to handle requests that use these HTTP methods.
export { 
    unsupportedMethodHandler as GET, 
    unsupportedMethodHandler as PUT, 
    unsupportedMethodHandler as PATCH, 
    unsupportedMethodHandler as DELETE, 
    unsupportedMethodHandler as HEAD, 
    unsupportedMethodHandler as OPTIONS
};
