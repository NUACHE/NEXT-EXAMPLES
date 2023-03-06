import InfoCard from "@/comps/info_cards";
import { CodeSandboxOutlined, CustomerServiceOutlined, WalletOutlined } from "@ant-design/icons";

const InfoSection = () => {
    const INFO = [
        {
            icon:   <CodeSandboxOutlined  />,
            title: 'Free Shipping',
            description: 'No charge for each delivery'
        },
        {
            icon:  <WalletOutlined />,
            title: 'Quick Payment',
            description: '100% secure payment'
        },
        {
            icon:   <CustomerServiceOutlined />,
            title: '24/7 Support',
            description: 'Quick support'
        },
    ]
    return ( 
               
      <section className="px-40 py-4">
        {/* Info Section */}
      <div className="grid grid-cols-3 gap-4 auto-cols-max">
      {INFO.map((info) => {
                  return <div  key={info.title}> <InfoCard icon={info.icon} title={info.title} description={info.description} /></div>;
                })}
        
      </div>
    </section>
     );
}
 
export default InfoSection;