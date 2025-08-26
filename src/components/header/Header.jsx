import { useState } from "react";
import "./header.css";
import HeaderMiddle from "./HeaderMiddle";
import HeaderTop from "./HeaderTop";
import NavBar from "./NavBar";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="header">
      <HeaderTop toggle={toggle} setToggle={setToggle} />
      <HeaderMiddle />
      <NavBar toggle={toggle} setToggle={setToggle} />
    </header>
  );
};
export default Header;
