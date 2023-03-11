import Image from "next/image";

const INFO = [
    '/c_logo_1.png', '/c_logo_2.png', '/c_logo_3.png',
    '/c_logo_4.png', '/c_logo_5.png', 
]
const Logos = () => {
    return (
      <>
      <div className="flex justify-center  py-8">
      {INFO.map((info,index) => {
                  return <div  key={index}> 
                   <div className="mx-10 h-8 w-16 relative">
        <Image alt="" src={info} sizes={'100vh'} fill={true} />
        </div>
                  </div>;
                })}
            
            
       
      </div>
      </>
        );
}
 
export default Logos;  