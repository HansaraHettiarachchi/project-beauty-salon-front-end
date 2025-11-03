import Ring from './Ring';
import layer1 from "../../assets/images/layer.png";
// import bg from "../../assets/images/Salon BG-01.png";
import AppointmentBtn from './AppointmentBtn';

export default function Hero() {

    return (
        <>
            <div className='grid lg:grid-cols-2 mx-auto  bg-[#f5f5f5] h-screen'>
                <div className='flex justify-center lg:justify-end'>
                    <div className='mt-40 transform text-center lg:text-start '>
                        <h1 className='font-extrabold text-6xl leading-18 scale-y-115'>Experince the <br /> Best Beauty </h1>
                        <h1 className='font-medium text-6xl text-[#f7a392] leading-18 scale-y-115'>Services</h1>
                        <h5 className='font-sans scale-x-100 leading-10'>There are many veriations</h5>

                        <div className="flex justify-center lg:justify-start">
                            <AppointmentBtn />
                        </div>
                    </div>
                </div>
                <div className=" ">
                    <div className='hidden lg:flex'>
                        <div className="bottom-20 relative w-full  aspect-square">
                            <Ring size="p-4" count={5} />
                        </div>
                        <div className="px-16">
                            <img src={layer1} alt="" className='absolute overflow-visible lg:right-20 xl:right-60 top-40 w-[600px] aspect-square ' />
                        </div>

                    </div>


                </div>
            </div>

            {/* <div className='p-4'>
                <Ring size="p-4" count={4} />
                <img src={layer1} alt="" className='absolute top-40 lg:right-10 xl:right-30 w-auto lg:h-[400px] xl:h-[650px]' />

            </div> */}
            {/* <div className="bg-bottom absolute bottom-20  w-full h-screen m-0 p-0 pointer-events-none" style={{ backgroundImage: `url(${bg})` }} aria-hidden="true" />
            <div className='pb-8 bg-white absolute bottom-15  w-full pointer-events-none'></div> */}
        </>
    );


}
