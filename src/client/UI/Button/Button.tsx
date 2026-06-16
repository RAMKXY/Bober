import styles from "./Button.module.css"

interface ButtonProps {
  children: string
  onClick: () => void
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  )
}
