import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

import Link from 'next/link';


// import { getSortedPostsData } from '../../lib/posts';

export default function Post({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className={utilStyles.blogprefecrenace}>
        <article className={utilStyles.specificBlog}>
          <h1 className={utilStyles.articlexl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>

        <div className={utilStyles.asideblogslist}> 
        <Link className={utilStyles.linkcolor2}  href={`/posts/opps`} >After graduation student choosing data science mostly</Link>
          <Link className={utilStyles.linkcolor2}  href={`/posts/ssg-ssr`} >Jobs fall down because of AI</Link>
          <Link className={utilStyles.linkcolor2}  href={`/posts/pre-rendering`} >AI can replace human in 22th generation</Link>
          <Link className={utilStyles.linkcolor2}  href={`/posts/job`} >World totally depending on technology</Link>
        </div>
      </div>
    </ >
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  // const allPostsData = getSortedPostsData();
  return {
    props: {
      postData,
      // allPostsData,
    },
  };
}




