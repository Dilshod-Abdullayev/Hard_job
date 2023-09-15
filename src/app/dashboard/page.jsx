"use client"
import React, { useState, useEffect } from 'react';
import { BsChevronCompactUp, BsPersonWorkspace } from 'react-icons/bs';
import { AiOutlineFieldNumber } from 'react-icons/ai';
import { GrUserWorker } from 'react-icons/gr';
import Frontend_dash from './Frontend_dash'
export default function page() {
  const [data, setData] = useState([])
  let [val, setVal] = useState(0)
  useEffect(() => {
    fetch('http://localhost:1337/api/jobs')
      .then((res) => res.json())
      .then((api) => setData(api.data))
  }, [])
  for (let i = 0; i < data.length; i++) {
    const item = data[i].attributes.practise;
    if (item === true) {
      val++
    }
  }

  let practise__present = Math.floor((100 * val) / data.length)

  return (
    <div className='dashboard__page'>
      <div className='dashboard__top'>
        <h1>Dashboard Page</h1>
      </div>
      <div className='dashboard__data'>
        <div className='dashboard__top-box'>
          <div className='dashboard__data-top'>
            <h1>Active ishlar soni</h1>
            <BsChevronCompactUp className='dashboard__icon' />
          </div>
          <h2> {data.length} </h2>
          <p>100%</p>
        </div>
        <div className='dashboard__top-box'>
          <div className='dashboard__data-top'>
            <h1>Ish so`raganlar soni</h1>
            <AiOutlineFieldNumber className='dashboard__icon' />
          </div>
          <h2>0</h2>
          <p>25%</p>
        </div>
        <div className='dashboard__top-box'>
          <div className='dashboard__data-top'>
            <h1>Amaliyotchilar</h1>
            <BsPersonWorkspace className='dashboard__icon' />
          </div>
          <h2>{val}</h2>
          <p>{practise__present}%</p>
        </div>
        <div className='dashboard__top-box'>
          <div className='dashboard__data-top'>
            <h1>Ischilar</h1>
            <GrUserWorker className='dashboard__icon' />
          </div>
          <h2>45</h2>
          <p>23%</p>
        </div>
      </div>
      <Frontend_dash/>
    </div>
  )
}
