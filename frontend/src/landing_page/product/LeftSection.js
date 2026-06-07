import React from 'react';

function LeftSection(imageURL, productName, productDescription,tryDemo, learnMore, googlePlay, appStore) {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6' p-3>
                    <img src={imageURL} />
                </div>
                <div className='col-6'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo}>Try Demo</a>
                        <a href={learnMore} style={{marginleft: "50px"}}/>
                    </div>
                    <div className='mt-3'>
                        
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;