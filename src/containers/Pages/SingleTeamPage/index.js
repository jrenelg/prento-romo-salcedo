import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
import NewsLetter from '../../../components/Newsletter'
import FooterArea from '../../../components/FooterArea'
import Portfolio from '../../../components/Portfolio'
import ContactArea from '../../../components/ContactArea'

// images
import breadcumb from '../../../images/breadcumb/equipo.jpg'
import team1 from '../../../images/Attorneys-single/t1.jpg'
import team2 from '../../../images/Attorneys-single/t2.jpg'
import team3 from '../../../images/Attorneys-single/t3.jpg'
//import team3 from '../../../images/Attorneys-single/t3.jpg'
import portfolio1 from '../../../images/studies/1.jpg'
import portfolio2 from '../../../images/studies/2.jpg'
import portfolio3 from '../../../images/studies/3.jpg'

import './style.scss'

const breadcumbMenu = [
    { name: 'Inicio', route: '/' },
    { name: 'Equipo' }
]
const teamMembarInfo = [
    { level: 'Positon: ', text: 'Siniour Lawyer' },
    { level: 'Practice Area: ', text: 'Family Lawyer, Criminal Defence, Personal Injury' },
    { level: 'Experience: ', text: '10 Years' },
    { level: 'Address: ', text: 'Nayra Park, 365 B Grand Ave, Los Angeles, CA 10872' },
    { level: 'Phone: ', text: '0800.123.456' },
    { level: 'Email: ', text: 'youremail@gmail.com' },
    { level: 'Fax: ', text: ' 6985231456' },
]
const teamContents = [
    'Admization Institute of Law andTechnology, Juzment School of Management,Cambridge',
    'Academy University School of Law, Boston, MA',
    'The Syntify High School Of New York',
    'Education & Court Admissions',
]

const portfolioItem = [
    { images: portfolio1, title: 'General Service', subtitle: 'Corporate' },
    { images: portfolio2, title: 'Personal Issue', subtitle: 'General' },
    { images: portfolio3, title: 'Business Accounting', subtitle: 'Business' },
]

const SingleTeamPage = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderBotton className="headerBottomArea" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Equipo"
                breadcumbMenu={breadcumbMenu}
                background={breadcumb}
            />
            <div className='singleTeamArea'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 col-12">
                            <div className="row">
                                <div className="col-md-12 col-12">
                                    <div className="singleTeamImgWrap">
                                        <div className="singleTeamImg">
                                            <img src={team1} alt="" />
                                        </div>
                                        <h4>Elena Romo López</h4>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="singleTeamInfo">
                                        <h3>Experiencia Personal</h3>
                                        <p>Egresada de la Universidad Cuauhtémoc, Campus Aguascalientes con estudios de Maestría en Derecho por la Universidad Panamericana, Campus Bonaterra.</p>
                                        <p>Aspirante a Corredor Público por la Dirección General de Normatividad Mercantil de la Dirección de Correduría Pública de la Secretaría de Economía. Estudios en materia de derecho Societario, valuación y derecho mercantil, impartidos por la Dirección General de Normatividad Mercantil de la Dirección de Correduría Pública de la Secretaría de Economía.</p>
                                        <p>Profesora de la asignatura de Contratos Mercantiles y Derecho Societario de la Escuela de Ciencias Económicas y Empresariales de la Universidad Panamericana, Campus Bonaterra.</p>
                                        <h5>Idioma</h5>
                                        <span>Inglés.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='singleTeamArea'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 col-12">
                            <div className="row">
                                <div className="col-md-12 col-12">
                                    <div className="singleTeamImgWrap">
                                        <div className="singleTeamImg">
                                            <img src={team2} alt="" />
                                        </div>
                                        <h4>Fernanda Salcedo Romo</h4>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="singleTeamInfo">
                                        <h3>Experiencia Personal</h3>
                                        <p>Egresada de la Universidad Panamericana, Campus Bonaterra, con estudios de postgrado en Derecho Corporativo y Económico; Posgrado en Derecho Societario por esta misma casa de estudios.</p>
                                        <p>Maestría en Propiedad Industrial, Derechos de Autor y Nuevas Tecnologías por la Universidad Panamericana Campus Bonaterra. A su vez cuenta con estudios en materia de Propiedad Industrial y Derechos de Autor, impartidos por el Instituto Mexicano de la Propiedad Industrial así como por el Instituto Nacional de Derechos de Autor. De igual forma ha realizado estudios en materia de Protección de Variedades Vegetales impartido por la Organización Mundial de la Propiedad Industrial.</p>
                                        <p>Profesora de la asignatura de Contratos Mercantiles y Derecho Societario de la Escuela de Ciencias Económicas y Empresariales de la Universidad Panamericana Campus Bonaterra.</p>
                                        <h5>Idioma</h5>
                                        <span>Inglés.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='singleTeamArea'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 col-12">
                            <div className="row">
                                <div className="col-md-12 col-12">
                                    <div className="singleTeamImgWrap">
                                        <div className="singleTeamImg">
                                            <img src={team3} alt="" />
                                        </div>
                                        <h4>Fernanda Salcedo Romo</h4>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="singleTeamInfo">
                                        <h3>Experiencia Personal</h3>
                                        <p>Egresada de la Universidad Panamericana, Campus Bonaterra, con estudios de postgrado en Derecho Corporativo y Económico; Posgrado en Derecho Societario por esta misma casa de estudios.</p>
                                        <p>Maestría en Propiedad Industrial, Derechos de Autor y Nuevas Tecnologías por la Universidad Panamericana Campus Bonaterra. A su vez cuenta con estudios en materia de Propiedad Industrial y Derechos de Autor, impartidos por el Instituto Mexicano de la Propiedad Industrial así como por el Instituto Nacional de Derechos de Autor. De igual forma ha realizado estudios en materia de Protección de Variedades Vegetales impartido por la Organización Mundial de la Propiedad Industrial.</p>
                                        <p>Profesora de la asignatura de Contratos Mercantiles y Derecho Societario de la Escuela de Ciencias Económicas y Empresariales de la Universidad Panamericana Campus Bonaterra.</p>
                                        <h5>Idioma</h5>
                                        <span>Inglés.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Portfolio
                title="Participated Case"
                subTitle="Here Our Best Work"
                fullWidth={true}
                portfolioItem={portfolioItem}
                className="portfolioArea portfolioAreaStyleFour"
            /> */}
            <FooterArea />
        </Fragment>
    )
}
export default SingleTeamPage