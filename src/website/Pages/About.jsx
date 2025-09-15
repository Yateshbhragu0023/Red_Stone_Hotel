import React from 'react'
import BGImg from "../../assets/IMG/RedstoneBG.png"
import luxury1 from "../../assets/IMG/luxury1.png"
import luxury2 from "../../assets/IMG/luxury2.png"
import Extra1 from "../../assets/IMG/extraservice1.jpg"
import Extra2 from "../../assets/IMG/extraservice2.jpg"
import { IoCallOutline } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

export default function About() {

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
            About Us
          </h1>
          <button className="border px-3 p-2 hover:bg-white hover:text-black transition-all duration-150">
            Explore Rooms
          </button>
        </div>
      </div>

      {/* // luxurysection start   */}
      <div className='py-8 my-10 '>
        <div className='w-[85%] mx-auto md:flex gap-5' >
          <div className='md:w-[50%] space-y-4'>
            <h1>⭐⭐⭐⭐<span className="text-xl">☆</span></h1>
            <h1 >THE RED STONE Hotel and Restaurant</h1>
            <h1 className="font-serif font-normal text-[#AB854F] text-3xl">
              Enjoy A Luxury <br /> Experience in Dholpur
            </h1>
            <p className='text-black/60 ' >
              Welcome to the best five-star deluxe hotel in Dholpur. Hotel elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat. Donec in quis the pellentesque velit. Donec id velit ac arcu posuere blane.
            </p>
            <p className='text-black/60'>
              Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant morbine.
            </p>
            <div className='flex place-items-center gap-3'>
              <div className='text-[#AB854F]/90'>
                <IoCallOutline size={35} />
              </div>
              <div>
                <h1 className='text-black/80' >Reservation</h1>
                <h1 className='text-[#AB854F] text-xl'>9672427970</h1>
              </div>
            </div>

          </div>
          <div className='md:w-[50%] mt-14 md:mt-0 md:flex sm:flex gap-6' >
            <div className='mt-16 ' ><img src={luxury1} alt="" /></div>
            <div className=' md:mt-0 mt-5' ><img src={luxury2} alt="" /></div>
          </div>
        </div>
      </div>
      {/* // luxurysection end */}

      {/* extra service start */}
      <div className='bg-[#363636] md:py-20 sm:py-16 py-10'>
        <div className=' w-[85%] mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-5'>
          <div className='space-y-6 text-white'>
            <h1 className='text-[#AB854F]'>BEST PRICES</h1>
            <h1 className="font-serif text-4xl">
              Extra Services
            </h1>
            <p className='text-white/60 ' >
              The best prices for your relaxing vacation. The utanislen quam nestibulum ac quame odion elementum sceisue the aucan.
            </p>
            <p className='text-white/60'>
              Orci varius natoque penatibus et magnis disney parturient monte nascete ridiculus mus nellen etesque habitant morbine.
            </p>
            <div className='flex place-items-center gap-3'>
              <div className='text-[#AB854F]/90'>
                <IoCallOutline size={35} />
              </div>
              <div>
                <h1 className='text-white/80' >For Information</h1>
                <h1 className='text-[#AB854F] text-xl'>9672427970</h1>
              </div>
            </div>
          </div>
          <div className='md:mt-0 sm:mt-0 mt-3'>
            <img src={Extra1} alt="" />
            <div className='bg-white md:p-8 p-5'>
              <h1 className='text-2xl text-black/70 font-serif'>Proper Sitting</h1>
              <h1 className=' text-[#AB854F] font-serif mt-2'><span className='text-3xl'> ₹0</span> / Hour</h1>
              <p className=' text-[#AB854F] mt-2 flex gap-2 place-items-center'>
                <h1><IoMdCheckmark size={25} /></h1>
                <span>Free Water Facility</span>
              </p>
              <p className=' text-[#AB854F]  flex gap-2 place-items-center'>
                <h1><IoMdCheckmark size={25} /></h1>
                <span>Natural Air </span>
              </p>
              <p className=' text-[#AB854F]  flex gap-2 place-items-center'>
                <h1><RxCross1 size={25} /></h1>
                <span>Not Include Food</span>
              </p>

            </div>
          </div>
          <div className='md:mt-0 sm:mt-4 mt-0'>
            <img src={Extra2} alt="" />
            <div className='bg-white md:p-8 p-5'>
              <h1 className='text-2xl text-black/70 font-serif'>Night Out </h1>
              <h1 className=' text-[#AB854F] font-serif mt-2'><span className='text-3xl'> ₹0</span> / Hour</h1>
              <p className=' text-[#AB854F] mt-2 flex gap-2 place-items-center'>
                <h1><IoMdCheckmark size={25} /></h1>
                <span>Free Water Facility</span>
              </p>
              <p className=' text-[#AB854F]  flex gap-2 place-items-center'>
                <h1><IoMdCheckmark size={25} /></h1>
                <span>Enjoy Moment  </span>
              </p>
              <p className=' text-[#AB854F]  flex gap-2 place-items-center'>
                <h1><RxCross1 size={25} /></h1>
                <span>Not Include Food</span>
              </p>

            </div>
          </div>

        </div>

      </div>
      {/* extra service end */}

    </>
  )
}
