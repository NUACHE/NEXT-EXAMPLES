import RedButton from "@/comps/red_button";
import Image from "next/image";

const Explore = () => {
    return ( <section className="flex justify-center pb-10 pt-14 bg-stone-100">
    <div className="px-1">
      <div className="  text-3xl font-semi-bold" >Explore Our <br />Products</div>
      <div className="h-52 w-52 relative">
        <Image alt="" src={'/board2.png'} sizes={'100vh'} fill={true} />
      </div>

      <div className=" h-52 w-52 relative">
        <Image alt="" src={'/board1.png'} sizes={'100vh'} fill={true} />
      </div>
    </div>
    <div className="px-1">
      <div className=" flex-wrap text-sm font-extralight">
      Amet minim mollit non deserunt <br />
      ullamco est sit aliqua dolor do amet sint. <br />
      Velit officia consequat duis enim velit mollit. 
      </div>
      <div className="h-72 w-72 relative mb-2 mt-10">
      <Image alt="" src={'/bottle.png'} sizes={'100vh'} fill={true} />
      </div>
      <div className="flex justify-end">
      <RedButton title={"MORE PRODUCTS"} />
      </div>
    </div>
  </section> );
}
 
export default Explore;