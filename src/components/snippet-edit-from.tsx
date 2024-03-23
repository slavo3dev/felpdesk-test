'use client'

import { SnippetProps } from "@/lib/interfaces"

interface SnippetEditProps
{
    snippet: SnippetProps
}

export default function SnippetEditForm ( { snippet }: SnippetEditProps  ) {
    
    return (
      <div>
        Client Component with Snippet: {snippet.title }
     </div>
)
     
}