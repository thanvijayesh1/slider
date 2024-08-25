import { FaDice, FaChessKnight, FaDiceD20, FaCoins, FaHandHoldingUsd, FaGem, FaCrown, FaChess } from "react-icons/fa";
import { ReactNode } from 'react';
interface SlideData {
    url: string;
    alternativeText: string;
    icon: ReactNode;
    name: string;
  }

  export const slides: SlideData[] = [
    {
      url: "/prog1.png",
      alternativeText: "Sweden Photo One",
      icon: <FaDice color="#FF5733" />,  
      name: "Casino Royale",
    },
    {
      url: "/prog2.png",
      alternativeText: "Sweden Photo Two",
      icon: <FaDiceD20 color="#FF33A5" />,  
      name: "Blackjack",
    },
    {
      url: "/prog3.png",
      alternativeText: "Sweden Photo Three",
      icon: <FaChessKnight color="#3357FF" />,  
      name: "Roulette Rush",
    },
    {
      url: "/prog4.png",
      alternativeText: "Sweden Photo One",
      icon: <FaDiceD20 color="#FF33A5" />,  
      name: "Poker Palace",
    },
    {
      url: "/prog5.png",
      alternativeText: "Sweden Photo Two",
      icon: <FaCoins color="#FFD700" />, 
      name: "Slot Machine",
    },
    {
      url: "/prog4.png",
      alternativeText: "Sweden Photo Three",
      icon: <FaHandHoldingUsd color="#4CAF50" />,  
      name: "Craps Corner",
    },
    {
      url: "/prog3.png",
      alternativeText: "Sweden Photo One",
      icon: <FaGem color="#E91E63" />, 
      name: "Baccarat Bliss",
    },
    {
      url: "/prog2.png",
      alternativeText: "Sweden Photo Two",
      icon: <FaCrown color="#9C27B0" />,  
      name: "Keno Kingdom",
    },
    {
      url: "/prog1.png",
      alternativeText: "Sweden Photo Three",
      icon: <FaChess color="#3F51B5" />,  
      name: "Sic Spectacle",
    },
  ];
  
  export const BREAKPOINTS = {
    xs: 100,
    sm:599,
    lg:1024,
    md:1281,
    xl:1600
  };
  
  export const getSwiperBreakpoints = () => {
    return {
      [BREAKPOINTS.xs]: {
        slidesPerView: 2,
        spaceBetween: 8,
        // slidesOffsetBefore:16,
        // slidesOffsetAfter:16
      },
      [BREAKPOINTS.sm]: {
        slidesPerView: 4,
        spaceBetween: 8,
        // slidesOffsetBefore:16,
        // slidesOffsetAfter:16
      },
      [BREAKPOINTS.md]: {
        slidesPerView: 5,
        spaceBetween: 12,
        // slidesOffsetBefore:16,
        // slidesOffsetAfter:16
      },
      [BREAKPOINTS.lg]: {
        slidesPerView: 6,
        spaceBetween: 12,
        // slidesOffsetBefore:24,
        // slidesOffsetAfter:24
      },
      [BREAKPOINTS.xl]: {
        slidesPerView: 6,
        spaceBetween: 12,
        // slidesOffsetBefore:18,
        // slidesOffsetAfter:18
      },
    };
  };
  