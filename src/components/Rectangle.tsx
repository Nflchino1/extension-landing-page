
import Image from "next/image";
import { GoogleIcon } from "@/icon/google";
import Button from './button';


const Rectangle = () => {
return (

        
<div className="bg-teal-100   p-8 flex justify-evenly"  >

<div className="mt-14">
<Button
text="Available on Chrome Extension"
icon={<GoogleIcon />}
className="bg-[#EFFAF5] h-[41px] min-h-[41px]  md:h-[41px] md:min-h-[41px]
text-lightGreen font-medium text-sm"/> 
<br/>

<h1 className=" text-lightGreen text-3xl font-bold"> trusted by 2000+ users and rapidly growing</h1>
<br/>

<button className=" bg-lightGreen py-2 rounded px-6 text-white">Install on Chrome </button>
</div>

<div>
<Image
src={"/Group69.png"}
alt="The Valley Logo"
width={300}
height={137}/>
</div>

           
</div>


)
};
export default Rectangle;
























