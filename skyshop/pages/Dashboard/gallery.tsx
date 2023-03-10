import Image from "next/image";

const Gallery = () => {
    return ( <section className="flex justify-center pb-10 pt-14 bg-stone-100">
    <div className="px-1">
      <div className="h-10 text-2xl font-semi-bold">Our Gallery</div>
      <div className="h-80 w-52 relative">
        <Image alt="" src={'/gallery1.png'} sizes={'100vh'} fill={true} />
      </div>
    </div>
    <div className="px-1">
      <div className="h-44 w-72 relative mb-2">
      <Image alt="" src={'/gallery2.png'} sizes={'100vh'} fill={true} />
      </div>
      <div className="h-44 w-72 relative mb-2">
      <Image alt="" src={'/gallery3.png'} sizes={'100vh'} fill={true} />
      </div>
    </div>
  </section> );
}
 
export default Gallery;