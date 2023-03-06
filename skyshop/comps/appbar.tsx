import { MenuOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Space } from "antd";
import Link from "next/link";

const Appbar = () => {
    return ( 
        <div className="flex border-b-white border-b-2 justify-between  py-4 font-bold text-2xl text-white">
              <Space className="invisible ml-10" size={"large"}>
              <SearchOutlined />
              <UserOutlined />
            </Space>
            <Space size={"large"}>
              <Link href={""}>About</Link>
              <Link href={""}>Shop</Link>
              <Link href={""}>Contact</Link>
            </Space>
            <Space size={"large"} className="pr-20">
              <SearchOutlined />
              <UserOutlined />
            </Space>
          </div>
     );
}
 
export default Appbar;