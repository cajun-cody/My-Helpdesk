import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from './help.png';

export default function Navbar() {
  return (
    <nav>
        <Image 
            src={logo}
            alt='help logo'
            width={70}
            quality={100}
            placeholder='blur'
        />
        <h1>My Helpdesk</h1>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
