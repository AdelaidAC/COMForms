import React, { useEffect, useState} from 'react';
import CurrencyFormat from 'react-currency-format';
import Input from '../../Input'
import Logo from '../../Logo'

export default function SBFHomeInternals({name, date}) {

    const [inputBF, setBF] = useState('');
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='sheet font-9 text-justify lh-3'>
            
            <Logo />

            <div className='d-flex justify-content-between my-3'>
                <div className='d-flex col-8'>
                    <b>Nombre del Asegurado:</b>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1 text-center fw-bold" value={name}/>
                    </span>
                </div>
                <div>
                    <b>Fecha: </b>
                    <Input value = {date} width = "80px" className = "text-center fw-bold"/>
                </div>
            </div>

            <p className='text-center fw-bold font-12 mb-0'>APENDICE A</p>
            
            <p className='mb-0'>
                <b>I. </b>No firme ningún documento a menos de que este llenado completamente en todas las líneas y espacios y usted haya leído el documento por completo y
                cuidadosamente.
                <br />
                <b>II. </b>Su bróker de seguro lo representa a usted, el consumidor, y tiene el derecho de cobrarle una cuota de bróker si él/ella decide hacerlo. Esta cuota no es establecida por
                la ley, y puede ser negociada entre usted y el corredor de seguro (Bróker).
                <br />
                <b>III. </b>Es ilegal que un bróker de seguro le cobre una cuota por colocarle cobertura únicamente a través de California Automobile Assigned Risk plan o el California Fair
                plan. Pueden aplicar cuotas por otras coberturas.
                <br />
                <b>IV. </b>Las cuotas de Bróker con frecuencia son no reembolsables aun cuando usted cancele su cobertura. Refiérase a su acuerdo de Bróker para ver si su cuota de Bróker
                es no reembolsable. Sin embargo, usted puede tener derecho a un reembolso completo si su bróker actuó de manera incompetente o deshonesta. Disputas no resueltas
                referentes a cuotas de bróker no reembolsadas pueden ser dirigidas al Departamento de Seguros para ser revisadas.
                <br />
                <b>V. </b>Usted tiene derecho a obtener y quedarse una copia de esta divulgación y cualquier acuerdo de cuota de bróker que usted firme.
                <br />
                <b>VI. </b>Su bróker puede recibir una comisión por parte de la compañía(s) de seguros por aplicar su cobertura. Esta comisión puede ser pagada a su bróker por la compañía
                de seguros además de cualquier cuota de bróker que usted pague.
                <br />
                <b>VII. </b>Si usted va a pagar su prima en pagos a una compañía financiera, por ley usted debe recibir una copia de la divulgación y acuerdo. Asegúrese de obtener y leer esos
                documentos antes de firmar un acuerdo de prima a financiada. Además pregunte a su bróker si el asegurador ofrece su propio plan de pagos. Planes de pago de
                asegurador son comúnmente más económicos que la prima de financiera a través de una prima de finanza por separado.
                <br />
                <b>VIII. </b>Si su bróker está aplicando cobertura a un automóvil, su bróker deberá proveerle con una copia de el folleto mas reciente de Seguro de Auto del Departamento de
                Seguros titulado “Automobile Insurance”. Si su bróker está aplicando cobertura residencial, su bróker deberá proveerle con una copia de un folleto del Departamento de
                Seguro de Seguros de Residencia titulado “Residencial Insurance”. Al firmar esta divulgación, usted reconoce haber recibido el folleto adecuado.
            </p>
            <br/>
            <p className='m-0'>
                Iniciales del Cliente: <Input disabled width="60px" bColor="yellow"/>
            </p>

            <p className='text-center fw-bold font-10 my-1'>DESIGNACION DE BROKER DE SEGURO Y ACUERDO PARA PAGAR CUOTA DE BROKER</p>

            <p>
                Al dia de hoy, firmante mencionado abajo nombra a Adriana's Insurance Services Inc. Numero de licencia 0D36821 de el departamento de seguros de California.
                Corredor de seguro (“Bróker”) como su bróker de seguro designado. Este acuerdo continuara en pleno vigor hasta que sea terminado por cualquiera de las dos partes.
                El corredor está de acuerdo en representar al cliente de manera honesta y competente en obtener y dar servicio la cobertura de seguro deseado, según este disponible, y
                el cliente está de acuerdo en actuar de buena fe con el corredor y proveer al corredor con la divulgación de toda la información y documentación necesaria para así
                permitir al corredor procurar una póliza de seguro. El cliente esta de acurdo en pagar una cuota de corredor por los servicios de corredor. La cuota de corredores
                adicional a cualquier comisión, comisión contingente, o bonos, los cual puedan ser pagados al corredor por la compañía de seguros. Los servicios adicionales estan
                detallados a continuación. El cliente autoriza al corredor cancelar su seguro si la prima o cuotas permanecen si ser pagados al corredor (Broker).
                <br/>
                <br/>
                El honorario del <b>Broker es</b> <CurrencyFormat 
                    onChange={e => setBF(e.target.value)} 
                    {...(inputBF === "" ? {style: {width: "100px", backgroundColor: 'yellow'}} : {style: {width: "100px"}})}
                    thousandSeparator={true} 
                    prefix={'$'} 
                    maxlength="10"
                    className='fw-bold text-center input-default'
                /> (Iniciales del Cliente: <Input disabled width="60px" bColor="yellow"/>). El cliente está de acuerdo en pagar esta cuota y entiende que los honorarios <b>SON / <span className='bf-radius'>NO SON REEMBOLSABLES</span></b> independientemente de que la póliza sea cancelada o rechazada por el cliente o la aseguradora. El cliente
                autoriza al corredor mantener los pagos de las primas en cuentas de fideicomiso y recibir cualquier ingreso por intereses del de las mismas, hasta que sea pagado a la
                compañía de seguros. Servicios adicionales: el corredor puede cobrarlos siguientes tarifas por los siguientes servicios por encima de la cuota.            
            </p>

            <table className='table table-fit text-center'>
                <tbody>
                    <tr className="text-decoration-underline fw-bold tr-h">
                        <td>Servicios:</td>
                        <td>Honorarios:</td>
                        <td>Servicios:</td>
                        <td>Honorarios:</td>
                        <td>Servicios:</td>
                        <td>Honorarios:</td>
                        <td>Servicios:</td>
                        <td>Honorarios:</td>
                    </tr>
                    <tr className="tr-h">
                        <td>
                            <b>Endorsment:</b>
                        </td>
                        <td>
                            Up to $300 
                            <br/>
                            per transaction
                        </td>
                        <td>
                            <b>Monthly Payments:</b>
                        </td>
                        <td>
                            $15.00
                        </td>
                        <td>
                            <b>Reinstatement Fee/Late 
                            <br/>
                            Payment Fee:</b>
                        </td>
                        <td>
                            Up to 
                            <br/>
                            $50.00
                        </td>
                        <td>
                            <b>Registration 
                            <br/>    
                            Renewal Fee:</b>
                        </td>
                        <td>
                            $48.00 
                            <br/>
                            per vehicle
                        </td>
                    </tr>
                    <tr className="tr-h">
                        <td>
                            <b>DocuSign:</b>
                        </td>
                        <td>
                            $10.00 per 
                            <br/>
                            Transaction
                        </td>
                        <td>
                            <b>Credit Card Service 
                            <br/>
                            Fee:</b>
                        </td>
                        <td>
                            $1.00
                        </td>
                        <td>
                            <b>DMV Transfer Title:</b>
                        </td>
                        <td>
                            $148.00
                        </td>
                        <td>
                            <b>DMV Removed 
                            <br/>
                            Suspension:</b>
                        </td>
                        <td>
                            Service Fee 
                            <br/>
                            $15.71
                        </td>
                    </tr>
                    <tr className="tr-h">
                        <td>
                            <b>MVR:</b>
                        </td>
                        <td>
                            $10.00 per driver
                            <br/>
                            by transaction
                        </td>
                        <td>
                            <b>Agency Renewal:</b>
                        </td>
                        <td>
                            Up to 100% of 
                            <br/>
                            Original BrokerFee
                        </td>
                        <td>
                            <b>Non-Sufficient Funds on 
                            <br/>    
                            Credit Card/Check/Chargeback:</b>
                        </td>
                        <td>
                            $35.00
                        </td>
                        <td>
                            <b>Promo Registration 
                            <br/>
                            Renewal Fee:</b>
                        </td>
                        <td>
                            $8.50 P.F.
                            <br/>
                            Reg. per vehicle
                        </td>
                    </tr>
                    <tr className="tr-h">
                        <td>
                            <b>BF MK:</b>
                        </td>
                        <td>
                            $10.00 per Transaction
                            <br/>
                            NB or Endo
                        </td>
                        <td>
                            <b>Late Fee on 
                            <br/>    
                            Balance/Invoice:</b>
                        </td>
                        <td>
                            Up to 
                            <br/>
                            $30.00
                        </td>
                        <td>
                            <b>DMV
                            <br/>
                            Vehicle Verification:</b>
                        </td>
                        <td>
                            Up to $10.00
                            <br/>
                            per Vehicle
                        </td>
                        <td>
                            <b>Promo 
                            <br/>
                            Title Change:</b>
                        </td>
                        <td>
                            $74.00 
                            <br/>
                            per vehicle
                        </td>
                    </tr>
                </tbody>
            </table>

            <p className='mb-1'>
                <b>PAGOS DE PRIMAS: </b> 
                El corredor puede, en su única opción, aceptar pagos de la cuota de prima y transmitir el pago a la aseguradora por una cuota adicional de $15.00 por cada pago recibido. 
                Los pagos deben ser recibidos por el corredor a no menos de dos (2) días hábiles previos a la fecha de vencimiento. El corredor no será responsable por pagos tardíos, cuotas de reinstalación, 
                o la cancelación resultante de su póliza. La responsabilidad del corredor por aceptar el pago de primas será limitada a la cantidad del pago de la prima.
            </p>

            <p className='text-center fw-bold font-10 my-1'>CANCELACION Y OTRAS DISPOSICIONES VARIAS</p>
            
            <p>
                El corredor únicamente honrara solicitudes de cancelación hechas por escrito y firmadas por el cliente. El corredor puede proveer al cliente con tarjetas de identificación
                de seguro al término del proceso de aplicación. El cliente reconoce y acepta que la cobertura no es prevista hasta que la aplicación sea suscrita y ceptada por la compañía
                de seguro. En consecuencia, la tarjeta de identificación no puede ser utilizada como prueba de seguro por el cliente hasta que la compañía de seguro haya comprometido y
                emitido cobertura como lo demuestra la hoja de declaración y/o póliza. El cliente entiende que un numero de “binder” no es prueba de seguro antes de que la hoja de
                declaración sea emitida. El corredor y el cliente están de acuerdo con el arbitraje obligatorio con ADR de cualquier disputa en el cual la cantidad reclamada exceda la
                jurisdicción de la corte de reclamos pequeños bajo las reglas establecidas por ADR, de conformidad con el código civil de procedimientos de California, in derecho a apelación.
            </p>

            <div className='d-flex justify-content-between mt-3 mx-5 pt-3 text-center fw-bold'>
                <div>
                    <Input width="300px" className="text-center" disabled bColor="yellow"/>
                    <p>Firma del Asegurado</p>
                </div>
                <div>
                    <Input width="300px" className="text-center" disabled/>
                    <p>Firma del Agente</p>
                </div>
            </div>
            
            <p className='text-center mt-2 fw-bold'>
                Si usted tiene cualquier pregunta o queja por favor comuníquese al nuestro teléfono gratuito de servicio al cliente al 1-888-290-4040. En cualquier caso de preguntas/problemas referente a la
                cuota de corredor o seguro, contacte al Departamento de Seguros al 1-800-927-HELP.
            </p>
        </div>
    )
}