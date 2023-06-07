'use client'
import Link from "next/link";
import { useRouter } from 'next/navigation'
const Login = () => {
    const router = useRouter()
    return (
        <>
            <h1>Hello I am From Login Page</h1>
            {/* <Link href="/">Go to home page</Link> */}

            <button onClick={() => router.push("/")}>Go to home page</button>
        </>
    )
}

export default Login;