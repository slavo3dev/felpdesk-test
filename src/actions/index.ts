'use server';
import { db } from "@/db";
import { redirect } from "next/navigation"


export async function editSnippet(id: number, code: string ) {
    await db.snippet.update( {
        where: { id },
        data: { code }
    } )
    
    redirect(`/snippets/${id}`)
}

export async function deleteSnippet(id: number) {
    await db.snippet.delete( {
        where: { id },
    } )
    
    redirect(`/`)
}


export async function createSnnipet ( formState: { message: string}, formData: FormData) {
    
    const title = formData.get( 'title' )
    const code = formData.get( 'code' ) 
    
    if ( typeof title !== 'string' || title.length < 5 ) { 

        return {
            message: "Title must be at least 5 characters long"
        }
    
    }

    if (typeof code !== 'string' || code.length < 10) {
        
        return {
            message: "Code must be at least 10 characters long"
        }
    }

    const snnipet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
      console.log(snnipet)
      redirect("/")
  }