import styles, { layout } from "../style";
import { Link } from "react-router-dom";
import { orcaandskraa } from "../assets";

const Token = () => (
  <section id="token" className={layout.section}>
    <div>
      <Link to="https://orca.so" target="_blank"><img src={orcaandskraa} alt="Skraa wif hat on Orca" className="w-[650px] h-[400px] rounded-2xl m-1" /></Link>
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading22}>
        You dunno
      </h2>

      {/* <h3 className={styles.heading33}>
        <button
          onClick={() => navigator.clipboard.writeText('Token address').then(alert('Token address copied to clipboard!'))}
        >
          CA: CNLwu68f3ouU8LcT7KEZS88z5CLxX79wC1oVqxedWwDn
        </button>
      </h3> */}
      <p className={`${styles.paragraph} max-w-[470px] mt-5 ml-40`}>
      CA: CNLwu68f3ouU8LcT7KEZS88z5CLxX79wC1oVqxedWwDn
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 ml-40`}>
        Dw bruv,  you're protecteded:
      </p>
      <h3 className={styles.heading33}>
        <Link to="https://solscan.io/tx/4ejJR2KEs769CtX7MmJsVq1RSMdbkmfjV9JZ9AJg8WwbrmkWucQCxXRBtuA9pQQxpgpq3327W6eJCwRKLGQQ8bzn" target="_blank"> ✔️ Mint Rights Revoked</Link>
      </h3>
      <h3 className={styles.heading33}>
        <Link to="https://solscan.io/tx/3Y3CU4PXtLHeo6eD4s8dQfsDdk8DesCNvKakmtUfdLb8bq4hNpzLx2M1DBGungmTwCtfUJZDh4Z6sWcyZGGofGcC" target="_blank"> ✔️ Liquidity Burned</Link>
      </h3>
    </div>



  </section>
);

export default Token;
