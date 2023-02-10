import React from "react";
import Badge from "../Badge.";
import Vehicle from './pages/Vehicle';
import DriverExclusion from './pages/DriverExclusion';
import PendingInfo from './pages/PendingInfo';
import FC1 from './pages/FC1';
import FC2 from './pages/FC2';
import SDriverExclusion from './pages/SDriverExclusion';
import SVehicle from './pages/SVehicle';
import SPendingInfo from "./pages/SPendingInfo";
import SFC1 from "./pages/SFC1";
import SFC2 from "./pages/SFC2";
import BFPA from "./pages/BFPA";
import SBFPA from "./pages/SBFPA";
import SCCPA from "./pages/SCCPA";
import SPNPA from "./pages/SPNPA";

import PN from '../Common/PN';
import CC from '../Common/CC';

export default function PAuto({pages, name, sn, city, state, zipcode/*address*/, phone, date}) {

    let vehicle, 
    driverExclusion, 
    pendingInformation, 
    fc1,
    fc2, 
    brokerFee, 
    balanceDue, 
    creditCard;

    let count = 0;

    if (Object.values(pages).includes("english")) {

        count++;
        vehicle = <><Badge text={count}/><Vehicle name={name} date={date}/></>;

        count++;
        driverExclusion = <><Badge text={count}/><DriverExclusion name={name}/></>;

        count++;
        pendingInformation = <><Badge text={count}/><PendingInfo name={name} date={date}/></>;

        count++;
        brokerFee = <><Badge text={count}/><BFPA name={name} date={date}/></>;

        if (Object.values(pages).includes("fullCoverage")) {

            count++;
            fc1 = <><Badge text={count}/><FC1 date={date}/></>;
    
            count++;
            fc2 = <><Badge text={count}/><FC2 date={date}/></>;

        }

        if (Object.values(pages).includes("balanceDue")) {
            count++;
            balanceDue = <><Badge text={count}/><PN name={name} sn={sn} city={city} state={state} zipcode={zipcode} /*address={address}*/ phone={phone}/></>;
        }

        if (Object.values(pages).includes("creditCard")) {
            count++;
            creditCard = <><Badge text={count}/><CC name={name} sn={sn} city={city} state={state} zipcode={zipcode} /*address={address}*//></>;
        }

    }

    else{
        count++;
        vehicle = <><Badge text={count}/><SVehicle name={name} date={date}/></>;

        count++;
        driverExclusion = <><Badge text={count}/><SDriverExclusion name={name}/></>;

        count++;
        pendingInformation = <><Badge text={count}/><SPendingInfo name={name} date={date}/></>;

        count++;
        brokerFee = <><Badge text={count}/><SBFPA name={name} date={date}/></>;

        if (Object.values(pages).includes("fullCoverage")) {

            count++;
            fc1 = <><Badge text={count}/><SFC1 date={date}/></>;
    
            count++;
            fc2 = <><Badge text={count}/><SFC2 date={date}/></>;
            
        }

        if (Object.values(pages).includes("balanceDue")) {
            count++;
            balanceDue = <><Badge text={count}/><SPNPA name={name} sn={sn} city={city} state={state} zipcode={zipcode} /*address={address}*/ phone={phone}/></>;
        }

        if (Object.values(pages).includes("creditCard")) {
            count++;
            creditCard = <><Badge text={count}/><SCCPA name={name} sn={sn} city={city} state={state} zipcode={zipcode} /*address={address}*//></>;
        }
    }

    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div>
            {vehicle}
            {driverExclusion}
            {pendingInformation}
            {brokerFee}
            {fc1}
            {fc2}
            {balanceDue}
            {creditCard}
        </div>
    );
}