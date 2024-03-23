import { fetchSnnipetById } from "@/lib"
import { SnippetProps } from "@/lib/interfaces";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/snippet-edit-from";

interface SnippetEditProps
{
    params: {
        id: string
    }
}


export default async function SnnipetEditPage (props: SnippetEditProps) {
    const id = parseInt( props.params.id )

    const snnipet = await fetchSnnipetById( id ) as SnippetProps; 
    
    if (!snnipet) {
        return notFound()
    }

    return (
        <div>
            <SnippetEditForm snippet={snnipet} />
        </div>
    )
}