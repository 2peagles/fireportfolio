import React from 'react';
// import GrClose  from 'react-icons/gr';

export const InnerPopup = ( props) => {
        return (props.trigger) ? (
            <div className='popup'>
                <div className='popup-inner'>
                    <button className='close-btn' onClick={(() => props.setTigger(false))}>
                        {/* <GrClose /> */}
                    </button>
                    {props.children}
                </div>
            </div>
        ) : '';
    }
