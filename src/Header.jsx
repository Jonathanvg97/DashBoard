import React from 'react'
import './Header.css'

export default function Header() {
    return (
        <header className='app-header'>
            <p>Crypto Stadistics</p>

            <div className='select-button'>
                <select name="" id="">
                    <option value="">USD</option>
                </select>
            </div>

            <button className='toogleMode'>
                
            </button>
        </header>
    )
}