import connectDb from "@/database";


export async function GET(req){
    try{
        await connectDb();
        const {searchParams} = new URL(req.url);
        const currentBlogId = searchParams.get("id");

        if(!currentBlogId){
            return NextResponse.json({
                success: false,
                message: "ID is required!",
            });
        }

        const getBlogDetails = await Blog.find({_id: currentBlogId})

        if(getBlogDetails && getBlogDetails.length){
            return NextResponse.json({
                success: true,
                data: getBlogDetails[0],
            });
        }

    }catch(e){
        console.log(e);
        return NextResponse.json({
            success: false,
            message: "something went wrong!",
        });
    }
}