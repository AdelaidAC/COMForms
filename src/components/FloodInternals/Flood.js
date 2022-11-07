import React, { useEffect, useState} from 'react';
import moment from 'moment/moment'
import Badge from "../Badge.";
import VDFlood from './pages/VDFlood';
import PTPAFlood from './pages/PTPAFlood';
import TwoFlood from './pages/TwoFlood';

export default function Flood({pages, name, address, phone, date}) {

    let vD, vD2, pA, brokerFee, balanceDue, creditCard;
    
    let count = 0;

    const [dateVD, setDateVD] = useState('');
    
    const [limitA, setLimitA] = useState('');
    const [limitB, setLimitB] = useState('');
    const [limitC, setLimitC] = useState('');
    const [limitD, setLimitD] = useState('');
    const [limitE, setLimitE] = useState('');

    const [pD, setPD] = useState('');
    const [pE, setPE] = useState('');


    let date2 = moment(dateVD).format('MM/DD/YYYY');

    count++;
    vD = <>
            <Badge text={count}/>
            <VDFlood 
                name={name} 
                date={date} 
                setDateVD={setDateVD} 
                date2={date2}
                setLimitA={setLimitA}
                setLimitB={setLimitB}
                setLimitC={setLimitC}
                setLimitD={setLimitD}
                setLimitE={setLimitE}
                setPD={setPD}
                setPE={setPE}
            />
        </>;

    count++;
    vD2 = <>
                <Badge text={count}/>
                <TwoFlood 
                    name={name} 
                    address={address} 
                    date={date}
                    limitA={limitA}
                    limitB={limitB}
                    limitC={limitC}
                    limitD={limitD}
                    limitE={limitE}
                    pD={pD}
                    pE={pE}
                />
            </>;

    count++;
    pA = <><Badge text={count}/><PTPAFlood name={name} date={date} date2={date2}/></>;

    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div>
            {vD}
            {vD2}
        </div>
    );
}