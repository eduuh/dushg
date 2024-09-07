export interface IPostMeta {
  draft: true;
  excerpt: string;
  slug: string;
  title: string;
  tags: string[];
  date: string;
  image: string;
  draft: boolean;
}

export interface IPost {
  content: string;
  meta: PostMeta;
}
