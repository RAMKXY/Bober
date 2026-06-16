import { ChangeEvent } from "react"
import styles from "./Input.module.css"

interface InputProps {
  children: string
  type?: "text" | "password"
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
export default function Input({
  children,
  onChange,
  type = "text",
}: InputProps) {
  return (
    <input
      onChange={onChange}
      placeholder={children}
      type={type}
      className={styles.input}
    />
  )
}
