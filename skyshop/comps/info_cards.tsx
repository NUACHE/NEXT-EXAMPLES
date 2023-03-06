import { CodeSandboxOutlined } from "@ant-design/icons";

interface infoCardType {
    icon : any,
    title : string, 
    description: string
}

const InfoCard = ({icon, title, description}: infoCardType) => {
    return (<div className="block overflow-hidden rounded-md bg-white py-6  ">
    <div className="flex  items-center">
      <div className=" px-0  text-red-500  text-3xl items-center rounded-3xl">
        {icon}
      </div>
      <div className="flex flex-col">
        <div className=" text-base font-semi-bold ml-2 mt-4  ">
          {title}
        </div>
        <div className=" text-xs  ml-2  ">
          {description}
        </div>
      </div>
    </div>
  </div>  );
}
 
export default InfoCard;