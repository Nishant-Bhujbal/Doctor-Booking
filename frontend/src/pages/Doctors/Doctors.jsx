import React, { useEffect, useState } from 'react'
import DoctorsCard from '../../components/DoctorsInfo/DoctorsCard'

import { BASE_URL } from '../../config'
import useFetchData from '../../hooks/useFetchData'
import Loading from '../../components/Loader/Loading'
import Error from '../../components/Error/Error'


const Doctors = () => {

  const [query,setQuery] = useState('');
  const [debounceQuery,setDebounceQuery] = useState('')

  
  const handleSearch = () => {
    setQuery(query.trim())
    
    console.log('handle search')
  }

  useEffect(()=>{
    const timeout = setTimeout(() => {
      setDebounceQuery(query)
    }, 700);

    return ()=> clearTimeout(timeout);
  },[query])

  const {data : doctors,loading,error} = useFetchData(`${BASE_URL}/doctors?query=${debounceQuery}`)

  return (
    <>

    <section className="bg-[#fff9ea]">
      <div className="container text-center">
        <h2 className="heading">Find a Doctor</h2>
        <div className="max-w-[570px] mt-[30px] mx-auto bg-[#000666ff2c] rounded-md flex items-center justify-between">
          <input 
          type="search" 
          className="py-4 pl-4 pr-2 bg-gray-300 w-full focus:outline-none cursor-pointer placeholder:text-textColor" 
          placeholder='Search Doctor by name or specialization' 
          value={query}
          onChange={e => setQuery(e.target.value)}
          />
          <button 
          onClick={handleSearch}
          className="btn mt-0 rounded-[0px] rounded-r-md">
            Search
          </button>
        </div>
      </div>
    </section>
      <div className="container">

      {loading && <Loading />}
      {error && <Error />}

      {!loading && !error && <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {
            doctors.map((doctor)=> <DoctorsCard key={doctor._id} doctor={doctor} />)
        }
    </div>}
      </div>
    <section>

    </section>
    </>
  )
}

export default Doctors