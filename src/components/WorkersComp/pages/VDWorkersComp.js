import React from "react";
import Input from "../../Input";
import Logo from "../../Logo";
import Title from "../../Title";
import CurrencyFormat from 'react-currency-format';


export default function VDWorkersComp({name, date, setDateVD}) {
    return (
        <div className="sheet font-11 text-justify">
            
            <Logo />
            
            <Title text="VERBAL DISCLOSURE" />

            <div class="row">
                <div class="col d-flex">
                    <b>Named Insured:</b>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1 text-center" value={name}/>
                    </span>
                </div>
                <div class="col d-flex">
                    <b>DBA:</b>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1 text-center" maxlength="40"/>
                    </span>
                </div>
            </div>

            <div className='d-flex justify-content-between'>
                <div className='d-flex col-8'>
                    <b>Company Name:</b>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1 text-center" maxlength="40"/>
                    </span>
                </div>
                <div>
                    <b>Date Coverage Starts: <input type="date" className='text-center' style={{width: "100px"}} onChange = {e => setDateVD(e.target.value)}/></b>
                </div>
            </div>

            <p className="my-3">
                I, <Input className="text-center fw-bold" width="260px" value={name}/> hereby appoint Adriana’s Insurance Svcs, Inc. as my Broker/Attorney in fact
                to sign papers, applications, documents that are necessary in order to secure the insurance coverage specified below.
            </p>

            <p className="text-center text-decoration-underline">
                THIS POLICY INCLUDES THE FOLLOWING COVERAGES
            </p>
            
            <table className="table table-fit text-center table-borderless">
                <thead>
                    <tr style={{style: "text-align:center;"}}>
                        <td scope="col"><b>Worker's Compensation</b></td>
                        <td className="fst-italic" scope="col">LIMITS</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            A. Bodily Injury by Accident
                        </td>
                        <td>
                            <label>
                            $
                            <CurrencyFormat 
                                thousandSeparator={true}
                                maxlength="12"
                                style = {{width:"100px"}}
                                className='fw-bold text-center input-default'
                                list="BIAccident"
                            />
                            </label>
                            <datalist id="BIAccident">
                                <option value="25,000"></option>
                                <option value="50,000"></option>
                                <option value="100,000"></option>
                                <option value="300,,000"></option>
                                <option value="500,000"></option>
                                <option value="1,000,000"></option>
                            </datalist>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            B. Bodily Injury by Disease
                        </td>
                        <td>
                            <label>
                            $
                            <CurrencyFormat 
                                thousandSeparator={true}
                                maxlength="12"
                                style = {{width:"100px"}}
                                className='fw-bold text-center input-default'
                                list="BIDisease"
                            />
                            </label>
                            <datalist id="BIDisease">
                                <option value="25,000"></option>
                                <option value="50,000"></option>
                                <option value="100,000"></option>
                                <option value="300,,000"></option>
                                <option value="500,000"></option>
                                <option value="1,000,000"></option>
                            </datalist>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            C. Bodily Injury by Disease
                        </td>
                        <td>
                            <label>
                            $
                            <CurrencyFormat 
                                thousandSeparator={true}
                                maxlength="12"
                                style = {{width:"100px"}}
                                className='fw-bold text-center input-default'
                                list="BIDisease2"
                            />
                            </label>
                            <datalist id="BIDisease2">
                                <option value="25,000"></option>
                                <option value="50,000"></option>
                                <option value="100,000"></option>
                                <option value="300,,000"></option>
                                <option value="500,000"></option>
                                <option value="1,000,000"></option>
                            </datalist>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Waivers of Subrogation
                        </td>
                        <td>
                            <label>
                                &nbsp;&nbsp;
                                <input list="WSubrogation" style={{width:"100px"}} className="text-center input-default fw-bold" maxlength="13"/>
                            </label>
                            <datalist id="WSubrogation">
                                <option value="Not Purchased"></option>
                                <option value="1 Purchased"></option>
                                <option value="2 Purchased"></option>
                                <option value="3 Purchased"></option>
                                <option value="4 Purchased"></option>
                                <option value="5 Purchased"></option>
                                <option value="Blanket"></option>
                            </datalist>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Class Codes
                        </td>
                        <td>
                            <div>&nbsp;&nbsp;&nbsp;<Input className="text-center" maxlength="5"/>&nbsp;<Input className="text-center" maxlength="5"/>&nbsp;<Input className="text-center" maxlength="5"/></div>
                            <div>&nbsp;&nbsp;&nbsp;<Input className="text-center" maxlength="5"/>&nbsp;<Input className="text-center" maxlength="5"/>&nbsp;<Input className="text-center" maxlength="5"/></div>
                            <div>&nbsp;&nbsp;&nbsp;<Input className="text-center" maxlength="5"/>&nbsp;<Input className="text-center" maxlength="5"/>&nbsp;<Input className="text-center" maxlength="5"/></div>
                            <div>&nbsp;&nbsp;&nbsp;<Input className="text-center" maxlength="5"/>&nbsp;<Input className="text-center" maxlength="5"/>&nbsp;<Input className="text-center" maxlength="5"/></div>
                            <div>&nbsp;&nbsp;&nbsp;<Input className="text-center" maxlength="5"/>&nbsp;<Input className="text-center" maxlength="5"/>&nbsp;<Input className="text-center" maxlength="5"/></div>
                            <div>&nbsp;&nbsp;&nbsp;<Input className="text-center" maxlength="5"/>&nbsp;<Input className="text-center" maxlength="5"/>&nbsp;<Input className="text-center" maxlength="5"/></div>
                            <div>&nbsp;&nbsp;&nbsp;<Input className="text-center" maxlength="5"/>&nbsp;<Input className="text-center" maxlength="5"/>&nbsp;<Input className="text-center" maxlength="5"/></div>
                            
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="d-flex ">
                <label><b>Description of Operations:</b></label>
                <b className="flex-fill">
                    <Input className="w-100 ms-1 text-center" maxlength="70"/>
                </b>
            </div>

            <div className="d-flex">
                <b>Restrictions:</b>
                <span className="flex-fill">
                    <Input className="w-100 ms-1 text-center" maxlength="83"/>
                </span>
            </div>

            <div>
                <div className="flex-fill">
                    <Input className="w-100 text-center" maxlength="93"/>
                </div>
                <div className="flex-fill">
                    <Input className="w-100 text-center" maxlength="93"/>
                </div>
            </div>

            <p className='my-3 text-center font-10'>
                <i>
                    BY SIGNING THIS YOU ARE ACCEPTING ALL EXCLUSIONS AND AGREE TO THE LIMITS PROVIDED
                </i>
            </p>
            
            <div className='d-flex justify-content-between text-center'>
                <div>
                    <p className='mb-0'><b>Gross Annual Sales:</b></p>
                    <CurrencyFormat 
                        thousandSeparator={true} 
                        prefix={'$'}
                        maxlength="13"
                        style = {{width:"170px"}}
                        className='fw-bold text-center input-default'
                    />
                </div>
                <div>
                    <p className='mb-0'><b>Employee Payroll:</b></p>
                    <CurrencyFormat 
                        thousandSeparator={true} 
                        prefix={'$'}
                        maxlength="13"
                        style = {{width:"170px"}}
                        className='fw-bold text-center input-default'
                    />
                </div>
                <div>
                    <p className='mb-0'><b>P.T. Employees:</b></p>
                    <Input className="text-center fw-bold" width = "170px" maxlength="20"/>
                </div>
                <div>
                    <p className='mb-0'><b>F.T. Employees:</b></p>
                    <Input className="text-center fw-bold" width = "170px" maxlength="20"/>
                </div>
            </div>

            <div className="mx-5 mt-3">
                <div className="border border-1 border-dark mt-4 mb-2"></div>
                <div className='d-flex justify-content-between text-center'>
                    <div >
                        <label><b>TOTAL:</b></label>
                        <CurrencyFormat 
                            thousandSeparator={true} 
                            prefix={'$'}
                            maxlength="13"
                            style = {{width:"125px"}}
                            className='fw-bold text-center input-default'
                        />
                    </div>
                    <div>
                        <label><b>Down Payment:</b></label>
                        <CurrencyFormat 
                            thousandSeparator={true} 
                            prefix={'$'}
                            maxlength="13"
                            style = {{width:"125px"}}
                            className='fw-bold text-center input-default'
                        />
                    </div>
                    <div>
                        <label><b>Payments of:</b></label>
                        <CurrencyFormat 
                            thousandSeparator={true} 
                            prefix={'$'}
                            maxlength="13"
                            style = {{width:"125px"}}
                            className='fw-bold text-center input-default'
                        />
                    </div>
                </div>
                <div className="border border-1 border-dark mt-2 mb-4"></div>
            </div>

            <div className="d-flex justify-content-between mt-5 fw-bold">
                <div>
                    Insured’s Signature: <Input width="300px" bColor="yellow" disabled/>
                </div>
                <div>
                    Date: <Input value = {date} width = "80px" className = "text-center fw-bold"/>
                </div>
            </div>
            
        </div>
    );
}