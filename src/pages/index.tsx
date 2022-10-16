import type { NextPage } from "next";
import WelcomeBar from "../components/welcome-bar/welcome-bar";
import CoverText from "../components/cover-text/cover-text";

const Home: NextPage = () => {
  return (
    <div className="home">
      <WelcomeBar />
      <WelcomeBar vertical={true} />
      <div className="first-panel">
        <CoverText />
      </div>
    </div>
  );
};

export default Home;
