interface RedButtonType{
    title: string
}

const RedButton = ({title}: RedButtonType) => {
    return ( 
        <button className="bg-red-500 px-4 py-2 mt-8 text-white rounded-none">
       {title}
      </button>
     );
}
 
export default RedButton;