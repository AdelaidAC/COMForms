import React, { useEffect, useState} from 'react';
import Input from "../../Input";
import Logo from "../../Logo";

export default function SDriverExclusion({name}) {

    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      return (
        <div className="sheet font-12 text-justify">
            
            <Logo />

            <p className='fw-bold font-14 text-center my-4'>
                EXCLUSION DE CONDUCTORES
            </p>
            
            <p>
                Abajo estan nombradas todas las personas, excepto las listadas como conductor, que viven con <Input width="400px" className="text-center fw-bold" value={name}/> incluyendo
                todos los menores que estan en escuela o en las fuerza armadas seran excluidos de la covertura a menos que se listen como conductores. El
                asegurado esta de acuerdo reembolsar a la Compañia por el pago echo a Compañia para una perdida de beneficiario, ya sea por la perdida en
                operaciones o uso de un vehiculo motorizado por cualquier persona listadas abajo.
            </p>

            <table className='w-100 border border-dark'>
                <tr className='fw-bold text-center'>
                    <td>Nombre</td>
                    <td>Sexo</td>
                    <td>Estatus</td>
                    <td>Relación</td>
                </tr>
                <tr className='text-center'>
                    <td><Input width="400px" className="text-center fw-bold" maxlength="40"/></td>
                    <td>
                        <select className='text-center'>
                            <option>Masculino</option>
                            <option>Femenino</option>
                        </select>
                    </td>
                    <td>
                        <select className='text-center'>
                            <option>Soltero</option>
                            <option>Casado</option>
                            <option>Separado</option>
                            <option>Divorciado</option>
                            <option>Viudo</option>
                            <option>RDP</option>
                            <option>UDP</option>
                        </select>
                    </td>
                    <td>
                        <select className='text-center'>
                            <option>Esposo(a)</option>
                            <option>Hijo(a)</option>
                            <option>Hermano(a)</option>
                            <option>Padre/Madre</option>
                            <option>Familiar-Otro</option>
                            <option>Pareja</option>
                            <option>Pareja Domestica</option>
                            <option>Empleado</option>
                            <option>No-Familiar-Otro</option>
                        </select>
                    </td>
                </tr>
                <tr className='text-center'>
                    <td><Input width="400px" className="text-center fw-bold" maxlength="40"/></td>
                    <td>
                        <select className='text-center'>
                            <option>Masculino</option>
                            <option>Femenino</option>
                        </select>
                    </td>
                    <td>
                        <select className='text-center'>
                            <option>Soltero</option>
                            <option>Casado</option>
                            <option>Separado</option>
                            <option>Divorciado</option>
                            <option>Viudo</option>
                            <option>RDP</option>
                            <option>UDP</option>
                        </select>
                    </td>
                    <td>
                        <select className='text-center'>
                            <option>Esposo(a)</option>
                            <option>Hijo(a)</option>
                            <option>Hermano(a)</option>
                            <option>Padre/Madre</option>
                            <option>Familiar-Otro</option>
                            <option>Pareja</option>
                            <option>Pareja Domestica</option>
                            <option>Empleado</option>
                            <option>No-Familiar-Otro</option>
                        </select>
                    </td>
                </tr>
                <tr className='text-center'>
                    <td><Input width="400px" className="text-center fw-bold" maxlength="40"/></td>
                    <td>
                        <select className='text-center'>
                            <option>Masculino</option>
                            <option>Femenino</option>
                        </select>
                    </td>
                    <td>
                        <select className='text-center'>
                            <option>Soltero</option>
                            <option>Casado</option>
                            <option>Separado</option>
                            <option>Divorciado</option>
                            <option>Viudo</option>
                            <option>RDP</option>
                            <option>UDP</option>
                        </select>
                    </td>
                    <td>
                        <select className='text-center'>
                            <option>Esposo(a)</option>
                            <option>Hijo(a)</option>
                            <option>Hermano(a)</option>
                            <option>Padre/Madre</option>
                            <option>Familiar-Otro</option>
                            <option>Pareja</option>
                            <option>Pareja Domestica</option>
                            <option>Empleado</option>
                            <option>No-Familiar-Otro</option>
                        </select>
                    </td>
                </tr>
                <tr className='text-center'>
                    <td><Input width="400px" className="text-center fw-bold" maxlength="40"/></td>
                    <td>
                        <select className='text-center'>
                            <option>Masculino</option>
                            <option>Femenino</option>
                        </select>
                    </td>
                    <td>
                        <select className='text-center'>
                            <option>Soltero</option>
                            <option>Casado</option>
                            <option>Separado</option>
                            <option>Divorciado</option>
                            <option>Viudo</option>
                            <option>RDP</option>
                            <option>UDP</option>
                        </select>
                    </td>
                    <td>
                        <select className='text-center'>
                            <option>Esposo(a)</option>
                            <option>Hijo(a)</option>
                            <option>Hermano(a)</option>
                            <option>Padre/Madre</option>
                            <option>Familiar-Otro</option>
                            <option>Pareja</option>
                            <option>Pareja Domestica</option>
                            <option>Empleado</option>
                            <option>No-Familiar-Otro</option>
                        </select>
                    </td>
                </tr>
                <tr className='text-center'>
                    <td><Input width="400px" className="text-center fw-bold" maxlength="40"/></td>
                    <td>
                        <select className='text-center'>
                            <option>Masculino</option>
                            <option>Femenino</option>
                        </select>
                    </td>
                    <td>
                        <select className='text-center'>
                            <option>Soltero</option>
                            <option>Casado</option>
                            <option>Separado</option>
                            <option>Divorciado</option>
                            <option>Viudo</option>
                            <option>RDP</option>
                            <option>UDP</option>
                        </select>
                    </td>
                    <td>
                        <select className='text-center'>
                            <option>Esposo(a)</option>
                            <option>Hijo(a)</option>
                            <option>Hermano(a)</option>
                            <option>Padre/Madre</option>
                            <option>Familiar-Otro</option>
                            <option>Pareja</option>
                            <option>Pareja Domestica</option>
                            <option>Empleado</option>
                            <option>No-Familiar-Otro</option>
                        </select>
                    </td>
                </tr>
            </table>

            <p className='mt-3'>
                He listado todos los conductores en esta aplicación. Esta incluye cualquiera que pueda manejar mi vehiculo(s) regular o frecuentemente, hijos que
                no vivan en casa o que estén estudiando lejos de casa, y todas las personas de la edad de 14 o mayores que viven en mi domicilio, con licencia y/o
                sin licencia. Yo tambien estoy de acuerdo en notiicar a Adriana's Insurance Services Inc. en caso de cualquier cambio en los conductores o personas
                con licencia que viven en mi domicilio.
                <br/><br/>
                Yo entiendo que cualquiera de la edad de 14 y mas viviendo en casa no importando el parentesco (incluyendo todos los niños, parientes,
                amigos, empleados o compañeros de cuerto) estan excluidos de la covertura.
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
                    <p>Fima del Agente</p>
                </div>
            </div>

            <p className='fw-bold font-14 text-center my-2'>
                COMMERCIAL, PROFESSIONAL & BUSINESS USE EXCLUSION
            </p>
            
            <p>
                Yo <Input width="400px" className="text-center fw-bold" value={name}/> entiendo y estoy de acuerdo de que mi vehículo es usado <b>únicamente</b> para placer y para ir y venir de
                mi lugar de empleo y que no es utilizado en el transcurso del ejercicio de mi negocio. De igual manera entiendo y estoy de acuerdo
                que la cobertura de esta póliza no beneficiara a cualquier asegurado o reclamo de una tercera persona cuando el vehículo sea utilizado
                de cualquier manera aparte de la descrita anteriormente.
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

        </div>
    );
}