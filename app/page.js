import Posts from '@/components/Posts'
import styles from '../styles/home.module.scss'
import PostForm from '@/components/PostForm'
import Bio from '@/components/Bio'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Bio
          headshot="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
          name="sudeep tej"
          role="Software Developer"
          tagline="Helping others to learn by doing!"
        />
        <ul className={styles.posts}>
          <li>
            <Posts
              content="Next.js uses file-system routing, which means the routes in your application are determined by how you structure your files."
              date="18/08/2023"
            />
          </li>
          <li>
            <Posts
              content="Next.js uses file-system routing, which means the routes in your application are determined by how you structure your files."
              date="18/08/2023"
            />
          </li>
          <li>
            <Posts
              content="Next.js uses file-system routing, which means the routes in your application are determined by how you structure your files."
              date="18/08/2023"
            />
          </li>
          <li>
            <PostForm />
          </li>
        </ul>
      </main>
    </div>
  )
}
