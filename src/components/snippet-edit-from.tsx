'use client'
import { use, useState } from "react";
import { SnippetProps } from "@/lib/interfaces"
import { Editor } from "@monaco-editor/react"
interface SnippetEditProps
{
    snippet: SnippetProps
}

export default function SnippetEditForm ( { snippet }: SnippetEditProps  ) {
    const [ code, setCode ] = useState(snippet.code)

    const handleEditorOnChange = (value: string = "") =>
    {
       console.log(value)
       setCode(value)
    }

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
     </div>
)
     
}