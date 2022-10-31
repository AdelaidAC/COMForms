import React from 'react'
import Input from './Input'

export default function Signature(props) {
    return (
       
        
        <div className='d-flex justify-content-between mt-5 mx-5 pt-5 text-center fw-bold'>
            <div>
                <Input width="300px" className="text-center" disabled bColor="yellow"/>
                <p>{props.firstSignature}</p>
            </div>
            <div>
                <Input width="300px" className="text-center" disabled/>
                <p>{props.secondSignature}</p>
            </div>
        </div>
    )
}

Signature.defaultProps = {
    firstSignature: "Insured's Signature",
    secondSignature: "Broker's Signature",
}