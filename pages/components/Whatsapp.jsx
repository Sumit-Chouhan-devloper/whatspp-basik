import React from 'react'
import SmallCountentBox from './SmallCountentBox'
import DesktopChat from './DesktopChat'

function Whatsapp() {
    return (
        <div className='custom_container'>
            <div className="d-flex">
                <div>
                    <SmallCountentBox />
                </div>
                <div className='w-100 d-none d-md-inline-block'>
                    <DesktopChat />
                </div>
            </div>
        </div>
    )
}

export default Whatsapp