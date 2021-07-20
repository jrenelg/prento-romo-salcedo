import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeroSlider from '../../../components/HeroSlider'
import Service from '../../../components/Service'
import About from '../../../components/About'
import ServiceArea from '../../../components/ServiceArea'
import Testmonial from "../../../components/Testmonial";
import FooterArea from '../../../components/FooterArea'
// images
import about from '../../../images/about/2.jpg'
import signature from '../../../images/about/1.png'

// images
import portfolio1 from '../../../images/studies/1.jpg'
import portfolio2 from '../../../images/studies/2.jpg'
import portfolio3 from '../../../images/studies/3.jpg'
import portfolio4 from '../../../images/studies/4.jpg'
import portfolio5 from '../../../images/studies/5.jpg'

import './style.scss'

const aboutText = [
    { text: 'Sómos una firma de abogados dedicada a la prestación de servicios Corporativos, de Propiedad Industrial e Intelectual, así como de Protección de Datos Personales en posesión de particulares.' },
    { text: 'Nuestra toma de decisiones y acciones de forma íntegra, así como nuestro compromiso con la excelencia en cada uno de los servicios que prestamos, nos permite satisfacer las expectativas, promover la solidez y el desarrollo de nuestros clientes.' },
]

const heroSliders = [
    {
        images: 'slideWrapperOne',
        title: 'Somos especialista ',
        subTitle: 'en orientar y asesorar.',
        text: 'Romo, Salcedo & Asociados',
        button: 'Contáctanos'
    },
    {
        images: 'slideWrapperTwo',
        title: 'Acompañamiento',
        subTitle: 'legal personalizado.',
        text: 'Romo, Salcedo & Asociados',
        button: 'Contáctanos'
    },
]

const services = [
    {
        icon: 'icon-f103',
        title: 'Creación de Empresas'
    },
    {
        icon: 'icon-f104',
        title: 'Contratos Mercantiles'
    },
    {
        icon: 'icon-f105',
        title: 'Actas de Asamblea'
    },
    {
        icon: 'icon-f106',
        title: 'Contratos de Confidencialidad'
    },
    {
        icon: 'icon-f107',
        title: 'Libros Corporativos'
    },
    {
        icon: 'icon-f108',
        title: 'Contratos en Materia Autoral'
    },
    {
        icon: 'icon-f109',
        title: 'Términos y Condiciones para Sitios Web'
    },
    {
        icon: 'icon-f110',
        title: 'Certificados de Licitud de Título y Contenido '
    },
    {
        icon: 'icon-f111',
        title: 'Esquemas de Protección Accionaria'
    },
    {
        icon: 'icon-f112',
        title: 'Esquemas de Secreto Industrial'
    },
    {
        icon: 'icon-f113',
        title: 'Contratos de Franquicia'
    },
    {
        icon: 'icon-f114',
        title: 'Protección de Marcas y Patentes'
    },
    {
        icon: 'icon-f115',
        title: 'Protección de Datos Personales'
    },
    {
        icon: 'icon-f116',
        title: 'Transmisión de Derechos'
    },
    {
        icon: 'icon-f117',
        title: 'Registro Nacional de Inversión Extranjera'
    },
]


const portfolioItem = [
    { images: portfolio1, title: 'General Service', subtitle: 'Corporate' },
    { images: portfolio2, title: 'Personal Issue', subtitle: 'General' },
    { images: portfolio3, title: 'Business Accounting', subtitle: 'Business' },
    { images: portfolio4, title: 'Accounting issue', subtitle: 'Criminal' },
    { images: portfolio5, title: 'Business Accounting', subtitle: 'Family Issue' }
]

const HomePageOne = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderBotton className="headerBottomArea" />
            </header>
            <HeroSlider 
                sliders={heroSliders}
                className="heroSliderArea" />
            <Service className="serviceArea" />
            <About
                className="aboutArea"
                title="Nosotros"
                images={about}
                signature={signature}
                pragraphs={aboutText}
            />
            <ServiceArea
                className="ourServiceArea ourServiceAreaStyleThree"
                title="Nuestros Servicios"
                subTitle="Área de Práctica"
                services={services}
            />
            <FooterArea/>
        </Fragment>
    )
}
export default HomePageOne