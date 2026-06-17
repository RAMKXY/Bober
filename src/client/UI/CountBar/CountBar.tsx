import styles from "./CountBar.module.css"

interface CountBarProps {
  count: number
  maxCount: number
}

export default function CountBar({ count, maxCount }: CountBarProps) {
  const percentageProgress = `${(count / maxCount) * 100}%`

  return (
    <>
      {count} / {maxCount}
      <div className={styles.bar}>
        <div style={{ width: percentageProgress }} className={styles.progress}>
          .
        </div>
      </div>
    </>
  )
}
