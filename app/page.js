"use client";

import { Flex } from "@chakra-ui/react";

import HeroSection from "@/components/heroSection";
import Features from "@/components/features";
import CardSection from "@/components/cardSection";
import FooterSection from "@/components/footerSection";
import NewHero from "@/components/NewHero";
import WhiteEasySteps from "@/components/WhiteEasySteps";
import TryOut from "@/components/tryOut";
import PreOrder from "@/components/preOrder";
import DowloadApp from "@/components/DowloadApp";

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
