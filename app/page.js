"use client"
import { useEffect, useState } from 'react'
import Posts from '@/components/Posts'
import styles from '../styles/home.module.scss'
import PostForm from '@/components/PostForm'
import Bio from '@/components/Bio'
import { useAuth } from '@/hooks/useAuth'

export default function Home() {
  const { user, logIn, logOut } = useAuth()
  const [data, setData] = useState([])
  const [dataValue, setDataValue] = useState("")

  useEffect(() => {
    const storedData = localStorage.getItem('postsData');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  const handleChange = (e) => {
    setDataValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dataValue.trim() !== '') {
      const currentDate = new Date().toLocaleDateString();
      const newPost = { content: dataValue, date: currentDate };
      const updatedData = [...data, newPost]
      setData(updatedData);
      localStorage.setItem('postsData', JSON.stringify(updatedData));
    }
    setDataValue(" ")
  }

  const handleDelete = (id) => {
    const deteledPosts = data.filter((_, i) => id !== i)
    setData(deteledPosts);
    localStorage.setItem('postsData', JSON.stringify(deteledPosts));
  }

  return (
    <div className={styles.container}>
      {!user && (
        <div>
          <h3>Please Login</h3>
          <button onClick={logIn} style={{ cursor: 'pointer' }}>Log In</button>
        </div>
      )}
      {user && (
        <>
          <p>
            <button onClick={logOut} style={{ cursor: 'pointer' }}>Log Out</button>
          </p>
          <main className={styles.main}>
            <Bio
              headshot="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
              email={user?.email}
              role="Software Developer"
              tagline="Helping others to learn by doing!"
            />
            <ul className={styles.posts}>
              {data.map((post, index) => {
                return (
                  <li key={index}>
                    <Posts
                      content={post.content}
                      date={post.date}
                    />
                    <button onClick={() => handleDelete(index)} style={{ cursor: 'pointer', background: "#ee6e6e", padding: "5px 8px" }}> Delete</button>
                  </li>
                )
              })}
              <li>
                <PostForm handleChange={handleChange} dataValue={dataValue} handleSubmit={handleSubmit} />
              </li>
            </ul>
          </main>
        </>
      )}
    </div>
  )
}
