import BlogDetailsComponent from "@/components/blog/details";

async function fetchBlogItemDetails(getCurrentBlogId){
    const res = await fetch(`http://localhost:3000/api/blog/blog-details?id=${getCurrentBlogId}`,
    {
        method: "GET",
        cache: "no-store",
    }
    );
    const data = await res.json();
    if(data?.success) return data.data
}
export default async function BlogDetails({params}){
    
    const {details} = params;
    const blogDetails = await fetchBlogItemDetails(details)
    return <div>
        <BlogDetailsComponent blogDetails={blogDetails}/>
    </div>
}