
//  import layer1 from "../../assets/images/layer.png"; // replace with your about image
// import bg from "../../assets/images/aSalon BG-01.png"; // replace with your background image
// import Ring from "../home/Ring";

// export default function AboutHero() {
//   return (
//     <>
//       <div className="grid lg:grid-cols-2 mx-auto bg-[#f5f5f5] h-[80vh] overflow-hidden">
//         {/* LEFT SIDE (Text Content) */}
//         <div className="flex justify-center lg:justify-end">
//           <div className="mt-40 transform text-center lg:text-start px-6">
//             <h1 className="font-extrabold text-6xl leading-tight scale-y-105">
//               About <br /> Our Spa
//             </h1>
//             <h1 className="font-medium text-6xl text-[#f7a392] leading-tight scale-y-105">
//               Beauty & Wellness
//             </h1>
//             <p className="mt-5 text-gray-600 max-w-md mx-auto lg:mx-0 leading-8">
//               We offer an elegant and relaxing experience designed to rejuvenate
//               your body and mind. Our certified professionals deliver the best
//               spa, salon, and wellness services tailored to your needs.
//             </p>
//           </div>
//         </div>

//         {/* RIGHT SIDE (Image & Effects) */}
//         <div className="relative hidden lg:flex">
//           <div className="bottom-20 relative w-full aspect-square">
//             <Ring size="p-4" count={4} />
//           </div>
//           <div className="px-10">
//             <img
//               src={layer1}
//               alt="About Spa"
//               className="absolute overflow-visible lg:right-20 xl:right-40 top-40 lg:w-[600px] xl:w-[700px] h-auto"
//             />
//           </div>
//         </div>
//       </div>

//       {/* BACKGROUND IMAGE LAYER */}
//       <div
//         className="bg-bottom absolute top-20 md:top-0 w-full h-screen m-0 p-0 pointer-events-none"
//         style={{ backgroundImage: `url(${bg})` }}
//         aria-hidden="true"
//       />
//     </>
//   );
// }
