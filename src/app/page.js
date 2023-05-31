import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello World</h1>
      <User name="Sujal" />
      <User name="Varun" />
      <User name="Keta" />
    </main>
  )
}

const User = (props) => {
  return (
    <main>
      <p>Hey My name is {props.name}</p>
    </main>
  )
}
