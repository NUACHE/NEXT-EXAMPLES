import Appbar from "@/comps/appbar";
import RedButton from "@/comps/red_button";
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
<RedButton title="SHOP NOW" />
           
          </div>
        </div>
      </div>
     <InfoSection />
    <Catalog />
    
    </>
  );
};

export default Dashboard;
