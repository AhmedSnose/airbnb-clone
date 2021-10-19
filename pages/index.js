import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import MediumCard from '../components/MediumCard';
import SmailCard from '../components/SmailCard';
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'





export default function Home({explorData , cardData}) {
  console.log(explorData);
  return (
    <div>
      <Head>
        <title>AirBmw</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore nearby</h2>

         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
         {explorData?.map((data,i) => (
            <SmailCard key={i} img={data.img} location={data.location} distance={data.distance}/>
          ))}

         </div>
        </section>

        <section>
          <h2 className='text-4xl font-semibold pb-5'>Live AnyWhere</h2>
           <div className='flex space-x-4 overflow-scroll scrollbar-hide p-3 -ml-3'>
           {cardData?.map(({img , title},i) => (
            <MediumCard key={i} img={img} title={title} />
          ))}
           </div>
        </section>

        <LargeCard 
        img='https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440'
        title='The Greatest Outdors'
        bttonText='Get inspired'
        description='Inspiration for future getaways'

        />
      </main>


        <Footer />
    </div>
  )
}

export async function getStaticProps(){
  const explorData = await fetch('http://links.papareact.com/pyp').then(
    (res) => res.json()
  )

  const cardData = await fetch('http://links.papareact.com/zp1').then(
    (res) => res.json()
  )

  return {
    props:{
      explorData,
      cardData,
    }
  }
}
