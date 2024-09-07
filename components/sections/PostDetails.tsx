
interface PostDetailsProps {
  date: string;
  modifiedDate?: string;
}

const PostDetails = ({ date, modifiedDate }: PostDetailsProps) => {
  return (
    <section className="py-1 flex gap-2 text-xs">
      <p>Published: </p>
      <p>{date}</p>
      {
        modifiedDate && <>
          <p>Edited: </p>
          <p>{date}</p>
        </>
      }
    </section>
  );
};

export default PostDetails;
