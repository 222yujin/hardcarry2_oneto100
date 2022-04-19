import styles from "./navbar.module.css";
import { useState } from "react";
import sidelogo from "../../assets/sidebarlogo.png";
import dinoinstagram from "../../assets/dinoinstagram.png";
import euiruminstagram from "../../assets/euiruminstagram.png";
import menu from "../../assets/menu.png";
import onenav from "../../assets/onenav.png";
import twonav from "../../assets/twonav.png";
import treenav from "../../assets/treenav.png";
import fournav from "../../assets/fournav.png";
import fivenav from "../../assets/fivenav.png";
import header from "../../assets/headertext.png";
import header2 from "../../assets/headertext2.png";
import title2 from "../../assets/title2.png";
import dinostory from "../../assets/dinostory.png";

const Navbar = () => {
  const [isSideMenuActive, setSideMenuActive] = useState(true);
  return (
    <div className={styles.navbar}>
      {" "}
      <div className={styles.headerflex}>
        <button
          className={styles.sidemenubutton}
          onClick={() => setSideMenuActive(!isSideMenuActive)}
          id="view"
        >
          <img src={menu} className={styles.sidemenuimg} alt="menuimg" />
        </button>{" "}
      </div>{" "}
      <div className={styles.headeflex2}>
        <img src={header2} className={styles.headerimg} alt="menuimg" />
      </div>
      <div
        className={
          styles.sidemenu + (isSideMenuActive ? styles.sidemenu.active : "")
        }
      >
        <div className={styles.sidemenuline}>
          {" "}
          <a href="/" className={styles.activea}>
            {" "}
            <div className={styles.titleimgfleximg}>
              <img src={sidelogo} alt="sidelogo" className={styles.sidelogo} />
            </div>
          </a>
          <div className={styles.sideflextextscope}>
            <a href="/story" className={styles.activea}>
              <div className={styles.head1} id="story_detail">
                <p>디노스토리</p>
                {/* <img src={dinostory} alt="디노스토리" className="dinostory" /> */}
              </div>
            </a>{" "}
            <hr className={styles.headline} />
            <a href="/test" className={styles.activea}>
              <div className={styles.head2} id="test_detail">
                <p>백수 삶의 현장</p>{" "}
                {/* <img src={title2} alt="백수삶의현장" className="twonav" /> */}
              </div>
            </a>
            <hr className={styles.headline} />
            <a href="/write" className={styles.activea}>
              <div className={styles.head3} id="diary_detail">
                {" "}
                <p>백수의 일기장</p>
                {/* <img src={treenav} alt="백수의일기장" className="treenav" /> */}
              </div>
            </a>{" "}
            <hr className={styles.headline} />
            <a href="/endstory" className={styles.activea}>
              <div className={styles.head4}>
                {" "}
                <p>마스코트 디노</p>
                {/* <img src={treenav} alt="백수의일기장" className="treenav" /> */}
              </div>
            </a>
            <hr className={styles.headline} />
          </div>{" "}
          <div className={styles.sideinstagramscope} id="dino_insta">
            <a
              href="https://www.instagram.com/dino33/"
              className={styles.activea}
            >
              <img src={dinoinstagram} alt="dinoinstagram" />
            </a>
          </div>
          <div className={styles.sideinstagramscope} id="youthroom_insta">
            <a
              href={"https://instagram.com/youtheroom?igshid=YmMyMTA2M2Y="}
              className={styles.activea}
            >
              <img src={euiruminstagram} alt="dinoinstagram" />
            </a>
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default Navbar;
