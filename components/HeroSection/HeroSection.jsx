import React, {useContext, useEffect} from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./HeroSection.module.css";
import { Button } from "../componentsindex";
import images from "../../img";

import {NFTMarketplaceContext} from "../../Context/NFTMarketPlaceContext";

const HeroSection = () => {
  const { title } = useContext(NFTMarketplaceContext);
  console.log(title);
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
<<<<<<< HEAD
          <h1>Unlock NFT Wonders</h1>
=======
          <h1>{title}🖼️</h1>
>>>>>>> f3fd34d8cfacd89a9951f7d3d3fc82c676eaa78f
          <p>
          Your Gateway to a Creative Cosmos. Discover the most outstanding NTFs in all topics of life. Creative
            your NTFs and sell them
          </p>
          <Button btnName="Start your search" />
        </div>
        <div className={Style.heroSection_box_right}>
          <Image
            src={images.hero}
            alt="Hero section"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
