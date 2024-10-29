import connectMongodb from "../../../../utils/connectMongodb";
import postModel from "../../../../models/postModel";

export async function GET() {
    try {
        await connectMongodb();
        const postData = await postModel.find({});

        return Response.json(postData)
    } catch (error) {
        console.log(error);
        return Response.json({ message: error.message });
    }

}