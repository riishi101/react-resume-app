import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import {FreeMode, Pagination} from 'swiper/modules'
import { RxArrowTopRight } from 'react-icons/rx'
import { ServiceData } from '../constants'

const Templates = () => {
  return (
    <div className='flex items-center justify-center flex-col bg-gray-100'>
        <h1 data-aos="zoom-in" className='flex justify-center items-center text-center font-semibold w-[90%] lg:text-[35px] text-[20px] lg:leading-[35px] font-ubuntu text-black mb-9 mt-9'>Every detail on your resume ,<br />built it to perfection</h1>

        <Swiper 
            breakpoints={{
                340: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                700: {
                    slidesPerView: 3,
                    spaceBetween: 15
                }
            }}

            freeMode={true}
            pagination={{
                clickable: true
            }}
            modules={[FreeMode, Pagination]}
            className='max-w-[90%] lg:max-w-[80%]'
        >
            {ServiceData.map((item) => (
                <SwiperSlide key={item.title}>
                    <div className='flex flex-col gap-6 mb-20 relative shadow-lg text-white rounded-xl px-6 py-8 h-[300px] w-[215px] lg:h-[500px] lg:w-[350px]'>
                        <div className='absolute inset-0 bg-cover bg-center' style={{backgroundImage: `url(${item.backgroundImage})`}}>
                            <div className='absolute inset-0 bg-black opacity-10 group-hover:opacity-50'>
                                <RxArrowTopRight className='absolute bottom-5 left-5 w-[35px] h-[35px] text-limegreen group-hover:text-limegreen group-hover:rotate-45 duration-100 ' />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default Templates