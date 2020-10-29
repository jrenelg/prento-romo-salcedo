import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
import Service from '../../../components/Service'
import About from '../../../components/About'
import ServiceArea from '../../../components/ServiceArea'
import Testmonial from "../../../components/Testmonial";
import TeamMember from '../../../components/TeamMember'
import CounterArea from '../../../components/CounterArea'
import BlogArea from '../../../components/BlogArea'
import NewsLetter from '../../../components/Newsletter'
import FooterArea from '../../../components/FooterArea'
// images
import about from '../../../images/about/2.jpg'
import breadcumb from '../../../images/breadcumb/1.jpg'

import './style.scss'
const aboutText = [
    { text: 'Brindar servicios legales especializados en el área Corporativa, de Propiedad Industrial e Intelectual con excelencia profesional, visión integral, trato personalizado y compromiso ético.' },
    { text: 'Ser una firma legal líder a nivel nacional en el área de Derecho Corporativo, de Propiedad Industrial e Intelectual.' },
    { text: 'Disciplina: Seguimos un plan trazado a conciencia, con objetivos claros y con perseverancia hasta alcanzarlos.' },
    { text: 'Pro actividad: Conscientes que la suerte es el encuentro entre la preparación y la oportunidad, nos preparamos cada día para prever y actuar de manera estratégica y eficaz.' },
    { text: 'Responsabilidad: Somos responsables de nuestras acciones y omisiones entre los miembros de nuestra firma, con nuestros clientes y con el entorno social.' },
    { text: 'Aprendizaje: Conscientes de la complejidad y velocidad con la que cambia nuestro mundo, nos preparamos con estudio profundo sobre la actualidad y con vocación de servicio.' },
    { text: 'Calidad: Valor agregado a las expectativas del cliente.' },
    { text: 'Prontitud: Valoramos el tiempo y actuamos en consecuencia.' },   
]

const services = [
    {
        icon: 'flaticon-parents',
        title: 'Family Law',
        content: 'There are many variations of passages of Lorem '
    },
    {
        icon: 'flaticon-wounded',
        title: 'Personal Injury',
        content: 'There are many variations of passages of Lorem '
    },
    {
        icon: 'flaticon-employee',
        title: 'Business Law',
        content: 'There are many variations of passages of Lorem '
    },
    {
        icon: 'flaticon-thief',
        title: 'Criminal Law',
        content: 'There are many variations of passages of Lorem '
    },
    {
        icon: 'flaticon-university-graduate-hat',
        title: 'Education Law',
        content: 'There are many variations of passages of Lorem '
    },
    {
        icon: 'flaticon-house',
        title: 'Real Estate Law',
        content: 'There are many variations of passages of Lorem '
    },
]

const breadcumbMenu = [
    {name:'Home',route:'/'},
    {name:'About us'}
]

const AboutPage = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
            </header>
            <Breadcumb 
                className="breadcumbArea"
                title="About Us"
                breadcumbMenu={breadcumbMenu}
                background={breadcumb}
            />
            <Service className="serviceArea mt-0" />
            <About
                className="aboutArea aboutAreaStyleTwo"
                title="Misión"
                subTitle="Romo, Salcedo & Asociados"
                images={about}
                orderLast="order-last"
                videoId="XxVg_s8xAms"
                pragraphs={aboutText}
            />
            <ServiceArea
                className="ourServiceArea ourServiceAreaStyleTwo"
                title="How Can We Help You"
                subTitle="Area Of Practice"
                services={services}
            />
            <Testmonial
                className="testmonialArea pt100"
            />
            <CounterArea
                fullWidth={true}
                className="counterArea counterAreaStyleTwo"
            />
            <TeamMember
                title="Qualified Attorneys "
                subTitle="Meet Our Experts"
                className="teamArea"
                slider={true}
            />
            <BlogArea
                className="blogArea"
                title="Latest News"
                subTitle="From Our Blog
                "
            />
            <NewsLetter
                className="newsLetterArea"
            />
            <FooterArea/>
        </Fragment>
    )
}
export default AboutPage