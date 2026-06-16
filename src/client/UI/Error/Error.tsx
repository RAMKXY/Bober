import styles from "./Error.module.css"

interface ErrorProps {
  children: string
}

export default function Error({ children }: ErrorProps) {
  return <p className={styles.error}>{children}</p>
}
