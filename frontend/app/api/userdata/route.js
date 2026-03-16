// MockData
import MockData from "./MOCK_DATA.json";
// NextResponse
import { NextResponse } from "next/server";

// Handle GET requests (Fetching data)
export async function GET() {
  return NextResponse.json(MockData);
}

// Handle POST requests (Creating data)
// export async function POST(request) {
//   const data = await request.json(); // Get the body sent from the frontend
//   return NextResponse.json({
//     message: "Product created!",
//     receivedData: data,
//   });
// }
