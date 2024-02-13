import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className=" grid sm:grid-cols-1 md:grid-cols-2 ">
      <div className="text">
        <h1 className=" text-[70px] font-bold tracking-wider">
          Creative Thoughts Agency.
        </h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa qui
          aliquam vitae, veritatis aspernatur expedita quas nesciunt eius odio
          quibusdam ex, itaque adipisci.
        </p>
        <div className="flex items-center gap-4 my-4">
          <button className="bg-blue-500 rounded text-white w-[150px] p-2">
            Learn More
          </button>
          <button className="bg-white text-black w-[150px] rounded  p-2">
            Contact
          </button>
        </div>
        <div className="brand relative w-full h-[25px] md:h-[50px] ">
          <Image src={"/brands.png"} alt="brand" fill />
        </div>
      </div>
      <div className="relative w-full h-[250px] md:h-[500px]  ">
        <Image src={"/hero.gif"} alt="hero" fill />
      </div>
    </div>
  );
};

export default Home;
