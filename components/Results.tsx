import React from "react";
import Image from "next/image";

export default function Results() {
  return (
    <div className="max-w-5xl mx-auto px-4 my-20">
      <Image
        src="./images/flow.svg"
        alt="flow image"
        width={400}
        height={400}
      />
    </div>
  );
}
