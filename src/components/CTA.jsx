import styles from "../style";
import { telegram, twitter } from "../assets";
import { Link } from "react-router-dom"; 

const CTA = () => (
  <div>
    <section id="invest" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Become OG wif hat</h2>
        <p className={`${styles.paragraph} max-w-[1100px] mt-5`}>
          The ting goes skrrah (Ah) <br></br>
          Pop, pop, ka-ka-ka (Ka) <br></br>
          Skidi-ki-pop-pop (Pah) <br></br>
          And a pu-pu-brr-boom (Boom) <br></br>
          Ski-ya (Ah) <br></br>
          Du-du-ku-ku-dun-dun (Dun) <br></br>
          Poom, poom <br></br>
          You dun know <br></br>
          SKAAA WIF HAT
        </p>

      </div>
      <div className={`flex flex-row`}>

      <Link to="/"><img src={telegram} alt="Skraa wif hat telegram" className="w-[150px] h-[150px] rounded-2xl m-10" /></Link>

      <Link to="/"><img src={twitter} alt="Skraa wif hat twitter" className="w-[150px] h-[150px] rounded-2xl m-10" /></Link>
      </div>

    </section >


  </div >
);

export default CTA;
