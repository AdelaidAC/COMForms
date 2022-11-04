import React, { useEffect, useState, useRef} from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import ReactToPrint from 'react-to-print';

import Bond from './components/Bond/Bond';
import GeneralLiability from './components/GeneralLiability/GeneralLiability';
import Flood from './components/FloodInternals/Flood';
import Home from './components/HomeInternals/Home';
import Auto from './components/AutoInternals/Auto';
import Trucking from './components/TruckingInternals/Trucking';
import Workers from './components/WorkersComp/Workers';
import SpecialEvent from './components/SpecialEvent/SpecialEvent';
import GarageLiabilityIS from './components/GarageLiability/GarageLiabilityIS';
import CurrencyFormat from 'react-currency-format';
import moment from 'moment';


const Page = React.forwardRef((
  {
    bond, 
    commercialAuto, 
    flood, 
    generalLiability, 
    home, 
    trucking, 
    workersComp, 
    specialEvent,
    garageLiability,
    pageGL, 
    pageT, 
    pageWC, 
    pageH, 
    pageA, 
    pageB, 
    nameI,
    addressI,
    phoneI,
    dateI
  }, ref) => {
  return (
    <div ref={ref} className="container">
      
      <style>{getPageMargins()}</style>

      {bond && <Bond pages={pageB} name={nameI} address={addressI} phone={phoneI} date={dateI}/>}
      {commercialAuto && <Auto pages={pageA} name={nameI} address={addressI} phone={phoneI} date={dateI}/>}
      {flood && <Flood name={nameI} address={addressI} phone={phoneI} date={dateI}/>}
      {generalLiability && <GeneralLiability pages={pageGL} name={nameI} address={addressI} phone={phoneI} date={dateI}/>}
      {home && <Home pages={pageH} name={nameI} address={addressI} phone={phoneI} date={dateI}/>}
      {trucking && <Trucking pages={pageT} name={nameI} address={addressI} phone={phoneI} date={dateI}/>}
      {workersComp && <Workers pages={pageWC} name={nameI} address={addressI} phone={phoneI} date={dateI}/>}
      {specialEvent && <SpecialEvent name={nameI} address={addressI} phone={phoneI} date={dateI}/>}
      {garageLiability && <GarageLiabilityIS name={nameI} address={addressI} phone={phoneI} date={dateI}/>}
      
    </div>
  )
}) 

const getPageMargins = () => {
  let marginTop = "0.4in"
  let marginBottom = "0.39in"
  let marginLeft = "0.4in"
  let marginRight = "0.39in"

  return `@page { margin: ${marginTop} ${marginRight} ${marginBottom} ${marginLeft} !important; }`;
};

