import React from 'react'
import BGImg from "../../assets/IMG/RedstoneBG.png"
import BGFixed from "../../assets/IMG/bg5.jpg"
import BGFixed2 from "../../assets/IMG/Contact.jpg"
import luxury1 from "../../assets/IMG/luxury1.png"
import luxury2 from "../../assets/IMG/luxury2.png"
import room1 from "../../assets/IMG/rooms1.jpg"
import room2 from "../../assets/IMG/rooms2.jpg"
import room3 from "../../assets/IMG/rooms3.jpg"
import deluxe1 from "../../assets/IMG/deluxe1.jpg"
import deluxe2 from "../../assets/IMG/deluxe3.jpg"
import Extra1 from "../../assets/IMG/extraservice1.jpg"
import Extra2 from "../../assets/IMG/extraservice2.jpg"
import service1 from "../../assets/IMG/services.jpg"
import dinner from "../../assets/IMG/Dinner.jpg"


export default function Gallery() {

  const bg = {
    backgroundImage: `url(${BGImg})`,  // ✅ correct
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover" // optional, makes it fill
  }

  const gallery = [
    {
      id : 1,
      name : BGFixed
    },
    {
      id : 2 ,
      name : BGFixed2
    },
    {
      id : 3,
      name : luxury1
    },
    {
      id : 4,
      name : luxury2
    },
    {
      id : 5,
      name : room1
    },
    {
      id : 6,
      name : room2
    },
    {
      id : 7,
      name : room3
    },
    {
      id : 8,
      name : deluxe1
    },
    {
      id : 9,
      name : deluxe2
    },
    {
      id : 10,
      name : Extra1
    },
    {
      id : 11,
      name : Extra2
    },
    {
      id : 12,
      name : dinner
    }
  ]

  return (
    <>
      <div style={bg} className='w-full h-80' id='top'>

        {/* Fixed Overlay Content */}
        <div className=" bg-black/50 h-80 space-y-3 items-start text-start px-[100px] align-middle text-white content-center">
          <h1 className='text-xl'>Luxury Hotel </h1>
          <h1 className="font-serif font-normal md:text-6xl text-3xl">
            Explore Gallery
          </h1>
          <button className="border px-3 p-2 hover:bg-white hover:text-black transition-all duration-150">
            Explore Rooms
          </button>
        </div>
      </div>

      {/* gallery sectionn start */}
      <div className='bg-[#AB854F]/80 py-16'>
        <div className='w-[85%] mx-auto'>
          <div className="min-h-screen bg-transparent py-10 px-6">
            <div className="max-w-6xl  mx-auto">
              {/* Heading */}
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                Our Gallery
              </h2>

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
                {gallery.map((item, index) => (
                  <div
                    key={item.id}
                    className="relative group bg-red-300 overflow-hidden rounded-xl shadow-lg"
                  >
                    {/* Image */}
                    <img
                      src={item.name}
                      alt="Gallery"
                      className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                      <p className="text-white font-semibold text-lg">View Photo</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* gallery sectionn end */}

    </>
  )
}
