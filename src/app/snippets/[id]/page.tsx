import { notFound } from "next/navigation";
import { db } from "@/db"

interface ShowPageProps
{
    params: {
        id: string
    }
}

export default async function SnippetsShowPage ( props: ShowPageProps ) {
 await new Promise((r) => setTimeout(r, 2000));

  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) },
  } );
    
    const snippetComponent = (snip: any) =>
    {
        return (
            <div className="flex m-4 justify-between items-center">
                <h1 className="text-xl font-bold">{ snip.title }</h1> 
                <div>
                    <button className="p-2 border rounded">Edit</button>
                    <button className="p-2 border rounded">Delete</button>
                </div>
                <pre className="p-4 border rounded bg-gray-200 border-gray-200">
                   {snippet ? <code>{snippet.code}</code> : "No Code at this moment"}
                </pre>
          </div> 
       )
    }
    return snippet ? snippetComponent(snippet) : notFound();
}