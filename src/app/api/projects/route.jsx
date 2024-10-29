import connectMongodb from "../../../../utils/connectMongodb";
import projectModel from "../../../../models/projectModel";

export async function GET(){
    try{
        await connectMongodb;
        const projectData = await projectModel.find({});
        return Response.json(projectData);

    }catch(error){
        console.log(error);
        return Response.json({ message: error.message });

    }
    
}