import React from "react";
import Foto from "../images/Snapchat_emma.jpg"
import pdf from "../assets/Emma_Raquel_Rentero_Plaza_CV_2022.pdf"

function Navbar(){
    return(
        <div className="flex flex-row rounded-lg h-18 bg-zinc-400 justify-between text-2xl font-extrabold p-5 text-black m-4">
            <div className="flex flex-row" >
                <img className="max-w-none" src={Foto} alt="Emma" width="50" height="40"></img>
                <div className="sml-1"> Emma Rentero</div>
            </div>
            
            <div className="gap-2" >
                <a href="https://github.com/emmamme447" className="hover:underline">My Github </a>
                <a href="https://www.linkedin.com/in/emma-raquel-rentero-plaza/" className="hover:underline">My Linkedin </a>
                <a href="https://www.instagram.com/renteroemma/?next=%2F" className="hover:underline">My Instagram </a>
                <a href="https://twitter.com/emmammemma" className="hover:underline">My Twitter </a>
            </div>
            <div>
                <a href={pdf} target="_blank" rel="noopener noreferrer">Click here for my CV</a>  
            </div>            
        </div>

    )

}

export default Navbar