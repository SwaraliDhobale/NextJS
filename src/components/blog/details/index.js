'use client'

export default function BlogDetailsComponent(blogDetails){
    return <div className="p-4 border flex flex-col gap-4 border-red-600">
        <p>{blogDetails?.title}</p>
        <p>{blogDetails?.description}</p>
    </div>}