import React, { useEffect, useState} from 'react';
import moment from 'moment/moment'
import Badge from "../Badge.";
import BFWorkersComp from "./pages/BFWorkersComp";
import CCWorkersComp from "./pages/CCWorkersComp";
import ISWorkersComp from "./pages/ISWorkersComp";
import PAWorkersComp from "./pages/PAWorkersComp";
import PNWorkersComp from "./pages/PNWorkersComp";
import SBFWorkersComp from "./pages/SBFWorkersComp";
import VDWorkersComp from "./pages/VDWorkersComp";

export default function Workers({pages, name, address, phone, date}) {

    let brokerFee, balanceDue, creditCard;

    const [dateVD, setDateVD] = useState('')

    let date2 = moment(dateVD).format('MM-DD-YYYY');

    if (Object.values(pages).includes("spanishBF")) {
        brokerFee = <SBFWorkersComp name={name} date={date}/>;
    } else {
        brokerFee = <BFWorkersComp name={name} date={date}/>;
    }

    if (Object.values(pages).includes("balanceDue")) {
        balanceDue = <><Badge text="5"/><PNWorkersComp name={name} address={address} phone={phone}/></>;
    }

    if (Object.values(pages).includes("creditCard")) {
        creditCard = <><Badge text="6"/><CCWorkersComp name={name} address={address}/></>;
    }

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <div>
            <Badge text="1"/>
            <ISWorkersComp/>
            <Badge text="2"/>
            <VDWorkersComp name={name} date={date} setDateVD={setDateVD}/>
            <Badge text="3"/>
            <PAWorkersComp name={name} date={date} date2={date2}/>
            <Badge text="4"/>
            {brokerFee}
            {balanceDue}
            {creditCard}
        </div>
        
    );
}