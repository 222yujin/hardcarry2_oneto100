import StartingPageContent from "../component/StartingPage/StartingPageContent";
import Navmain from "../component/Nav/Navmain";
import "../component/Home/Home.css";

const HomePage = () => {
  return (
    <div className="Home_layout">
      <div className="map">
        <StartingPageContent />
      </div>
    </div>
  );
};

export default HomePage;
