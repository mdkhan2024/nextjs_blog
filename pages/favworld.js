import Head from 'next/head';
// import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Image from 'next/image';
// import RightBlog from '../components/rightbloglist'
 
 
 

export default function Home({ allPostsData }) {
  return (
    <div className={utilStyles.container}>
      <Head>
        <title>Mohd's Life</title>
      </Head>
    
      <div className={`${utilStyles.headingMd} ${utilStyles.profileleft}`}>
         
        <Image
        className={utilStyles.Pimage}
        src="/images/profile.png"
        width={150}
        height={150}
        alt="Picture of the author" 
      />

      <div className={utilStyles.mylifesideeffect}>
      <h2>Mohd's Life </h2>
      <Link className={utilStyles.linkcolor1}  href='/projects' >Projects</Link>
      <Link className={utilStyles.linkcolor1}  href='/blogs' >Blogs</Link>
      <Link className={utilStyles.linkcolor1}  href='/favworld' >Favorite World</Link>
      <Link className={utilStyles.linkcolor1}  href='/dsacourse' >DSA ClassRoom</Link>
      <Link className={utilStyles.linkcolor1}  href='/mylib' >My Library</Link>
      </div>
      <div className={utilStyles.mysociallife}>
     <Link className={utilStyles.linkcolor} href='https://www.instagram.com/'> <svg width="20" height="20" viewBox="0 0 432 384" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M383 105v11q0 45-16.5 88.5t-47 79.5t-79 58.5T134 365q-73 0-134-39q10 1 21 1q61 0 109-37q-29-1-51.5-18T48 229q8 2 16 2q12 0 23-4q-30-6-50-30t-20-55v-1q19 10 40 11q-39-27-39-73q0-24 12-44q33 40 79.5 64T210 126q-2-10-2-20q0-36 25.5-61.5T295 19q38 0 64 27q30-6 56-21q-10 31-39 48q27-3 51-13q-18 26-44 45"/>
</svg></Link>
     <Link className={utilStyles.linkcolor}  href='https://www.instagram.com/'>   <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="m20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42l10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001l-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15l4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434"/>
</svg>
 </Link>

 <Link className={utilStyles.linkcolor}  href='https://www.instagram.com/'>    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765c1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831M9.996 15.005l.005-6l5.207 3.005z"/>
</svg>
 </Link>

 <Link className={utilStyles.linkcolor}  href='https://www.instagram.com/'>    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M15.15 8.4a5.83 5.83 0 0 0-5.85 5.82v5.88a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a1.94 1.94 0 0 1 2.15-1.93a2 2 0 0 1 1.75 2v5.81a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a5.83 5.83 0 0 0-5.85-5.82"/>
    <rect width="4.5" height="11.7" x="3" y="9.3" fill="currentColor" rx=".9" ry=".9"/>
    <circle cx="5.25" cy="5.25" r="2.25" fill="currentColor"/>
</svg>
 </Link>

 <Link className={utilStyles.linkcolor}  href='https://www.instagram.com/'>   <svg width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M16 .396c-8.839 0-16 7.167-16 16c0 7.073 4.584 13.068 10.937 15.183c.803.151 1.093-.344 1.093-.772c0-.38-.009-1.385-.015-2.719c-4.453.964-5.391-2.151-5.391-2.151c-.729-1.844-1.781-2.339-1.781-2.339c-1.448-.989.115-.968.115-.968c1.604.109 2.448 1.645 2.448 1.645c1.427 2.448 3.744 1.74 4.661 1.328c.14-1.031.557-1.74 1.011-2.135c-3.552-.401-7.287-1.776-7.287-7.907c0-1.751.62-3.177 1.645-4.297c-.177-.401-.719-2.031.141-4.235c0 0 1.339-.427 4.4 1.641a15.436 15.436 0 0 1 4-.541c1.36.009 2.719.187 4 .541c3.043-2.068 4.381-1.641 4.381-1.641c.859 2.204.317 3.833.161 4.235c1.015 1.12 1.635 2.547 1.635 4.297c0 6.145-3.74 7.5-7.296 7.891c.556.479 1.077 1.464 1.077 2.959c0 2.14-.02 3.864-.02 4.385c0 .416.28.916 1.104.755c6.4-2.093 10.979-8.093 10.979-15.156c0-8.833-7.161-16-16-16z"/>
</svg>
 </Link>


     
      </div>
     
      </div>
      <div className={utilStyles.myabout}> 

      <header>
        <h1>Mohd's Favorite World</h1>
    </header>

    <section  className='originalme'>
        
        <p>This one is going to be my favorite places, platform , persons , books , foods or other things.</p>
        <p>Which taught me so much and never forget them and wanna share my choice why they are my favorites.</p>

        <div  className={utilStyles.myfavchoices}>
         <div className={utilStyles.myfavchoicesC1}>


        <div >
    <Image
        className={utilStyles.image}
        src="/images/avatar1.png"
        width={150}
        height={150}
        alt="Picture of the author" 
      />
    <span style={{ fontSize :'1.5rem' }}>1.</span> This is the first paragraph about the first image. You can provide some introductory information or context here.
  </div>
 
  <div>
  <Image
        className={utilStyles.image}
        src="/images/avatar2.png"
        width={150}
        height={150}
        alt="Picture of the author" 
      />
     <span style={{ fontSize :'1.5rem' }}>2.</span>This is the first paragraph about the first image. You can provide some introductory information or context here.
  </div>

 
  <div>
  <Image
        className={utilStyles.image}
        src="/images/avatar3.png"
        width={150}
        height={150}
        alt="Picture of the author" 
      />
     <span style={{ fontSize :'1.5rem' }}>3.</span>This is the first paragraph about the first image. You can provide some introductory information or context here.
  </div>


 

    <div>
  <Image
        className={utilStyles.image}
        src="/images/avatar4.png"
        width={150}
        height={150}
        alt="Picture of the author" 
      />
        <span style={{ fontSize :'1.5rem' }}>4.</span>This is the first paragraph about the first image. You can provide some introductory information or context here.
  </div>
  </div>
  <div className={utilStyles.myfavchoicesC2}>

  <div>
  
  <Image
      className={utilStyles.image}
      src="/images/avatar1.png"
      width={150}
      height={150}
      alt="Picture of the author" 
    />
   <span style={{ fontSize :'1.5rem' }}>5.</span>This is the first paragraph about the first image. You can provide some introductory information or context here.
</div>

<div>
<Image
      className={utilStyles.image}
      src="/images/avatar2.png"
      width={150}
      height={150}
      alt="Picture of the author" 
    />
     <span style={{ fontSize :'1.5rem' }}>6.</span>This is the first paragraph about the first image. You can provide some introductory information or context here.
</div>


<div>
<Image
      className={utilStyles.image}
      src="/images/avatar3.png"
      width={150}
      height={150}
      alt="Picture of the author" 
    />
   <span style={{ fontSize :'1.5rem' }}>7.</span>This is the third paragraph discussing the third image. Provide relevant information or context associated with this image.
</div>


<div>
<Image
      className={utilStyles.image}
      src="/images/avatar4.png"
      width={150}
      height={150}
      alt="Picture of the author" 
    />
     <span style={{ fontSize :'1.5rem' }}>8.</span>This is the first paragraph about the first image. You can provide some introductory information or context here.
</div>

 
 </div>
 
 </div>
 <p>I know you will mathced your choice with mine, and the reason can be different to following particular something.</p>
        <h5>If you wanna share your favorite world's list so you can found me easily on telegram, it's for fun conversation because conversation can be productive over scrolling reels on Instagram. <hr/> <Link href='/posts/job'>---| Mohd's Blog Demos ---|</Link></h5>

 
 </section>
    
      </div>
      <div className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.blogs}`}>
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
      </div>
    </div>

 
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
