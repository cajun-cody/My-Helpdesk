import Link from 'next/link';
import React from 'react';

export default function AuthLayout({children}) {
  return (
    <>
    <nav>
        <h1>My HelpDesk</h1>
        <Link href="/signup">SignUp</Link>
        <Link href="/login">Login</Link>
    </nav>
    {children}
    </>
  );
}
