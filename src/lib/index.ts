import { db } from "@/db";

export const fetchSnnipetById = async ( id: number ) => {
    const snnipet = await db.snippet.findFirst({
    where: { id: id },
    } );
    
    return snnipet
}