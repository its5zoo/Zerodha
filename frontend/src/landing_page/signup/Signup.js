import React from 'react';
import SignupHero from './SignupHero';
import InvestmentOptions from './InvestmentOptions';
import StepsToOpen from './StepsToOpen';
import Benefits from './Benefits';
import AccountTypes from './AccountTypes';
import Faqs from './Faqs';

function Signup() {
    return ( 
        <>
            <SignupHero />
            <InvestmentOptions />
            <StepsToOpen />
            <Benefits />
            <AccountTypes />
            <Faqs />
        </>
     );
}

export default Signup;