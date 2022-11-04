import React, { useEffect, useState} from 'react';
import moment from 'moment/moment'
import Badge from "../Badge.";
import VDFlood from './pages/VDFlood';
import PTPAFlood from './pages/PTPAFlood';

export default function Flood({pages, name, address, phone, date}) {

    let vD, pA, brokerFee, balanceDue, creditCard;
    
    let count = 0;

    const [dateVD, setDateVD] = useState('')

    let date2 = moment(dateVD).format('MM/DD/YYYY');

    count++;
    vD = <><Badge text={count}/><VDFlood name={name} date={date} setDateVD={setDateVD} date2={date2}/></>;

    count++;
    pA = <><Badge text={count}/><PTPAFlood name={name} date={date} date2={date2}/></>;

    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div>
            {vD}
        </div>
    );
}