import React, {useState} from 'react';
import moment from 'moment/moment'
import Badge from "../Badge.";
import GarageLiability from './pages/GarageLiability';
import SpecialEvent from './pages/SpecialEvent';
import SBFGL from './pages/SBFGL';
import BFGL from './pages/BFGL';
import VDGL from './pages/VDGL';
import PAGL from './pages/PAGL';
import D1 from './pages/D1';
import Diligent from './pages/Diligent';

import PN from '../Common/PN';
import CC from '../Common/CC';


export default function GeneralLiability({pages, name, sn, city, state, zipcode/*address*/, phone, date}) {

    let garage, special, vD, pA, brokerFee, d1, balanceDue, creditCard, diligent;
    
    let count = 0;

    const [dateVD, setDateVD] = useState('');

    let date2 = moment(dateVD).format('MM/DD/YYYY');

    // if (Object.values(pages).includes("garage")) {
    //     count++;
    //     garage = <><Badge text={count}/><GarageLiability/></>;
    // }

    count++;
    garage = <><Badge text={count}/><GarageLiability/></>;

    if (Object.values(pages).includes("special")) {
        count++;
        special = <><Badge text={count}/><SpecialEvent/></>;
    }

    count++;
    vD = <><Badge text={count}/><VDGL name={name} date={date} setDateVD={setDateVD} date2={date2}/></>;

    count++;
    pA = <><Badge text={count}/><PAGL name={name} date={date} date2={date2}/></>;

    if (Object.values(pages).includes("spanishBF")) {
        count++;
        brokerFee = <><Badge text={count}/><SBFGL name={name} date={date}/></>;
    } else {
        count++;
        brokerFee = <><Badge text={count}/><BFGL name={name} date={date}/></>;
    }

    if (Object.values(pages).includes("balanceDue")) {
        count++;
        balanceDue = <><Badge text={count}/><PN name={name} sn={sn} city={city} state={state} zipcode={zipcode} /*address={address}*/ phone={phone}/></>;
    }

    if (Object.values(pages).includes("creditCard")) {
        count++;
        creditCard = <><Badge text={count}/><CC name={name} sn={sn} city={city} state={state} zipcode={zipcode} /*address={address}*/ /></>;
    }

    count++;
    d1 = <><Badge text={count}/><D1 date={date}/></>;

    count++;
    diligent = <><Badge text={count}/><Diligent name={name} sn={sn} city={city} state={state} zipcode={zipcode} /*address={address}*/ date={date}/></>;

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            {garage}
            {special}
            {vD}
            {pA}
            {brokerFee}
            {d1}
            {balanceDue}
            {creditCard}
            {diligent}
        </div>
    );

    

}