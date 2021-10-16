
import Image from "next/image"


function LargeCard({img , title ,description , bttonText}) {
    return (
        <section className='relative py-16 cursor-pointer'>
           <div className='relative min-w-[300px] h-96'>
               <Image src={img} layout='fill' objectFit='cover' className=' rounded-2xl' />
           </div>

           <div className='absolute top-32 left-12'>
               <h2 className='mb-3 text-4xl w-64'>{title}</h2>
               <h2>{description}</h2>
               <button className='text-sm text-white px-4 py-2 bg-gray-900 mt-5 rounded-t-lg'>{bttonText}</button>
           </div>
        </section>
    )
}

export default LargeCard
