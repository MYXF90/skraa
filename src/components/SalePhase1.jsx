import Phase1 from "./Phase1";
import CountdownTimer from './CountdownTimer';

const targetDate = new Date("2023-08-01");

const Hero = () => {
  return (
    <div>
      <div>
        <h2 className="font-poppins text-center font-semibold ss:text-[48px] text-[32px] text-gradient-yellow ss:leading-[100.8px] leading-[75px] w-full">
          Phase 1 ending in:
        </h2>
        <div className="font-poppins text-center font-semibold ss:text-[20px] text-[10px] text-gradient-yellow ss:leading-[100.8px] leading-[75px] w-full" >
          <CountdownTimer targetDate={targetDate} />
        </div>
        <div className={`flex items-center flex-col sm:ml-10 ml-10 sm:mt-10 mt-10`}>
            <Phase1 />
          </div>
      </div>        
    </div>
  );
};

export default Hero;
