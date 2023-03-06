import Appbar from "@/comps/appbar";
import {
  CodeSandboxOutlined,
  MenuOutlined,
  SearchOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Divider, Layout, Space } from "antd";
import Image from "next/image";
import Link from "next/link";
import Catalog from "./catalog";
import InfoSection from "./info_section";
const { Header, Footer, Sider, Content } = Layout;

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

            <button className="bg-red-500 px-4 py-2 mt-8 rounded-none">
              Shop Now
            </button>
          </div>
        </div>
      </div>
     <InfoSection />
     <div className="w-1/3  pl-40">
     <Divider className="text-red-500" orientation="right"> <div className="text-red-400">Catalog</div></Divider>
     </div>
     <div className="text-4xl px-40  flex justify-between font-semi-bold text-black">
      <div className="w-1/2">
      Our Most Popular Board Category
      </div>
      <Catalog />
    
     </div>
    
    </>
  );
};

export default Dashboard;
