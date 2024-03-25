'use client'
import { useState } from "react";
import { SnippetProps } from "@/lib/interfaces"
import { Editor } from "@monaco-editor/react"
import { editSnippet } from "@/actions"
interface SnippetEditProps
{
    snippet: SnippetProps
}

export default function SnippetEditForm ( { snippet }: SnippetEditProps  ) {
    const [ code, setCode ] = useState(snippet.code)

    const handleEditorOnChange = (value: string = "") =>
    {
       setCode( value )
    }

    const editSinppetAction = editSnippet.bind(null, snippet.id, code)

    return (
      <div>
            <h2 className="mb-5 mt-5">Edit Snippet: { snippet.title }</h2>
            <Editor
                height="40vh"
                theme="vs-dark"
                language="javascript"
                defaultValue={ snippet.code }
                options={ { minimap: { enable: false } } }
                onChange={handleEditorOnChange}
            />
            <form action={editSinppetAction}>
                <button type="submit" className="p-2 border rounded">Save</button>
            </form>
     </div>
)
     
}