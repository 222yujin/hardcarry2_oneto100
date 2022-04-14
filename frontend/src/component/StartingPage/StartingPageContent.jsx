import classes from "./StartingPageContent.module.css";
import dinostoryrectangle from "../../assets/dinostoryrectangle.png";
import storybutton from "../../assets/storybutton.png";
import { Link } from "react-router-dom";
const StartingPageContent = () => {
  return (
    <div>
      <section className={classes.story_layout}>
        <div className={classes.dinostory_img}>
          <img
            src={dinostoryrectangle}
            alt="dinostoryrectangle"
            className={classes.dinostory}
          />
          <img
            src={dinostoryrectangle}
            alt="dinostoryrectangle"
            className={classes.dinostory}
          />
          <img
            src={dinostoryrectangle}
            alt="dinostoryrectangle"
            className={classes.dinostory}
          />
          <img
            src={dinostoryrectangle}
            alt="dinostoryrectangle"
            className={classes.dinostory}
          />
        </div>
        <div className={classes.dinostory_footer}>
          <p>과연 디노는 무사히 </p>
          <p>백수탈출을 할 수 있을까?</p>
          <div className={classes.dinostory_nextbutton}>
            <Link to="/test">
              <img
                src={storybutton}
                alt="nextbutton"
                className={classes.dinostory_nextbuttonimg}
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StartingPageContent;
