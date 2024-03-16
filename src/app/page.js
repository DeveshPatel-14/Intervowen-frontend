'use client'
import "./globals.css";

import React, { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

export default function Home() {
  const { data: session } = useSession();
  const pathname = usePathname();

  useEffect(() => {
    if (session) {
      if (!session.user) {
        signOut();
      }
    }
  }, [session]);

  useEffect(() => {
    if (session) {
      if (session.user) {
          if(session.user.role === 'superAdmin')
          {
            window.location.href = "http://localhost:3000/admin";
          }
          else if(session.user.role === 'reviewer')
          {
            window.location.href = "http://localhost:3000/reviewer";
          }
          else if(session.user.role === 'author')
          {
            window.location.href = "http://localhost:3000/author";
          }
      }
    }
  }, [session]);
  return (
    <></>
  );
}
