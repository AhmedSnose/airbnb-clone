
import Image from 'next/image'
import { SearchIcon , MenuIcon , UserCircleIcon , UserIcon ,GlobeAltIcon } from '@heroicons/react/solid'
import {useState} from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import {useRouter} from 'next/dist/client/router'
function Header({placeholder}) {
    const [searchInput , setSearchInput] = useState('')
    const [staetDate , setStartDate] = useState(new Date())
    const [endDate , setEndDate] = useState(new Date())
    const [NOfGustes , setNOfGustes] =useState(1)
    const router = useRouter()

    const handelSelected = (ranges)=>{
        console.log(ranges);
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    } 
    const selectionRange = {
      staetDate,
      endDate,
      key:'selection'
    }


    const restInput = () => {
        setSearchInput('')
    }

    const search = ()=>{
        router.push({
            pathname:'/search',
            query:{
                location:searchInput,
                staetDate:staetDate.toISOString(),
                endDate:endDate.toISOString(),
                NOfGustes,
            }
        })
    }

    
    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5
        md:px-10'>

            <div onClick={()=>router.push('/')} className='relative flex items-center h-10 cursor-pointer my-auto'>
                <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Airbnb_meaningful_logo.svg" 
                   layout="fill"
                   objectPosition="left"
                   objectFit="contain"
                   />
            </div>

            {/* Middel */}
            <div className='flex items-center rounded-full
             md:border-2 py-2 
             md:shadow-sm'>
                <input 
                value={searchInput}
                onChange={(e)=> setSearchInput(e.target.value)}
                className='pl-5 outline-none bg-transparent
                flex-grow
                text-gray-600
                text-sm
                ' type="text" placeholder={placeholder || "Start Your Search Now"}/>
                <SearchIcon className=' hidden md:inline-flex h-8 bg-red-400 text-white rounded-full 
                p-2 
                cursor-pointer
                md:mx-2' />
            </div>
            

            {/* Right */}

            <div className='flex items-center justify-end space-x-4'>
               <p className='hidden md:inline'>Become A Host</p>
               <GlobeAltIcon className='h-6'/>

               <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                 <UserIcon className='h-6'/>
                 <UserCircleIcon className='h-6'/>
               </div>

            </div>

            {searchInput && 
            <div className='flex flex-col col-span-3 mx-auto p-1 w-full'>

            <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD561"]}
            onChange={handelSelected}
            />
            <div className="flex items-center border-b mb-4">
            <h2 className='text-2xl font-semibold flex-grow'>number of gustes</h2>

             <UserIcon className='h-5'/>
             <input onChange={(e)=>setNOfGustes(e.target.value)} min='1' type="number" value={NOfGustes} className='w-12 pl-2 outline-none text-red-400 font-bold' />
            </div>
                
                <div className='flex'>
                    <button onClick={restInput} className='flex-grow text-red-400'>cancel</button>
                    <button onClick={search} className='flex-grow text-gray-400'>search</button>
                </div>

            </div>
            }

        </header>
    )
}

export default Header
