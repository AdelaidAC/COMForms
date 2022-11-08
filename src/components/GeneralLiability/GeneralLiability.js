import React, {useState} from 'react';
import moment from 'moment/moment'
import Badge from "../Badge.";
import GarageLiability from './pages/GarageLiability';
import SpecialEvent from './pages/SpecialEvent';
import SBFGL from './pages/SBFGL';
import BFGL from './pages/BFGL';
import PNGL from './pages/PNGL';
import CCGL from './pages/CCGL';


export default function GeneralLiability({pages, name, address, phone, date}) {

    let garage, special, vD, pA, brokerFee, balanceDue, creditCard;
    
    let count = 0;

    const [dateVD, setDateVD] = useState('');

    let date2 = moment(dateVD).format('MM/DD/YYYY');

    if (Object.values(pages).includes("garage")) {
        count++;
        garage = <><Badge text={count}/><GarageLiability/></>;
    }

    if (Object.values(pages).includes("special")) {
        count++;
        special = <><Badge text={count}/><SpecialEvent/></>;
    }

    if (Object.values(pages).includes("spanishBF")) {
        count++;
        brokerFee = <><Badge text={count}/><SBFGL name={name} date={date}/></>;
    } else {
        count++;
        brokerFee = <><Badge text={count}/><BFGL name={name} date={date}/></>;
    }

    if (Object.values(pages).includes("balanceDue")) {
        count++;
        balanceDue = <><Badge text={count}/><PNGL name={name} address={address} phone={phone}/></>;
    }

    if (Object.values(pages).includes("creditCard")) {
        count++;
        creditCard = <><Badge text={count}/><CCGL name={name} address={address}/></>;
    }

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
            {balanceDue}
            {creditCard}
        </div>
    );

    

}