import connectMongodb from "../../../../../utils/connectMongodb";
import projectModel from "../../../../../models/projectModel";

export async function GET(req,{params}) {
  try {
    // Connect to MongoDB
    await connectMongodb();
    
    // Fetch all posts
    const projectDetails = await projectModel.findOne({_id:params.id});
    
    // Return JSON response with post data
    return Response.json(projectDetails);
  } catch (error) {
    // Handle errors and return the error message
    return Response.json({ message: error.message });
  }
}
