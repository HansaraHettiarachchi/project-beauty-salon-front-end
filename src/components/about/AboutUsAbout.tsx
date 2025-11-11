import Ring from "../home/Ring";
import layer1 from "../../assets/images/layer.png";
import bg from "../../assets/images/Salon BG-01.png";


export default function AboutUsAbout() {
  return (
     <>
            <div className='grid lg:grid-cols-2 mx-auto bg-[#f5f5f5] h-[80vh]'>
                <div className='flex justify-center lg:justify-end'>
                    <div className='mt-40 transform text-center lg:text-start '>
                        <h1 className='font-extrabold text-6xl leading-18 scale-y-115'>About Us  </h1>
                        <h1 className='font-medium text-xl text-[#f7a392] leading-18 scale-y-115'>Home/<span className="text-[#0e0e0e]">ABOUT PAGE</span></h1>

                       
                    </div>
                </div>
                <div className=" ">
                    <div className='hidden lg:flex'>
                        <div className="bottom-20 relative w-full  aspect-square">
                            <Ring size="p-4" count={5} />
                        </div>
                        <div className="px-10">
                            <img src={layer1} alt="" className='absolute overflow-visible lg:right-20 xl:right-40 top-40 lg:w-[600px] xl:w-[700px] h-auto ' />
                        </div>

                    </div>


                </div>
            </div>

            {/* <div className='p-4'>
                <Ring size="p-4" count={4} />
                <img src={layer1} alt="" className='absolute top-40 lg:right-10 xl:right-30 w-auto lg:h-[400px] xl:h-[650px]' />

            </div> */}
            <div className="bg-bottom absolute top-20 md:top-0 w-full h-screen m-0 p-0 pointer-events-none" style={{ backgroundImage: `url(${bg})` }} aria-hidden="true" />
            {/* <div className='bg-white relative bottom-20 w-full pointer-events-none'></div> */}
        </>
  )
}
