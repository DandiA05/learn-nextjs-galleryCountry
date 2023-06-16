import Image from "next/image";
import React from "react";
import { generateRandomImg } from "@/lib/generateRandomImg";

const Hero = () => {
  return (
    <section>
      <Image
        src={generateRandomImg()}
        alt="hero-image"
        width={1440}
        height={900}
        style={{
          width: "100%",
        }}
      />
    </section>
  );
};

export default Hero;
