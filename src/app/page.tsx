import Link from 'next/link'
import { compareDesc, format, formatDistance , parseISO } from 'date-fns'
import { ru , enAU } from 'date-fns/locale';
import { allPosts, Post } from 'contentlayer/generated'
import styles from './styles.module.scss'
import Header from '@/component/Header/Header';
function PostCard(post: Post) {
  return (
    <div className={styles.content}>
      <h2 className={styles.title}>
        <Link href={post.url} className={styles.link}>
          {post.title}
        </Link>
      </h2>
      <div className={styles.text} dangerouslySetInnerHTML={{ __html: post.body.html }} />
      <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
        {formatDistance(parseISO(post.date), new Date() , {addSuffix: true, locale: ru})}
      </time>
    </div>
  )
}

export default function Home() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  return (
    <div>
      <Header/>
      <div className={styles.container}>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
      </div>
    </div>
  )
}