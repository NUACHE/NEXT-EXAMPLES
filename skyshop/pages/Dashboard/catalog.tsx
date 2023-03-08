import ProductCard from "@/comps/product_cards";
import RedButton from "@/comps/red_button";
import CatalogTabs from "@/comps/catalog_tabs";
import { Anchor, Divider, Tabs, TabsProps } from "antd";
const Catalog = () => {
  const INFO = [
    {
        image:   '/board1.png',
        title: 'Sardinia White',
        description: '312.49 SAR'
    },
    {
        image:  '/board2.png',
        title: 'Sicily Grey 30×60',
        description: '312.49 SAR'
    },
    {
        image:   '/board3.png',
        title: 'Sicily Grey',
        description: '312.49 SAR'
    },
    {
      image:   '/board4.png',
      title: 'Sicily Grey Décor 30×60',
      description: '312.49 SAR'
  },
  {
    image:   '/board3.png',
    title: 'Sicily Grey',
    description: '312.49 SAR'
},
{
  image:   '/board4.png',
  title: 'Sicily Grey Décor 30×60',
  description: '312.49 SAR'
},
{
  image:   '/board1.png',
  title: 'Sardinia White',
  description: '312.49 SAR'
},
{
  image:  '/board2.png',
  title: 'Sicily Grey 30×60',
  description: '312.49 SAR'
},
]
  return (
    <>
      <div className="px-40">
        <div className="w-1/3 ">
          <Divider className="text-red-500" orientation="right">
            {" "}
            <div className="text-red-400">Catalog</div>
          </Divider>
        </div>
        <div className="text-4xl  flex justify-between font-semi-bold text-black">
          <div className="w-2/5">Our Most Popular Board Category</div>
          <CatalogTabs />
        </div>

        <div className="grid grid-cols-4 gap-4 auto-cols-max py-8">
        {INFO.map((info,index) => {
                  return <div  key={index}> <ProductCard image={info.image} title={info.title} description={info.description} /></div>;
                })}
          
        </div>
        <div className="flex  pb-20 justify-center">

       
        <RedButton title="MORE PRODUCTS" />
        </div>
      </div>
     
    </>
  );
};

export default Catalog;
