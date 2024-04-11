import { features } from "../constants";
import styles, { layout } from "../style";
import Phase1 from "./Phase1";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-gradient-yellow text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="buy" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        <a href="https://www.orca.so/" target="_blank" className="underline text-blue-700">How to buy</a>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Hop out the four-door with the .44 <br></br>
        It was one, two, three and four (Us man) <br></br>
        Chillin’ in the corridor (Yo) <br></br>
        Marketcap 44 (billion) (Uh)
      </p>

      {/* <Button styles={`mt-10`} /> */}
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
