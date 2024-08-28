import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";

function Footer() {
    return(
    <>
        <div className="flex gap-16 px-32 items-center bg-[#F8F8F8] py-16 justify-between">
            <div className="flex flex-col gap-7">
                <div>logo</div>
                <div className="max-w-80">
                    Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans
                </div>
                <div>
                    Â©2020CoffeeStore
                </div>
            </div>
            <div className="flex gap-16">
                <div className="flex flex-col gap-5">
                    <div className="font-semibold">
                        Product
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <div>Our Product</div>
                        <div>Pricing</div>
                        <div>Locations</div>
                        <div>Countries</div>
                        <div>Blog</div>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                <div className="font-semibold">Engage</div>
                    <div className="flex flex-col gap-2.5">
                        <div>Partner</div>
                        <div>FAQ</div>
                        <div>About Us</div>
                        <div>Privacy Policy</div>
                        <div>Terms of Service</div>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="font-semibold">Social Media</div>
                    <div className="flex gap-5">
                        <div className="bg-[#FF8906] p-2 rounded-full shadow-lg"><FaFacebookF></FaFacebookF></div>
                        <div className="bg-[#FF8906] p-2 rounded-full shadow-lg"><FaTwitter></FaTwitter></div>
                        <div className="bg-[#FF8906] p-2 rounded-full shadow-lg"><FaInstagram></FaInstagram></div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
export default Footer