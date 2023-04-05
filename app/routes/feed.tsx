import styles from "~/styles/feed.css";
import profile from "~/images/profile.jpg";
import image from "~/images/sample.jpg";
import { Feed } from "~/components/feed";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function FeedPage() {
  return (
    <main className="main">
      <Feed
        user="user 1"
        profile={profile}
        image={image}
        likes={10}
        comments={40}
      />
      <Feed
        user="user 2"
        profile={profile}
        image={image}
        likes={245}
        comments={2}
      />
    </main>
  );
}
