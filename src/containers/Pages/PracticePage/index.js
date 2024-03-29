import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import Breadcumb from '../../../components/Breadcumb'
import Service from '../../../components/Service'
import ServiceArea from '../../../components/ServiceArea'
import Testmonial from "../../../components/Testmonial";
import FooterArea from '../../../components/FooterArea'
// images
import breadcumb from '../../../images/breadcumb/1.jpg'

import './style.scss'

const aboutText = [
    { text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at ,' },
    { text: 'and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum' },
]

const services = [
    {
        icon: 'icon-f118',
        title: 'Automitriz'
    },
    {
        icon: 'icon-f119',
        title: 'Agronegocios'
    },
    {
        icon: 'icon-f120',
        title: 'Construcción'
    },
    {
        icon: 'icon-f121',
        title: 'Arquitectura Empresarial'
    },
    {
        icon: 'icon-f122',
        title: 'Capital Humano'
    },
    {
        icon: 'icon-f123',
        title: 'Comunicación y Prensa'
    },
    {
        icon: 'icon-f124',
        title: 'Marketing'
    },
    {
        icon: 'icon-f125',
        title: 'Adquisición de Negocios'
    },
    {
        icon: 'icon-f126',
        title: 'Fusión de Empresas'
    },
    {
        icon: 'icon-f127',
        title: 'Due Diligence'
    },
    {
        icon: 'icon-f128',
        title: 'Modelos Industriales'
    },
    {
        icon: 'icon-f129',
        title: 'Energía Alternativa'
    },
]

const breadcumbMenu = [
    {name:'Inicio',route:'/'},
    {name:'Servicios'}
]

const PracticePage = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderBotton className="headerBottomArea" />
            </header>
            <Breadcumb 
                className="breadcumbArea"
                title="Servicios"
                breadcumbMenu={breadcumbMenu}
                background={breadcumb}
            />
            <Service className="serviceArea mt-0" />
            <ServiceArea
                className="ourServiceArea"
                title="Mercado Nacional e Internacional"
                subTitle="Asesoría a Clientes de Distintos Sectores del"
                services={services}
            />
            <FooterArea/>
        </Fragment>
    )
}
export default PracticePage