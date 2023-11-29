import { NavLink, useNavigate, Outlet } from "react-router-dom";
import "./Navbar.css";
import { AiOutlineMenu, AiOutlineMenuUnfold } from "react-icons/ai";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useState } from "react";
import Button from "./Button";

function Navbar({ setModeHandler, mode = "light" }) {
  const navigate = useNavigate();
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  function menuClickHandler() {
    setIsMenuClicked((prevState) => !prevState);
  }

  return (
    <>
      <div className={"nav_container"}>
        <nav className={"navbar"}>
          <span className="color-mode" onClick={setModeHandler}>
            {mode === "light" ? <MdDarkMode /> : <MdLightMode />}
          </span>
          <div className={"right_sec"}>
            <span>
              <NavLink end to={"/"}>
                Home
              </NavLink>{" "}
            </span>
            <span>
              <NavLink end to={"/laudate"}>
                Laudate
              </NavLink>{" "}
            </span>
            <span>
              <NavLink end to={"/about"}>
                About
              </NavLink>{" "}
            </span>
            <Button
              onClick={() => {
                navigate("/contact");
              }}
            >
              {"Contact Me"}
            </Button>
          </div>
          <div className={"hamburger_menu"} onClick={menuClickHandler}>
            {isMenuClicked ? <AiOutlineMenuUnfold /> : <AiOutlineMenu />}
          </div>
        </nav>

        {isMenuClicked && (
          <div className={"menu_bar"}>
            <span>
              <NavLink end to={"/"}>
                Home
              </NavLink>{" "}
            </span>
            <span>
              <NavLink end to={"/laudate"}>
                Laudate
              </NavLink>{" "}
            </span>
            <span>
              <NavLink end to={"/about"}>
                About
              </NavLink>{" "}
            </span>
            <Button
              onClick={() => {
                navigate("/contact");
              }}
            >
              {"Contact Me"}
            </Button>
          </div>
        )}
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
