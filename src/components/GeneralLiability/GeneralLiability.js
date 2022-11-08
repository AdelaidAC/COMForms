import React, { useEffect, useState} from 'react';
import moment from 'moment/moment'
import Badge from "../Badge.";
import GarageLiability from './pages/GarageLiability';
import SpecialEvent from './pages/SpecialEvent';


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

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            {garage}
            {special}
        </div>
    );

    

}