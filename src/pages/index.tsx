import type { NextPage } from "next";
import WelcomeBar from "../components/welcome-bar/welcome-bar";

const Home: NextPage = () => {
  return (
    <div>
      <WelcomeBar />
      <WelcomeBar vertical={true} />
    </div>
  );
};

export default Home;
