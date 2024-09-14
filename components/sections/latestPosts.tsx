import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IPostMeta } from 'types';
import PostDetails from './PostDetails';

interface ILatestPosts {
  postsMeta: IPostMeta[];
}

const LatestPosts: React.FC<ILatestPosts> = ({ postsMeta }) => {
  return (
    <section className="py-2">
      <div className="container mx-auto px-4 md:px-10">
        <h2 className="text-4xl font-bold mb-10">Latest Posts</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {postsMeta?.map((meta) => (
            <div
              key={meta.slug}
              className="col-span-1 p-2 flex flex-col"
            >
              <div className="relative w-full h-48 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                <Image
                  src={`${meta.image}`}
                  alt="dush g blog"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="flex flex-col space-y-2 p-2">
                <Link href={`/posts/${meta.slug}`}>
                  <span className="headingxs cursor-pointer hover:underline">
                    {meta.title}
                  </span>
                </Link>

                <PostDetails date={meta.date.split(' ').slice(0, 4).join(' ')} status={meta.status} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
