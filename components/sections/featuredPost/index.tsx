import Image from 'next/image';
import Link from 'next/link';

const FeaturedPost = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto flex flex-col md:flex-row md:items-center gap-4 px-4 md:px-10">
        <div className="w-[85%] md:w-1/2 pb-6 md:pb-0">
          <p>2024-31-8</p>
          <h2 className="text-2xl font-bold">
            NuPhy: The Programmable Keyboard That Elevates Every Developer's Craft - Because Every Key Press Matters, Eduuh.
          </h2>

          <Link href="/posts/eduuh-keyboard" prefetch={false}>
            <span className="rounded-lg py-2 px-4 text-white bg-pink-700 mt-10">
              Read More
            </span>
          </Link>
        </div>

        <div className="relative rounded-lg w-full h-96 md:h-80 lg:h-[70vh] shadow-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image
              src="/images/nuphy.webp"
              alt="Nuphy: The programmable Keyboard"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;
