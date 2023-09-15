import React from 'react'
import { FaSearch } from 'react-icons/fa'
import '../../../styles/style.css'
export default function SearchPanel() {
  return (
    <div className='searchpanel'>
      <FaSearch /> <input type="text" placeholder='Ish qidirishni boshlang' />
    </div>
  )
}
