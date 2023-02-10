import React, {useState} from 'react';
import moment from 'moment/moment'
import Badge from "../Badge.";
import VDFlood from './pages/VDFlood';
import TwoFlood from './pages/TwoFlood';
import PAFlood from './pages/PAFlood';
import BFFlood from './pages/BFFlood';
import SBFFlood from './pages/SBFFlood';
import MCLFlood from './pages/MCLFlood';
import BAGCFlood from './pages/BAGCFlood';

import PN from '../Common/PN';

export default function Flood({pages, name, sn, city, state, zipcode/*address*/, phone, date}) {

    let vD, vD2, pA, brokerFee, bAGC, balanceDue, mCheckList;
    
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
                    sn={sn} 
                    city={city} 
                    state={state} 
                    zipcode={zipcode} /*address={address}*/
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
    pA = <><Badge text={count}/><PAFlood name={name} date={date} date2={date2}/></>;

    count++;
    bAGC = <><Badge text={count}/><BAGCFlood name={name} date={date}/></>;

    if (Object.values(pages).includes("spanishBF")) {
        count++;
        brokerFee = <><Badge text={count}/><SBFFlood name={name} date={date}/></>;
    } else {
        count++;
        brokerFee = <><Badge text={count}/><BFFlood name={name} date={date}/></>;
    }

    if (Object.values(pages).includes("balanceDue")) {
        count++;
        balanceDue = <><Badge text={count}/><PN name={name} sn={sn} city={city} state={state} zipcode={zipcode} /*address={address}*/ phone={phone}/></>;
    }

    count++;
    mCheckList = <><Badge text={count}/><MCLFlood name={name} date={date}/></>;

    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div>
            {vD}
            {vD2}
            {pA}
            {bAGC}
            {brokerFee}
            {balanceDue}
        </div>
    );
}