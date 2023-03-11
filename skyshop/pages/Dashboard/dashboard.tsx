import Appbar from "@/comps/appbar";
import RedButton from "@/comps/red_button";
import { Button, Divider, Layout, Space } from "antd";
import Image from "next/image";
import Catalog from "./catalog";
import Explore from "./explore";
import Gallery from "./gallery";
import InfoSection from "./info_section";
import Logos from "./logos";

const Dashboard = () => {
  return (
    <>
      <div className="relative w-screen h-screen">
        <Image
          className=" -z-10 brightness-75 "
          fill={true}
          alt="goggles"
          src={"/landing_photo.jpg"}
        />
        <div className="flex flex-col justify-between">
          <Appbar />
          <div className="text-white  mt-52 justify-center items-center flex flex-col content-center">
            <div className="text-sm">
              We build only the best, customized to your exacting demands
            </div>
            <div className="font-bold text-8xl">SKY & SKI</div>
            <RedButton title="SHOP NOW" />
          </div>
        </div>
      </div>
      <InfoSection />
      <Catalog />
      <Gallery />
      <div className="h-28"></div>
      <Explore />
      <Logos />
    </>
  );
};

export default Dashboard;
