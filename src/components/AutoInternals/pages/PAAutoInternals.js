import moment from 'moment/moment'
import React, { useEffect, useState} from 'react';
import Input from '../../Input'
import Logo from '../../Logo'
import Signature from '../../Signature';
import Title from '../../Title'

export default function PAAutoInternals(
    {
        name, 
        date, 
        date2,
        vYear1, 
        vMake1,
        vYear2, 
        vMake2,
        vYear3, 
        vMake3,
        vYear4, 
        vMake4,
        vYear5, 
        vMake5,
        vYear6, 
        vMake6,
        vc,
        vc1,
        vc2,
        vc3,
        vc4,
        vc5,
        vc6,
    }) {

    let endDate = moment(date2).add(7, 'days').format('MM/DD/YYYY');

    const [iVP1, setVP1] = useState('');
    const [iVG1, setVG1] = useState('');

    const [iVP2, setVP2] = useState('');
    const [iVG2, setVG2] = useState('');

    const [iVP3, setVP3] = useState('');
    const [iVG3, setVG3] = useState('');

    const [iVP4, setVP4] = useState('');
    const [iVG4, setVG4] = useState('');

    const [iVP5, setVP5] = useState('');
    const [iVG5, setVG5] = useState('');

    const [iVP6, setVP6] = useState('');
    const [iVG6, setVG6] = useState('');

    return (
        
        <div className='sheet font-11'>
            
            <Logo />

            <Title text="PROMISE TO PROVIDE AGREEMENT" />

            <div className='d-flex justify-content-between my-4'>
                <div className='d-flex col-8'>
                    <b>Client Name:</b>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1 text-center" maxlength="40" value={name}/>
                    </span>
                </div>
                <div>
                    <b>Date: </b>
                    <Input value = {date} width = "80px" className = "text-center fw-bold"/>
                </div>
            </div>

            <p className='mt-4 text-justify'>
                It is my stated intention to obtain insurance coverage effective <Input value = {date2} width = "80px" className = "text-center fw-bold"/>, however I do not have copies of the following information with me:
            </p>
            
            <div className='font-10'>
                
                <input className="me-1 mb-3" type="checkbox"/> 
                Proof of prior insurance for the last
                <input className="ms-3 me-1" type="checkbox"/> 6 Months
                <input className="ms-3 me-1" type="checkbox"/> 1 Year
                <input className="ms-3 me-1" type="checkbox"/> 2 Years
                <input className="ms-3 me-1" type="checkbox"/> 3 Years
                <br/>
                <input className="me-1 mb-3" type="checkbox"/> 
                Proof of non-fault or non-injury accident for the following date(s):
                <Input className="ms-1 text-center" width="160px" maxlength="20"/>
                <br/>
                <input className="me-1 mb-3" type="checkbox" checked={vc}/> 
                Valid license for:
                <input className="ms-3 me-1" type="checkbox" checked={vc1}/> Driver 1
                <input className="ms-3 me-1" type="checkbox" checked={vc2}/> Driver 2
                <input className="ms-3 me-1" type="checkbox" checked={vc3}/> Driver 3
                <input className="ms-3 me-1" type="checkbox" checked={vc4}/> Driver 4
                <input className="ms-3 me-1" type="checkbox" checked={vc5}/> Driver 5
                <input className="ms-3 me-1" type="checkbox" checked={vc6}/> Driver 6
                <br/>
                <input className="me-1 mb-3" type="checkbox" checked={vc}/> 
                Valid vehicle registration for:
                <div className='mx-3 d-flex justify-content-between'>
                    <div>
                        <input className="me-3" type="checkbox" checked={vc1}/>
                        <input maxlength="6" className="text-center fw-bold input-default" style={{width:"50px"}} value={vYear1} /*onChange = {e => setVP1(e.target.value)}*//>
                        <input maxlength="15" className="ms-1 text-center fw-bold input-default" style={{width:"110px"}} value={vMake1} /*onChange = {e => setVG1(e.target.value)}*//>
                    </div>
                    <div>
                        <input className="me-3" type="checkbox" checked={vc2}/>
                        <input maxlength="6" className="text-center fw-bold input-default" style={{width:"50px"}} value={vYear2} /*onChange = {e => setVP2(e.target.value)}*//>
                        <input maxlength="15" className="ms-1 text-center fw-bold input-default" style={{width:"110px"}} value={vMake2} /*onChange = {e => setVG2(e.target.value)}*//>
                    </div>
                    <div>
                        <input className="me-3" type="checkbox" checked={vc3}/>
                        <input maxlength="6" className="text-center fw-bold input-default" style={{width:"50px"}} value={vYear3} /*onChange = {e => setVP3(e.target.value)}*//>
                        <input maxlength="15" className="ms-1 text-center fw-bold input-default" style={{width:"110px"}} value={vMake3} /*onChange = {e => setVG3(e.target.value)}*//>
                    </div>
                </div>
                <div className='mx-3 d-flex justify-content-between'>
                    <div>
                        <input className="me-3" type="checkbox" checked={vc4}/>
                        <input maxlength="6" className="text-center fw-bold input-default" style={{width:"50px"}} value={vYear4} /*onChange = {e => setVP4(e.target.value)}*//>
                        <input maxlength="15" className="ms-1 text-center fw-bold input-default" style={{width:"110px"}} value={vMake4} /*onChange = {e => setVG4(e.target.value)}*//>
                    </div>
                    <div>
                        <input className="me-3" type="checkbox" checked={vc5}/>
                        <input maxlength="6" className="text-center fw-bold input-default" style={{width:"50px"}} value={vYear5} /*onChange = {e => setVP5(e.target.value)}*//>
                        <input maxlength="15" className="ms-1 text-center fw-bold input-default" style={{width:"110px"}} value={vMake5} /*onChange = {e => setVG5(e.target.value)}*//>
                    </div>
                    <div>
                        <input className="me-3" type="checkbox" checked={vc6}/>
                        <input maxlength="6" className="text-center fw-bold input-default" style={{width:"50px"}} value={vYear6} /*onChange = {e => setVP6(e.target.value)}*//>
                        <input maxlength="15" className="ms-1 text-center fw-bold input-default" style={{width:"110px"}} value={vMake6} /*onChange = {e => setVG6(e.target.value)}*//>
                    </div>
                </div>
                <br/>
                <input className="me-1 mb-3" type="checkbox" checked={vc}/> 
                Vehicle for inspections and photos of all four sides:
                <div className='mx-3 d-flex justify-content-between'>
                    <div>
                        <input className="me-3" type="checkbox" checked={vc1}/>
                        <input maxlength="6" className="text-center fw-bold input-default" /*value={iVP1}*/ value={vYear1} style={{width:"50px"}}/>
                        <input maxlength="15" className="ms-1 text-center fw-bold input-default" value={vMake1} style={{width:"110px"}} /*value={iVG1}*//>
                    </div>
                    <div>
                        <input className="me-3" type="checkbox" checked={vc2}/>
                        <input maxlength="6" className="text-center fw-bold input-default" /*value={iVP2}*/ value={vYear2} style={{width:"50px"}}/>
                        <input maxlength="15" className="ms-1 text-center fw-bold input-default" value={vMake2} style={{width:"110px"}} /*value={iVG2}*//>
                    </div>
                    <div>
                        <input className="me-3" type="checkbox" checked={vc3}/>
                        <input maxlength="6" className="text-center fw-bold input-default" /*value={iVP3}*/ value={vYear3} style={{width:"50px"}}/>
                        <input maxlength="15" className="ms-1 text-center fw-bold input-default" value={vMake3} style={{width:"110px"}} /*value={iVG3}*//>
                    </div>
                </div>
                <div className='mx-3 d-flex justify-content-between'>
                    <div>
                        <input className="me-3" type="checkbox" checked={vc4}/>
                        <input maxlength="6" className="text-center fw-bold input-default" /*value={iVP4}*/ value={vYear4} style={{width:"50px"}}/>
                        <input maxlength="15" className="ms-1 text-center fw-bold input-default" value={vMake4} style={{width:"110px"}} /*value={iVG4}*//>
                    </div>
                    <div>
                        <input className="me-3" type="checkbox" checked={vc5}/>
                        <input maxlength="6" className="text-center fw-bold input-default" /*value={iVP5}*/ value={vYear5} style={{width:"50px"}}/>
                        <input maxlength="15" className="ms-1 text-center fw-bold input-default" value={vMake5} style={{width:"110px"}} /*value={iVG5}*//>
                    </div>
                    <div>
                        <input className="me-3" type="checkbox" checked={vc6}/>
                        <input maxlength="6" className="text-center fw-bold input-default" /*value={iVP6}*/ value={vYear6} style={{width:"50px"}}/>
                        <input maxlength="15" className="ms-1 text-center fw-bold input-default" value={vMake6} style={{width:"110px"}} /*value={iVG6}*//>
                    </div>
                </div>
                <br/>
                <input className="me-1 mb-3" type="checkbox"/> 
                Proof of garaging address
                <input className="ms-5 me-1 mb-3" type="checkbox"/> 
                Telematics
                <br/>
                <input className="me-1 mb-3" type="checkbox"/> 
                Proof of marriage
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input className="ms-5 me-1 mb-3" type="checkbox"/> 
                Proof of business
                <br/>
                <input className="me-1 mb-3" type="checkbox"/> 
                Sales or lease agreement
                &nbsp;
                <input className="ms-5 me-1 mb-3" type="checkbox"/> 
                Proof of general liability
                <br/>
                <input className="me-1 mb-3" type="checkbox"/> 
                Balance due
                <br/>
                <input className="me-1" type="checkbox"/> 
                Other
                <Input className="ms-1" width="90%" maxlength="100"/>
            
            </div>

            <p className="text-center my-4">
                I hereby promise to provide the above-indicated information by <Input value = {endDate} width = "80px" className = "text-center fw-bold"/> to Adriana's Insurance Services, Inc.
            </p>
            
            <p className="mb-5 text-justify">
                In the event that the information is not provided by the above-mentioned date, I understand that some or all of my coverage may be subject to a premium increase, cancellation, or rejection, 
                with no coverage in effect. I further understand that if a premium increase, cancellation or rejection occurs because I fail to provide the above indicated information, I may lose all or part 
                of my down payment and fully-earned Broker’s Fee, and I may incur a financial loss.
            </p>

            <Signature/>

        </div>

    )
}