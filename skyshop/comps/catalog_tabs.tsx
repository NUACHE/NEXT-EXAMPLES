import { Tabs, TabsProps } from "antd";

const CatalogTabs = () => {
    const items: TabsProps['items'] = [
        {
          key: '1',
          label: `All`,
          children: ``,
        },
        {
          key: '2',
          label: `Sky`,
          children: ``,
        },
        {
          key: '3',
          label: `Ski`,
          children: ``,
        },
        {
            key: '4',
            label: `Boards`,
            children: ``,
          },
          {
            key: '5',
            label: `sd`,
            children: ``,
          },
         
      ];

      const onChange = (key: string) => {
        console.log(key);
      };
    return ( 


  <>
     <Tabs   defaultActiveKey="1"  items={items} onChange={onChange} />
  </>
);
}
 
export default CatalogTabs;