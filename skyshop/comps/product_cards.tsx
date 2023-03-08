
import Image from "next/image";

interface ProductCardType {
    image: string,
    title: string,
    description: string
}

const ProductCard = ({image, title, description}: ProductCardType) => {
    return ( <div className="block w-full rounded-sm mx-4 shadow-lg ">
    <div className="h-60 w-full relative">
      <Image
        className="rounded-t-sm"
        src={image}
        alt="firstboard"
        fill={true}
        sizes="100vh"
      />
    </div>
    <div className="p-6 text-center">
      <p className="mb-4 text-base text-black ">
       {title}
      </p>
      <p className="text-neutral-600 text-sm ">{description}</p>
    </div>
  </div> );
}
 
export default ProductCard;