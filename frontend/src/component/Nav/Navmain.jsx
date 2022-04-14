import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navmain.css";
/* 아이콘 컬러 전체 변경 기능 */
import { IconContext } from "react-icons";
import dinoinsta from "../../assets/dinoinsta.png";
import guroinsta from "../../assets/guroinsta.png";
const Navmain = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div className="Navmain_layout">
      <div className="Navmain_static">
        {/* 아이콘 컬러 전체 변경 기능 */}
        <IconContext.Provider value={{ color: "#fff" }}>
          {/* 네비게이션 토글 코드*/}
          <div className="navbar">
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </Link>{" "}
              </li>
              {/* SidebarData를 순서대로 담기*/}
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span className="Navmain_title">{item.title}</span>
                    </Link>
                  </li>
                );
              })}
              <div className="Navmain_sns">
                {" "}
                <a
                  href={"https://instagram.com/youtheroom?igshid=YmMyMTA2M2Y="}
                >
                  {" "}
                  <img src={guroinsta} alt="guroinsta" className="guroinsta" />
                </a>
                <img src={dinoinsta} alt="dinoinsta" className="dinoinsta" />
              </div>
            </ul>
          </nav>
        </IconContext.Provider>
      </div>
    </div>
  );
};
export default Navmain;
