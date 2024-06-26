import styles from "../style";
import { robot, telegram, twitter } from "../assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">

          <p className={`${styles.paragraph} ml-2`}>
            🚀<span className="text-gradient-yellow"> </span> Chart available on {" "}
            <a href="https://dexscreener.com/solana/7kbe62i2bp3c7ubzhfpvujwurgiskwjuhfpbkre6zybu" target="_blank" className="underline text-blue-700">Dexscreener</a>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-gradient-yellow ss:leading-[100.8px] leading-[75px]">
            Ting Goes <br className="sm:block hidden" />{" "}
            <span className="text-gradient">SKRAA</span>{" "}
          </h1>
          <Link to="https://t.me/skraawifhat" target="_blank"><img src={telegram} alt="Skraa wif hat telegram" className="w-[100px] h-[100px] rounded-2xl m-5" /></Link>
          < Link to="https://twitter.com/SkraaWifhat" target="_blank"><img src={twitter} alt="Skraa wif hat twitter" className="w-[100px] h-[100px] rounded-2xl m-5" /></Link>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Two plus two is four <br></br>
          Minus one, that’s three, quick maths <br></br>
          Every day, man’s on the block <br></br>
          Smoke memecoins wif hat
        </p>


      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} className="w-[60%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}

      </div>


    </section>
  );
};

export default Hero;
