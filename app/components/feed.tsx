type FeedProps = {
  user: string;
  profile: string;
  image: string;
  likes: number;
  comments: number;
};

export function Feed({ user, profile, image, likes, comments }: FeedProps) {
  return (
    <article className="feed">
      <header className="feed__header">
        <img className="feed__header__img" src={profile} alt="profile" />
        <p>{user}</p>
      </header>
      <div>
        <img className="feed__img" src={image} alt="user posted" />
      </div>

      <footer className="feed__footer">
        <p>likes: {likes}</p>
        <p> | </p>
        <p>comments: {comments}</p>
      </footer>
    </article>
  );
}
