import React from 'react'
import {doctors} from '../../assets/data/doctors'
import DoctorsCard from '../../components/DoctorsInfo/DoctorsCard'

const Doctors = () => {
  return (
    <>

    <section className="bg-[#fff9ea]">
      <div className="container text-center">
        <h2 className="heading">Find a Doctor</h2>
        <div className="max-w-[570px] mt-[30px] mx-auto bg-[#000666ff2c] rounded-md flex items-center justify-between">
          <input 
          type="search" 
          className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer bg-gray-400 placeholder:text-white text-white" 
          placeholder='Search Doctor' 
          />
          <button className="btn mt-0 rounded-[0px] rounded-r-md">
            Search
          </button>
        </div>
      </div>
    </section>
      <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {
            doctors.map((doctor)=> <DoctorsCard key={doctor.id} doctor={doctor} />)
        }
    </div>
      </div>
    <section>

    </section>
    </>
  )
}

export default Doctors