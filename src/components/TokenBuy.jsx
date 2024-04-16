import styles, { layout } from "../style";
import { Link } from "react-router-dom";
import { orcaandskraa } from "../assets";

const TokenBuy = () => (
  <section id="buy" className={layout.section}>
    <div className={layout.sectionInfo}>
      <div>
        <h2 className={styles.heading22}>
          Coin's international bruv
        </h2>
        <h2 className={styles.heading22}>
          buy it:
        </h2>
      </div>

      <div>
        <div>
          <h3 className={"font-poppins font-semibold xs:text-[25px] text-[20px] text-gradient-yellow ml-40"}>
            <Link to="https://phantom.app/" target="_blank"> 1. Install Solana Wallet (click to install)</Link>
          </h3>
          <h3 className={"font-poppins font-semibold xs:text-[25px] text-[20px] text-gradient-yellow ml-40"}>
            <button
              onClick={() => navigator.clipboard.writeText('CNLwu68f3ouU8LcT7KEZS88z5CLxX79wC1oVqxedWwDn').then(alert('Token address copied to clipboard!'))}>
              2. Click here to copy the CA
            </button>
          </h3>
          <h3 className={"font-poppins font-semibold xs:text-[25px] text-[20px] text-gradient-yellow ml-40"}>
            <Link to="https://orca.so/" target="_blank"> 3. Go to orca.so (click to follow)</Link>
          </h3>
          <h3 className={"font-poppins font-semibold xs:text-[25px] text-[20px] text-gradient-yellow ml-40"}>
            4. Paste address in second box
          </h3>
          <h3 className={"font-poppins font-semibold xs:text-[25px] text-[20px] text-gradient-yellow ml-40"}>
            5. Swap SOL for SKRAA
          </h3>
        </div>
      </div>
    </div>
    <iframe src="https://dexscreener.com/solana/7kBe62i2BP3c7ubZHfpVUJwUrGisKwjUHFpbkRE6zybU?embed=1&theme=dark"
      name="myiFrame"
      frameborder="1"
      marginheight="0px"
      marginwidth="0px"
      height="600px"
      width="600px"
      allowfullscreen></iframe>

  </section>
);
export default TokenBuy;