function App() {
  
  /* ELEGIR DOCUMENTO */
  const [document, setDocument] = useState("selectDocument");

  const [bondVisible, setBondVisible] = useState(false);
  const [commercialAutoVisible, setCommercialAutoVisible] = useState(false);
  const [floodVisible, setFloodVisible] = useState(false);
  const [generalLiabilityVisible, setGeneralLiabilityVisible] = useState(false);
  const [homeVisible, setHomeVisible] = useState(false);
  const [truckingVisible, setTruckingVisible] = useState(false);
  const [workersCompVisible, setWorkersCompVisible] = useState(false);
  const [specialEventVisible, setSpecialEventVisible] = useState(false);
  const [garageLiabilityVisible, setGarageLiabilityVisible] = useState(false);

  const handleRadioButton = (e) => {
    setDocument(e.target.value);
  }


  /* ELEGIR PAGINAS */

  const [pageGLInfo, setPageGLInfo] = useState({
    pagesGL: []
  });

  const [pageTInfo, setPageTInfo] = useState({
    pagesT: []
  });

  const [pageWCInfo, setPageWCInfo] = useState({
    pagesWC: []
  });

  const [pageHInfo, setPageHInfo] = useState({
    pagesH: []
  });

  const [pageAInfo, setPageAInfo] = useState({
    pagesA: []
  });

  const [pageBInfo, setPageBInfo] = useState({
    pagesB: []
  });

  const { pagesGL } = pageGLInfo;
  const { pagesT } = pageTInfo;
  const { pagesWC } = pageWCInfo;
  const { pagesH } = pageHInfo;
  const { pagesA } = pageAInfo;
  const { pagesB } = pageBInfo;

  const [nameInsured, setNameI] = useState('');
  const [addressInsured, setAddressI] = useState('');
  const [phoneInsured, setPhoneI] = useState('');
  const [dateInsured, setDateI] = useState('');

  var dateFormat = moment(dateInsured).format('MM/DD/YYYY');

  const handleGL = (e) => {
    
    // Destructuring
    const { value, checked } = e.target;
      
    console.log(`${value} is ${checked}`);
     
    // Case 1 : The user checks the box
    if (checked) {
      setPageGLInfo({
        pagesGL: [...pagesGL, value]
      });
    }
  
    // Case 2  : The user unchecks the box
    else {
      setPageGLInfo({
        pagesGL: pagesGL.filter((e) => e !== value)
      });
    }
  };

  const handleT = (e) => {
    
    // Destructuring
    const { value, checked } = e.target;
      
    console.log(`${value} is ${checked}`);
     
    // Case 1 : The user checks the box
    if (checked) {
      setPageTInfo({
        pagesT: [...pagesT, value]
      });
    }
  
    // Case 2  : The user unchecks the box
    else {
      setPageTInfo({
        pagesT: pagesT.filter((e) => e !== value)
      });
    }
  };

  const handleWC = (e) => {
    
    // Destructuring
    const { value, checked } = e.target;
      
    console.log(`${value} is ${checked}`);
     
    // Case 1 : The user checks the box
    if (checked) {
      setPageWCInfo({
        pagesWC: [...pagesWC, value]
      });
    }
  
    // Case 2  : The user unchecks the box
    else {
      setPageWCInfo({
        pagesWC: pagesWC.filter((e) => e !== value)
      });
    }
  };

  const handleH = (e) => {
    
    // Destructuring
    const { value, checked } = e.target;
      
    console.log(`${value} is ${checked}`);
     
    // Case 1 : The user checks the box
    if (checked) {
      setPageHInfo({
        pagesH: [...pagesH, value]
      });
    }
  
    // Case 2  : The user unchecks the box
    else {
      setPageHInfo({
        pagesH: pagesH.filter((e) => e !== value)
      });
    }
  };

  const handleA = (e) => {
    
    // Destructuring
    const { value, checked } = e.target;
      
    console.log(`${value} is ${checked}`);
     
    // Case 1 : The user checks the box
    if (checked) {
      setPageAInfo({
        pagesA: [...pagesA, value]
      });
    }
  
    // Case 2  : The user unchecks the box
    else {
      setPageAInfo({
        pagesA: pagesA.filter((e) => e !== value)
      });
    }
  };

  const handleB = (e) => {
    
    // Destructuring
    const { value, checked } = e.target;
      
    console.log(`${value} is ${checked}`);
     
    // Case 1 : The user checks the box
    if (checked) {
      setPageBInfo({
        pagesB: [...pagesB, value]
      });
    }
  
    // Case 2  : The user unchecks the box
    else {
      setPageBInfo({
        pagesB: pagesB.filter((e) => e !== value)
      });
    }
  };

  /*const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.insuredName.value;
    const initials = e.target.insuredInitials.value;
    console.log("Insured Name: " + name);
    console.log("Initials: " + initials);
  }*/

  /* OTROS */

  useEffect(() => {
    document === "bond" ? setBondVisible(true) : setBondVisible(false);
    document === "commercialAuto" ? setCommercialAutoVisible(true) : setCommercialAutoVisible(false);
    document === "flood" ? setFloodVisible(true) : setFloodVisible(false);
    document === "generalLiability" ? setGeneralLiabilityVisible(true) : setGeneralLiabilityVisible(false);
    document === "home" ? setHomeVisible(true) : setHomeVisible(false);
    document === "trucking" ? setTruckingVisible(true) : setTruckingVisible(false);
    document === "workersComp" ? setWorkersCompVisible(true) : setWorkersCompVisible(false);
    document === "specialEvent" ? setSpecialEventVisible(true) : setSpecialEventVisible(false);
    document === "garageLiability" ? setGarageLiabilityVisible(true) : setGarageLiabilityVisible(false);
  }, [document])

  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (!visible) {
      window.print()
      setVisible(true)
    }
    
  }, [visible])
  
  const componentRef = useRef();

  return (
    <main className='letter'>


    <nav className="mb-5 text-white">
      <div class="d-flex justify-content-between text-center bg-nav p-3">
        <div>
          <label className="mx-1 fw-bold" for="nameI">Insured’s Name:</label>
          <input className="text-center input-default" style={{width: "300px"}} id="nameI" type="text" autocomplete="off" maxlength="40" onChange={e => setNameI(e.target.value)}/>
        </div>
        <div>
          <label className="mx-1 fw-bold" for="addressI">Address:</label>
          <input className="text-center input-default" style={{width: "550px"}} id="addressI" type="text" autocomplete="off" maxlength="80" onChange={e => setAddressI(e.target.value)}/>
        </div>
        <div>
          <label className="mx-1 fw-bold" for="phoneI">Cell:</label>
          <CurrencyFormat format="(###) ###-####" mask="_" className="text-center input-default" placeholder='(###) ###-####' style={{width: "130px"}} id="phoneI" onChange={e => setPhoneI(e.target.value)}/>
        </div>
        <div>
          <label className="mx-1 fw-bold" for="dateI">Date:</label>
          <input className="text-center" id="dateI" type="date" onChange={e => setDateI(e.target.value)}/> {console.log(dateInsured)}
        </div>
      </div>
      <div className='d-flex justify-content-center py-2 bg-nav2'>
        <div>
            <label className="mx-1 fw-bold" for="doc">Document:</label> 
            <select id="doc" value={document} onChange={handleRadioButton} className="text-center">
                <option value="selectDocument" default>Select a Document</option>
                <option value="bond">Bond</option>
                <option value="commercialAuto">Commercial Auto</option>
                <option value="flood">Flood</option>
                <option value="generalLiability">General Liability</option>
                <option value="home">Home</option>
                <option value="trucking">Trucking</option>
                <option value="workersComp">Workers' Comp</option>
                <option value="specialEvent">Special Event</option>
                <option value="garageLiability">Garage Liability</option>
            </select>
          </div>

          {generalLiabilityVisible &&
            <div class="d-flex align-items-center">
              <label className="ms-2 fw-bold" for="doc">Pages:</label>
              <input class="ms-2 me-1" type="checkbox" value="balanceDue" name="pagesGL" onChange={handleGL}/> Balance Due
              <input class="ms-2 me-1" type="checkbox" value="creditCard" name="pagesGL" onChange={handleGL}/> Credit Card
              <input class="ms-2 me-1" type="checkbox" value="spanishBF" name="pagesGL" onChange={handleGL}/> Spanish BF
            </div>
          }

          {truckingVisible &&
            <div class="d-flex align-items-center">
              <label className="ms-2 fw-bold" for="doc">Pages:</label>
              <input class="ms-2 me-1" type="checkbox" value="assignedRisk" name="pagesT" onChange={handleT}/> Assigned Risk
              <input class="ms-2 me-1" type="checkbox" value="balanceDue" name="pagesT" onChange={handleT}/> Balance Due
              <input class="ms-2 me-1" type="checkbox" value="creditCard" name="pagesT" onChange={handleT}/> Credit Card
              <input class="ms-2 me-1" type="checkbox" value="spanishBF" name="pagesT" onChange={handleT}/> Spanish BF
            </div>
          }

          {workersCompVisible &&
            <div class="d-flex align-items-center">
              <label className="ms-2 fw-bold" for="doc">Pages:</label>
              <input class="ms-2 me-1" type="checkbox" value="balanceDue" name="pagesWC" onChange={handleWC}/> Balance Due
              <input class="ms-2 me-1" type="checkbox" value="creditCard" name="pagesWC" onChange={handleWC}/> Credit Card
              <input class="ms-2 me-1" type="checkbox" value="spanishBF" name="pagesWC" onChange={handleWC}/> Spanish BF
            </div>
          }

          {homeVisible &&
            <div class="d-flex align-items-center">
              <label className="ms-2 fw-bold" for="doc">Pages:</label>
              <input class="ms-2 me-1" type="checkbox" value="renters" name="pagesH" onChange={handleH}/> Renters
              <input class="ms-2 me-1" type="checkbox" value="dp3" name="pagesH" onChange={handleH}/> DP3/HO3/Mobile
              <input class="ms-2 me-1" type="checkbox" value="ho4" name="pagesH" onChange={handleH}/> HO4
              <input class="ms-2 me-1" type="checkbox" value="ho6" name="pagesH" onChange={handleH}/> HO6
              <input class="ms-2 me-1" type="checkbox" value="balanceDue" name="pagesH" onChange={handleH}/> Balance Due
              <input class="ms-2 me-1" type="checkbox" value="creditCard" name="pagesH" onChange={handleH}/> Credit Card
              <input class="ms-2 me-1" type="checkbox" value="spanishBF" name="pagesH" onChange={handleH}/> Spanish BF
            </div>
          }

          {commercialAutoVisible &&
            <div class="d-flex align-items-center">
              <label className="ms-2 fw-bold" for="doc">Pages:</label>
              <input class="ms-2 me-1" type="checkbox" value="infinity" name="pagesA" onChange={handleA}/> Infinity
              <input class="ms-2 me-1" type="checkbox" value="balanceDue" name="pagesA" onChange={handleA}/> Balance Due
              <input class="ms-2 me-1" type="checkbox" value="creditCard" name="pagesA" onChange={handleA}/> Credit Card
              <input class="ms-2 me-1" type="checkbox" value="spanishBF" name="pagesA" onChange={handleA}/> Spanish BF
            </div>
          }

          {bondVisible &&
            <div class="d-flex align-items-center">
              <label className="ms-2 fw-bold" for="doc">Pages:</label>
              <input class="ms-2 me-1" type="checkbox" value="balanceDue" name="pagesB" onChange={handleB}/> Balance Due
              <input class="ms-2 me-1" type="checkbox" value="creditCard" name="pagesB" onChange={handleB}/> Credit Card Form
              <input class="ms-2 me-1" type="checkbox" value="spanishBF" name="pagesB" onChange={handleB}/> Spanish BF
            </div>
          }
      </div>
    </nav>

      <Page 
        ref = {componentRef} 
        bond = {bondVisible} 
        commercialAuto = {commercialAutoVisible}
        flood = {floodVisible}
        generalLiability = {generalLiabilityVisible}
        home = {homeVisible}
        trucking = {truckingVisible}
        workersComp = {workersCompVisible}
        specialEvent = {specialEventVisible}
        garageLiability = {garageLiabilityVisible}
        pageGL = {pagesGL}
        pageT = {pagesT}
        pageWC = {pagesWC}
        pageH = {pagesH}
        pageA = {pagesA}
        pageB = {pagesB}
        nameI = {nameInsured}
        addressI = {addressInsured}
        phoneI = {phoneInsured}
        dateI = {dateFormat}
        />

        {document !== "selectDocument" &&
          <ReactToPrint
            content={() => componentRef.current}
            trigger={() => <div className='d-flex justify-content-center my-5'><Button className='btn'>Download PDF</Button></div>}
          />
        }
      

    </main>
  );
}

export default App;
