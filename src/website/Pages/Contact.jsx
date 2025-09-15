import React from 'react'
import BGImg from "../../assets/IMG/RedstoneBG.png"
import BGFixed2 from "../../assets/IMG/Contact.jpg"
import { IoCallOutline } from 'react-icons/io5'
import { IoMdCheckmark } from 'react-icons/io'


export default function Contact() {

  const bg = {
    backgroundImage: `url(${BGImg})`,  // ✅ correct
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover" // optional, makes it fill
  }
  const bgFixed2 = {
    backgroundImage: `url(${BGFixed2})`,  // ✅ correct
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",       // ✅ repeat off
    backgroundAttachment: "fixed",       // ✅ image fixed
    backgroundSize: "cover"
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (confirm('Inquiry Submitted')) {
      e.target.reset()
    }


  }


  return (
    <>
      <div style={bg} className='w-full h-80' id='top'>

        {/* Fixed Overlay Content */}
        <div className=" bg-black/50 h-80 space-y-3 items-start text-start px-[100px] align-middle text-white content-center">
          <h1 className='text-xl'>Luxury Hotel </h1>
          <h1 className="font-serif font-normal md:text-6xl text-3xl">
            Contact Us
          </h1>
          <button className="border px-3 p-2 hover:bg-white hover:text-black transition-all duration-150">
            Explore Rooms
          </button>
        </div>
      </div>

      {/* Contact section start */}
      <div style={bgFixed2}>
        <div className='md:py-20 sm:py-16 py-10 bg-black/60'>
          <div className='w-[85%] mx-auto md:flex'>
            <div className=' w-[100%] space-y-4 rounded-lg   md:mt-0 mt-6 md:p-8 sm:p-6 p-4 bg-white'>
              <h1 className='font-serif text-2xl text-[#AB854F]'>Hotel Booking Form</h1>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit} >
                {/* Name */}
                <div>
                  <label className="block text-black/70 font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="w-full px-4 py-2 border  focus:ring-2 focus:ring-[#AB854F] outline-none"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-black/70 font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 9876543210"
                    className="w-full px-4 py-2 border  focus:ring-2 focus:ring-[#AB854F] outline-none"
                  />
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-black/70 font-medium mb-2">Number of Guests</label>
                  <input
                    type="number"
                    min="1"
                    placeholder="2"
                    className="w-full px-4 py-2 border focus:ring-2 focus:ring-[#AB854F] outline-none"
                  />
                </div>

                {/* Check-in Date */}
                <div>
                  <label className="block text-black/70 font-medium mb-2">Check-in Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border file:focus:ring-2 focus:ring-[#AB854F] outline-none"
                  />
                </div>

                {/* Check-out Date */}
                <div>
                  <label className="block text-black/70 font-medium mb-2">Check-out Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border focus:ring-2 focus:ring-[#AB854F] outline-none"
                  />
                </div>

                {/* Room Type */}
                <div className="md:col-span-2">
                  <label className="block text-black/70 font-medium mb-2">Room Type</label>
                  <select className="w-full px-4 py-2 border  focus:ring-2 focus:ring-[#AB854F] outline-none">
                    <option>Select Room Type</option>
                    <option>Single Room</option>
                    <option>Double Room</option>
                    <option>Deluxe Room</option>
                    <option>Suite</option>
                  </select>
                </div>

                {/* Special Requests */}
                <div className="md:col-span-2">
                  <label className="block text-black/70 font-medium mb-2">Special Requests</label>
                  <textarea
                    rows="4"
                    placeholder="Any special requirements (e.g., early check-in, extra bed)..."
                    className="w-full px-4 py-2 border  focus:ring-2 focus:ring-[#AB854F] outline-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2 flex justify-center">
                  <button
                    type="submit"
                    className="w-full md:w-auto bg-[#AB854F] text-white px-8 py-3 font-semibold hover:bg-[#82581b] transition-all"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>

          </div>

        </div>

      </div>
      {/* Contact section end */}
    </>

  )
}
