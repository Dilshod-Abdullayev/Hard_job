import React, { useState, useEffect } from 'react';
import { FcAndroidOs } from 'react-icons/fc';
import { PiAppleLogoDuotone } from 'react-icons/pi';
import { BsBrowserChrome, BsBack } from 'react-icons/bs';

export default function Frontend_dash() {
    const [data, setData] = useState([]);
    const [money, setMoney] = useState(true);
    const [cat, setCate] = useState('frontend');
    const handleCheckboxChange = (event) => {
        if (event.target.id === 'hourly') {
            setMoney(true);
        } else if (event.target.id === 'month') {
            setMoney(false);
        }
    };
    useEffect(() => {
        fetch('http://localhost:1337/api/jobs')
            .then((res) => res.json())
            .then((api) => {
                const categoryData = api.data.filter((item) => item.attributes.category === cat);
                setData(categoryData);
            });
    }, [cat]);

    const filteredData = money
        ? data.filter((item) => item.attributes.hourly)
        : data.filter((item) => !item.attributes.hourly);

    return (
        <div className='frontend__dashboard'>
            <div className='category'>
                <h1 onClick={() => setCate('android')}><FcAndroidOs /> Anroid</h1>
                <h1 onClick={() => setCate('IOS')}><PiAppleLogoDuotone />IOS</h1>
                <h1 onClick={() => setCate('frontend')}><BsBrowserChrome />Frontend</h1>
                <h1 onClick={() => setCate('backend')}><BsBack />Backend</h1>
            </div>
            <div className='front__top'>
                <h1>{cat} dasturchilar</h1>
                <div className="checkbox-container">
                    <div>
                        <input onChange={handleCheckboxChange} id="hourly" type="checkbox" checked={money} />
                        <label htmlFor="hourly">Soatiga</label>
                    </div>
                    <div>
                        <input onChange={handleCheckboxChange} id="month" type="checkbox" checked={!money} />
                        <label htmlFor="month">Oyiga</label>
                    </div>
                </div>
            </div>
            <div className='front__users'>
                <div className="front__users-top">
                    <h1>Foydalanuvchi ismi</h1>
                    <h1>{money ? 'soat' : 'oylik'}</h1>
                    <h1>Tajriba yili</h1>
                    <button className='btn-gr'>Contact</button>
                </div>
                <div className='front__users-boxs'>
                    {
                        data && filteredData.map((item) => (
                            <div key={item.id} className="front__users-box">
                                <div>
                                    <img src='' alt='' />
                                    <h1>{item.attributes.name} {item.attributes.lastname}</h1>
                                </div>
                                <p>{item.attributes.money}</p>
                                <div>
                                <button className={`btn-gr ${
  item.attributes.tajriba > 10 ? 'btn-yel' :
  item.attributes.tajriba > 7 ? 'btn-red' :
  item.attributes.tajriba > 3 ? 'btn-low' :
  'btn-yel'
}`}>{item.attributes.tajriba}</button>
                                </div>
                                <button className='btn-gr'>Message</button>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
