"use client";

import { Flex } from "@chakra-ui/react";
import dynamic from "next/dynamic";

// const NewHero = dynamic(() => import("@/components/NewHero"));
import NewHero from "@/components/NewHero";
// const HeroSection = dynamic(() => import("@/components/heroSection"));
import HeroSection from "@/components/heroSection";
const Features = dynamic(() => import("@/components/features"));
// import Features from "@/components/features";
const CardSection = dynamic(() => import("@/components/cardSection"));
// import CardSection from "@/components/cardSection";
const WhiteEasySteps = dynamic(() => import("@/components/WhiteEasySteps"));
// import WhiteEasySteps from "@/components/WhiteEasySteps";
const TryOut = dynamic(() => import("@/components/tryOut"));
// import TryOut from "@/components/tryOut";
const PreOrder = dynamic(() => import("@/components/preOrder"));
// import PreOrder from "@/components/preOrder";
const DowloadApp = dynamic(() => import("@/components/DowloadApp"));
// import DowloadApp from "@/components/DowloadApp";
const FooterSection = dynamic(() => import("@/components/footerSection"));
// import FooterSection from "@/components/footerSection";

export default function Home() {
  return (
    <>
      {/* <PageSeo title="Super fast payments for the next gen - Monapp" description="" /> */}
      <main bg="#FFFFFF">
        <NewHero>
          <div>
            <HeroSection />
          </div>
        </NewHero>

        <Flex bg="#FFFFFF" flexDirection={"row"} justify={"center"}>
          <Features />
        </Flex>

        <div>
          <CardSection />
        </div>

        <div>
          <TryOut />
        </div>

        <div>
          <PreOrder />
        </div>

        <div>
          <WhiteEasySteps />
        </div>

        <div>
          <DowloadApp />
        </div>

        <div>
          <FooterSection />
        </div>
      </main>
    </>
  );
}
