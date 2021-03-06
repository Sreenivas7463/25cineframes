import Head from 'next/head'

import { getPosts } from '../utils/wordpress';

import Post from "../components/Post";


export default function Home({posts}) {

  const jsxPosts = posts.map(post => {
    const featuredMedia = post['_embedded']['wp:featuredmedia'][0];
    return (
      <Post post={post} featuredMedia={featuredMedia} key={post.id}/>
    )
  });

  

  return (
    <>
      <Head>
        <title>25cineframes</title>
        <meta name="description" content="Keep up to date with the latest trends in tech" />
        <link rel="icon" href="/favicon.ico" />
        {/* You can add more metadata here, like open graph tags for social media, etc */}
      </Head>

      <div className="container pt-5">
        <h1 className="text-center pb-5">25cineframes</h1>
        <div className="row">
          <div className="col-lg-12">
            <h2 className="pb-3">25cineframes Posts</h2>
            {jsxPosts}
          </div>
        </div>
      </div>
    </>
  )

}

export async function getStaticProps({ params }) {

  const posts = await getPosts();
  
  return {
    props: {
     posts
    },
    revalidate: 10, // In seconds
  }

}
