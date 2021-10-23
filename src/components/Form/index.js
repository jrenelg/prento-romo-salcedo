import React, { Component } from 'react'
import Joi from 'joi-browser'
import { toast, ToastContainer } from "react-toastify";
import romoApi from '../../api/romo';

import 'react-toastify/dist/ReactToastify.css';
import './style.scss'


class Form extends Component {
    state = {
        name: '',
        phone: '',
        email: '',
        message: '',
        error: {}
    }
    schema = {
        email: Joi.string().email({ minDomainAtoms: 2 }).required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    case "string.email":
                        err.message = 'email mast be A Valid Email';
                        break;
                    default:
                        err.message = 'email can not be empity';
                        break;
                }
            });
            return errors;
        }),
        phone: Joi.string().required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    default:
                        err.message = 'phone can not be Empity';
                        break;
                }
            });
            return errors;
        }),
        name: Joi.string().required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    default:
                        err.message = 'name can not be Empity';
                        break;
                }
            });
            return errors;
        }),
        message: Joi.string().required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    default:
                        err.message = 'message can not be Empity';
                        break;
                }
            });
            return errors;
        }),
    }
    changeHandler = event => {
        const error = { ...this.state.error };
        const errorMassage = this.validationProperty(event);
        if (errorMassage) {
            error[event.target.name] = errorMassage;
        } else {
            delete error[event.target.name];
        }
        this.setState({
            [event.target.name]: event.target.value,
            error
        })
    };
    handleChange = (value) => {
        this.setState({
            country: value
        })
    };

    validationProperty = event => {
        const Obj = { [event.target.name]: event.target.value };
        const schema = { [event.target.name]: this.schema[event.target.name] }
        const { error } = Joi.validate(Obj, schema);
        return error ? error.details[0].message : null
    };

    validate = () => {
        const options = { abortEarly: false }
        const form = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            message: this.state.message,
        }
        const { error } = Joi.validate(form, this.schema, options)
        if (!error) return null;

        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message
        return errors;
    };

    submitHandler = async event => {
        event.preventDefault()
        const error = this.validate();
        if (error) {
            this.setState({
                error: error || {}
            })
        } else {
            this.setState({
                name: '',
                phone: '',
                email: '',
                message: '',
            })
            console.log(
                'Name' + '=' + this.state.name,
                'Phone' + '=' + this.state.phone,
                'Email' + '=' + this.state.email,
                'Message' + '=' + this.state.message,
            )
            const headers = {
                'Content-Type': 'multipart/form-data'
            }
            var bodyFormData = new FormData();
            bodyFormData.append('email',  this.state.email);
            bodyFormData.append('name',  this.state.name);
            bodyFormData.append('phone',  this.state.phone);
            bodyFormData.append('message',  this.state.message);
            await romoApi.post("/phpmailer/contact.php", bodyFormData, {headers})
            .then(res => {
                console.log(res);
                toast.success("Mensaje enviado!", {
                    position: "top-right",
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                });
            })
            .catch(err => {
                console.log(err);
                toast.success("Console log!", {
                    position: "top-right",
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                });
            })
            
        }
    }

    render() {

        toast.configure({
            autoClose: 10000,
            draggable: true,
        });

        const options = [
            { level: 'Family Law', value: 'family law' },
            { level: 'Criminal Law', value: 'criminal law' },
            { level: 'Business Law', value: 'business law' },
            { level: 'Personal Injury', value: 'personal injury' },
            { level: 'Education Law', value: 'education law' },
            { level: 'Drugs Crime', value: 'drugs crime' },
        ]

        return (
            <form onSubmit={this.submitHandler} className='contactForm'>
                <div className="row">
                    <div className="col-sm-6 col-12">
                        <div className="formInput">
                            <input
                                placeholder="Nombre"
                                value={this.state.name}
                                name="name"
                                onChange={this.changeHandler}
                                className="form-control"
                                type="text" />
                            {this.state.error.name && <p>{this.state.error.name}</p>}
                        </div>

                    </div>
                    <div className="col-sm-6 col-12">
                        <div className="formInput">
                            <input
                                placeholder="Teléfono"
                                value={this.state.phone}
                                name="phone"
                                onChange={this.changeHandler}
                                className="form-control"
                                type="phone" />
                            {this.state.error.phone && <p>{this.state.error.phone}</p>}
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="formInput">
                            <input
                                placeholder="Email"
                                value={this.state.email}
                                name="email"
                                onChange={this.changeHandler}
                                className="form-control"
                                type="email" />
                            {this.state.error.email && <p>{this.state.error.email}</p>}
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="formInput">
                            <textarea
                                className="form-control"
                                value={this.state.message}
                                onChange={this.changeHandler}
                                placeholder="Mensaje..."
                                name="message" />
                            {this.state.error.message && <p>{this.state.error.message}</p>}
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit">Enviar</button>
                        <ToastContainer closeButton={false} position="bottom-right" />
                    </div>
                </div>
            </form>
        )
    }
}
export default Form