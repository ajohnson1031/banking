"use client";
import { FC } from "react";
import CountUp from "react-countup";

interface AnimateddCounterProps {
  amount: number;
}

const AnimatedCounter: FC<AnimateddCounterProps> = ({ amount }) => {
  return (
    <div className="w-full">
      <CountUp duration={2.75} decimal="." decimals={2} prefix="$" end={amount} />
    </div>
  );
};

export default AnimatedCounter;
