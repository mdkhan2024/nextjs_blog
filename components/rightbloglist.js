// import Head from 'next/head';
// import Layout, { siteTitle } from '../components/layout';
 
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
// import Image from 'next/image';
 

export default function RightBlog({ allPostsData }) {
return(  <>
    <h2 className={utilStyles.headingLg}>Blog</h2>
    <ul className={utilStyles.list}>
      {allPostsData.map(({ id, date, title }) => (
        <li className={utilStyles.listItem} key={id}>
          <Link className={utilStyles.blogname} href={`/posts/${id}`}>{title}</Link>
          <br />
          <small className={utilStyles.lightText}>
            <Date dateString={date} />
          </small>
        </li>
      ))}
    </ul>
    </>
 )


}



