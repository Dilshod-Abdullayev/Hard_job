"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { BsTelephoneOutbound } from 'react-icons/bs'
export default function Schedule() {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch('http://localhost:1337/api/jobs')
      .then((res) => res.json())
      .then((api) => setData(api.data))
  }, [])
  return (
    <div className='jobs'>
      <div className="job__boxs">
        {data && data.map(item => (
          <Link key={item.id} href={'api/jobs/' + `${item.id}`}>  <div className="job__box">
            <div><img src='https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg' />
              <h2>Active</h2>
            </div>
            <h1>{item.attributes.name} {item.attributes.lastname}</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, quos!</p>
            <h1 className='job__data'>Qoshilgan sana <span>{item.attributes.data}</span></h1>
            <div className='job__practise'>
              <span>{item.attributes.practise ? 'Amailyot' : 'Ishchi'}</span>
              <span className='category'>{item.attributes.category}</span>
            </div>
            <div>
              <h2>Xodimning yoshi <span>{item.attributes.age}</span> </h2>
              <h2>Tajriba yili <span>{Math.floor(Math.random() * 12)}</span> </h2>
            </div>
            <div className='job__contact'>
              <BsTelephoneOutbound /> <button className='btn-gr'>Apply now</button>
            </div>
          </div>
          </Link>
        ))}

      </div>
    </div>
  )
}
export async function getServerSideProps() {
  const data = await fetchJobData();
  return {
    props: {
      data,
    },
  };
}