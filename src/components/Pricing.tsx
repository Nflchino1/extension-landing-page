
import Image from "next/image";


const Pricing = () => {
    return (

<div className="text-align px-8 py-8 bg-[#11362D]">
<div className="  rounded-full  text-white flex justify-center items-center">
<button className=" bg-teal-100 font-bold rounded-full py-1 px-3 text-lime-800">Pricing </button>
</div>
<br/>
<h2 className="text-2xl font-bold mb-4 text-center text-white">Pick Your Plan, Boost Your Portfolio</h2>
<h3 className='text-center text-sm text-white'>No surprises, just straightfoward pricing to get you where you want to go</h3>
<br/> 
<div className="flex justify-center">
<Image
src={"/Frame559.png"}
alt="The Valley Logo"
width={300}
height={137}/>
</div>

</div>


)
};
export default Pricing;
