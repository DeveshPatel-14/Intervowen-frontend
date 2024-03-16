'use client'
import React, { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react';


const page = () => {
    const searchParams = useSearchParams()
    const router = useRouter();
    const [invalid,setInvalid] = useState(false);

    const search = searchParams.get('id')
    const { data: session } = useSession();

    useEffect(() => {
        const fetchData = async () => {
            const headers = {
                'Content-Type': 'application/json',
                authorization: `Bearer ${session?.user?.accessToken}`,
            };

            const response = await fetch(
                `${process.env.API_URL}/auth/verifyLink`,
                {
                    method: 'POST',
                    headers,
                    body: JSON.stringify({ token: search }),
                }
            );

            if(response.status === 404)
            {
                console.log('rendered');
                setInvalid(true);
            }
        }

        fetchData();
    }, [])

    return (
        <div>{invalid ? <div>invalid</div> : <div>valid</div>}</div>
    )
}

export default page