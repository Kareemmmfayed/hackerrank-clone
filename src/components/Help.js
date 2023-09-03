import React from 'react'
import Brands from './Brands'

function Help() {
    return (
        <div className='help'>
            <div className='help__top'>
                <div className='help__top__text'>
                    Every company is a tech company.
                    <span>We're here to help 'em all.</span>  
                </div>
                <div className='help__top__slideShow'></div>
            </div>
            <div className='help__bot'>
                <Brands />
            </div>
        </div>
    )
}

export default Help