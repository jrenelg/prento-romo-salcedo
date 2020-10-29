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
    { text: 'Sómos una firma de abogados dedicada a la prestación de servicios Corporativos, de Propiedad Industrial e Intelectual.' },
    { text: 'Nuestra toma de decisiones y acciones de forma íntegra, así como nuestro compromiso con la excelencia en cada uno de los servicios que prestamos nos permite satisfacer las expectativas, promover la solidez y el desarrollo de nuestros clientes.' },
]

const heroSliders = [
    {
        images: 'slideWrapperOne',
        title: 'We Fight For Your Justice',
        subTitle: 'As Like A Friend.',
        text: 'The Most Talented Law Frim',
        button: 'Contact us now'
    },
    {
        images: 'slideWrapperTwo',
        title: 'We Fight For Your Justice',
        subTitle: 'As Like A Friend.',
        text: 'The Most Talented Law Frim',
        button: 'Contact us now'
    },
]

const services = [
    {
        icon: 'flaticon-parents',
        title: 'Creación de Empresas',
        content: 'There are many variations of passages of Lorem '
    },
    {
        icon: 'flaticon-wounded',
        title: 'Contratos Mercantiles',
        content: 'There are many variations of passages of Lorem '
    },
    {
        icon: 'flaticon-employee',
        title: 'Actas de Asamblea',
        content: 'There are many variations of passages of Lorem '
    },
    {
        icon: 'flaticon-thief',
        title: 'Contratos de Confidencialidad',
        content: 'There are many variations of passages of Lorem '
    },
    {
        icon: 'flaticon-university-graduate-hat',
        title: 'Libros Corporativos',
        content: 'There are many variations of passages of Lorem '
    },
    {
        icon: 'flaticon-house',
        title: 'Contratos en Materia Autoral',
        content: 'There are many variations of passages of Lorem '
    },
    {
        icon: 'flaticon-parents',
        title: 'Términos y Condiciones para Sitios Web',
        content: 'There are many variations of passages of Lorem '
    },
    {
        icon: 'flaticon-wounded',
        title: 'Certificados de Licitud de Título y Contenido ',
        content: 'There are many variations of passages of Lorem '
    },
    {
        icon: 'flaticon-employee',
        title: 'Esquemas de Protección Accionaria',
        content: 'There are many variations of passages of Lorem '
    },
    {
        icon: 'flaticon-thief',
        title: 'Esquemas de Secreto Industrial',
        content: 'There are many variations of passages of Lorem '
    },
    {
        icon: 'flaticon-university-graduate-hat',
        title: 'Contratos de Franquicia',
        content: 'There are many variations of passages of Lorem '
    },
    {
        icon: 'flaticon-house',
        title: 'Registro de Marca',
        content: 'There are many variations of passages of Lorem '
    },
    {
        icon: 'flaticon-thief',
        title: 'Registro de Patentes',
        content: 'There are many variations of passages of Lorem '
    },
    {
        icon: 'flaticon-university-graduate-hat',
        title: 'Transmisión de Derechos',
        content: 'There are many variations of passages of Lorem '
    },
    {
        icon: 'flaticon-house',
        title: 'Registro Nacional de Inversión Extranjera',
        content: 'Cumplimieto de obligaciones '
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
            <Testmonial
                className="testmonialArea"
            />
            <FooterArea/>
        </Fragment>
    )
}
export default HomePageOne