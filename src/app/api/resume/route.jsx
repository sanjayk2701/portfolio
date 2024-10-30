import connectMongodb from "../../../../utils/connectMongodb";
import resumeModel from "../../../../models/resumeModel";

export async function GET() {
    try {
        await connectMongodb(); // Call the connect function to establish the connection
        const resumeData = await resumeModel.find({}); // Fetch all resume data
        return new Response(JSON.stringify(resumeData), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        }); // Return the resume data as a JSON response
    } catch (error) {
        console.error(error); // Use console.error for better error logging
        return new Response(JSON.stringify({ message: error.message }), {
            status: 500, // Return a 500 status code for server errors
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
}
