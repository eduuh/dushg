import MainLayout from '@/components/layout';
import { getAllPosts } from 'lib/mdx';
import { IPostMeta } from 'types';
import { NextPageWithLayout } from './page';
// import FeaturedPost from '@/components/sections/featurePost';
import LatestPosts from '@/components/sections/latestPosts';

interface IHome {
  postsMeta: IPostMeta[];
}

//<SEO />
//<CTA />
//<LatestPosts postsMeta={postsMeta} />
// <FeaturedPost />

const Home: NextPageWithLayout<IHome> = ({ postsMeta }) => {
  return (
    <>
      <LatestPosts postsMeta={postsMeta} />
    </>
  );
};
export default Home;


Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export async function getStaticProps() {
  const postsMeta = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  return { props: { postsMeta } };
}
