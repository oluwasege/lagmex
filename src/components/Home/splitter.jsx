import React from 'react';

function Splitter({className, id,imgID,text, anotherText, splitID}) {

    return (
        <div className={className} id={id}>
            <div className='splitterImg' id={imgID}>

            </div>
            <div className='splitterText' id={splitID}>
                {text}<br/>
                <span>
                    {anotherText}
                </span>
            </div>
        </div>
    );
}

export default Splitter;
