import Container from "./Container";
import Input from "./Input";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <Input />
      <div className="main">
        <Container />
      </div>
    </div>
  );
}

export default Home;
