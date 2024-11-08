import React from "react";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content p-10">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold">Gadget Heaven</h2>
                <p className="text-gray-500 mb-6">Leading the way in cutting-edge technology and innovation.</p>

                <div className="border-t border-gray-300 my-6"></div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                        <h3 className="font-semibold">Services</h3>
                        <ul className="space-y-1 mt-2">
                            <li><a href="#" className="link link-hover">Product Support</a></li>
                            <li><a href="#" className="link link-hover">Order Tracking</a></li>
                            <li><a href="#" className="link link-hover">Shipping & Delivery</a></li>
                            <li><a href="#" className="link link-hover">Returns</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold">Company</h3>
                        <ul className="space-y-1 mt-2">
                            <li><a href="#" className="link link-hover">About Us</a></li>
                            <li><a href="#" className="link link-hover">Careers</a></li>
                            <li><a href="#" className="link link-hover">Contact</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-semibold">Legal</h3>
                        <ul className="space-y-1 mt-2">
                            <li><a href="#" className="link link-hover">Terms of Service</a></li>
                            <li><a href="#" className="link link-hover">Privacy Policy</a></li>
                            <li><a href="#" className="link link-hover">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-300 mt-6 pt-4 text-sm">
                    <p>© {new Date().getFullYear()} Gadget Heaven - All rights reserved</p>
                </div>
            </div>
        </footer>
  );
};

export default Footer;
