import { useState } from "react"
import styles  from "./Counter.module.scss"

export function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prev) => prev + 1)
  }

  return (
    <div>    
      <h1>{counter}</h1>
      <button className={styles.button} onClick={increment} type="button">+1</button>
    </div>
  )
}