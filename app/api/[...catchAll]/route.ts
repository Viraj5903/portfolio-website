/**
 * Catch-All API Route Handler
 * 
 * This API route serves as a catch-all for any requests made to the API that do not match existing routes.
 * It responds with a 404 status code and a message indicating that no route was found.
 * 
 * Methods:
 * - GET: Handles GET requests to undefined routes.
 * - POST: Handles POST requests to undefined routes.
 * - PUT: Handles PUT requests to undefined routes.
 * - DELETE: Handles DELETE requests to undefined routes.
 */

import { NextResponse } from 'next/server'; // Importing NextResponse for constructing HTTP responses

/**
 * Handles GET requests to undefined API routes.
 * 
 * @returns {Promise<NextResponse>} A JSON response indicating that no route was found, with a 404 status code.
 */
export async function GET(): Promise<NextResponse> {
    // Responding with a JSON object and setting the HTTP status to 404 (Not Found)
    return NextResponse.json({ message: 'No Route Found' }, { status: 404 });
}

/**
 * Handles POST requests to undefined API routes.
 * 
 * @returns {Promise<NextResponse>} A JSON response indicating that no route was found, with a 404 status code.
 */
export async function POST(): Promise<NextResponse> {
    // Responding with a JSON object and setting the HTTP status to 404 (Not Found)
    return NextResponse.json({ message: 'No Route Found' }, { status: 404 });
}

/**
 * Handles PUT requests to undefined API routes.
 * 
 * @returns {Promise<NextResponse>} A JSON response indicating that no route was found, with a 404 status code.
 */
export async function PUT(): Promise<NextResponse> {
    // Responding with a JSON object and setting the HTTP status to 404 (Not Found)
    return NextResponse.json({ message: 'No Route Found' }, { status: 404 });
}

/**
 * Handles DELETE requests to undefined API routes.
 * 
 * @returns {Promise<NextResponse>} A JSON response indicating that no route was found, with a 404 status code.
 */
export async function DELETE(): Promise<NextResponse> {
    // Responding with a JSON object and setting the HTTP status to 404 (Not Found)
    return NextResponse.json({ message: 'No Route Found' }, { status: 404 });
}
