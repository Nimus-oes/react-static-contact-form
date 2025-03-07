import "./App.css";
import Logo from "./components/Logo";
import Main from "./components/Main";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import Form from "./components/Form";

export default function App() {
  return (
    <>
      <Logo />
      <Main>
        <Title />
        <Subtitle />
        <Form />
      </Main>
    </>
  );
}
