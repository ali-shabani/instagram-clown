import styles from "~/styles/feed.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Feed() {
  return (
    <main className="main">
      <h1>Welcome to Instagram</h1>
      <p>you're logged in as Mostafa</p>
      <article>
        <header>
          <img src="" alt="pro-pics" />
          <p>Ali Shabani</p>
        </header>
        <div>
          <img src="" alt="post-pictured" />
        </div>
        <div>
          <p>like</p>
          <p>comment</p>
        </div>
        <footer>comments</footer>
      </article>
    </main>
  );
}
