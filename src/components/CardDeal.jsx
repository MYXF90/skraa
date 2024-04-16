import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Phase1";

const CardDeal = () => (
  <section id="roadmap" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Roadmap ting
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lynx Effect (Come on) <br></br>
        You didn’t hear me, did you? (Nah) <br></br>
        Use roll-on (Use that) <br></br>
        Or spray (Shh) <br></br>
        Don't be a Jeet wifout hat <br></br>
      </p>

      {/* <Button styles={`mt-10`} /> */}
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="Skraa wif hat roadmap" className="rounded-lg" />
    </div>
  </section>
);

export default CardDeal;
