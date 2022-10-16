import Image from "next/image";
import styles from "./cover-text.module.scss";

const CoverText = () => {
  console.log(styles);
  return (
    <div className={styles["cover-text"]}>
      <h1 className={styles["cover-text__text"]}>{"Hi I'm Jack"}</h1>
      <div className={styles["cover-text__emoji"]}>
        <Image
          src="/images/waving-hand.png"
          width={64}
          height={64}
          alt="waving hand emoji"
        />
      </div>
      <div className={styles["cover-text__logos"]}>
        <a
          className={styles["cover-text__logo"]}
          href="https://github.com/Jss4646"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/github-icon.svg"
            width={66}
            height={66}
            alt="github icon"
          ></Image>
        </a>
        <a
          className={styles["cover-text__logo"]}
          href="https://www.linkedin.com/in/jack-sandeman/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/linkedin-icon.svg"
            width={66}
            height={66}
            alt="linkedin icon"
          ></Image>
        </a>
        <a
          className={styles["cover-text__logo"]}
          href="mailto:jacksandeman@hotmail.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/email-icon.svg"
            width={66}
            height={66}
            alt="email icon"
          ></Image>
        </a>
      </div>
    </div>
  );
};

export default CoverText;
