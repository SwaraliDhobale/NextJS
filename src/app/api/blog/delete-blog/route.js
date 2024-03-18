import connectDb from "@/database";
import { NextResponse } from "next/server";
import Blog from "@/models/blog";

export async function DELETE(req){
    try{
        await connectDb();
        const {searchParams} = new URL(req.url);
        const currentBlogId = searchParams.get('id')
        console.log(currentBlogId);
        if(!currentBlogId){
            return NextResponse.json({
                success: false,
                message:"ID is required",
            });
        }
        const deletedBlogItem = await Blog.findByIdAndDelete(currentBlogId);

        if(deletedBlogItem){
         return NextResponse.json({
        success: true,
        message:"Blog is deleted",
         });
        }
        else{
            return NextResponse.json({
                success: false,
                message:"Failed to delete",
                 });
        }
       
       
    }
        catch(e){
          console.log(e);
           return NextResponse.json({
            success: false,
            message: "Something went wrong!",
        });
    }
}