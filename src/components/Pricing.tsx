
import { cn } from "@/utils/util";



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


<div className="flex justify-center mt-10">
<div className=" border border-black  bg-white p-4">
<br/><h1 className="font-bold text-xl"> Monthly Plan</h1>
<br/><br/>
<h1 className="text-lightGreen text-2xl font-bold">$199</h1><span>/month</span>
<h2 className="text-sm text-gray-600">Ideal for getting started with real <br />
time insights</h2>
 <br/><br/>
<h2 className="ph-fill ph-check-circle">Real-time portfolio analytics</h2>
<h2 className="ph-fill ph-check-circle">Email & Chat Support</h2>
<h2 className="ph-fill ph-check-circle">Integrate with portfolios</h2>
<br/><br/>
<button className=" font-bold text-sm mx-auto block text-lightGreen">Subscribe Monthly</button>
</div>


<div className="border bg-white p-6 rounded">
<button className="text-sm px-10 py-2 rounded-full font-bold mx-auto block
bg-lightGreen text-white ">Recommended 👍</button>
<br/>
<h1 className="text-xl font-bold"> Lifetime Plan</h1>
<br/>
<h1 className="text-lightGreen text-2xl font-bold">$1990</h1>
<h2 className="text-sm text-gray-600">It takes on average 6 months to <br />
 sucessfully fundraise</h2>
<br/><br/>
<h2 className="ph-fill ph-check-circle">Include All month featured</h2>
<h2 className="ph-fill ph-check-circle">free 2 months</h2>
<h2 className="ph-fill ph-check-circle">Priority Customer Support</h2>
<br/><br/>
<button className="text-sm px-10 py-2 rounded font-bold mx-auto block
 bg-lightGreen text-white ">Purchase Now</button>
</div>


</div>
</div>


)
};
export default Pricing;
