'use client';
import { useRouter } from "next/navigation";



export default function Home() {
const router = useRouter()

  return (
    <main className="flex min-h-screen flex-col p-8">
     <h1 className="font-bold-text-lg">NextJS blogs</h1>
     <div className="flex gap-5">
      <button onClick={()=>router.push('/blog-list')} className="border border-red-500 p-4 bg-black text-white">Visit All Blogs</button>
      <button  onClick={()=>router.push('/add-blog')} className="border border-red-500 p-4 bg-black text-white">Create New Blog</button>
     </div>
    </main>
  );
}
