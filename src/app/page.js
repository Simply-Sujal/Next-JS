'use client' // always write in the top
import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  // const store = (item) => {
  //   alert(item)
  // }
  const [name, setName] = useState("Sujal")
  const store = () => {
    setName("Varun")
  }
  return (
    <main className={styles.main}>
      {/* <h1>Hello World</h1>
      <User name="Sujal" />
      <User name="Varun" />
      <User name="Keta" /> */}
      <h1>Events, Function and state </h1>
      <h1>My name is {name}</h1>
      <button onClick={() => store()}>Click Me</button>
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
