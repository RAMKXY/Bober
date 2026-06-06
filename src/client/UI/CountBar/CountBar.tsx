import styles from "./CountBar.module.css"

interface CountBarProps {
  count: number
  maxCount: number
}

export default function CountBar({ count, maxCount }: CountBarProps) {
  return (
    <div className={styles.bar}>
      <div
        style={{ width: `${(count / maxCount) * 100}%` }}
        className={styles.progress}
      >
        .
      </div>
    </div>
  )
}
