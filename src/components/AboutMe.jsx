import React from "react";
import Foto from "../images/foto.png"


function AboutMe(){
    return(
        
        <div className="py-16 bg-neutral-100">  
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img src={Foto} alt="Emma Rentero" loading="lazy" width="" height="" />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Welcome to my website!</h2>
                        <p className="mt-6 text-lg text-gray-600">I am a hard-working, organized, reliable, efficient, collaborative person and eager to work. I learn very quickly and manage stress properly.</p>
                        <p className="mt-4 text-lg text-gray-600">I have a law degree and a Master in General Practice, and I am currently training as a full stack web developer at Factoria5, together with a group of wonderful women.</p>
                        <p className="mt-4 text-lg text-gray-600">My English level is C1 and to start the next stage of my life.</p>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default AboutMe