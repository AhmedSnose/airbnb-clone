import Image from "next/image"

function Banner() {
    return (
        <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xlh-[700px]'>
            <h2>j</h2>
            <Image src="https://a0.muscache.com/im/pictures/38a2b9c6-3ac2-458f-9e9b-13fa867b9849.jpg?im_w=2560"
            layout='fill'
            objectFit='cover' />

            <div className='absolute text-center top-1/2 w-full'>
              <p className='text-sm sm:text-lg'>Not sure where to go 😒😒</p>
              <button className='text-purple-500 bg-white px-10 
              py-4 shadow-md rounded-full font-bold my-3
              hover:shadow-xl active:scale-90 transition duration-150
              '>i am flexible</button>
            </div>
        </div>
    )
}

export default Banner
