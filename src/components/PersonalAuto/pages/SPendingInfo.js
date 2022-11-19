import React from "react";
import Input from "../../Input";
import Logo from "../../Logo";

export default function SPendingInfo({name, date}) {

    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      return (
        <div className="sheet font-11 text-justify lh-5">
            
            <Logo />

            <p className='fw-bold font-14 text-center my-4'>
                PROMESA DE PROPORCIONAR DOCUMENTACION
            </p>

            <div className='d-flex justify-content-between mb-3'>
                <div className='d-flex col-8'>
                    <b>Nombre:</b>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1 text-center fw-bold" value={name}/>
                    </span>
                </div>
                <div>
                    <b>Fecha: </b>
                    <Input value = {date} width = "80px" className = "text-center fw-bold"/>
                </div>
            </div> 
            
            <p>
                En caso que la información no sea proporcionada en 5 dias laborales de la fecha mencionada, entiendo que
                una cierta parte o toda mi cobertura puede estar conforme a un aumento superior, a una cancelación, o a un
                rechazamiento, sin cobertura en efecto. Entiendo que si mas adelante acurre un aumento superior, una cancelación
                o un rechazamiento porque no puedo proporsionar la información indicada abajo, puedo perder toda o una parte de
                mi pago inicial para la fecha mencionada arriba y puedo incurrir en una perdida financiera.
            </p>

            <table className='w-100'>
                <tr>
                    <td>A:</td>
                    <td className='col-3'>Copia de Licencia para los conductores:</td>
                    <td>1 <Input className="text-center fw-bold" width="100px"/></td>
                    <td>2 <Input className="text-center fw-bold" width="100px"/></td>
                    <td>3 <Input className="text-center fw-bold" width="100px"/></td>
                    <td>4 <Input className="text-center fw-bold" width="100px"/></td>
                </tr>
                <tr>
                    <td>B:</td>
                    <td>Copia de Licencia Extranjera para los conductores:</td>
                    <td>1 <Input className="text-center fw-bold" width="100px"/></td>
                    <td>2 <Input className="text-center fw-bold" width="100px"/></td>
                    <td>3 <Input className="text-center fw-bold" width="100px"/></td>
                    <td>4 <Input className="text-center fw-bold" width="100px"/></td>
                </tr>
                <tr>
                    <td>C:</td>
                    <td>Prueba de Licencia de CA valida (Renovacion) para:</td>
                    <td>1 <Input className="text-center fw-bold" width="100px"/></td>
                    <td>2 <Input className="text-center fw-bold" width="100px"/></td>
                    <td>3 <Input className="text-center fw-bold" width="100px"/></td>
                    <td>4 <Input className="text-center fw-bold" width="100px"/></td>
                </tr>
                <tr>
                    <td>D:</td>
                    <td>Actual Registración del vehiculo para el asegurado:</td>
                    <td>1 <Input className="text-center fw-bold" width="100px"/></td>
                    <td>2 <Input className="text-center fw-bold" width="100px"/></td>
                    <td>3 <Input className="text-center fw-bold" width="100px"/></td>
                    <td>4 <Input className="text-center fw-bold" width="100px"/></td>
                </tr>
                <tr>
                    <td>E:</td>
                    <td>Vehiculo para Inspección Fisica o Fotos para: (Traer Vehiculos a la oficina)</td>
                    <td>1 <Input className="text-center fw-bold" width="100px"/></td>
                    <td>2 <Input className="text-center fw-bold" width="100px"/></td>
                    <td>3 <Input className="text-center fw-bold" width="100px"/></td>
                    <td>4 <Input className="text-center fw-bold" width="100px"/></td>
                </tr>
                <tr>
                    <td>F:</td>
                    <td>Información de Actual Dueño de los Vehiculos:</td>
                    <td>1 <Input className="text-center fw-bold" width="100px"/></td>
                    <td>2 <Input className="text-center fw-bold" width="100px"/></td>
                    <td>3 <Input className="text-center fw-bold" width="100px"/></td>
                    <td>4 <Input className="text-center fw-bold" width="100px"/></td>
                </tr>
                <tr>
                    <td>G:</td>
                    <td>Pago en la Cantidad de:</td>
                    <td>$ <Input className="text-center fw-bold" width="100px"/></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>

            <div class="row w-100 my-4">
                <div class="col-6">
                    <table>
                        <tr>
                            <td>
                                <input type="checkbox"/> Prueba de Matrimonio (Taxes, Certificado, Acta Notarial) Si no es presentada, puede aplicar precio de soltero.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox"/> Prueba de forms SR-22 activa.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox"/> Prueba de Buen Estudiante.
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <input type="checkbox"/> Cheque Anulado.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox"/> <Input className="text-center fw-bold" width="300px" maxlength="35"/>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="col-6">
                    <table>
                        <tr>
                            <td>
                                <input type="checkbox"/> Dirección con estacionamiento (Factura de Luz con el nombre del asegurado).
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox"/> Prueba de No-Culpabilidad o No-Lesiones en Accidente.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox"/> Prueba de Aseguranza con vencimiento a futuro.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox"/> Esta fue una cita del Centro de Llamadas?
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="checkbox"/> <Input className="text-center fw-bold" width="300px" maxlength="35"/>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>

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

        </div>
    );
}