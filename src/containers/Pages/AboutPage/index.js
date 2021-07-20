import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import Breadcumb from '../../../components/Breadcumb'
import Service from '../../../components/Service'
import AboutRomo from '../../../components/AboutRomo'
import Testmonial from "../../../components/Testmonial";
import FooterArea from '../../../components/FooterArea'
// images
import about from '../../../images/about/3.jpg'
import breadcumb from '../../../images/breadcumb/nosotros.jpg'

import './style.scss'
const aboutText = [
    { text: 'Tenemos una trayectoria dentro del mercado de mas de 10 años, buscando en cada momento dar soluciones ad hoc a las necesidades y retos de nuestros clientes dentro del mercado nacional e internacional.' },
  
]
const aboutText2 = [
    { text: 'Ser una firma legal líder a nivel nacional en el área de Derecho Corporativo, de Propiedad Industrial e Intelectual.' },
    
]
const aboutText3 = [

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
        title: 'Automotriz',
        content: 'Proveedores de países como España, Bélgica, Japón y Canadá.'
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
    {name:'Inicio',route:'/'},
    {name:'Nosotros'}
]

const AboutPage = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderBotton className="headerBottomArea" />
            </header>
            <Breadcumb 
                className="breadcumbArea"
                title="Nostros"
                breadcumbMenu={breadcumbMenu}
                background={breadcumb}
            />
            <Service className="serviceArea mt-0" />
            <AboutRomo
                className="aboutArea aboutAreaStyleTwo"
                title="Nosotros"
                subTitle="Romo, Salcedo & Asociados"
                pragraphs={aboutText}
                title2="Visión"
                subTitle2=""
                pragraphs2={aboutText2}
                title3="Valores"
                subTitle3=""
                pragraphs3={aboutText3}
                images={about}
                orderLast="order-last"
                /* DESCOMENTAR videId property PARA ACTIVAR VIDEO 
                videoId="XxVg_s8xAms"
                */
            />
            <FooterArea/>
        </Fragment>
    )
}
export default AboutPage