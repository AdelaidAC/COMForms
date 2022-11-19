import React, { useEffect, useState} from 'react';
import { ToWords } from 'to-words';
import CurrencyFormat from 'react-currency-format';
import Input from '../../Input'
import Logo from '../../Logo'

export default function SCCPA({name, address}) {
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const toWords = new ToWords({
      localeCode: 'en-US',
      converterOptions: {
        currency: false,
        ignoreDecimal: false,
        ignoreZeroCurrency: false,
        doNotAddOnly: false,
        doNotAddOnly: true,
        currencyOptions: { // can be used to override defaults for the selected locale
          name: 'Dollar',
          plural: 'Dollars',
          symbol: '$',
          fractionalUnit: {
            name: 'Cent',
            plural: 'Cents',
            symbol: '¢',
          },
        }
      }
    });

    const [address2, setAddress2] = useState('');
    
    const [chkDC, setChkDC] = useState(false);
    const [chkDA, setChkDA] = useState(false);
    const [iCurrency, setCurrency] = useState('');
    let rCurrency, words = "";

    if(iCurrency.length !== 0)
    {
      rCurrency = iCurrency.replace('$','').replaceAll(',','');
      words = toWords.convert(rCurrency, { currency: true });
    }
    else
    {
      words = toWords.convert(0, { currency: true });
    }

    return (
        <div className='sheet font-10 lh-1 text-justify'>
            
            <div className="container">
      
                <div className="row text-center fw-bold">
                    <div className="col-5">
                        <Logo width='70%'/>
                    </div>
                    <div className="col-7">
                        <p className='text-center fw-bold font-12 mb-0'>AUTORIZACION TARJETA DE CREDITO</p>
                        
                        <hr style={{border: '2px solid black'}}/>
                        FAX: <CurrencyFormat format="(###) ###-####" className="text-center input-default" placeholder='N/A' style={{width: "25%"}}/> CODIGO DE CLIENTE: <Input width = "25%" placeholder="N/A" className="text-center" maxlength="15"/>
                    </div>
                </div>
                
            </div>
            
            <div className="container border border-3 border-dark mt-3">
                
                <div className="row text-center fw-bold" style={{background:'#b3b3b3'}}>
                    <div className="col">
                        INFORMACION DEL TITULAR DE LA TARJETA DE CREDITO
                    </div>
                </div>
                
                <div className="row pt-2">
                    <div className="col-9">
                        NOMBRE LEGAL DEL NEGOCIO O INDIVIDUO AUTORIZANDO EL CARGO (Si es corporacion, listar el nombre completo de la corporacion)
                    </div>
                    <div className="col-3">
                    <input 
                            type="checkbox" 
                            checked={chkDC} 
                            onChange={e => setChkDC(e.target.checked)}
                        /><strong style={{color:'red'}} className="ms-1">Different Card Holder</strong>
                    </div>
                </div>
                
                <div className="row text-center pb-2">
                    <div className="col-12">
                        <Input 
                            width="80%" 
                            className="text-center"
                            maxlength="40"
                            {...(chkDC ? {} : {value: name})}
                        />
                    </div>
                </div>
                
                <div className="row pt-2 fw-bold" style={{borderTop: '2px solid black'}}>
                    <div className="col-12">
                        Direccion Fisica del Negocio Calle (No. P.O. Boxes)
                    </div>
                </div>
                <div className="row text-center pb-2">
                    <div className="col-12">
                        <input
                            style={{width:"80%"}} 
                            className="text-center input-default" 
                            maxlength="80" 
                            {...(chkDC ? {} : {value: address})}
                            onChange={e => setAddress2(e.target.value)}/>
                    </div>
                </div>
                
                <div className="row fw-bold" style={{borderTop: '2px solid black'}}>
                    <div className="col-6" style={{borderRight: '2px solid black'}}>
                        Telefono de Negocio:
                    </div>
                    <div class="col-6">
                        Fax:
                    </div>
                </div>
                
                <div className="row text-center">
                    <div className="col-6" style={{borderRight: '2px solid black'}}>
                        <CurrencyFormat format="(###) ###-#### Ext. #####" className="text-center input-default mb-2" placeholder='(###) ###-#### Ext. #####' style={{width: "80%"}}/>
                    </div>
                    <div className="col-6">
                        <CurrencyFormat format="(###) ###-####" className="text-center input-default" placeholder='(###) ###-####' style={{width: "80%"}}/>
                    </div>
                </div>
                
            </div>
            
            <div className="container border border-3 border-dark mt-2">
                
                <div className="row text-center fw-bold" style={{background:'#b3b3b3'}}>
                    <div className="col">
                        INFORMACION DE LA TARJETA DE CREDITO
                    </div>
                </div>
                
                <div className="row pt-2 fw-bold">
                    <div className="col-3">
                        <input className="me-1" type="checkbox"/> Visa
                    </div>
                    <div className="col-3 text-center">
                        <CurrencyFormat format="#### #### #### ####" mask="_" className="text-center input-default"/>
                        <p className='mb-0 fw-bold'>Credit Card Number</p>
                    </div>
                    <div className="col-3 text-center">
                        Exp Date: <CurrencyFormat format="##/##" placeholder="MM/YY" mask={['M', 'M', 'Y', 'Y']} className="text-center input-default" style={{width: "50px"}}/>
                    </div>
                    <div className="col-3 text-center">
                        * CVV #: 
                        <Input width = "50px" className="ms-1 text-center" maxlength="4"/>
                    </div>
                </div>
                
                <div className="row fw-bold">
                    <div className="col-3">
                        <input className="me-1" type="checkbox"/> Mastercard
                    </div>
                    <div className="col-3 text-center">
                        <CurrencyFormat format="#### #### #### ####" mask="_" className="text-center input-default"/>
                        <p className='mb-0 fw-bold'>Credit Card Number</p>
                    </div>
                    <div className="col-3 text-center">
                        Exp Date: <CurrencyFormat format="##/##" placeholder="MM/YY" mask={['M', 'M', 'Y', 'Y']} className="text-center input-default" style={{width: "50px"}}/>
                    </div>
                    <div className="col-3 text-center">
                        * CVV #: 
                        <Input width = "50px" className="ms-1 text-center" maxlength="4"/>
                    </div>
                </div>
                
                <div className="row fw-bold">
                    <div className="col-3">
                        <input className="me-1" type="checkbox"/> American Express
                    </div>
                    <div className="col-3 text-center">
                        <CurrencyFormat format="#### #### #### ####" mask="_" className="text-center input-default"/>
                        <p className='mb-0 fw-bold'>Credit Card Number</p>
                    </div>
                    <div className="col-3 text-center">
                        Exp Date: <CurrencyFormat format="##/##" placeholder="MM/YY" mask={['M', 'M', 'Y', 'Y']} className="text-center input-default" style={{width: "50px"}}/>
                    </div>
                    <div className="col-3 text-center">
                        * CVV #: 
                        <Input width = "50px" className="ms-1 text-center" maxlength="4"/>
                    </div>
                </div>
                
                <div className="row fw-bold">
                    <div className="col-3">
                        <input className="me-1" type="checkbox"/> Discover
                    </div>
                    <div className="col-3 text-center">
                        <CurrencyFormat format="#### #### #### ####" mask="_" className="text-center input-default"/>
                        <p className='mb-0 fw-bold'>Credit Card Number</p>
                    </div>
                    <div className="col-3 text-center">
                        Exp Date: <CurrencyFormat format="##/##" placeholder="MM/YY" mask={['M', 'M', 'Y', 'Y']} className="text-center input-default" style={{width: "50px"}}/>
                    </div>
                    <div className="col-3 text-center">
                        * CVV #: 
                        <Input width = "50px" className="ms-1 text-center" maxlength="4"/>
                    </div>
                </div>
                
                <div className="row py-2 font-9">
                    <div className="col-8 fw-bold">
                        Nombre, exactamente como aparece en la tarjeta :
                        <Input width = "54%" className="text-center ms-1" value={name}/>
                    </div>
                    <div className="col-4 text-end">
                        * 3 digitos # en la parte trasera de la tarjeta
                    </div>
                </div>
                
                <div className="row pt-2"  style={{borderTop: '3px solid black'}}>
                    <div className="col-8 font-9">
                        Direccion de correo registrada con la Compania de la Tarjeta de Credito (si no esta seguro Favor de llamar a la Compania de la Tarjeta de Credito).
                        Si la direccion no es correcta; corres el riesgo que tu poliza sea cancelada.
                    </div>
                    <div className="col-4">
                        <input type="checkbox" checked={chkDA} onChange={e => setChkDA(e.target.checked)}/><strong style={{color:'red'}} className="ms-1">Address same as Address Above</strong>
                    </div>
                </div>
                
                
                <div className="row text-center pt-2 fw-bold">
                    <div className="col">
                        <Input 
                            width="90%" 
                            className="text-center" 
                            maxlength="80"
                            {...(chkDA ? {value: address2} : {})}
                        />
                    </div>
                </div>

                <div className="row justify-content-center text-center fw-bold pb-2">
                    <div className="col-2">
                        <p className='mb-0'>Calle</p>
                    </div>
                    <div className="col-2">
                        <p className='mb-0'>Ciudad</p>
                    </div>
                    <div className="col-2">
                        <p className='mb-0'>Estado</p>
                    </div>
                    <div className="col-2">
                        <p className='mb-0'>Codigo Postal</p>
                    </div>
                </div>
                
            </div>
            
            <div className="container border border-3 border-dark mt-2">
                
                <div className="row text-center fw-bold" style={{background:'#b3b3b3'}}>
                    <div className="col-12">
                        Fecha de Transaccion
                    </div>
                </div>
                
                <div className="row py-2">
                    <div className="col-12 text-center">
                        El <input type="date" className='text-center'/>, yo autorizo a Adriana's Insurance Services a retirar <CurrencyFormat thousandSeparator={true} prefix={'$'} maxlength="13" className='fw-bold text-center input-default' style={{width: "90px"}}/>. Sin embargo,
                        si un balance es debido, el restante del balance de <CurrencyFormat thousandSeparator={true} prefix={'$'} maxlength="13" className='fw-bold text-center input-default' style={{width: "90px"}}/> sera cobrado el <input type="date" className='text-center'/>.
                    </div>
                </div>
                
            </div>
            
            <div className="container border border-3 border-dark mt-2">
                
                <div className="row py-2">
                    <div className="col-12">
                        
                        <p className='text-center fw-bold'>
                        ********************************** IMPORTANTE **********************************
                        </p>

                        <p> 
                            Si intentas pagar por otro individuo cualquier poliza comprada con Adriana's Insurance utilizando tu tarjeta de crédito, entonces debes
                            dar la autorizacion en esta forma. Favor de listar los nombres de aquellos individuos que estan autorizadas para usar tu tarjeta de credito
                            como pago por las polizas. Ningun otro individuo sera permitido usar la terjeta de credito para pagar otras polizas.
                        </p>

                        <div class="row pb-2 fw-bold">
                            <div class="col d-flex">
                                Usuario Autorizado #1:
                                <span className="flex-fill">
                                    <Input className="w-100 ms-1 text-center" maxlength="35" placeholder="N/A"/>
                                </span>
                            </div>
                            <div class="col d-flex">
                                Usuario Autorizado #2:
                                <span className="flex-fill">
                                    <Input className="w-100 ms-1 text-center" maxlength="35" placeholder="N/A"/>
                                </span>
                            </div>
                        </div>

                        <p> 
                            El abajo firmante por este medio declara que la informacion de credito listada abajo es verdadera, exacta y esta el nombre que figura y
                            autoriza por medio de la presente a los individuos nombrados para usar la tarjeta para comprar un seguro de Adriana's Insurance.
                            Además, autorizo a mi compañía de tarjeta de crédito para aceptar y cargar a mi cuenta para las compras iniciadas por las personas abajo
                            mencionadas. Esta autorización permite Adriana's Insurance seguir utilizando esa información y esa información permanecerá en pleno
                            vigor y efecto a menos que revocar dicha autorización por escrito.
                        </p>

                        <p className='text-center font-9 m-0'>
                            <b>Nota:</b> Cuaquier comision devengada por devolucion de cargo o de los cargos posibles seran responsabilidad del titular de la tarjeta y/o usuario autorizado.
                        </p>

                    </div>
                </div>
                
                <div className="row py-2"  style={{borderTop: '3px solid black'}}>

                    <div className='text-center fw-bold'>
                        <div>
                            Cantidad de Cobro:
                            <CurrencyFormat 
                                thousandSeparator={true} 
                                prefix={'$'}
                                maxlength="13"
                                className='fw-bold text-center input-default'
                                style={{width: "90px"}}
                                onChange = {e => setCurrency(e.target.value)}
                            />
                            (<Input className="ms-1 text-center font-9" value={words} width="575px"/>)
                        </div>
                    </div>
                </div>

                <div className='text-center mb-2 fw-bold'>
                    Dia del Cobro: <input type="date" className='text-center' style={{width: "90px"}}/>
                </div>


                <div className="row text-center pt-4 pb-2"  style={{borderTop: '3px solid black'}}>
                    <div className="col">
                        <Input className="text-center" width="300px" disabled bColor="yellow"/>
                        <p className='mb-0 fw-bold'>Firma del Titular de la Tarjeta de Credito</p>
                    </div>
                    <div className="col">
                        <Input className="text-center" width="300px" value={name}/>
                        <p className='mb-0 fw-bold'>Nombre en Letra de Molde</p>
                    </div>
                </div>
                
            </div>

        </div>
    )
}