import MainLayout from '@/components/layout';
//import LatestPosts from '@/components/sections/latestPosts';
import { getAllPosts } from 'lib/mdx';
import { IPostMeta } from 'types';
import { NextPageWithLayout } from './page';
import FeaturedPost from '@/components/sections/featuredPost';

interface IHome {
  postsMeta: IPostMeta[];
}

//<SEO />
//<CTA />

const Home: NextPageWithLayout<IHome> = ({ postsMeta }) => {
  return (
    <>
      <FeaturedPost />
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
