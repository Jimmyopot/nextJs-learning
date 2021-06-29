import Link from 'next/link';
import React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function NotFound() {
    
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 4000);
    }, [])

    return (
        <div className="not-found">
            <h1>Ooooops...</h1>
            <h2>That page cannot be found</h2>
            <p>Go back to the <Link href="/"><a>HomePage</a></Link> </p>
        </div>
    )
}

export default NotFound;
