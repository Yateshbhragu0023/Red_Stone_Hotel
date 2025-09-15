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
import { IoCallOutline } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { FaPhoenixSquadron } from "react-icons/fa";
import { FaCarRear } from "react-icons/fa6";
import { MdOutlineBedroomParent } from "react-icons/md";
import { TbPool } from "react-icons/tb";
import { IoWifi } from "react-icons/io5";
import { FaBowlFood } from "react-icons/fa6";
import Slider from './Slider'
import { Link } from 'react-router-dom'
import {motion} from "framer-motion"

export default function Home() {


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
    const bgFixed = {
        backgroundImage: `url(${BGFixed})`,  // ✅ correct
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",       // ✅ repeat off
        backgroundAttachment: "fixed",       // ✅ image fixed
        backgroundSize: "cover"
    }
    const bgFixed2 = {
        backgroundImage: `url(${BGFixed2})`,  // ✅ correct
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",       // ✅ repeat off
        backgroundAttachment: "fixed",       // ✅ image fixed
        backgroundSize: "cover"
    }


    return (
        <>
            {/* // hero section start */}
            <div style={bg} className='w-full h-screen' id='top'>

                {/* Fixed Overlay Content */}
                <div className=" bg-black/30 space-y-3 items-center text-center place-items-center align-middle text-white h-screen content-center">
                    <h1>⭐⭐⭐⭐<span className="text-xl">☆</span></h1>
                    <h1 >Luxury Hotel and Best Restaurant</h1>
                    <h1 className="font-serif font-normal md:text-6xl text-3xl">
                        Enjoy A Luxury <br /> Experience in Dholpur
                    </h1>
                    <Link to={'/rooms'}>
                        <button className="border px-3 p-2 hover:bg-white hover:text-black transition-all duration-150">
                            Explore Rooms
                        </button>
                    </Link>
                </div>
            </div>
            {/* // hero section end */}
            {/* // luxurysection start   */}
            <div className='py-8 my-10 relative z-10 '>
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
                        <div className='mt-8 text-center'>
                            <Link to={'/contact'}>
                                <button className="border px-3 p-2 hover:bg-white hover:text-[#7e623c] transition-all duration-150">
                                    Book A Room
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div >
            {/* Room  section end  */}
            {/* extra service start */}
            <div className='bg-[#222222] md:py-20 sm:py-16 py-10'>
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
            {/* testemonial carousal start*/}
            <div style={bgFixed} >
                <div className='text-center bg-black/60 w-full py-20'>
                    <h1 className='text-white '>TESTEMONIALS</h1>
                    <h1 className="font-serif text-white/90 md:text-4xl  text-3xl ">
                        What Our Customers Say
                    </h1>
                    <Slider className='z-0' />

                </div>

            </div>
            {/* testemonial carousal end*/}
            {/* Our Places start */}
            <div className='bg-white'>
                <div className='w-[85%] mx-auto md:py-20 sm:py-16 py-10'>
                    <div>
                        <div className='md:flex'>
                            <div className='md:w-[50%] w-[100%]'>
                                <img src={service1} alt="" />
                            </div>
                            <div className='md:w-[50%] w-[100%] bg-[#f1efea] md:p-8 sm:p-6 p-3 align-middle content-center space-y-5'>
                                <h1 className='text-[#AB854F] uppercase'>discover</h1>
                                <h1 className="font-serif text-black/75 md:text-4xl sm:text-3xl text-2xl">
                                    The Restaurent
                                </h1>
                                <p className='text-black/60'>
                                    Taste tradition, savor freshness — every dish made with love.
                                    Cozy ambiance, friendly service, memories on every plate.
                                    Reserve your table today and let your next favorite meal begin.
                                </p>
                                <button className='border text-black/80 bg-white px-3 p-2 font-semibold hover:bg-[#AB854F] hover:text-white transition-all duration-200'>
                                    LEARN MORE
                                </button>
                            </div>
                        </div>
                        <div className='md:flex'>
                            <div className='md:w-[50%] md:mt-0 mt-2 w-[100%] bg-[#f1efea] md:p-8 sm:p-6 p-3 align-middle content-center space-y-5'>
                                <h1 className='text-[#AB854F] uppercase'>experience</h1>
                                <h1 className="font-serif text-black/75 md:text-4xl sm:text-3xl text-2xl">
                                    Hotel Rooms
                                </h1>
                                <p className='text-black/60'>
                                    Comfort redefined with elegant rooms and modern amenities.
                                    Personalized service that makes every guest feel special.
                                    Your perfect stay begins the moment you arrive.
                                </p>
                                <button className='border font-semibold text-black/80 bg-white px-3 p-2 hover:bg-[#AB854F] hover:text-white transition-all duration-200'>
                                    LEARN MORE
                                </button>
                            </div>
                            <div className='md:w-[50%] w-[100%] '>
                                <img src={deluxe2} alt="" />
                            </div>
                        </div>
                        <div className='md:flex'>
                            <div className='md:w-[50%] md:mt-0 mt-3 w-[100%]'>
                                <img src={dinner} alt="" />
                            </div>
                            <div className='md:w-[50%] w-[100%] bg-[#f1efea] md:p-8 sm:p-6 p-3 align-middle content-center space-y-5'>
                                <h1 className='text-[#AB854F] uppercase'>Experience</h1>
                                <h1 className="font-serif text-black/75 md:text-4xl sm:text-3xl text-2xl">
                                    The Restaurent Dinner
                                </h1>
                                <p className='text-black/60'>
                                    Indulge in a delightful dinner crafted with fresh ingredients.
                                    A warm ambiance, perfect for family, friends, or a romantic evening.
                                    Every bite is served with taste, care, and hospitality
                                </p>
                                <button className='border bg-white text-black/80 px-3 font-semibold p-2 hover:bg-[#AB854F] hover:text-white transition-all duration-200'>
                                    LEARN MORE
                                </button>
                            </div>
                        </div>
                        <div className='md:flex'>
                            <div className='md:w-[50%]  md:mt-0 mt-3 w-[100%]  bg-[#f1efea] md:p-8 sm:p-6 p-3 align-middle content-center space-y-5'>
                                <h1 className='text-[#AB854F] uppercase'>explore</h1>
                                <h1 className="font-serif text-black/75 md:text-4xl sm:text-3xl text-2xl">
                                    Hotel Sitting Area
                                </h1>
                                <p className='text-black/60'>
                                    Relax in our cozy and well-arranged seating designed for comfort.
                                    Spacious ambiance that blends privacy with elegance.
                                    Sit back, unwind, and enjoy your meal in style.
                                </p>
                                <button className='border font-semibold text-black/80 bg-white px-3 p-2 hover:bg-[#AB854F] hover:text-white transition-all duration-200'>
                                    LEARN MORE
                                </button>
                            </div>
                            <div className='md:w-[50%] w-[100%]'>
                                <img src={BGFixed} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Our Places  end */}
            {/* Contact section start */}
            <div style={bgFixed2}>
                <div className='md:py-20 sm:py-16 py-10 bg-black/60'>
                    <div className='w-[85%] mx-auto md:flex'>
                        <div className='md:w-[50%] w-[100%] space-y-6 content-center'>
                            <h1>⭐⭐⭐⭐<span className="text-xl text-white">☆</span></h1>
                            <h1 className='text-white'>Contact Us</h1>
                            <h1 className="font-serif font-normal text-[#AB854F] text-3xl">
                                Check Avaialibility <br /> And Book Now
                            </h1>
                            <p className='text-white/90 ' >
                                Have questions or want to plan your perfect evening? <br />
                                Our team is just a call or message away. <br />
                                Reserve your table in advance for a hassle-free experience. <br />
                                Contact us today — your memorable dining starts here!
                            </p>
                            <div className='flex place-items-center gap-3'>
                                <div className='text-[#AB854F]/90'>
                                    <IoCallOutline size={35} />
                                </div>
                                <div>
                                    <h1 className='text-white/80' >Reservation</h1>
                                    <h1 className='text-[#AB854F] text-xl'>9672427970</h1>
                                </div>

                            </div>
                            <p className=' text-white/90  flex gap-2 place-items-center'>
                                <h1><IoMdCheckmark size={25} /></h1>
                                <span>Call Us, It's Toll Free </span>
                            </p>

                        </div>
                        <div className='md:w-[50%] w-[100%] space-y-4 md:mt-0 mt-6 md:p-8 sm:p-6 p-4 bg-white'>
                            <h1 className='font-serif text-2xl text-[#AB854F]'>Hotel Booking Form</h1>
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
