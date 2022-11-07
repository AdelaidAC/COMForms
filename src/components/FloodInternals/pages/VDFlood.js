import React, { useEffect, useState} from 'react';
import parse from "html-react-parser";
import CurrencyFormat from 'react-currency-format';
import Input from "../../Input";
import Logo from "../../Logo";
import Title from "../../Title";

export default function VDFlood({name, date, setDateVD, date2}) {

    const [d, setD] = useState('');
    const [e, setE] = useState('');

    const [c1, setC1] = useState('');
    const [c2, setC2] = useState('');
    const [c3, setC3] = useState('');
    const [c4, setC4] = useState('');
    const [c5, setC5] = useState('');
    const [c6, setC6] = useState('');
    const [c7, setC7] = useState('');
    const [c8, setC8] = useState('');
    const [c9, setC9] = useState('');
    const [c10, setC10] = useState('');
    const [c11, setC11] = useState('');

    const [dwelling, setDwelling] = useState(''); /* Input A */
    const [inputB, setInputB] = useState('');
    const [inputC, setInputC] = useState('');
    const [inputD, setInputD] = useState('');
    const [inputE, setInputE] = useState('');

    const [chkAYes, setChkAYes] = useState(false);
    const [chkANo, setChkANo] = useState(false);

    const [chkBYes, setChkBYes] = useState(false);
    const [chkBNo, setChkBNo] = useState(false);

    const [chkCYes, setChkCYes] = useState(false);
    const [chkCNo, setChkCNo] = useState(false);

    const [chkDYes, setChkDYes] = useState(false);
    const [chkDNo, setChkDNo] = useState(false);

    const [chkEYes, setChkEYes] = useState(false);
    const [chkENo, setChkENo] = useState(false);

    const [checked6, setChecked6] = useState(false);
    const [checked7, setChecked7] = useState(false);
    const [checked8, setChecked8] = useState(false);
    const [checked9, setChecked9] = useState(false);
    const [checked10, setChecked10] = useState(false);
    const [checked11, setChecked11] = useState(false);

    const [dType, setDType] = useState("addLivingExpense");
    const [eType, setEType] = useState("costMaterial");

    const [occupantType, setOccupantType] = useState("");

    const handleDType = (e) => {
        setDType(e.target.value);
    }

    const handleEType = (e) => {
        setEType(e.target.value);
    }

    const handleOccupantType = (e) => {
        setOccupantType(e.target.value);
    }

    useEffect(() => {
        if(dType === "addLivingExpense"){
          setD("Loss of Use"); 
        }
        else if(dType === "fairRentalValue"){
          setD("Fair Rental Value");
        }
    }, [dType])

    useEffect(() => {
        if(eType === "costMaterial"){
          setE("I have been offered <u><b><i>Increased Cost/Material</u></b></i> which covers any additional cost for material which supersedes the amount of coverage provided to complete the process. I have elected to refuse such coverage."); 
        }
        else if(eType === "debrisRemoval"){
          setE("I have been offered <u><b><i>Debris Removal</u></b></i> coverage which pays the additional cost incurred up to limit for the unexpected costs of removing Debris left behind after a loss in the covered premises. I have elected to refuse such coverage.");
        }
    }, [eType])

    useEffect(() => {
        checked6 === true ? setC6("Included") : setC6("");
    }, [checked6])

    useEffect(() => {
        checked7 === true ? setC7("Included") : setC7("");
    }, [checked7])

    useEffect(() => {
        checked8 === true ? setC8("Included") : setC8("");
    }, [checked8])

    useEffect(() => {
        checked9 === true ? setC9("Included") : setC9("");
    }, [checked9])

    useEffect(() => {
        checked10 === true ? setC10("Included") : setC10("");
    }, [checked10])

    useEffect(() => {
        checked11 === true ? setC11("Included") : setC11("");
    }, [checked11])

    useEffect(() => {
        if (dwelling.trim().length !== 0) {
            setC1("Included");
            setChkAYes(true);
            setChkANo(false);
        } else {
            setC1("");
            setChkAYes(false);
            setChkANo(true);
        }
    }, [dwelling])

    useEffect(() => {
        if (inputB.trim().length !== 0) {
            setC2("Included");
            setChkBYes(true);
            setChkBNo(false);
        } else {
            setC2("");
            setChkBYes(false);
            setChkBNo(true);
        }
    }, [inputB])

    useEffect(() => {
        if (inputC.trim().length !== 0) {
            setC3("Included");
            setChkCYes(true);
            setChkCNo(false);
        } else {
            setC3("");
            setChkCYes(false);
            setChkCNo(true);
        }
    }, [inputC])

    useEffect(() => {
        if (inputD.trim().length !== 0) {
            setC4("Included");
            setChkDYes(true);
            setChkDNo(false);
        } else {
            setC4("");
            setChkDYes(false);
            setChkDNo(true);
        }
    }, [inputD])

    useEffect(() => {
        if (inputE.trim().length !== 0) {
            setC5("Included");
            setChkEYes(true);
            setChkENo(false);
        } else {
            setC5("");
            setChkEYes(false);
            setChkENo(true);
        }
    }, [inputE])

    return (
        <div className="sheet font-10 lh-1 text-justify">
            
            <Logo />

            <Title text="VERBAL DISCLOSURE" />
            
            <p className="mx-0 mb-0 mt-3">
                I <Input className="text-center fw-bold" width="400px" value={name}/>hereby appoint Adriana's Insurance Services Inc. as my Broker / Attorney in fact
                to sign papers, applications, documents that are necessary in order to secure the insurance coverage specified below. I have
                also been advised of the importance of the effective date of the policy and have chosen to have coverage start on: 
                <input 
                    type="date" 
                    style={{width: "100px"}} 
                    onChange = {e => setDateVD(e.target.value)}
                    {... date2 === "Invalid date" ? {className:"y text-center fw-bold"} : {className:"text-center fw-bold"}}
                />
            </p>

            <table className="fw-bold my-3">
                <tr className="text-center">
                    <td colspan="2"></td>
                    <td>Limits</td>
                    <td>Yes</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td rowspan="3" className='text-center'>
                        Policy Type: 
                        <br/> 
                        <select>
                        <option>Flood & Landslide</option>
                        <option>Flood</option>
                        </select>
                    </td>
                    <td>A. Dwelling</td>
                    <td>
                        <CurrencyFormat 
                            thousandSeparator={true} 
                            prefix={'$'} 
                            id = "inputA"
                            name = "inputA"
                            autoComplete = "off"
                            maxlength="10"
                            style = {{width:"80px"}}
                            className='fw-bold text-center input-default'
                            onChange = {e => setDwelling(e.target.value)}
                        />
                    </td>
                    <td><input type="checkbox" checked={chkAYes}/></td>
                    <td><input type="checkbox" checked={chkANo}/></td>
                    <td>Initials <Input disabled width="60px" bColor="yellow"/></td>
                </tr>
                <tr>
                    <td>B. Other Structures</td>
                    <td>
                        <CurrencyFormat 
                            thousandSeparator={true} 
                            prefix={'$'} 
                            id = "inputB"
                            name = "inputB"
                            autoComplete = "off"
                            maxlength="10"
                            style = {{width:"80px"}}
                            className='fw-bold text-center input-default'
                            onChange = {e => setInputB(e.target.value)}
                        />
                    </td>
                    <td><input type="checkbox" checked={chkBYes}/></td>
                    <td><input type="checkbox" checked={chkBNo}/></td>
                    <td>Initials <Input disabled width="60px" bColor="yellow"/></td>
                </tr>
                <tr>
                    <td>C. Personal Property</td>
                    <td>
                        <CurrencyFormat 
                            thousandSeparator={true} 
                            prefix={'$'} 
                            id = "inputC"
                            name = "inputC"
                            autoComplete = "off"
                            maxlength="10"
                            style = {{width:"80px"}}
                            className='fw-bold text-center input-default'
                            onChange = {e => setInputC(e.target.value)}
                        />
                    </td>
                    <td><input type="checkbox" checked={chkCYes}/></td>
                    <td><input type="checkbox" checked={chkCNo}/></td>
                    <td>Initials <Input disabled width="60px" bColor="yellow"/></td>
                </tr>
                <tr>
                    <td rowspan="2" className='text-center'>
                        Occupant Type: 
                        <br/> 
                        <select value={occupantType} onChange={handleOccupantType}>
                            <option value="owner" default>Owner</option>
                            <option value="tenant">Tenant</option>
                            <option value="secondary">Secondary</option>
                            <option value="seasonal">Seasonal</option>
                            <option value="vacant">Vacant</option>
                        </select>
                    </td>
                    <td>
                        D. <select value={dType} onChange={handleDType}>
                            <option value="addLivingExpense">Additional Living Expense</option>
                            <option value="fairRentalValue">Fair Rental Value</option>
                        </select>
                    </td>
                    <td>
                        <CurrencyFormat 
                            thousandSeparator={true} 
                            prefix={'$'} 
                            id = "inputD"
                            name = "inputD"
                            autoComplete = "off"
                            maxlength="10"
                            style = {{width:"80px"}}
                            className='fw-bold text-center input-default'
                            onChange = {e => setInputD(e.target.value)}
                        />
                    </td>
                    <td><input type="checkbox" checked={chkDYes}/></td>
                    <td><input type="checkbox" checked={chkDNo}/></td>
                    <td>Initials <Input disabled width="60px" bColor="yellow"/></td>
                </tr>
                <tr>
                    <td>
                        E. <select value={eType} onChange={handleEType}>
                            <option value="costMaterial">Increased Cost/Material</option>
                            <option value="debrisRemoval">Debris Removal</option>
                        </select>
                    </td>
                    <td>
                        <CurrencyFormat 
                            thousandSeparator={true} 
                            prefix={'$'} 
                            id = "inputE"
                            name = "inputE"
                            autoComplete = "off"
                            maxlength="10"
                            style = {{width:"80px"}}
                            className='fw-bold text-center input-default'
                            onChange = {e => setInputE(e.target.value)}
                        />
                    </td>
                    <td><input type="checkbox" checked={chkEYes}/></td>
                    <td><input type="checkbox" checked={chkENo}/></td>
                    <td>Initials <Input disabled width="60px" bColor="yellow"/></td>
                </tr>
            </table>
    

            <table>
                <tr>
                    <td className='d-flex justify-content-center'>
                        <b>1.</b>
                    </td>
                    <td className="col-9">
                        I understand that <u><b><i>Dwelling</i></b></u> coverage covers my house and attached structures against fire. Dwelling
                        Amount is based on the square footage given by the insured and multiplied by labor costs in that area. I
                        understand and agree with the dwelling amount of <Input className="text-center fw-bold" value={dwelling} width="80px"/>.
                    </td>
                    <td className='text-end'>
                        <span>
                            <b>1.</b> 
                            <Input 
                                className="text-center fw-bold"
                                width="90px" 
                                value={c1}
                                {...(c1 === "" ? {bColor:"yellow"} : {})}
                            />
                        </span>
                    </td>
                </tr>
                <tr>
                    <td className='d-flex justify-content-center'>
                        <b>2.</b>
                    </td>
                    <td className="col-9">
                        I understand that <u><b><i>Other Structures</i></b></u> covers structures such as a garage or storage shed, which are
                        separated from an insured dwelling by a clear space, or are connected only by a fence or utility line.
                        I have elected to refuse such coverage.
                    </td>
                    <td className='text-end'>
                        <span>
                            <b>2.</b> 
                            <Input 
                                className="text-center fw-bold"
                                width="90px" 
                                value={c2}
                                {...(c2 === "" ? {bColor:"yellow"} : {})}
                            />
                        </span>
                    </td>
                </tr>
                <tr>
                    <td className='d-flex justify-content-center'>
                        <b>3.</b>
                    </td>
                    <td className="col-9">
                        <u><b><i>Personal Property</i></b></u> is any property of an insured other than real property. I have elected to refuse coverage.
                    </td>
                    <td className='text-end'>
                        <span>
                            <b>3.</b> 
                            <Input 
                                className="text-center fw-bold"
                                width="90px" 
                                value={c3}
                                {...(c3 === "" ? {bColor:"yellow"} : {})}
                            />
                        </span>
                    </td>
                </tr>
                <tr>
                    <td className='d-flex justify-content-center'>
                        <b>4.</b>
                    </td>
                    <td className="col-9">
                        I have been offered <u><b><i>{d}</i></b></u> coverage, which reimburses the extra cost of living elsewhere while
                        the house is being restored after a loss. I have elected to refuse this coverage.
                    </td>
                    <td className='text-end'>
                        <span>
                            <b>4.</b> 
                            <Input 
                                className="text-center fw-bold"
                                width="90px" 
                                value={c4}
                                {...(c4 === "" ? {bColor:"yellow"} : {})}
                            />
                        </span>
                    </td>
                </tr>
                <tr>
                    <td className='d-flex justify-content-center'>
                        <b>5.</b>
                    </td>
                    <td className="col-9">
                        {parse(e)}
                    </td>
                    <td className='text-end'>
                        <span>
                            <b>5.</b> 
                            <Input 
                                className="text-center fw-bold"
                                width="90px" 
                                value={c5}
                                {...(c5 === "" ? {bColor:"yellow"} : {})}
                            />
                        </span>
                    </td>
                </tr>
                <tr>
                    <td className='d-flex align-items-start'>
                        <input
                            className='me-1' 
                            type="checkbox" 
                            checked={checked6} 
                            onChange={e => setChecked6(e.target.checked)}
                        />
                        <b>6.</b>
                    </td>
                    <td className="col-9">
                        The <b><i><u>Deductible</u></i></b> is the amount that the policyholder has agreed to pay on each claim. I understand and agree
                        that my <b><i><u>Deductibles</u></i></b> are as follows: 
                        <br/>
                        <table className="d-inline text-end fw-bold text-decoration-underline fst-italic">
                            <tr>
                            <td>
                                Earthquake:
                            </td>
                            <td>
                                <input className="me-1" type="checkbox"/>
                            </td>
                            <td>
                                <select className="ms-1">
                                    <option>5%</option>
                                    <option>$1,000</option>
                                    <option>$2,500</option>
                                    <option>$5,000</option>
                                    <option>N/P</option>
                                </select>
                            </td>
                            <td>
                                Landslide:
                            </td>
                            <td>
                                <input className="me-1" type="checkbox"/>
                            </td>
                            <td>
                                <select className="ms-1">
                                    <option>5%</option>
                                    <option>$1,000</option>
                                    <option>$2,500</option>
                                    <option>$5,000</option>
                                    <option>N/P</option>
                                </select>
                            </td>
                            </tr>
                            <tr>
                            <td>
                                Flood:
                            </td>
                            <td>
                                <input className="me-1" type="checkbox"/>
                            </td>
                            <td>
                                <select className="ms-1">
                                    <option>5%</option>
                                    <option>$1,000</option>
                                    <option>$2,500</option>
                                    <option>$5,000</option>
                                    <option>N/P</option>
                                </select>
                            </td>
                            <td>
                                Coverage D:
                            </td>
                            <td>
                                <input className="me-1" type="checkbox"/>
                            </td>
                            <td>
                                <select className="ms-1">
                                    <option>5%</option>
                                    <option>$1,000</option>
                                    <option>$2,500</option>
                                    <option>$5,000</option>
                                    <option>N/P</option>
                                </select>
                            </td>
                            </tr>
                        </table>
                    </td>
                    <td className='text-end'>
                        <span>
                            <b>6.</b> 
                            <Input 
                                className="text-center fw-bold"
                                width="90px" 
                                value={c6}
                                {...(c6 === "" ? {bColor:"yellow"} : {})}
                            />
                        </span>
                    </td>
                </tr>
                <tr>
                    <td className='d-flex align-items-start'>
                        <input
                            className='me-1' 
                            type="checkbox" 
                            checked={checked7} 
                            onChange={e => setChecked7(e.target.checked)}
                        />
                        <b>7.</b>
                    </td>
                    <td className="col-9">
                        I have been offered <b><i><u>Replacement Cost</u></i></b> coverage which is the amount it costs to replace lost or damaged
                        property with new property of the like, kind, and quality in the local market and reject this coverage. In place
                        of such coverage, I have opted to choose Actual Cash Value which is the amount the property is currently
                        valued without the land value in the current market.
                    </td>
                    <td className='text-end'>
                        <span>
                            <b>7.</b> 
                            <Input 
                                className="text-center fw-bold"
                                width="90px" 
                                value={c7}
                                {...(c7 === "" ? {bColor:"yellow"} : {})}
                            />
                        </span>
                    </td>
                </tr>
                <tr>
                    <td className='d-flex align-items-start'>
                        <input
                            className='me-1' 
                            type="checkbox" 
                            checked={checked8} 
                            onChange={e => setChecked8(e.target.checked)}
                        />
                        <b>8.</b>
                    </td>
                    <td className="col-9">
                        I have been offered <b><i><u>Earthquake</u></i></b> coverage which is coverage for direct damage to property resulting from
                        an earthquake and elected to refuse such coverage.
                    </td>
                    <td className='text-end'>
                        <span>
                            <b>8.</b>
                            <Input 
                                className="text-center fw-bold" 
                                width="90px" 
                                value={c8}
                                {...(c8 === "" ? {bColor:"yellow"} : {})}
                            />
                        </span>
                    </td>
                </tr>
                <tr>
                    <td className='d-flex align-items-start'>
                        <input
                            className='me-1' 
                            type="checkbox" 
                            checked={checked9} 
                            onChange={e => setChecked9(e.target.checked)}
                        />
                        <b>9.</b>
                    </td>
                    <td className="col-9">
                        I have been offered <b><i><u>Landslide</u></i></b> coverage which covers when there is a geological phenomenon in which a
                        wide range of ground movement, such as rock falls, deep failure of slopes, and shallow debris flows. I have
                        elected to refuse such coverage.
                    </td>
                    <td className='text-end'>
                        <span>
                            <b>9.</b> 
                            <Input 
                                className="text-center fw-bold"
                                width="90px" 
                                value={c9}
                                {...(c9 === "" ? {bColor:"yellow"} : {})}
                            />
                        </span>
                    </td>
                </tr>
                <tr>
                    <td className='d-flex align-items-start'>
                        <input 
                            className='me-1'
                            type="checkbox" 
                            checked={checked10} 
                            onChange={e => setChecked10(e.target.checked)}
                        />
                        <b>10.</b>
                    </td>
                    <td className="col-9">
                        I am aware that regardless of the <b><i><u>Deductibles</u></i></b> choosen, a separate <b><i><u>$1000</u></i></b> deductible for <b><i><u>Additional Living
                        Expense</u></i></b> will automatically apply at the time of the loss.
                    </td>
                    <td className='text-end'>
                        <span>
                            <b>10.</b> 
                            <Input 
                                className="text-center fw-bold" 
                                width="90px" 
                                value={c10}
                                {...(c10 === "" ? {bColor:"yellow"} : {})}
                            />
                        </span>
                    </td>
                </tr>
                <tr>
                    <td className='d-flex align-items-start'>
                        <input
                            className='me-1' 
                            type="checkbox" 
                            checked={checked11} 
                            onChange={e => setChecked11(e.target.checked)}
                        />
                        <b>11.</b>
                    </td>
                    <td className="col-9">
                        I am aware that coverage is <b><i><u>Effective 12:01am</u></i></b>, local time, on the <b><i><u>fifteenth calendar day</u></i></b> after the inception
                        date of the Certificate issued by the Insurance Company, not Adriana's Insurance Svcs, Inc. regardless of
                        what proposed effective date was on this and other forms signed.
                    </td>
                    <td className='text-end'>
                        <span>
                            <b>11.</b> 
                            <Input 
                                className="text-center fw-bold" 
                                width="90px" 
                                value={c11}
                                {...(c11 === "" ? {bColor:"yellow"} : {})}
                            />
                        </span>
                    </td>
                </tr>
            </table>

            <div className="d-flex justify-content-between mt-5 fw-bold">
                <div>
                    Named Insured Signature: <Input width="300px" disabled bColor="yellow"/>
                </div>
                <div>
                    Date: <Input value = {date} width = "80px" className = "text-center fw-bold"/>
                </div>
            </div>
            
        </div>
    );
}