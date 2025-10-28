import Ring from './Ring';
import layer1 from "../../assets/images/layer.png";
import bg from "../../assets/images/Salon BG-01.png";

export default function Hero() {

    return (
        <>
            <div className='grid grid-cols-2 mx-auto xl:px-25 px-4 sm:px-6 lg:px-8 bg-[#f5f5f5] '>
                <div className='flex justify-end'>
                    <div className='mt-40 me-15 transform '>
                        <h1 className='font-extrabold text-6xl leading-18 scale-y-115'>Experince the <br /> Best Beauty </h1>
                        <h1 className='font-medium text-6xl text-[#f7a392] leading-18 scale-y-115'>Services</h1>
                        <h5 className='font-sans scale-x-100 leading-10'>There are many veriations</h5>
                    </div>
                </div>
                <div className="flex justify-start">
                    <div className='w-[800px] h-[800px] p-4'>
                        <div className=''>
                            <div className=' w-[800px] h-[800px] p-4'>
                                <Ring size='p-4' count={5} />
                            </div>
                            <img src={layer1} alt="" className='absolute top-40 right-30 w-auto h-[650px]' />
                        </div>
                    </div>

                </div>
            </div>
            <div className="bg-bottom absolute bottom-20  w-full h-screen m-0 p-0" style={{ backgroundImage: `url(${bg})` }} aria-hidden="true" />
            <div className='pb-8 bg-white absolute bottom-15  w-full'></div>
        </>
    );


}
