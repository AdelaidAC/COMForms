import React, { useEffect, useState} from 'react';
import moment from 'moment/moment'
import Badge from "../Badge.";
import BFWorkersComp from "./pages/BFWorkersComp";
import ISWorkersComp from "./pages/ISWorkersComp";
import PAWorkersComp from "./pages/PAWorkersComp";
import SBFWorkersComp from "./pages/SBFWorkersComp";
import VDWorkersComp from "./pages/VDWorkersComp";

import PN from '../Common/PN';
import CC from '../Common/CC';

export default function Workers({pages, name, sn, city, state, zipcode/*address*/, phone, date}) {

    let iS, vD, pA, brokerFee, balanceDue, creditCard;
    
    let count = 0;

    const [dateVD, setDateVD] = useState('')

    let date2 = moment(dateVD).format('MM/DD/YYYY');

    count++;
    iS = <><Badge text={count}/><ISWorkersComp/></>;

    count++;
    vD = <><Badge text={count}/><VDWorkersComp name={name} date={date} setDateVD={setDateVD} date2={date2}/></>;

    count++;
    pA = <><Badge text={count}/><PAWorkersComp name={name} date={date} date2={date2}/></>;

    if (Object.values(pages).includes("spanishBF")) {
        count++;
        brokerFee = <><Badge text={count}/><SBFWorkersComp name={name} date={date}/></>;
    } else {
        count++;
        brokerFee = <><Badge text={count}/><BFWorkersComp name={name} date={date}/></>;
    }

    if (Object.values(pages).includes("balanceDue")) {
        count++;
        balanceDue = <><Badge text={count}/><PN name={name} sn={sn} city={city} state={state} zipcode={zipcode} /*address={address}*/ phone={phone}/></>;
    }

    if (Object.values(pages).includes("creditCard")) {
        count++;
        creditCard = <><Badge text={count}/><CC name={name} sn={sn} city={city} state={state} zipcode={zipcode} /*address={address}*//></>;
    }

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <div>
            
            {iS}
            {vD}
            {pA}
            {brokerFee}
            {balanceDue}
            {creditCard}
        </div>
        
    );
}