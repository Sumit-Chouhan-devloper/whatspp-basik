import React from 'react'
import SmallCountentBox from './SmallCountentBox'
import DesktopChat from './DesktopChat'

function Whatsapp() {
    return (
        <div className='custom_container m-auto'>
            <div className="d-flex position-relative">
                <div>
                    <SmallCountentBox />
                </div>
                <div className='w-100 d-none d-md-inline-block bg_chat_box'>
                    <DesktopChat />
                </div>
            </div>
        </div>
    )
}

export default Whatsapp