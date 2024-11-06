import { GoogleIcon } from "@/icon/google";
import Button from "../button";
import "./style.css";

export default function Hero() {
  return (
    <section className=" bg-[#11362D]">
      <div className="flex flex-col gap-6 items-start custom-gradient pt-[100px] px-20 max-w-[591px]">
        
        <Button
          text="Available on Chrome Extension"
          icon={<GoogleIcon />}
          className="bg-[#EFFAF5] h-[41px] min-h-[41px]  md:h-[41px] md:min-h-[41px]
           text-lightGreen font-medium text-sm"
        />

        <h1 className="text-[56px] leading-[72px] text-white  font-semibold">
          Unlock your full fundraising potential with the help of AI
        </h1>

        <p className="text-[#B6E4D0] sm:text-lg font">
          Will help you find investors in auto fill forms, saving you hours of
          effort
        </p>

        <Button
          text="Install on Chrome"
          className="bg-white  text-lightGreen"
        />
      </div>
    </section>
  );
}
