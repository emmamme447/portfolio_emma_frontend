import React from "react";
import Foto from "../images/Snapchat_emma2.jpg"

function Footer(){
    return(
        
        <footer className="bg-zinc-400 rounded-lg shadow dark:bg-gray-900 m-4">
            <div className="w-full container mx-auto p-8 md:px-6 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://github.com/emmamme447" className="flex items-center mb-4 sm:mb-0">
                        <img src={Foto} className="h-8 mr-3" alt="Emma Rentero" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Emma Rentero (Github link)</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-xl text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="https://www.theguardian.com/help/terms-of-service" className="mr-4 hover:underline md:mr-6 ">Terms and conditions</a>
                        </li>
                        <li>
                            <a href="https://www.theguardian.com/info/cookies" className="mr-4 hover:underline md:mr-6">Cookies policy</a>
                        </li>
                        <li>
                            <a href="https://www.theguardian.com/info/privacy" className="mr-4 hover:underline md:mr-6 ">Privacy settings</a>
                        </li>
                        <li>
                            <a href="https://www.theguardian.com/help/contact-us" className="hover:underline">Privacy policy</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-800 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-xl text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://www.linkedin.com/in/emma-raquel-rentero-plaza/" class="hover:underline">Emma Rentero</a>. All Rights Reserved.</span>
            </div>
        </footer>

    )

}

export default Footer