import React from 'react'
import {FlipWords} from "./FlipWords.jsx";

const HeroText = () => {
    return (
        <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
            {/*Desktop View*/}
            <div className="flex hidden md:flex c-space ">
                <h1 className="text-4xl font-medium">Hi! I am Hasham Tanveer</h1>
            </div>
            <div className="flex flex-col items-start">
                <p className="text-5xl font-medium text-neutral-300 ">A Web Developer <br /> Dedicated to Design
                </p>
                <div>
                    <FlipWords className="text-8xl font-black" words={["Secure", "Modern", "Scalable"]}/>
                </div>
                <p className="text-4xl font-medium text-neutral-300">
                    Web Apps.
                </p>
            </div>
            {/*Mobile View */}
            <div className="flex flex-col space-y-6 md:hidden">
                <p className="text-4xl font-medium">
                    Hi, I am Hasham Tanveer
                </p>
                <div>
                    <p className="text-5xl font-black text-neutral-300">Building</p>
                    <p>
                        <FlipWords   words={["Secure", "Modern", "Scalable"]}/>
                    </p>
                    <p className="text-4xl font-black text-neutral-300 ">Web Applications</p>
                </div>
            </div>
        </div>
    )
}
export default HeroText
