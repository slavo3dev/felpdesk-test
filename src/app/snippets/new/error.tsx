'use client';

interface ErrorPageProps
{ 
    error: Error
    reset: () => void
}

export default function ErrorPage ( { error }: ErrorPageProps )
{
    return (
        <div>
            <h3>{ error.message }</h3>
        </div>
    )
}