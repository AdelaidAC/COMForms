import React, { useEffect, useState} from 'react';
import moment from 'moment/moment'
import Badge from "../Badge.";
import BFAutoInternals from "./pages/BFAutoInternals";
import CCAutoInternals from "./pages/CCAutoInternals";
import IAutoInternals from "./pages/IAutoInternals";
import ISAutoInternals from "./pages/ISAutoInternals";
import PAAutoInternals from "./pages/PAAutoInternals";
import PNAutoInternals from "./pages/PNAutoInternals";
import SBFAutoInternals from "./pages/SBFAutoInternals";
import VDAutoInternals from "./pages/VDAutoInternals";
import MotorCarrier from './pages/MotorCarrier';

export default function Auto({pages, name, address, phone, date}) {

    let brokerFee, balanceDue, creditCard, iS, vD, pA, infinity, mC;

    let count = 0;

    const [dateVD, setDateVD] = useState('')

    let date2 = moment(dateVD).format('MM/DD/YYYY');

    count++;
    iS = <><Badge text={count}/><ISAutoInternals/></>;

    count++;
    vD = <><Badge text={count}/><VDAutoInternals name={name} date={date} setDateVD={setDateVD} date2={date2}/></>;

    count++;
    pA = <><Badge text={count}/><PAAutoInternals name={name} date={date} date2={date2}/></>;

    if (Object.values(pages).includes("spanishBF")) {
        count++;
        brokerFee = <><Badge text={count}/><SBFAutoInternals name={name} date={date}/></>;
    } else {
        count++;
        brokerFee = <><Badge text={count}/><BFAutoInternals name={name} date={date}/></>;
    }

    if (Object.values(pages).includes("balanceDue")) {
        count++;
        balanceDue = <><Badge text={count}/><PNAutoInternals name={name} address={address} phone={phone}/></>;
    }

    if (Object.values(pages).includes("creditCard")) {
        count++;
        creditCard = <><Badge text={count}/><CCAutoInternals name={name} address={address}/></>;
    }

    if (!Object.values(pages).includes("infinity")) {
        infinity = <><Badge text={count}/><IAutoInternals name={name} date={date}/></>;
    }

    count++;
    mC = <><Badge text={count}/><MotorCarrier name={name}/></>;

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
            {infinity}
            {mC}
        </div>
    );
}