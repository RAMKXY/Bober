import styles from "./Input.module.css"

interface InputProps {
  children: string
  type?: "text" | "password"
}
export default function Input({ children, type = "text" }: InputProps) {
  return <input placeholder={children} type={type} className={styles.input} />
}
