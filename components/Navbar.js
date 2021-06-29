import React from 'react';
import Link from 'next/link';

function Navbar() {
    return (
        <div>
            <div className="logo">
                <h1>Shoes</h1>
            </div>
            <Link href="/"><a>Home</a></Link><br />
            <Link href="/about"><a>About</a></Link><br />
            <Link href="/jimmychose"><a>Shoes Listings</a></Link>
        </div>
    )
}

export default Navbar;
