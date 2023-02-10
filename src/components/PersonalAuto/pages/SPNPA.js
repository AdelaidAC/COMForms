import React, { useEffect, useState} from 'react';
import Input from '../../Input'
import Logo from '../../Logo'
import Subtitle from '../../Subtitle'
import { ToWords } from 'to-words';
import CurrencyFormat from 'react-currency-format';

export default function SPNPA({name, sn, city, state, zipcode/*address*/, phone}) {

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
        <div className='sheet font-11 text-justify'>
            
            <Logo />


            <p className='text-center fw-bold font-16 my-3'>CARTA DE PROMESA</p>

            <p className='lh-4'>
                La nota siguiente es un instrumento negociable, que le ata legalmente, el fabricante, al funcionamiento legal de los terminos en esto.
                Este intrumento lleva la fuerza y el efecto completo de un instrumento negociable, y concede siertos derechos y fuerza al sostenedor
                de la nota. Alguna persona quien ejecute este documento con la intension de deshonrarlo puede ser acusado de fraude, o de otro cargo
                criminal o civil. Ademas, en la consideracion de esta extencion del credito, yo autorizo a Adriana's Insurance Services Inc. obtener mi
                reporte de credito y dibulgar mi estado de credito a la oficina corespondiente.
            </p>

            <div className='d-flex p-0'>
                <span className='me-1'>Yo (Nosotros),</span> <span className="flex-fill"><Input className="w-100 text-center" value={name}/></span>, el abajo firmante(s),
            </div>

            <div className='d-flex w-100 p-0'>
                <span className='me-1'>Actualmente residiendo en</span> <span className="flex-fill"><Input className="w-100 text-center" value={sn + ", " + city + ", " + state + ", " + zipcode}/></span>,
            </div>

            <div>
                por el valor recibido, prometo pagar a la orden de Adriana’s Insurance Services Inc.,
            </div>

            <div className='d-flex p-0'>
                <span className='me-1'>la suma de</span> <span className="flex-fill"><Input className="w-100 text-center" maxlength="50" value={words}/></span>(<CurrencyFormat 
                    thousandSeparator={true}
                    prefix={'$'} 
                    maxlength="13"
                    style = {{width:"90px"}}
                    className='fw-bold text-center input-default'
                    onChange = {e => setCurrency(e.target.value)}
                />), <i>sin interes,</i>
            </div>

            <div className='p-0'>
                <i>a mas tardar, </i><input type="date" className='text-center'/>. En caso que mi pago de la cantidad completa de esta Nota no se recibe por la
                fecha debida ya mencionada, todo el balance principal que se quede a deber, estara inmediatamente vencido y debera ser pagado con
                interes desde el dia de esta noticia, al indice de 18% annual, con un cargo de retraso de <b>Treinta dolares</b> ($30.00).
            </div>

            <div className='d-flex justify-content-between mt-5 mx-5 mb-3 pt-5 text-center fw-bold'>
                <div>
                    <Input width="300px" className="text-center" disabled bColor="yellow"/>
                    <p>Firma</p>
                </div>
                <div>
                    <Input width="300px" className="text-center" disabled/>
                    <p>Testigo</p>
                </div>
            </div>
            
            <Subtitle text="PODER PARA CANCELAR ASEGURANZA POR NO PAGO"/>
            
            <p className='lh-4'>
                <Input disabled width="60px" bColor="yellow"/>
                <b className="me-3 ms-1">Iniciales</b>
                Yo entiendo y estoy de acuerdo, que si esta carta de promesa no es pagada a Adriana's Auro como fue acordada, yo por
                lo tanto doy a Adriana's Auto el poder de cancelar todas mis polisas, que aplican atravez de California Automobile
                Assigned Risk Plan o de alguna otra compañia. Tambien entiendo que sere abligado a pagar cualquier otra cuota
                permitida, incluyendo todos los honorarios plenamente ganados, y los honorarios del corredor, asi como, cualquier
                coleccion u honorarios de los abogados, si esto lleguese a ocurrir.
            </p>
          

            <Subtitle text="CARTA DE PROMESA GARANTIZADA"/>
            
            <p className='lh-4'>
                <Input disabled width="60px" bColor="yellow"/>
                <b className="me-3 ms-1">Iniciales</b>
                Yo entiendo y estoy de acuredo, que si esta carta de promesa no es pagada a Adriana's Auro como fue acordada, yo por
                lo tanto doy a Adriana's Auto el poder de cancelar todas mis polisas, que aplican atravez de California Automobile
                Assigned Risk Plan o de alguna otra compañia. Tambien entiendo que sere abligado a pagar cualquier otra cuota
                permitida, incluyendo todos los honorarios plenamente ganados, y los honorarios del corredor, asi como, cualquier
                coleccion u honorarios de los abogados, si esto lleguese a ocurrir.
            </p>

            <p className='lh-4'>
                <b>1.</b> Puedo ser enviado a una agencia de coleccion, sin algun otro aviso de llamadas, por la cantidad de este pagare,
                intereses, cargos por retraso, y cualquier otros honorarios o penalidades pueden aplicar.
                <br />
                <b>2.</b> Puedo ser demandado y obligado a pagar la cantidad total de este pagare, y otros honorarios/penalidades,
                incluyendo intereses y honorarios de los abogados; y
                <br />
                <b>3.</b> Mi cobertura de seguro puede ser cancelada, que puede dar lugar a cargos adicionales de la compañia de seguros
                que tendra consecuensia de violaciones de las Secciones 16020-16028 del Codigo de Vehiculo del estado de CA.
            </p>
            

            <p className='text-center fst-italic fw-bold'>Convengo y reconozco por este medio que mis iniciales contra las clausulas anteriores mencionadas son
            endosadas por mi declaracion y firma de abajo.</p>

            <div className='d-flex justify-content-between mt-2 mx-5 text-center'>
                <div>
                    <Input width="260px" value={name} className='text-center'/>
                    <p className='mb-0 fw-bold'>Nombre del Asegurado</p>
                </div>
                <div>
                    <Input width="260px" disabled bColor="yellow"/>
                    <p className='mb-0 fw-bold'>Firma del Asegurado</p>
                </div>
                <div>
                    <input className='text-center' type="date"/>
                    <p className='mb-0 fw-bold'>Fecha</p>
                </div>
            </div>

            <div className='d-flex justify-content-between mt-2 text-center'>
                <div>
                    <Input width = "150px" maxlength="15" className='text-center'/>
                    <p className='fw-bold'>Seguro Social</p>
                </div>
                <div>
                    <Input width = "150px" className='text-center' value={phone}/>
                    <p className='fw-bold'>Numero de Celular</p>
                </div>
                <div>
                    <CurrencyFormat format="(###) ###-####" mask="_" className='text-center input-default' style={{width: "150px"}}/>
                    <p className='fw-bold'>Numero de Casa</p>
                </div>
                <div>
                    <CurrencyFormat format="(###) ###-####" mask="_" className='text-center input-default' style={{width: "150px"}}/>
                    <p className='fw-bold'>Numero de Trabajo</p>
                </div>
                <div>
                    <Input maxlength="5" className='text-center'/>
                    <p className='fw-bold'>Ext.</p>
                </div>
            </div>

        </div>
    )
}