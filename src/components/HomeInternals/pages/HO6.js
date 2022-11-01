import React, { useEffect, useState} from 'react';
import CurrencyFormat from 'react-currency-format';
import Input from "../../Input";
import Logo from "../../Logo";
import Title from "../../Title";

export default function HO6({name, date, setDateHO, date2}) {

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
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

    const [inputA, setInputA] = useState('');
    const [inputC, setInputC] = useState('');
    const [inputD, setInputD] = useState('');
    const [inputE, setInputE] = useState('');
    const [inputF, setInputF] = useState('');
    const [deductible, setDeductible] = useState(''); /* Input Deductible */

    const [chkAYes, setChkAYes] = useState(false);
    const [chkANo, setChkANo] = useState(false);

    const [chkCYes, setChkCYes] = useState(false);
    const [chkCNo, setChkCNo] = useState(false);

    const [chkDYes, setChkDYes] = useState(false);
    const [chkDNo, setChkDNo] = useState(false);

    const [chkEYes, setChkEYes] = useState(false);
    const [chkENo, setChkENo] = useState(false);

    const [chkFYes, setChkFYes] = useState(false);
    const [chkFNo, setChkFNo] = useState(false);

    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);


    const [occupantType, setOccupantType] = useState("owner");

    const handleOccupantType = (e) => {
        setOccupantType(e.target.value);
    }

    useEffect(() => {
        if(occupantType === "owner" || occupantType === "secondary" || occupantType === "seasonal" || occupantType === "vacant"){
          setD("Loss of Use"); 
          setE("Personal Liability");
          console.log(d);
        }
        else if(occupantType === "tenant"){
          setD("Fair Rental Value");
          setE("OL & Tenant");
          console.log(e);
        }
    }, [occupantType])

    useEffect(() => {
        checked1 === true ? setC7("Included") : setC7("");
    }, [checked1])

    useEffect(() => {
        checked2 === true ? setC8("Included") : setC8("");
    }, [checked2])

    useEffect(() => {
        checked3 === true ? setC9("Included") : setC9("");
    }, [checked3])

    useEffect(() => {
        checked4 === true ? setC10("Included") : setC10("");
    }, [checked4])

    useEffect(() => {
        if (inputC.trim().length !== 0) {
            setC1("Included");
            setChkCYes(true);
            setChkCNo(false);
        } else {
            setC1("");
            setChkCYes(false);
            setChkCNo(true);
        }
    }, [inputC])

    useEffect(() => {
        if (inputA.trim().length !== 0) {
            setC2("Included");
            setChkAYes(true);
            setChkANo(false);
        } else {
            setC2("");
            setChkAYes(false);
            setChkANo(true);
        }
    }, [inputA])

    useEffect(() => {
        if (inputD.trim().length !== 0) {
            setC3("Included");
            setChkDYes(true);
            setChkDNo(false);
        } else {
            setC3("");
            setChkDYes(false);
            setChkDNo(true);
        }
    }, [inputD])

    useEffect(() => {
        if (inputE.trim().length !== 0) {
            setC4("Included");
            setChkEYes(true);
            setChkENo(false);
        } else {
            setC4("");
            setChkEYes(false);
            setChkENo(true);
        }
    }, [inputE])

    useEffect(() => {
        if (inputF.trim().length !== 0) {
            setC5("Included");
            setChkFYes(true);
            setChkFNo(false);
        } else {
            setC5("");
            setChkFYes(false);
            setChkFNo(true);
        }
    }, [inputF])

    useEffect(() => {
        if (deductible.trim().length !== 0) {
            setC6("Included");
        } else {
            setC6("");
        }
    }, [deductible])

    return (
        <div className="sheet font-11 lh-3 text-justify">
            
            <Logo />

            <Title text="VERBAL DISCLOSURE" />
            
            <p className="mx-0 mb-0 mt-3">
                I <Input className="text-center fw-bold" width="400px" value={name}/>hereby appoint Adriana's Insurance Services Inc. as my Broker / Attorney in fact
                to sign papers, applications, documents that are necessary in order to secure the insurance coverage specified below. I have
                also been advised of the importance of the effective date of the policy and have chosen to have coverage start on: 
                <input 
                    type="date" 
                    style={{width: "100px"}}
                    onChange = {e => setDateHO(e.target.value)}
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
                        <br/>
                        HO6
                    </td>
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
                    <td>A. Additions/Alterations</td>
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
                            onChange = {e => setInputA(e.target.value)}
                        />
                    </td>
                    <td><input type="checkbox" checked={chkAYes}/></td>
                    <td><input type="checkbox" checked={chkANo}/></td>
                    <td>Initials <Input disabled width="60px" bColor="yellow"/></td>
                </tr>
                <tr>
                    <td>D. {d}</td> {/* D. Loss Of Use */}
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
                    <td rowspan="3" className='text-center'>
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
                    <td>E. {e}</td> {/* E. Personal Liability */}
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
                <tr>
                    <td>F. Medical Payments</td>
                    <td>
                        <CurrencyFormat 
                            thousandSeparator={true} 
                            prefix={'$'} 
                            id = "inputF"
                            name = "inputF"
                            autoComplete = "off"
                            maxlength="10"
                            style = {{width:"80px"}}
                            className='fw-bold text-center input-default'
                            onChange = {e => setInputF(e.target.value)}
                        />
                    </td>
                    <td><input type="checkbox" checked={chkFYes}/></td>
                    <td><input type="checkbox" checked={chkFNo}/></td>
                    <td>Initials <Input disabled width="60px" bColor="yellow"/></td>
                </tr>
                <tr>
                    <td>Deductible</td>
                    <td>
                        <CurrencyFormat 
                            thousandSeparator={true} 
                            prefix={'$'}
                            autoComplete = "off"
                            maxlength="10"
                            style = {{width:"80px"}}
                            className='fw-bold text-center input-default'
                            onChange={e => setDeductible(e.target.value)}
                        />
                    </td>
                    <td colspan="2"></td>
                    <td>Initials <Input disabled width="60px" bColor="yellow"/></td>
                </tr>
            </table>
    
            <table>
                <tr>
                    <td></td>
                    <td>
                        <b>1.</b>
                    </td>
                    <td className="col-9">
                        <u><b><i>Personal Property</i></b></u> is any property of an insured other than real property.
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
                    <td></td>
                    <td>
                        <b>2.</b>
                    </td>
                    <td className="col-9">
                        I understand that <u><b><i>Additions & Alterations</i></b></u> improvements made to my home that increase the home’s value
                        and alter the dwelling from its original state when built and I have opted to refuse such coverage.
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
                    <td></td>
                    <td>
                        <b>3.</b>
                    </td>
                    <td className="col-9">
                        I have been offered <u><b><i>{d}</i></b></u> coverage, which reimburses the extra cost of living elsewhere while
                        the house is being restored after a loss. I have elected to refuse this coverage.
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
                    <td></td>
                    <td>
                        <b>4.</b>
                    </td>
                    <td className="col-9">
                        I have been offered <u><b><i>{e}</i></b></u> coverage which pays for damage/injury you accidentally cause to
                        others for which you are legally responsible for. I have elected to refuse this coverage.
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
                    <td></td>
                    <td>
                        <b>5.</b>
                    </td>
                    <td className="col-9">
                        I have been offered <u><b><i>Medical Payments</i></b></u> in which the insurer agrees to reimburse the insured and others up
                        to a certain limit for medical or funeral expenses as a result of bodily injury or death by accident.
                        Payments are without regard to fault. I have elected to refuse this coverage.
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
                    <td></td>
                    <td>
                        <b>6.</b>
                    </td>
                    <td className="col-9">
                        The <u><b><i>Deductible</i></b></u> is the amount that the policyholder has agreed to pay on each claim. I understand and agree
                        that my <u><b><i>Deductible</i></b></u> is <Input className="text-center fw-bold" value={deductible} width="80px"/>.
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
                    <td>
                        <input 
                            type="checkbox" 
                            checked={checked1} 
                            onChange={e => setChecked1(e.target.checked)}
                        />
                    </td>
                    <td>
                        <b>7.</b>
                    </td>
                    <td className="col-9">
                        I have been offered <u><b><i>Water Damage</i></b></u> coverage which covers against sudden and accidental water damage
                        from bust pipes and I have elected to refuse such coverage.
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
                    <td>
                        <input 
                            type="checkbox" 
                            checked={checked2} 
                            onChange={e => setChecked2(e.target.checked)}
                        />
                    </td>
                    <td>
                        <b>8.</b>
                    </td>
                    <td className="col-9">
                        I have been offered <u><b><i>Animal Liability</i></b></u> and I have elected to refuse such coverage.
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
                    <td>
                        <input 
                            type="checkbox" 
                            checked={checked3} 
                            onChange={e => setChecked3(e.target.checked)}
                        />
                    </td>
                    <td>
                        <b>9.</b>
                    </td>
                    <td className="col-9">
                        I have been offered <u><b><i>Earthquake</i></b></u> coverage and decided to reject this coverage.
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
                    <td>
                        <input 
                            type="checkbox" 
                            checked={checked4} 
                            onChange={e => setChecked4(e.target.checked)}
                        />
                    </td>
                    <td>
                        <b>10.</b>
                    </td>
                    <td className="col-9">
                        I have been offered <u><b><i>Flood</i></b></u> coverage and decided to reject this coverage.
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