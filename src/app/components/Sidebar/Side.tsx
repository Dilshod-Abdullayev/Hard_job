import Link from 'next/link'
import React from 'react'
import { MdDashboard, MdOutlineSettingsEthernet, MdHistory } from 'react-icons/md'
import { BsFillCalendarCheckFill } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { FaSearchDollar } from 'react-icons/fa'

export default function Side() {
    return (
        <div className='sidebar'>
            <Link href='dashboard'><MdDashboard className='icon__side' /><b>Dashboard</b></Link>
            <Link href='search'><FaSearchDollar className='icon__side' /><b>Job Search</b></Link>
            <Link href='schedule'><BsFillCalendarCheckFill className='icon__side' /> <b>Schedule</b></Link>
            <Link href='history'><MdHistory className='icon__side' /><b>History</b></Link>
            <Link href='schedule'><MdOutlineSettingsEthernet className='icon__side' /> <b>Events</b></Link>
            <Link href='setting'><FiSettings className='icon__side' /><b>Settings</b></Link>
        </div>
    )
}
