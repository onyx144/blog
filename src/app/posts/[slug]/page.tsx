import Link from 'next/link'
import { format, formatDistance , parseISO } from 'date-fns'
import { ru } from 'date-fns/locale';
import { allPosts } from 'contentlayer/generated'
import styles from '@/src/app/styles.module.scss'
export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  return { title: post.title }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  
  return (
    <div className={styles.container}>
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

export default PostLayout