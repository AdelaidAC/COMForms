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

    const [vYear1, setVYear1] = useState('')
    const [vMake1, setVMake1] = useState('')
    const [vYear2, setVYear2] = useState('')
    const [vMake2, setVMake2] = useState('')
    const [vYear3, setVYear3] = useState('')
    const [vMake3, setVMake3] = useState('')
    const [vYear4, setVYear4] = useState('')
    const [vMake4, setVMake4] = useState('')
    const [vYear5, setVYear5] = useState('')
    const [vMake5, setVMake5] = useState('')
    const [vYear6, setVYear6] = useState('')
    const [vMake6, setVMake6] = useState('')

    const [vc, setVC] = useState(false) // Valid license for / Valid Vehicle Registration for / Vehicle for inspections and photos of all four sides (Checkbox)
    const [vc1, setVC1] = useState(false) // Vehicle 1
    const [vc2, setVC2] = useState(false) // Vehicle 2
    const [vc3, setVC3] = useState(false) // Vehicle 3
    const [vc4, setVC4] = useState(false) // Vehicle 4
    const [vc5, setVC5] = useState(false) // Vehicle 5
    const [vc6, setVC6] = useState(false) // Vehicle 6

    const [mcp, setMCP] = useState(false)
    const [icc, setICC] = useState(false)
    const [dot, setDOT] = useState(false)
    const [puc, setPUC] = useState(false)
    const [none, setNONE] = useState(false)
    const [pNumbers, setPNumbers] = useState('')
    const [liability1, setLiability1] = useState('')
    const [liability2, setLiability2] = useState('')

    let date2 = moment(dateVD).format('MM/DD/YYYY');

    count++;
    iS = <><Badge text={count}/><ISAutoInternals/></>;

    count++;
    vD = <><Badge text={count}/><VDAutoInternals 
        name={name} 
        date={date} 
        setDateVD={setDateVD} 
        date2={date2}

        setVYear1={setVYear1}
        setVMake1={setVMake1}
        setVYear2={setVYear2}
        setVMake2={setVMake2}
        setVYear3={setVYear3}
        setVMake3={setVMake3}
        setVYear4={setVYear4}
        setVMake4={setVMake4}
        setVYear5={setVYear5}
        setVMake5={setVMake5}
        setVYear6={setVYear6}
        setVMake6={setVMake6}

        vYear1={vYear1} 
        vMake1={vMake1}
        vYear2={vYear2} 
        vMake2={vMake2}
        vYear3={vYear3} 
        vMake3={vMake3}
        vYear4={vYear4} 
        vMake4={vMake4}
        vYear5={vYear5} 
        vMake5={vMake5}
        vYear6={vYear6} 
        vMake6={vMake6}

        setVC={setVC}
        setVC1={setVC1}
        setVC2={setVC2}
        setVC3={setVC3}
        setVC4={setVC4}
        setVC5={setVC5}
        setVC6={setVC6}

        setMCP={setMCP}
        setICC={setICC}
        setDOT={setDOT}
        setPUC={setPUC}
        setNONE={setNONE}
        setPNumbers={setPNumbers}
        setLiability1={setLiability1}
        setLiability2={setLiability2}
        mcp={mcp}
        icc={icc}
        dot={dot}
        puc={puc}
        none={none}
        pNumbers={pNumbers}
        liability1={liability1}
        liability2={liability2}
        /></>;

    count++;
    pA = <><Badge text={count}/>
            <PAAutoInternals 
                name={name} 
                date={date} 
                date2={date2} 

                vYear1={vYear1} 
                vMake1={vMake1}
                vYear2={vYear2} 
                vMake2={vMake2}
                vYear3={vYear3} 
                vMake3={vMake3}
                vYear4={vYear4} 
                vMake4={vMake4}
                vYear5={vYear5} 
                vMake5={vMake5}
                vYear6={vYear6} 
                vMake6={vMake6}

                vc={vc}
                vc1={vc1}
                vc2={vc2}
                vc3={vc3}
                vc4={vc4}
                vc5={vc5}
                vc6={vc6}

            />
        </>;

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
    mC = <><Badge text={count}/><MotorCarrier 
        name={name}
        date={date}
        mcp={mcp}
        icc={icc}
        dot={dot}
        puc={puc}
        none={none}
        pNumbers={pNumbers}
        liability1={liability1}
        liability2={liability2}
        /></>;

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