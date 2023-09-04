import React, { useState } from 'react'
import ubs from '../assets/carousel/ubs_black.png'
import vmware from '../assets/carousel/vmware_black.png'
import booking from '../assets/carousel/booking_black.png'
import doordash from '../assets/carousel/doordash_black.png'

function Carousel() {

    const [index, setIndex] = useState(0)

    const items = [
        {
            image: ubs,
            text: "We're discovering new ways of attracting candidates to the organization. By using HackerRank, we're actually improving the tech image of UBS."
        },
        {
            image: vmware,
            text: "HackerRank has actually allowed us to look for diamonds in the rough that our old process"
        },
        {
            image: booking,
            text: "We're promoting our jobs to a much wider audience and allowing candidates to be selected for interviews purely based on the merit of their coding abilities."
        },
        {
            image: doordash,
            text: "We cut down hiring time by months, which was huge for us. We owe that to HackerRank."
        },
        {
            text:"HackerRank is a critical piece of our candidate's experience, and hitting the right tone is just as important as identifying good candidates."
        },
        {
            text: "HackerRank has been a huge help in making it easy to assess the skills of all the candidates we"
        }
    ]

    function goToSlide (myKey) {
        setIndex(myKey)
    }

    return (
        <div className='carousel'>
            <div className='carousel__slides' style={{transform: `translate( ${-index * 100}% )` }}>
                {items.map((item) => {
                    return (
                        <div className='carousel__slides__slide'>
                            { item.hasOwnProperty("image") && <img src={item.image} alt='' />}
                            <p>{item.text}</p>
                        </div>
                    )
                })}
            </div>
            <div className='carousel__slides__btns'>
                {items.map((item, myKey) => {
                    return (
                        <button key={myKey} onClick={() => goToSlide(myKey)}>⬤</button>
                    )
                })}
            </div>
        </div>
    )
}

export default Carousel