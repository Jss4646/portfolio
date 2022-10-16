import styles from "./welcome-bar.module.scss";
import { useEffect, useRef, useState } from "react";
// @ts-ignore
import { asyncSetTimeout, useWindowDimensions } from "../../tools/tools";

interface welcomeBar {
  vertical?: boolean;
}

const WelcomeBar = ({ vertical }: welcomeBar) => {
  const [numOfWelcomeStrings, setNumOfWelcomeStrings] = useState(1);
  const welcomeStrings = Array(numOfWelcomeStrings).fill("WELCOME");
  const welcomeStringRef = useRef<HTMLDivElement>(null);
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  useEffect(() => {
    const welcomeStringElement: HTMLDivElement | null | undefined =
      welcomeStringRef.current?.firstChild as HTMLDivElement;
    if (!welcomeStringElement) {
      return;
    }

    const elementWidth = welcomeStringElement.offsetWidth;
    if (!elementWidth) {
      return;
    }

    document.documentElement.style.setProperty(
      "--welcome-text-length",
      `-${elementWidth + 40}px`
    );

    let newNumOfWelcomeStrings: number;
    if (vertical) {
      newNumOfWelcomeStrings = Math.ceil(windowHeight / elementWidth);
    } else {
      newNumOfWelcomeStrings = Math.ceil(windowWidth / elementWidth);
    }

    setNumOfWelcomeStrings(newNumOfWelcomeStrings);
  }, [windowWidth, windowHeight, vertical]);

  return (
    <div
      className={`${styles["welcome-bar"]} ${
        vertical ? styles["welcome-bar--vertical"] : ""
      }`}
    >
      <div className={styles["welcome-bar__strings"]} ref={welcomeStringRef}>
        {welcomeStrings.map((str, i) => (
          <span key={i} className={styles["welcome-bar__text"]}>
            {str}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WelcomeBar;
