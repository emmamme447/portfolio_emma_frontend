import React, { useEffect, useState } from "react";

function Projects() {
    
    const [data, setData] = useState([]);

    useEffect(() => {
    fetch('http://127.0.0.1:8000/apiprojectsemma/list')
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.error(error));
    }, []);


    return(
        
        <div>
            {data.map(int =>(
                <div key={int.id}>
                    <div className="flex justify-center bg-neutral-200 text-lg">
                        <div className="flex flex-col rounded-lg bg-zinc-400 shadow-lg dark:bg-neutral-700 md:max-w-xl md:flex-row p-2 m-2">
                            <div className="flex flex-col justify-start p-6">
                                    <h1 className="p-2 text-2xl font-extrabold">{int.project_name}</h1>

                                    <hr class="w-48 h-1 mx-auto my-4 bg-gray-700 border-0 rounded md:my-5 dark:bg-gray-700" />

                                    <p className="p-2 text-xl">Project date:</p>
                                    <p className="p-2 text-xl">{int.date}</p>

                                    <hr class="w-48 h-1 mx-auto my-4 bg-gray-700 border-0 rounded md:my-5 dark:bg-gray-700" />

                                    <p className="p-2 text-xl">Used technologies:</p>
                                    <p className="p-2 text-xl">{int.used_technology}</p>
                                    <img src={int.image} alt={int.project_name} w-20 h-20></img>
                                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 p-2">
                                        This is a project carried out in the Factoría5 Bootcamp, carried out between the months of October 2022 and April 2023.
                                    </p>
                                    <p className="text-xs text-neutral-500 dark:text-neutral-300 p-2">
                                    These projects are made with the most modern and cutting-edge technologies. 
                                    </p>
                                </div>
                        </div>
                    </div>
                </div>    
            ))}
            
        </div>        
    );
            }
export default Projects