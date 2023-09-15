import React from 'react'

export default function Users__right() {
    return (
        <div className='users__right-panel'>
            <h1>Boshqa ishchilar haqida</h1>
            <div className="users__jobs-panel">
                <div>
                    <img src='' />
                    <div>
                        <h1>Dilshod Abdullayev</h1>
                        <h2>Frontend Developer</h2>
                        <h2>Post joylangan <span>23.23.23</span></h2>
                    </div>
                    <div>
                        <p>active</p>
                        <p>$45/hourly</p>
                    </div>
                </div>
            </div>
            <button className='btn-gr'>Ko`proq ko`rish</button>
        </div>
    )
}
