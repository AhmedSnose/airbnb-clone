import Footer from "../components/Footer"
import Header from "../components/Header"
import {useRouter} from 'next/dist/client/router'
import {format} from 'date-fns'
import InfoCard from "../components/InfoCard"
import Map from "../components/Map"


//https://www.youtube.com/watch?v=CSQgyKRj_Fo&ab_channel=SonnySangha
// 1,22 h

function index({searchResults}) {
    const router = useRouter()
    const {location,staetDate,endDate ,NOfGustes} = router.query

    const formattedStartDate = format(new Date(staetDate),"dd MMMM yy")
    const formattedEndDate = format(new Date(endDate),"dd MMMM yy")
    const range = `${formattedStartDate} - ${formattedEndDate}`
    console.log(searchResults);
    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${NOfGustes} Guests`}/>
        <main className='flex'>
           <section className=' pt-14 px-6'>
                <p className='text-xl'>300+ stays - {range} - for {NOfGustes} of gustes</p>
                <h1 className=" text-3xl font-semibold my-5"> Stays In {location}</h1>
                <div className='hidden lg:inline-flex m-5 space-x-3 text-gray-800 whitespace-nowrap'>
                    <p className=' button'>Canciletion Flexibality</p>
                    <p className=' button'>Type of Place </p>
                    <p className=' button'>Price</p>
                    <p className=' button'>Roms and Beda</p>
                    <p className=' button'>More filters</p>
                </div>

                <div className="flex flex-col">
                {searchResults.map(({img , total , price , title , star ,long , location , description}) => (
                <InfoCard 
                key={title}
                img={img}
                total={total}
                price={price}
                title={title}
                long={long}
                location={location}
                star={star}
                description={description}
                />
            ))}
                </div>

            </section>
            
        </main>

        <div className='flex w-full h-[600px] my-10 overflow-hidden'>
        <section className='overflow-hidden mx-auto min-w-[400px]'>
                <Map searchResults={searchResults} />
            </section>
        </div>
            <Footer />
        </div>
    )
}

export default index


export async function  getServerSideProps(){
const searchResults = await fetch('https://links.papareact.com/isz')
.then(res => res.json())
return {
    props:{
        searchResults,
    }
}
}