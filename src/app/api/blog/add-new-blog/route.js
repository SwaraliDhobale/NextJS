import connectDb from "@/database"
import Blog from '@/models/blog'
import { NextResponse } from "next/server"

export async function POST(req){
    try{
        await connectDb();
        const extractData = await req.json();
        const newlyCreatedBlogData = await Blog.create(extractData)
        if(newlyCreatedBlogData){
            return NextResponse.json({
                success: true,
                message: 'Blog added successfully'
            });
        }
        else{
            return NextResponse.json({
                success: false,
                message: 'Failed to add new blog to database'
            })
        }
    }catch(e){
        console.log(e)
        return NextResponse.json({
            success: false,
            message: 'something went wrong'
        })
    }
}