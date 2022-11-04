import React, { useEffect, useState} from 'react';
import moment from 'moment/moment'
import Badge from "../Badge.";
import VDBond1 from './pages/VDBond1';
import VDBond2 from './pages/VDBond2';
import PABond from './pages/PABond';
import BFBond from './pages/BFHomeInternals';
import SBFBond from './pages/SBFHomeInternals';
import PNBond from './pages/PNHomeInternals';
import CCBond from './pages/CCHomeInternals';

export default function Workers({pages, name, address, phone, date}) {

    let vD1, vD2, pA, brokerFee, balanceDue, creditCard;
    
    let count = 0;

    const [dateVD, setDateVD] = useState('')

    let date2 = moment(dateVD).format('MM/DD/YYYY');

    count++;
    vD1 = <><Badge text={count}/><VDBond1 name={name} address={address} date={date} setDateVD={setDateVD} date2={date2}/></>;

    count++;
    vD2 = <><Badge text={count}/><VDBond2 name={name} address={address} date={date} setDateVD={setDateVD} date2={date2}/></>;

    count++;
    pA = <><Badge text={count}/><PABond name={name} date={date} date2={date2}/></>;

    if (Object.values(pages).includes("spanishBF")) {
        count++;
        brokerFee = <><Badge text={count}/><SBFBond name={name} date={date}/></>;
    } else {
        count++;
        brokerFee = <><Badge text={count}/><BFBond name={name} date={date}/></>;
    }

    if (Object.values(pages).includes("balanceDue")) {
        count++;
        balanceDue = <><Badge text={count}/><PNBond name={name} address={address} phone={phone}/></>;
    }

    if (Object.values(pages).includes("creditCard")) {
        count++;
        creditCard = <><Badge text={count}/><CCBond name={name} address={address}/></>;
    }

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []); 

    return ( 

        <div>
            {vD1}
            {vD2}
            {pA} 
            {brokerFee}
            {balanceDue}
            {creditCard}
        </div>
        
    );
}