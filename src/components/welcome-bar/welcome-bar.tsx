import styles from "./welcome-bar.module.scss";
import { useEffect, useRef, useState } from "react";
// @ts-ignore
import { useWindowDimensions } from "../../tools/tools";

interface welcomeBar {
  vertical?: boolean;
}

const WelcomeBar = (props: welcomeBar) => {
  const [numOfWelcomeStrings, setNumOfWelcomeStrings] = useState(1);
  const welcomeStrings = Array(numOfWelcomeStrings).fill("WELCOME");
  const welcomeStringRef = useRef<HTMLDivElement>(null);
  const { width: windowWidth } = useWindowDimensions();

  useEffect(() => {
    const welcomeStringElement:
      | HTMLDivElement
      | null
      | undefined = welcomeStringRef.current?.firstChild as HTMLDivElement;
    if (!welcomeStringElement) {
      return;
    }

    const elementWidth = welcomeStringElement.offsetWidth;
    if (!elementWidth) {
      return;
    }

    const newNumOfWelcomeStrings = Math.ceil(windowWidth / elementWidth);
    setNumOfWelcomeStrings(newNumOfWelcomeStrings);
  }, [windowWidth]);

  useEffect(() => {
    let i = 0;

    setInterval(() => {
      const welcomeStringElement:
        | HTMLDivElement
        | null
        | undefined = welcomeStringRef.current?.firstChild as HTMLDivElement;

      if (!welcomeStringElement) {
        return;
      }

      if (i === welcomeStringElement.offsetWidth + 40) {
        i = 0;
      }

      document.documentElement.style.setProperty(
        "--welcome-text-pos",
        `-${i}px`
      );

      i = i + 0.5;
    }, 50);
  }, []);

  console.log(styles);

  return (
    <div
      className={`${styles["welcome-bar"]} ${
        props.vertical ? styles["welcome-bar--vertical"] : ""
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
