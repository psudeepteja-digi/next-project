import React from 'react'
import styles from '../../styles/postForm.module.scss'

export default function PostForm({handleSubmit, handleChange, dataValue, }) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea className={styles.formContent} onChange={handleChange} value={dataValue}></textarea>
        <button className={styles.formButton} type='submit' style={{cursor: 'pointer'}}>Add Post</button>
      </form>
    </div>
  )
}
