'use client' // always write in the top when you want to use some react js concept like hook
import { useState } from 'react'
import Link from 'next/link'
import styles from './page.module.css'
import { useRouter } from "next/navigation"

export default function Home() {
  // const store = (item) => {
  //   alert(item)
  // }
  // const [name, setName] = useState("Sujal")
  // const store = () => {
  //   setName("Varun")
  // }

  const router = useRouter();
  const navigate = (name) => {
    router.push(name)
  }
  return (
    <main>
      {/* <h1>Hello World</h1>
      <User name="Sujal" />
      <User name="Varun" />
      <User name="Keta" /> */}
      {/* <h1>Events, Function and state </h1>
      <h1>My name is {name}</h1>
      <button onClick={() => store()}>Click Me</button> */}


      <h1>The Basic Linking and Navigation.</h1>
      <Link href="/Login">Go to login page</Link>
      <br />
      <br />
      <Link href="/about">Go to about page</Link>
      <br />
      <br />
      <button onClick={() => navigate("/Login")}>Go to Login Page</button>
      <button onClick={() => navigate("/about")}>Go to About Page</button>
    </main>
  )
}

// const User = (props) => {
//   return (
//     <main>
//       <p>Hey My name is {props.name}</p>
//     </main>
//   )
// }
