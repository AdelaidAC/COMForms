import React from "react";
import Input from "../../Input";
import Logo from "../../Logo";

export default function SVehicle({name, date}) {

    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      return (
        <div className="sheet font-10 text-justify lh-2">
            
            <Logo />

            <div className='d-flex justify-content-between mt-2'>
                <div className='d-flex col-8'>
                    <b>Nombre del Cliente:</b>
                    <span className="flex-fill">
                        <Input className="w-100 ms-1 text-center fw-bold" value={name}/>
                    </span>
                </div>
                <div>
                    <b>Fecha: </b>
                    <Input value = {date} width = "80px" className = "text-center fw-bold"/>
                </div>
            </div>  

            <p className='fw-bold font-12 text-center my-2'>
                LEER ANTES DE FIRMAR
            </p>
            
            <p className='fw-bold mt-0 mb-2'>
                CUALQUIER PERSONA QUIEN, CON INTENCION DE COMETER FRAUDE O QUE CON CONOCIMIENTO DE QUE ESTA
                FACILITANDO COMETER FRAUDE EN CONTRA DE UNA ASEGURADORA, SOMETE UNA APLICACION O LEVANTA UN
                RECLAMO CONTENIENDO UNA DECLARACION FALSA O DECEPTIVA ESTA COMETIENDO FRAUDE DE SEGURO Y
                SERA SANCIONADO CON LA PENA MAXIMA DE LA LEY.
            </p>

            <p className='m-0'>
                Por este medio yo aplico a Adriana's Insurance Services Inc. (“Broker”) para una póliza de seguro como se presenta en la aplicación en base a las
                declaraciones contenidas en la misma. <b>Al firmar a continuación yo entiendo que esta aplicación se convierte en parte de mi póliza y es un
                documento legal y certifico que:</b>
                <br/>
                1. He nombrado a todos los conductores de los vehículos en esta aplicación. Esto incluye a cualquier persona que pueda conducir mi(s) vehiculo(s) en
                base regular o cotidiana, hijos que no vivan en casa o que estén estudiando lejos de casa, y cualquier persona de 15 años o mayor que viva en mi
                domicilio. Yo estoy de acuerdo en notificar a mi bróker de cualquier cambio de conductores o de licencia de los residentes del domicilio.
                <br/>
                2. Yo he reportado cualquier uso comercial o de negocios de mi vehículo a mi corredora de seguros ("Bróker"). Yo entiendo que el uso de negocios de
                me vehículo no está cubierto, a menos de que yo haya estipulado el uso especifico en esta aplicación, y de que haya pagado una prima por el endoso
                de uso de negocios.
                <br/>
                3. Mi dirección de residencia principal y lugar de estacionamiento de mi vehículo es (son) la(s) descrita(s) en esta aplicación por diez (10) meses o
                más al año.
                <br/>
                4. Cualquier equipo especial adicional o hecha a la medida que yo desee que tenga cobertura ha sido declarada en esta aplicación y una prima ha sido
                pagada por esta cobertura adicional.
            </p>

            <p className='fw-bold font-12 text-center mt-2 mb-1'>
                COVERTURAS
            </p>
            
            <p className='mt-0 mb-2'>
                Yo, el abajo firmante confirmo que Adriana's Insurnace Services Inc. Corredora de seguros ("Bróker") me ha explicado el significado entero de la
                cobertura del seguro "Liability: daños a terceras personas. Cobertura de seguro que es requerida por la ley estatal de California; el significado
                completo de la cobertura comprensiva y de la colisión de seguro; Lesión corporal del motorista sin seguro; Cobertura sin seguro de los daños
                materiales del motorista; y cobertura médica del pago. El infrascrito elige la cobertura de seguro: <b>Iniciales, Limites o Escriba “None”.</b>
            </p>

            <table className='border border-dark w-100'>
                <tr className='text-center fw-bold tr-h'>
                   <td className='col-3'>VEHICULOS</td> 
                   <td><Input className="text-center fw-bold w-100" maxLength="15"/></td>
                   <td><Input className="text-center fw-bold w-100" maxLength="15"/></td>
                   <td><Input className="text-center fw-bold w-100" maxLength="15"/></td>
                   <td><Input className="text-center fw-bold w-100" maxLength="15"/></td>
                   <td><Input className="text-center fw-bold w-100" maxLength="15"/></td>
                   <td>Iniciales</td>
                </tr>
                <tr className='tr-h'>
                    <td>Liability: Property Damage</td> 
                    <td>
                        <input list="r1-1" className="input-default text-center fw-bold w-100" maxLength="5"/>
                        <datalist id="r1-1">
                            <option>5</option>
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                            <option>100</option>
                            <option>None</option>
                        </datalist>
                    </td>
                    <td>
                        <input list="r1-2" className="input-default text-center fw-bold w-100" maxLength="5"/>
                        <datalist id="r1-2">
                            <option>5</option>
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                            <option>100</option>
                            <option>None</option>
                        </datalist>
                    </td>
                    <td>
                        <input list="r1-3" className="input-default text-center fw-bold w-100" maxLength="5"/>
                        <datalist id="r1-3">
                            <option>5</option>
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                            <option>100</option>
                            <option>None</option>
                        </datalist>
                    </td>
                    <td>
                    <input list="r1-4" className="input-default text-center fw-bold w-100" maxLength="5"/>
                        <datalist id="r1-4">
                            <option>5</option>
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                            <option>100</option>
                            <option>None</option>
                        </datalist>
                    </td>
                    <td>
                    <input list="r1-5" className="input-default text-center fw-bold w-100" maxLength="5"/>
                        <datalist id="r1-5">
                            <option>5</option>
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                            <option>100</option>
                            <option>None</option>
                        </datalist>
                    </td>
                    <td className='text-center'><Input bColor="yellow" disabled width="60px"/></td>
                </tr>
                <tr className='tr-h'>
                    <td>Liability: Bodily Injury</td> 
                    <td>
                        <input list="r2-1" className="input-default text-center fw-bold w-100" maxLength="5"/>
                        <datalist id="r2-1">
                            <option>15/30</option>
                            <option>25/50</option>
                            <option>50/100</option>
                            <option>100/300</option>
                            <option>None</option>
                        </datalist>
                    </td>
                    <td>
                        <input list="r2-2" className="input-default text-center fw-bold w-100" maxLength="5"/>
                        <datalist id="r2-2">
                            <option>15/30</option>
                            <option>25/50</option>
                            <option>50/100</option>
                            <option>100/300</option>
                            <option>None</option>
                        </datalist>
                    </td>
                    <td>
                        <input list="r2-3" className="input-default text-center fw-bold w-100" maxLength="5"/>
                        <datalist id="r2-3">
                            <option>15/30</option>
                            <option>25/50</option>
                            <option>50/100</option>
                            <option>100/300</option>
                            <option>None</option>
                        </datalist>
                    </td>
                    <td>
                    <input list="r2-4" className="input-default text-center fw-bold w-100" maxLength="5"/>
                        <datalist id="r2-4">
                            <option>15/30</option>
                            <option>25/50</option>
                            <option>50/100</option>
                            <option>100/300</option>
                            <option>None</option>
                        </datalist>
                    </td>
                    <td>
                    <input list="r2-5" className="input-default text-center fw-bold w-100" maxLength="5"/>
                        <datalist id="r2-5">
                            <option>15/30</option>
                            <option>25/50</option>
                            <option>50/100</option>
                            <option>100/300</option>
                            <option>None</option>
                        </datalist>
                    </td>
                    <td className='text-center'><Input bColor="yellow" disabled width="60px"/></td>
                </tr>
                <tr className='tr-h'>
                    <td>Medical Payment (per person)</td> 
                    <td>
                        <input list="r3-1" className="input-default text-center fw-bold w-100" maxLength="5"/>
                        <datalist id="r3-1">
                            <option>None</option>
                            <option>.5</option>
                            <option>1</option>
                            <option>2</option>
                            <option>5</option>
                            <option>10</option>
                        </datalist>
                    </td>
                    <td>
                        <input list="r3-2" className="input-default text-center fw-bold w-100" maxLength="5"/>
                        <datalist id="r3-2">
                            <option>None</option>
                            <option>.5</option>
                            <option>1</option>
                            <option>2</option>
                            <option>5</option>
                            <option>10</option>
                        </datalist>
                    </td>
                    <td>
                        <input list="r3-3" className="input-default text-center fw-bold w-100" maxLength="5"/>
                        <datalist id="r3-3">
                            <option>None</option>
                            <option>.5</option>
                            <option>1</option>
                            <option>2</option>
                            <option>5</option>
                            <option>10</option>
                        </datalist>
                    </td>
                    <td>
                    <input list="r3-4" className="input-default text-center fw-bold w-100" maxLength="5"/>
                        <datalist id="r3-4">
                            <option>None</option>
                            <option>.5</option>
                            <option>1</option>
                            <option>2</option>
                            <option>5</option>
                            <option>10</option>
                        </datalist>
                    </td>
                    <td>
                    <input list="r3-5" className="input-default text-center fw-bold w-100" maxLength="5"/>
                        <datalist id="r3-5">
                            <option>None</option>
                            <option>.5</option>
                            <option>1</option>
                            <option>2</option>
                            <option>5</option>
                            <option>10</option>
                        </datalist>
                    </td>
                    <td className='text-center'><Input bColor="yellow" disabled width="60px"/></td>
                </tr>
                <tr className='tr-h'>
                    <td>Uninsured Motorist: Bodily Injury</td> 
                    <td>
                        <input list="r4-1" className="input-default text-center fw-bold w-100" maxLength="5"/>
                        <datalist id="r4-1">
                            <option>None</option>
                            <option>15/30</option>
                            <option>25/50</option>
                            <option>30/60</option>
                            <option>50/100</option>
                            <option>100/300</option>
                        </datalist>
                    </td>
                    <td>
                        <input list="r4-2" className="input-default text-center fw-bold w-100" maxLength="5"/>
                        <datalist id="r4-2">
                            <option>None</option>
                            <option>15/30</option>
                            <option>25/50</option>
                            <option>30/60</option>
                            <option>50/100</option>
                            <option>100/300</option>
                        </datalist>
                    </td>
                    <td>
                        <input list="r4-3" className="input-default text-center fw-bold w-100" maxLength="5"/>
                        <datalist id="r4-3">
                            <option>None</option>
                            <option>15/30</option>
                            <option>25/50</option>
                            <option>30/60</option>
                            <option>50/100</option>
                            <option>100/300</option>
                        </datalist>
                    </td>
                    <td>
                    <input list="r4-4" className="input-default text-center fw-bold w-100" maxLength="5"/>
                        <datalist id="r4-4">
                            <option>None</option>
                            <option>15/30</option>
                            <option>25/50</option>
                            <option>30/60</option>
                            <option>50/100</option>
                            <option>100/300</option>
                        </datalist>
                    </td>
                    <td>
                    <input list="r4-5" className="input-default text-center fw-bold w-100" maxLength="5"/>
                        <datalist id="r4-5">
                            <option>None</option>
                            <option>15/30</option>
                            <option>25/50</option>
                            <option>30/60</option>
                            <option>50/100</option>
                            <option>100/300</option>
                        </datalist>
                    </td>
                    <td className='text-center'><Input bColor="yellow" disabled width="60px"/></td>
                </tr>
                <tr className='tr-h'>
                    <td>Uninsured Motorist: Property Damage / CDW</td> 
                    <td>
                        <input list="r5-1" className="input-default text-center fw-bold w-100" maxLength="5"/>
                        <datalist id="r5-1">
                            <option>None</option>
                            <option>3.5</option>
                            <option>5</option>
                            <option>CDW</option>
                        </datalist>
                    </td>
                    <td>
                        <input list="r5-2" className="input-default text-center fw-bold w-100" maxLength="5"/>
                        <datalist id="r5-2">
                            <option>None</option>
                            <option>3.5</option>
                            <option>5</option>
                            <option>CDW</option>
                        </datalist>
                    </td>
                    <td>
                        <input list="r5-3" className="input-default text-center fw-bold w-100" maxLength="5"/>
                        <datalist id="r5-3">
                            <option>None</option>
                            <option>3.5</option>
                            <option>5</option>
                            <option>CDW</option>
                        </datalist>
                    </td>
                    <td>
                    <input list="r5-4" className="input-default text-center fw-bold w-100" maxLength="5"/>
                        <datalist id="r5-4">
                            <option>None</option>
                            <option>3.5</option>
                            <option>5</option>
                            <option>CDW</option>
                        </datalist>
                    </td>
                    <td>
                    <input list="r5-5" className="input-default text-center fw-bold w-100" maxLength="5"/>
                        <datalist id="r5-5">
                            <option>None</option>
                            <option>3.5</option>
                            <option>5</option>
                            <option>CDW</option>
                        </datalist>
                    </td>
                    <td className='text-center'><Input bColor="yellow" disabled width="60px"/></td>
                </tr>
                <tr className='tr-h'>
                    <td>Comprehensive & Collision</td> 
                    <td>
                        <input list="r6-1" className="input-default text-center fw-bold w-100" maxLength="5"/>
                        <datalist id="r6-1">
                            <option>None</option>
                            <option>250/250</option>
                            <option>500/500</option>
                            <option>750/750</option>
                            <option>1000/1000</option>
                            <option>1500/1500</option>
                        </datalist>
                    </td>
                    <td>
                        <input list="r6-2" className="input-default text-center fw-bold w-100" maxLength="5"/>
                        <datalist id="r6-2">
                            <option>None</option>
                            <option>250/250</option>
                            <option>500/500</option>
                            <option>750/750</option>
                            <option>1000/1000</option>
                            <option>1500/1500</option>
                        </datalist>
                    </td>
                    <td>
                        <input list="r6-3" className="input-default text-center fw-bold w-100" maxLength="5"/>
                        <datalist id="r6-3">
                            <option>None</option>
                            <option>250/250</option>
                            <option>500/500</option>
                            <option>750/750</option>
                            <option>1000/1000</option>
                            <option>1500/1500</option>
                        </datalist>
                    </td>
                    <td>
                    <input list="r6-4" className="input-default text-center fw-bold w-100" maxLength="5"/>
                        <datalist id="r6-4">
                            <option>None</option>
                            <option>250/250</option>
                            <option>500/500</option>
                            <option>750/750</option>
                            <option>1000/1000</option>
                            <option>1500/1500</option>
                        </datalist>
                    </td>
                    <td>
                    <input list="r6-5" className="input-default text-center fw-bold w-100" maxLength="5"/>
                        <datalist id="r6-5">
                            <option>None</option>
                            <option>250/250</option>
                            <option>500/500</option>
                            <option>750/750</option>
                            <option>1000/1000</option>
                            <option>1500/1500</option>
                        </datalist>
                    </td>
                    <td className='text-center'><Input bColor="yellow" disabled width="60px"/></td>
                </tr>
            </table>

            <p className='fw-bold font-12 text-center mt-2 mb-1'>
                DIVULGACION DEL RECORD DE MANEJO
            </p>
            
            <p className='m-0'>
                Entiendo y reconozco que todas las tarifas son basadas en los hechos que yo haya divulgado. Si los archivos mostrados en el Motor Vehicle Report y el reporte C.L.U.E.
                son diferentes de los records que yo haya declarado a continuación, mi prima será sujeta a cambios, o mi póliza(s) puede(n) ser cancelada(s), o mi aplicación pudiera ser
                rechazada <b>y ninguna cobertura de seguro será obligada o en efecto. Además, en el caso de que alguna licencia de manejo sea suspendida, revocada o invalida,
                ninguna cobertura será obligada o estará en efecto.</b>
            </p>

            <p className='mt-2 text-end'>
                Iniciales: <Input disabled width="60px" bColor="yellow"/>
            </p>

            <p className='fw-bold font-12 text-center mt-2 mb-1'>
                EXCLUSION PARA: MOTORISTA NO ASEGURADO LESION CORPORAL Y MOTORISTA NO ASEGURADO DAÑOS A PROPIEDAD. MOTORISTA CON
                COBERTURA INSUFICIENTE DAÑO CORPORAL Y MOTORISTA CON COBERTURA INSUFICIENTE DAÑO A PROPIEDAD.
            </p>
            
            <p className='m-0'>
                Yo, el abajo firmante, reconozco que a pesar de las recomendaciones de mi corredora de seguro (“Bróker”), yo he aplicado únicamente para seguro de responsabilidad, y que
                ninguna otra cobertura está incluida a menos de que sea descrita en mi póliza de seguro. Yo no he aplicado para cobertura de motorista sin seguro/ insuficiente daños
                corporales y/o cobertura de motorista sin seguro/ insuficiente daños a propiedad, además reconozco que no tendré cobertura a daño materiales a menos de que y hasta que yo
                solicite tal cobertura por escrito y pague la prima adicional. Posteriormente si decido agregar cobertura de motorista sin seguro/insuficiente daños corporales y/o cobertura de
                motorista sin seguro/ insuficiente daños a propiedad a cualquiera de mi(s) vehiculo(s) esta declaración se hará nula e invalida.
            </p>

            <p className='mt-2 text-end'>
                Iniciales: <Input disabled width="60px" bColor="yellow"/>
            </p>

            <p className='fw-bold mt-0 mb-1'>
                Favor de pedir al asegurado que escriba las siguientes palabras "YO HE LEIDO Y ENTIENDO ESTA EXCLUSION" en la linea abajo.
            </p>

            <Input className="w-100" disabled bColor="yellow"/>

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