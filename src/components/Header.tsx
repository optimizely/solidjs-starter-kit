import logo from "../assets/logo.svg";
import "./Header.css";
import Nav from "./Nav";

function Header() {
  return (
    <header>
      <img src={logo} class="logo" alt="logo" />
      <h1>Welcome</h1>
      <h2>Let's get going with the quick start.</h2>
      <Nav />
    </header>
  );
}

export default Header;
