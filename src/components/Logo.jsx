import logo from "../assets/Logo.svg";

export default function Logo() {
  return (
    <header className="header">
      <img src={logo} alt="Beck logo" className="logo" />
    </header>
  );
}
