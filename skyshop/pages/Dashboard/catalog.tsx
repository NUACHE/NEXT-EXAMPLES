import { Anchor, Tabs, TabsProps } from "antd";

const Catalog = () => {
    const items: TabsProps['items'] = [
        {
          key: '1',
          label: `Tab 1`,
          children: ``,
        },
        {
          key: '2',
          label: `Tab 2`,
          children: ``,
        },
        {
          key: '3',
          label: `Tab 3`,
          children: ``,
        },
        {
            key: '4',
            label: `Tab 4`,
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
 
export default Catalog;