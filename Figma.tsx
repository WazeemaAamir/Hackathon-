import React from "react"// Ensure React is imported
import Image from 'next/image'; // Ensure Image is imported
import { Sofa } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';

const Figma = () => {
        return (
                <div className="bg-[#F6F6F6] border border-red-600 w-[268px] h-[432px] rounded-lg">
            <div>
                <div className="flex justify-end p-5 w-fill">
                    <Sofa />
                </div>
                <nav>
                    <ul className="flex p-5 text-white items-center justify-center gap-5">
                        <li><a href="">Home</a></li>
                        <li><a href="">Shop</a></li>
                        <li><a href="">Product</a></li>
                        <li><a href="">About</a></li>
                    </ul>
                </nav>
                <section>
                    <p>WELCOME TO CHAIRY</p>
                    <h1>Best Furniture Collection For Your Interior</h1>
                    <Image 
                        src="/images/a.jpg" 
                        width={300} // Provide width and height
                        height={240} 
                        alt="Welcome image"
                    />
                </section>
                <button>Shop Now</button>
                <div>
                    <Image 
                        src="/images/b.jpg" 
                        width={300} // Provide width and height
                        height={240} 
                        alt="Library Stool Chair"
                    />
                    <p>Library Stool Chair</p>
                    <span>$120</span>
                    <ShoppingCart />
                </div>
            </div>
        </div>
        );
};

export default Figma; // Ensure to export the component
