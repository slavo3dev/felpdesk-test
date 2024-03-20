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
  });
    return snippet ? <h1>Snippet page</h1> : notFound();
}