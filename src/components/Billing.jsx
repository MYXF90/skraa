import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="nothot" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      {/* <img src={bill} className="w-[100%] h-[100%] relative z-[5] rounded-lg" /> */}
      <iframe width="560" height="315" src="https://www.youtube.com/embed/KZgjdQwuUb8?si=xOBFfudxqrBA3E-9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Man can never be hot (even wif hat)
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        I tell her man’s not hot (Man’s not) <br></br>
        I tell her man’s not hot (Never hot) <br></br>
        The girl told me, “Take off your hat" <br></br>
        I said, “Babes, man’s not hot” (Never hot) <br></br>
        I tell her man’s not hot wif hat <br></br>
        I tell her man’s not hot (Never hot) <br></br>
        The girl told me, “Take off your hat” <br></br>
        I said, “Babes, man’s not hot wif hat” <br></br>
      </p>
    </div>
  </section>
);

export default Billing;
