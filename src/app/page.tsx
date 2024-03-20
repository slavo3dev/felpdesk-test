import Link from "next/link";
import { db } from "@/db"

export default async function Home ()
{
    const snippets = await db.snippet.findMany()
    
    return (
    <>
        <div className="flex m-2 justify-between items-center">
                <h1 className="text-xl font-bold">Header Page</h1>
                <Link href={`/snippets/new`} className="rounded border p-2">Add Snippet</Link>
        </div>
        <div className="flex flex-col gap-2">
          { snippets.map( ( snippet ) =>
            <>
                <Link key={snippet.id} href={`/snippets/${snippet.id}`} className="flex justify-between items-center p-2 border rounded">
                  <h2>{snippet.title}</h2>
                  <p>View</p>
                </Link>
            </>
          ) }
        </div>
    </>
  );
}
