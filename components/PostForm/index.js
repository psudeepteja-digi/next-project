import React from 'react'
import styles from '../../styles/postForm.module.scss'

export default function PostForm() {
  return (
    <div>
      <form>
        <textarea className={styles.formContent}></textarea>
        <button className={styles.formButton}>add post</button>
      </form>
    </div>
  )
}
