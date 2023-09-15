import React from 'react'
import Logo from './Logo'
import SearchPanel from './SearchPanel'
import RightPanel from './RightPanel'

export default function Nav() {
    return (
        <div className='nav'>
            <Logo />
            <SearchPanel />
            <RightPanel />
        </div>
    )
}