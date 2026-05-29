import React from 'react'
import {mySocials} from "../constants/index.js";

const Footer = () => {
    return (
        <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
            <div className="bg-linear-to-r mb-4 from-transparent via-neutral-700 to-transparent h-px w-full"/>
            <div className="flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>
            <div className="flex gap-3">
                {mySocials.map((social, index) => {
                    const IconComponent = social.icon;
                    return <a href={social.href} key={index}>
                        {social.icon}
                        <IconComponent size={30}/>
                    </a>
                })}
            </div>
            <p>© Hasham Tanveer. All rights reserved.</p>
        </section>
    )
}
export default Footer
