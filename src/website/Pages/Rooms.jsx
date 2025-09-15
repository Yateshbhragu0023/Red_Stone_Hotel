import React from 'react'
import BGImg from "../../assets/IMG/RedstoneBG.png"
import room1 from "../../assets/IMG/rooms1.jpg"
import room2 from "../../assets/IMG/rooms2.jpg"
import room3 from "../../assets/IMG/rooms3.jpg"
import deluxe1 from "../../assets/IMG/deluxe1.jpg"
import deluxe2 from "../../assets/IMG/deluxe3.jpg"

export default function Rooms() {

  const bg = {
    backgroundImage: `url(${BGImg})`,  // ✅ correct
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover" // optional, makes it fill
  }

  const bg1 = {
    backgroundImage: `url(${room1})`,  // ✅ correct
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover" // optional, makes it fill
  }
  const bg2 = {
    backgroundImage: `url(${room2})`,  // ✅ correct
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover" // optional, makes it fill
  }
  const bg3 = {
    backgroundImage: `url(${room3})`,  // ✅ correct
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover" // optional, makes it fill
  }
  const bg4 = {
    backgroundImage: `url(${deluxe1})`,  // ✅ correct
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover" // optional, makes it fill
  }
  const bg5 = {
    backgroundImage: `url(${deluxe2})`,  // ✅ correct
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
            Explore Rooms
          </h1>
          <button className="border px-3 p-2 hover:bg-white hover:text-black transition-all duration-150">
            Explore Rooms
          </button>
        </div>
      </div>

      {/* Room  section start  */}
      <div className='bg-[#AB854F]/80 py-16'>
        <div className='w-[85%] mx-auto'>
          <div className='text-white'>
            <h1>THE RED STONE Luxury Hotel </h1>
            <h1 className="font-serif  md:text-4xl sm:text-3xl text-2xl">
              Luxury  Rooms & Hotel
            </h1>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-8 '>
              <div style={bg1}  >
                <div className='p-3 pb-8 h-[500px] space-y-2 content-end bg-black/20 hover:bg-black/40 transition-all  duration-300'>
                  <h1>₹2407 / Night</h1>
                  <h1 className='font-serif text-3xl'>Junior Suit</h1>
                  <hr className='w-16' />
                </div>
              </div>
              <div style={bg2}>
                <div className='p-3 pb-8 h-[500px] space-y-2 content-end bg-black/20 hover:bg-black/40 transition-all  duration-300'>
                  <h1>₹ 2968 / Night</h1>
                  <h1 className='font-serif text-3xl'>Family Room</h1>
                  <hr className='w-16' />
                </div>
              </div>
              <div
                style={bg3}>
                <div className='p-3 pb-8 h-[500px] space-y-2 content-end bg-black/20 hover:bg-black/40 transition-all  duration-300'>
                  <h1>₹3530 / Night</h1>
                  <h1 className='font-serif text-3xl'> Double Room </h1>
                  <hr className='w-16' />
                </div>
              </div>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mt-5' >
              <div style={bg4}>
                <div className='p-3 pb-8 h-[400px] space-y-2 content-end bg-black/20 hover:bg-black/40 transition-all  duration-300'>
                  <h1>₹ 3968 / Night</h1>
                  <h1 className='font-serif text-3xl'>Deluxe Room</h1>
                  <hr className='w-16' />
                </div>
              </div>
              <div style={bg5}>
                <div className='p-3 pb-8 h-[400px] space-y-2 content-end bg-black/20 hover:bg-black/40 transition-all  duration-300'>
                  <h1>₹ 5475 / Night</h1>
                  <h1 className='font-serif text-3xl'>Superior Room</h1>
                  <hr className='w-16' />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      {/* Room  section end  */}
    </>
  )
}
