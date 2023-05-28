import React from 'react';

function LastSplitter({className, id,imgID,text, anotherText, splitID, src}) {

    return (
        <div className={className} id={id}>
            <img className='splitterImg_' id={imgID} src={src} />
            <div className='splitterText_' id={splitID}>
                {text}<br/>
                <span>
                    {anotherText}
                </span>
            </div>
        </div>
    );
}

export default LastSplitter;
