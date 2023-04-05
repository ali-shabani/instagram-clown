import profile from "~/images/profile.jpg";
import image from "~/images/sample.jpg";
import { Feed } from "~/components/feed";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      Hello World
      <Feed
        user="user 1"
        profile={profile}
        image={image}
        likes={10}
        comments={40}
      />
    </div>
  );
}
