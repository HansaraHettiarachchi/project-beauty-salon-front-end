import Ring from './Ring';
import layer1 from "../../assets/images/layer.png";
import bg from "../../assets/images/Salon BG-01.png";
import AppointmentBtn from './AppointmentBtn';

export default function Hero() {

    return (
        <>
            <div className=' '>
                <div className="flex items-center bg-[#f5f5f5] pt-20 lg:pt-5">
                    <div className="grid lg:grid-cols-2 gap-20 container mx-auto items-center " >
                        <div className='flex justify-center lg:justify-end px-5 md:px-0'>
                            <div className=' transform text-center lg:text-start '>
                                <h1 className='font-extrabold text-5xl md:text-6xl leading-18 scale-y-115'>Experince the <br /> Best Beauty </h1>
                                <h1 className='font-medium text-5xl md:text-6xl text-[#f7a392] leading-18 scale-y-115'>Services</h1>
                                <h5 className='font-sans text-md md:text-lg scale-x-100 leading-10'>There are many veriations</h5>

                                <div className="flex justify-center lg:justify-start mb-30 lg:mb-0 ">
                                    <AppointmentBtn />
                                </div>
                            </div>
                        </div>

                        <div className='hidden lg:flex'>
                            <div className="bottom-10 right-10 relative w-full  aspect-square">
                                <Ring size="p-4" count={5} image={layer1} />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="relative w-screen bottom-60 md:bottom-55 bg-bottom h-65 m-0 p-0 pointer-events-none "
                    style={{ backgroundImage: `url(${bg})` }}
                    aria-hidden="true">

                </div>
            </div>

        </>
    );


}


const test = () => (

    <>
        <div className='grid lg:grid-cols-2 mx-auto bg-[#f5f5f5] h-[80vh]'>
            <div className='flex justify-center lg:justify-end px-5 md:px-0'>
                <div className='mt-40 transform text-center lg:text-start '>
                    <h1 className='font-extrabold text-5xl md:text-6xl leading-18 scale-y-115'>Experince the <br /> Best Beauty </h1>
                    <h1 className='font-medium text-5xl md:text-6xl text-[#f7a392] leading-18 scale-y-115'>Services</h1>
                    <h5 className='font-sans text-md md:text-lg scale-x-100 leading-10'>There are many veriations</h5>

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
        <div className="bg-bottom absolute top-20 md:top-10 w-full h-screen m-0 p-0 pointer-events-none" style={{ backgroundImage: `url(${bg})` }} aria-hidden="true" />
        {/* <div className='bg-white relative bottom-20 w-full pointer-events-none'></div> */}
    </>
)