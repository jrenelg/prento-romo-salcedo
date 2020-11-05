import React from 'react'
import './style.scss'

const services = [
    { icon: 'icon-f100', subtitle: 'Derecho', title: 'Corporativo' },
    { icon: 'icon-f101', subtitle: 'Propiedad', title: 'Industrial' },
    { icon: 'icon-f103', subtitle: 'Propiedad', title: 'Intelectual' },
    { icon: 'icon-f104', subtitle: 'Propiedad', title: 'Intelectual' },
    { icon: 'icon-f105', subtitle: 'Propiedad', title: 'Intelectual' },
    { icon: 'icon-f106', subtitle: 'Propiedad', title: 'Intelectual' },
    { icon: 'icon-f107', subtitle: 'Propiedad', title: 'Intelectual' },
    { icon: 'icon-f108', subtitle: 'Propiedad', title: 'Intelectual' },
    { icon: 'icon-f109', subtitle: 'Propiedad', title: 'Intelectual' },
    { icon: 'icon-f110', subtitle: 'Propiedad', title: 'Intelectual' },
    { icon: 'icon-f111', subtitle: 'Propiedad', title: 'Intelectual' },
    { icon: 'icon-f112', subtitle: 'Propiedad', title: 'Intelectual' },
    { icon: 'icon-f113', subtitle: 'Propiedad', title: 'Intelectual' },
    { icon: 'icon-f114', subtitle: 'Propiedad', title: 'Intelectual' },
    { icon: 'icon-f115', subtitle: 'Propiedad', title: 'Intelectual' },
    { icon: 'icon-f116', subtitle: 'Propiedad', title: 'Intelectual' },
    { icon: 'icon-f117', subtitle: 'Propiedad', title: 'Intelectual' },
    { icon: 'icon-f118', subtitle: 'Propiedad', title: 'Intelectual' },
    { icon: 'icon-f119', subtitle: 'Propiedad', title: 'Intelectual' },
    { icon: 'icon-f120', subtitle: 'Propiedad', title: 'Intelectual' },
    { icon: 'icon-f121', subtitle: 'Propiedad', title: 'Intelectual' },
    { icon: 'icon-f122', subtitle: 'Propiedad', title: 'Intelectual' },
    { icon: 'icon-f123', subtitle: 'Propiedad', title: 'Intelectual' },
    { icon: 'icon-f124', subtitle: 'Propiedad', title: 'Intelectual' },
    { icon: 'icon-f125', subtitle: 'Propiedad', title: 'Intelectual' },
    { icon: 'icon-f126', subtitle: 'Propiedad', title: 'Intelectual' },
    { icon: 'icon-f127', subtitle: 'Propiedad', title: 'Intelectual' },
    { icon: 'icon-f128', subtitle: 'Propiedad', title: 'Intelectual' },
    { icon: 'icon-f129', subtitle: 'Propiedad', title: 'Intelectual' },
]
const Service = props => {
    return (
        <div className={props.className}>
            <div className="container">
                <div className="row">
                    {services.map((service, i) => (
                        <div key={i} className="col-lg-4 col-md-6">
                            <div className="serviceItem">
                                <div className="serviceIcon">
                                    <i className={service.icon}></i>
                                </div>
                                <div className="serviceText">
                                    <span>{service.subtitle}</span>
                                    <h3>{service.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Service