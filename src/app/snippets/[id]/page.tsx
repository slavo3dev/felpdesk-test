import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchSnnipetById } from "@/lib";
import { SnippetProps } from "@/lib/interfaces";
import { deleteSnippet } from "@/actions";
interface ShowPageProps
{
    params: {
        id: string
    }
}

export default async function SnnipetsShowPage ( props: ShowPageProps ) {
 await new Promise((r) => setTimeout(r, 800));
  const id = parseInt(props.params.id)
    const snippet = await fetchSnnipetById( id ) as SnippetProps
    
    const deleteSnippetAction = deleteSnippet.bind(null, id)
    
    
    const snnipetComponent = (snip: any) =>
    {
        return (
          <div>
            <div className="flex m-4 justify-between items-center">
                <h1 className="text-xl font-bold">{ snip.title }</h1> 
                <div className="flex gap-4">
                    <Link href={`/snippets/${snippet.id}/edit`} className="p-2 border rounded">Edit</Link>
                    <form action={deleteSnippetAction} >
                        <button type="submit" className="p-2 border rounded">Delete</button>
                    </form>
                </div>
            </div>
                <pre className="p-4 border rounded bg-gray-200 border-gray-200">
                   {snippet ? <code>{snippet.code}</code> : "No Code at this moment"}
                </pre>
          </div> 
       )
    }
    return snippet ? snnipetComponent(snippet) : notFound();
}