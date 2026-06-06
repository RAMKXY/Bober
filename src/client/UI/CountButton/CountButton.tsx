import styles from "./CountButton.module.css"

interface CountButtonProps {
  onClick: () => void
  children: string
}

export default function CountButton({ onClick, children }: CountButtonProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  )
}
