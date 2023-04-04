import styles from "~/styles/feed.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}



export default function Feed() {
  return (
    
    <main className="main">
      <div className="header">
        <div id="logoInstagram">
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027" alt="" />
          </div>
        <input type="text" placeholder=" Search"/>
        <div id="settingicons">
            <img src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png" alt="" />
        </div>
        <div id="settingicons2">
              <img src="https://cdn-icons-png.flaticon.com/512/1077/1077047.png" alt="" />
        </div>
        <div id="settingicons3">
            <img src="https://icons.veryicon.com/png/o/miscellaneous/ui-basic-linear-icon/like-106.png" alt="" />
        </div>
        <div id="settingicons4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png" alt="" />
        </div>

      </div>
      <article className="bodyPost">
        <header className="postHead">
          <div id="cricelProfile"> 
            <svg width="100%" height="100%">
              <circle cx="18" cy="17" r="14" stroke="red" stroke-width="1" fill="#fff" />
            </svg>
          </div>
          <div id="namePage">namePage</div>
          <div id="threeDot">...</div> 
        </header>
        <div id="postPic">
          
        </div>
        <div className="underPost">
          <p id="like">
              <img src="https://icons.veryicon.com/png/o/miscellaneous/ui-basic-linear-icon/like-106.png" alt="" />
          </p>
          <p id="comment">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGTodqsIxZtjR5RLdf0Lnp3ZCtOVxB-0brcQ&usqp=CAU" alt="" />
          </p>
          <p id="send">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTdhjLfzm86SfVauOnK3m8OAn38QjaLend_g&usqp=CAU" alt="" /> </p>
          <p id="saved"> <img src="https://w7.pngwing.com/pngs/860/512/png-transparent-instagram-social-media-save-instagram-instagram-save-social-media-logo-icon-thumbnail.png
          " alt="" /></p>
          
        </div>
        <footer>64 likes</footer>
      </article>
    </main>
  );
}
