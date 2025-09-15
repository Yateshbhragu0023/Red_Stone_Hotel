import React from 'react'
import { FaPhoneAlt, FaGlobe, FaInstagram, FaTwitter, FaYoutube, FaFacebookF, FaPinterestP } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className=" bg-[#222222] text-gray-300 py-12">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 ">

                {/* About Hotel */}
                <div>
                    <h3 className="text-2xl font-serif mb-4">About Hotel</h3>
                    <p className="text-sm leading-relaxed mb-6">
                        Welcome to the best four-star deluxe hotel in Dholpur. Hotel elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat.
                    </p>
                    <button className="flex items-center gap-2 bg-[#222] px-4 py-2 text-sm rounded">
                        English <FaGlobe />
                    </button>
                </div>

                {/* Explore */}
                <div>
                    <h3 className="text-2xl font-serif mb-4">Explore</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-[#AB854F] cursor-pointer">Home</li>
                        <li className="hover:text-[#AB854F] cursor-pointer">Rooms & Suites</li>
                        <li className="hover:text-[#AB854F] cursor-pointer">Restaurant</li>
                        <li className="hover:text-[#AB854F] cursor-pointer">Spa & Wellness</li>
                        <li className="hover:text-[#AB854F] cursor-pointer">About Hotel</li>
                        <li className="hover:text-[#AB854F] cursor-pointer">Contact</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-2xl font-serif mb-4">Contact</h3>
                    <p className="text-sm">Jagdish Takies,Bari Road 328001</p>
                    <p className="text-sm mb-4">Rajasthan India</p>
                    <div className="flex items-center gap-2 text-lg mb-2">
                        <FaPhoneAlt className="text-[#AB854F]" />
                        <span className="font-medium">9672427970</span>
                    </div>
                    <p className="text-sm border-b border-[#AB854F] inline-block mb-4">
                        info@redstonehotel.com
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4 text-lg">
                       <a href="https://www.instagram.com/" target="_blank"  > <FaInstagram className="hover:text-yellow-500 cursor-pointer" /></a>
                        <FaTwitter className="hover:text-yellow-500 cursor-pointer" />
                        <FaYoutube className="hover:text-yellow-500 cursor-pointer" />
                        <FaFacebookF className="hover:text-yellow-500 cursor-pointer" />
                        <FaPinterestP className="hover:text-yellow-500 cursor-pointer" />
                    </div>
                </div>
            </div>

            {/* Bottom copyright */}
            <div className=" relative border-t border-gray-700 mt-10 pt-6 text-center text-sm">
                © Copyright 2025 by <span className="text-[#AB854F] font-medium">WEB TH</span>
                <div onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className=' fixed bottom-5 right-10 bg-[#AB854F] p-4 text-white text-xl rounded-full' >
                     <FaChevronUp />
                </div>
            </div>
        </footer>
    )
}
