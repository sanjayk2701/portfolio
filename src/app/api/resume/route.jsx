import connectMongodb from "../../../../utils/connectMongodb";
import resumeModel from "../../../../models/resumeModel"

export async function GET(){
    try{
        await connectMongodb;
        const resumeData = await resumeModel.find({});
        return Response.json(resumeData);

    }catch(error){
        console.log(error);
        return Response.json({ message: error.message });

    }
    
}