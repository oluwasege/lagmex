import React, { useState } from 'react';

const ToggleDivComponent = ({ text,another }) => {
    const [isLowerDivVisible, setLowerDivVisible] = useState(false);
    const [isImageChanged, setImageChanged] = useState(false);

    const toggleLowerDiv = () => {
        setLowerDivVisible(!isLowerDivVisible);
        setImageChanged(!isImageChanged);
    };
    return (
        <div>
            <div onClick={toggleLowerDiv}>
                <div className='myToggle'>
                    <div>{text}</div>
                    <div>
                        <img
                            src={isImageChanged ? 'https://res.cloudinary.com/dk80ynx1w/image/upload/v1685303124/lagmex_resource/Component_1_ki97wz.svg' : 'https://res.cloudinary.com/dk80ynx1w/image/upload/v1685303124/lagmex_resource/plus_wwvmwx.svg'}
                            alt="Image"
                        />
                    </div>
                </div>

            </div>
            {isLowerDivVisible && (
                <div className='tToggle'>
                    <p>{another}</p>
                </div>
            )}
            <hr/>
        </div>
    );
};

export default ToggleDivComponent;
