import Image from 'next/image';
import Link from 'next/link';
import PostDetails from './PostDetails';

const FeaturedPost = () => {
  return (
    <section className="py-4">
      <div className="container mx-auto flex flex-col md:flex-row md:items-center gap-3 px-4 md:px-10">
        <div className="w-[86%] md:w-1/2 pb-6 md:pb-0 ">
          <h3 className="text-2xl font-bold">
            Exploring programmable keyboards like NuPhy and Keychron, I built a custom layout with layers and leader keys, boosting my coding efficiency and transforming my workflow.
          </h3>
          <PostDetails date="31-8-2024" />
          <Link href="/posts/nuphy-keyboard" prefetch={true}>
            <span className="rounded-lg py-1 px-4 text-white bg-pink-700 mt-10">
              Read More
            </span>
          </Link>
        </div>

        <div className="relative rounded-lg w-full h-95 md:h-80 lg:h-[70vh] shadow-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
          <div style={{ position: 'relative', width: '101%', height: '100%' }}>
            <Image
              src="/images/nuphy.webp"
              alt="Nuphy: The programmable Keyboard"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;
