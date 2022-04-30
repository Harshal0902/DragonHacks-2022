import React from "react"
import HeroImg from '../assets/hero.svg'
import InspirationImg from '../assets/features.svg'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='md:mx-28 mx-4 text-white pt-10 pb-12 font-montserrat'>

            <div className='md:grid md:grid-cols-2 items-center pt-10'>
                <div className=''>
                    <h1 className='text-6xl'>Who we are</h1>
                    <p className='text-xl md:text-2xl py-4 tracking-wider'>About the app</p>

                    <Link to="/upload">
                        <button className='bg-primary font-semibold py-2 px-8 rounded-md text-xl md:text-2xl'>Upload Image</button>
                    </Link>

                </div>
                <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                    <img src={HeroImg} alt="img" width="550" height="550" />
                </div>
            </div>

            <div className='md:grid md:grid-cols-2 pt-12 items-center'>
                <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                    <img src={InspirationImg} alt="img" width="450" height="450" />
                </div>
                <div className=''>
                    <h1 className='text-6xl'>What else do we have?</h1>
                    <p className='text-xl md:text-2xl py-4 tracking-wider'> APP NAME is a web app where you can:
                    </p>
                    <ul className="text-xl">
                        <li className="list-disc">Find that the object is recyclable or non-recyclable.</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
