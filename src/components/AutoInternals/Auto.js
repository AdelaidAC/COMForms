import React, { useEffect, useState} from 'react';
import moment from 'moment/moment'
import Badge from "../Badge.";
import BFAutoInternals from "./pages/BFAutoInternals";
import CCAAutoInternals from "./pages/CCAAutoInternals";
import IAutoInternals from "./pages/IAutoInternals";
import ISAutoInternals from "./pages/ISAutoInternals";
import PAAutoInternals from "./pages/PAAutoInternals";
import PNAutoInternals from "./pages/PNAutoInternals";
import SpanishBFAutoInternals from "./pages/SpanishBFAutoInternals";
import VDAutoInternals from "./pages/VDAutoInternals";

export default function Auto({pages, name, address, phone, date}) {

    let brokerFee, balanceDue, creditCard, infinity;

    let count = 0;

    const [dateVD, setDateVD] = useState('')

    let date2 = moment(dateVD).format('MM/DD/YYYY');

    if (Object.values(pages).includes("spanishBF")) {
        brokerFee = <SpanishBFAutoInternals name={name}/>;
    } else {
        brokerFee = <BFAutoInternals name={name}/>;
    }

    if (Object.values(pages).includes("balanceDue")) {
        balanceDue = <><Badge text="5"/><PNAutoInternals name={name}/></>;
    }

    if (Object.values(pages).includes("creditCard")) {
        creditCard = <><Badge text="6"/><CCAAutoInternals name={name}/></>;
    }

    if (!Object.values(pages).includes("infinity")) {
        infinity = <><Badge text="6"/><IAutoInternals name={name}/></>;
    }

    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div>
            <ISAutoInternals name={name}/>
            <Badge text="1"/>
            <VDAutoInternals name={name} date={date} setDateVD={setDateVD} date2={date2}/>
            <Badge text="2"/>
            <PAAutoInternals name={name} date={date} date2={date2}/>
            <Badge text="3"/>
            {brokerFee}
            {balanceDue}
            {creditCard}
            {infinity}
        </div>
    );
}