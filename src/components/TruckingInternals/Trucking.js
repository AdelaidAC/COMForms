import React, {useState} from 'react';
import moment from 'moment/moment'
import Badge from "../Badge.";
import VDTrucking from './pages/VDTrucking';
import AssignedRisk from './pages/AssignedRisk';
import PATrucking from './pages/PATrucking';
import SBFTrucking from './pages/SBFTrucking';
import BFTrucking from './pages/BFTrucking';
import PNTrucking from './pages/PNTrucking';
import CCTrucking from './pages/CCTrucking';

export default function Trucking({pages, name, address, phone, date}) {

    let vD, assignedRisk, pA, brokerFee, balanceDue, creditCard;
    
    let count = 0;

    const [dateVD, setDateVD] = useState('');

    let date2 = moment(dateVD).format('MM/DD/YYYY');

    count++;
    vD = <><Badge text={count}/><VDTrucking name={name} date={date} setDateVD={setDateVD} date2={date2}/></>;

    if (Object.values(pages).includes("assignedRisk")) {
        count++;
        assignedRisk = <><Badge text={count}/><AssignedRisk name={name} date={date} setDateVD={setDateVD} date2={date2}/></>;
    }

    count++;
    pA = <><Badge text={count}/><PATrucking name={name} date={date} date2={date2}/></>; 


    if (Object.values(pages).includes("spanishBF")) {
        count++;
        brokerFee = <><Badge text={count}/><SBFTrucking name={name} date={date}/></>;
    } else {
        count++;
        brokerFee = <><Badge text={count}/><BFTrucking name={name} date={date}/></>;
    }

    if (Object.values(pages).includes("balanceDue")) {
        count++;
        balanceDue = <><Badge text={count}/><PNTrucking name={name} address={address} phone={phone}/></>;
    }

    if (Object.values(pages).includes("creditCard")) {
        count++;
        creditCard = <><Badge text={count}/><CCTrucking name={name} address={address}/></>;
    }

    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div>
            {vD}
            {assignedRisk}
            {pA}
            {brokerFee}
            {balanceDue}
            {creditCard}
        </div>
    );
}