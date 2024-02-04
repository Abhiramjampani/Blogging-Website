import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req, res) => {
    try{
        await connectToDB();
        const prompts = await Prompt.find({}).populate('creator')
        return new Response(JSON.stringify(prompts),{statue: 200})
    }catch(err){
        return new Response("Failed to fetch Data", {status: 500})
    }
}