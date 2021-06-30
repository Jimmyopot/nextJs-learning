import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
    return (
        <nav>
            <div className="logo">
                <Image 
                    src="/jimmy_logo.jpg" 
                    width={128}
                    height={77}
                />
            </div>
            <Link href="/"><a>Home</a></Link><br />
            <Link href="/about"><a>About</a></Link><br />
            <Link href="/jimmy"><a>Shoes Listings</a></Link>
        </nav>
    )
}

export default Navbar;
