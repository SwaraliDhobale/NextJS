import connectDb from "@/database";
import Blog from "@/models/blog";
import { NextResponse} from "next/server";


export async function GET(){
    try{
        await connectDb();
        const extractAllBlogs = await Blog.find({})
        if(extractAllBlogs && extractAllBlogs.length){
            return NextResponse.json({
                success: true,
                data: extractAllBlogs
            })
        }
        else{
            return NextResponse.json({
                success: false,
                message:'something went wrong'
            })
        }
    }catch(e){
        console.log(e);
        return NextResponse.json({
            success: false,
            message:'something went wrong'
        })
    }
}