import React, { useState } from 'react'
import { FaHeart, FaShareAlt } from 'react-icons/fa';
import styles from '../../styles/posts.module.scss'

export default function Posts({ content, date, deleteIndex }) {
    const [likes, setLikes] = useState(0);
    const handleLike = () => {
        setLikes(likes + 1);
    };

    return (
        <>
            <p className={styles.postContent}>{content}</p>
            <ul className={styles.postsMeta}>
                <li className={styles.postsMetaData} onClick={handleLike} style={{ cursor: 'pointer' }}>
                    <FaHeart />
                    {likes}
                </li>
                <li className={styles.postsMetaData} >
                    <FaShareAlt />
                    Share
                </li>
                <li className={styles.postsMetaData}>
                    {date}
                </li>
            </ul>
        </>
    )
}
