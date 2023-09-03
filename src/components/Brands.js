import React from 'react'
import pelton from '../assets/brands/peloton_black.png'
import atlassian from '../assets/brands/atlassian_black.png'
import bloomberg from '../assets/brands/bloomberg_black.png'
import vmware from '../assets/brands/vmware_black.png'
import strip from '../assets/brands/stripe_black.png'
import goldman from '../assets/brands/goldmansachs_black.png'
import adobe from '../assets/brands/adobe_black.png'
import linkedin from '../assets/brands/linkedin_black.png'

function Brands() {
    return (
        <ul>
            <li> <img src={pelton} alt='' /> </li>
            <li> <img src={atlassian} alt='' /> </li>
            <li> <img src={bloomberg} alt='' /> </li>
            <li> <img src={vmware} alt='' /> </li>
            <li> <img src={strip} alt='' /> </li>
            <li> <img src={goldman} alt='' /> </li>
            <li> <img src={adobe} alt='' /> </li>
            <li> <img src={linkedin} alt='' /> </li>
        </ul>
    )
}

export default Brands

