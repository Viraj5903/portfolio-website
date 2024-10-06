import { MongoClient, MongoClientOptions } from "mongodb"; // Importing MongoClient from the mongodb package for database operations

// Check if the MongoDB URI environment variable is set
if (!process.env.MONGODB_URI) {
  // Throw an error if the URI is missing or invalid
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

// Retrieve the MongoDB URI from environment variables
/**
 * The MongoDB URI for connecting to the database.
 * This URI contains the necessary connection details such as the protocol,
 * username, password, and database name.
 * 
 * @type {string}
 */
const uri: string = process.env.MONGODB_URI; // Assign the URI to a constant for use in connecting to the database

// Define options for the MongoClient connection (currently empty)
/**
 * Options for configuring the MongoClient connection.
 * 
 * The MongoClientOptions interface allows developers to customize various settings
 * for the MongoDB client. Proper configuration can enhance performance, security,
 * and connectivity.
 * 
 * Common properties include:
 * 
 * - `connectTimeoutMS`: (number) The maximum time in milliseconds to wait for
 *   a connection to be established. If the connection cannot be established in
 *   this time, an error will be thrown.
 * 
 * - `serverSelectionTimeoutMS`: (number) The time in milliseconds to wait for
 *   the driver to select a server for the operation. This is useful in scenarios
 *   where multiple servers are available.
 * 
 * - `ssl`: (boolean) If true, enables SSL/TLS for the connection. This is crucial
 *   for secure connections to the database, especially in production environments.
 * 
 * - `auth`: (object) An object containing authentication credentials, such as
 *   `username` and `password`, if they are not included in the connection URI.
 * 
 * - `retryWrites`: (boolean) If true, enables automatic retries for write operations
 *   in case of transient errors. This is useful for improving the resilience of
 *   applications.
 * 
 * @type {MongoClientOptions}
 * @default {}
 */
const options: MongoClientOptions = {}; // Options can be configured here for the MongoDB connection

// Create a new MongoClient instance using the URI and options
/**
 * An instance of the MongoClient for interacting with the MongoDB database.
 * This instance provides methods to perform operations such as querying,
 * inserting, updating, and deleting documents.
 * 
 * @type {MongoClient}
 */
const client: MongoClient = new MongoClient(uri, options);

/**
 * Connect to the MongoDB server and return a promise
 * 
 * This promise resolves once the client has successfully connected to
 * the MongoDB server, making it ready for database operations.
 * 
 * @type {Promise<MongoClient>}
 */
const clientPromise: Promise<MongoClient> = client.connect(); // Connects the client to the database and returns a promise

// Export the client promise for use in other parts of the application
/**
 * A promise that resolves to the connected MongoClient instance.
 * This allows other modules to access the connected client for performing
 * database operations.
 * 
 * @type {Promise<MongoClient>}
 */
export default clientPromise; // Default export of the client promise
