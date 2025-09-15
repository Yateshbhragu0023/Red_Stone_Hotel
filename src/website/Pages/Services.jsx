import React from 'react'
import BGImg from "../../assets/IMG/RedstoneBG.png"
import { FaBowlFood, FaCarRear } from 'react-icons/fa6'
import { IoWifi } from 'react-icons/io5'
import { TbPool } from 'react-icons/tb'
import { MdOutlineBedroomParent } from 'react-icons/md'
import { FaPhoenixSquadron } from 'react-icons/fa'


export default function Services() {

  const bg = {
    backgroundImage: `url(${BGImg})`,  // ✅ correct
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover" // optional, makes it fill
  }

  return (
    <>
      <div style={bg} className='w-full h-80' id='top'>

        {/* Fixed Overlay Content */}
        <div className=" bg-black/50 h-80 space-y-3 items-start text-start px-[100px] align-middle text-white content-center">
          <h1 className='text-xl'>Luxury Hotel </h1>
          <h1 className="font-serif font-normal md:text-6xl text-3xl">
            Our Services
          </h1>
          <button className="border px-3 p-2 hover:bg-white hover:text-black transition-all duration-150">
            Explore Rooms
          </button>
        </div>
      </div>

      {/* our service start */}
      <div className="bg-white md:py-20 sm:py-16 py-10">
        <div className="w-[85%] mx-auto mt-5">
          <h1 className="text-[#AB854F]">OUR SERVICES</h1>
          <h1 className="font-serif text-black/65 md:text-4xl sm:text-3xl text-2xl">
            Hotel Facilities
          </h1>

          {/* First Row */}
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 py-5">
            <div className="border border-[#AB854F]/30 md:p-7 sm:p-5 p-3 space-y-5 
                      rounded-xl transition-all duration-300 transform hover:scale-105 
                      hover:shadow-xl hover:border-[#AB854F] cursor-pointer">
              <h1 className="text-[#bb9662] transition-transform duration-300 hover:scale-125">
                <FaPhoenixSquadron size={40} />
              </h1>
              <h1 className="font-serif text-black/80 text-3xl">Pick & Drop</h1>
              <p className="text-black/70">
                We’ll pick up from Station while you comfy on your ride, Drop on our Location.
              </p>
            </div>

            <div className="border border-[#AB854F]/30 md:p-7 sm:p-5 p-3 space-y-5 
                      rounded-xl transition-all duration-300 transform hover:scale-105 
                      hover:shadow-xl hover:border-[#AB854F] cursor-pointer">
              <h1 className="text-[#bb9662] transition-transform duration-300 hover:rotate-12">
                <FaCarRear size={40} />
              </h1>
              <h1 className="font-serif text-black/80 text-3xl">Parking Space</h1>
              <p className="text-black/70">
                We’ll have Proper Parking Space For Your Personal vehicles.
              </p>
            </div>

            <div className="border border-[#AB854F]/30 md:p-7 sm:p-5 p-3 space-y-5 
                      rounded-xl transition-all duration-300 transform hover:scale-105 
                      hover:shadow-xl hover:border-[#AB854F] cursor-pointer">
              <h1 className="text-[#bb9662] transition-transform duration-300 hover:scale-125">
                <MdOutlineBedroomParent size={40} />
              </h1>
              <h1 className="font-serif text-black/80 text-3xl">Room Service</h1>
              <p className="text-black/70">
                We’ll Provide Room service you don't have need to do anything.
              </p>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 py-2">
            <div className="border border-[#AB854F]/30 md:p-7 sm:p-5 p-3 space-y-5 
                      rounded-xl transition-all duration-300 transform hover:scale-105 
                      hover:shadow-xl hover:border-[#AB854F] cursor-pointer">
              <h1 className="text-[#bb9662] transition-transform duration-300 hover:rotate-12">
                <TbPool size={40} />
              </h1>
              <h1 className="font-serif text-black/80 text-3xl">Swimming Pool</h1>
              <p className="text-black/70">
                We’ll pick up from Station while you comfy on your ride, Drop on our Location.
              </p>
            </div>

            <div className="border border-[#AB854F]/30 md:p-7 sm:p-5 p-3 space-y-5 
                      rounded-xl transition-all duration-300 transform hover:scale-105 
                      hover:shadow-xl hover:border-[#AB854F] cursor-pointer">
              <h1 className="text-[#bb9662] transition-transform duration-300 hover:scale-125">
                <IoWifi size={40} />
              </h1>
              <h1 className="font-serif text-black/80 text-3xl">WIFI Internet</h1>
              <p className="text-black/70">
                We  have Proper Internet facility so that you can do your work.
              </p>
            </div>

            <div className="border border-[#AB854F]/30 md:p-7 sm:p-5 p-3 space-y-5 
                      rounded-xl transition-all duration-300 transform hover:scale-105 
                      hover:shadow-xl hover:border-[#AB854F] cursor-pointer">
              <h1 className="text-[#bb9662] transition-transform duration-300 hover:rotate-12">
                <FaBowlFood size={40} />
              </h1>
              <h1 className="font-serif text-black/80 text-3xl">Breakfast</h1>
              <p className="text-black/70">
                You will get proper Breakfast in Your Provided Time, According To Your Order.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* our service end */}

    </>
  )
}
