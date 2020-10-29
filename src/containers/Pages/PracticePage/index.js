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
    {name:'Practice area'}
]

const PracticePage = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderBotton className="headerBottomArea" />
            </header>
            <Breadcumb 
                className="breadcumbArea"
                title="Practice Area"
                breadcumbMenu={breadcumbMenu}
                background={breadcumb}
            />
            <Service className="serviceArea mt-0" />
            <ServiceArea
                className="ourServiceArea"
                title="How Can We Help You"
                subTitle="Area Of Practice"
                services={services}
            />
            <Testmonial
                className="testmonialArea pt100"
            />
            <FooterArea/>
        </Fragment>
    )
}
export default PracticePage