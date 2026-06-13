/* eslint-disable jsx-a11y/anchor-is-valid, jsx-a11y/alt-text, jsx-a11y/anchor-has-content */
import React from 'react';



function LeftSection({imageURL, productName, productDesription,tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6' p-3>
                    <img src={imageURL} />
                </div>
                <div className='col-6'>
                    <h1>{productName}</h1>
                    <p>{productDesription}</p>
                    <div>
                        <a href={tryDemo}>Try Demo</a>
                        <a href={learnMore} style={{marginleft: "50px"}}/><br></br>
                        <a href={googlePlay}><img src="media/images/googlePlayBadge.svg"/></a>
                        <a href={appStore}><img src="media/images/appstore-badge.svg"/></a>
                    </div>
                    <div className='mt-3'>
                        
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;