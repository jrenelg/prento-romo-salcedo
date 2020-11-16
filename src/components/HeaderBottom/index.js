import React, { useState, Fragment } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../images/logo/RS_logo.png'
import './style.scss'

const HeaderBottom = props => {
    const [search, setSearch] = useState()
    const [responsive, setResponsive] = useState(false)
    const [trigger, setTrigger] = useState(false)
    const submitHandler = e => {
        e.preventDefault()
        console.log(search)
    }
    const clickHandler = () => {
        setTrigger(!trigger)
    }
    const responsiveHandler = () => {
        setResponsive(!responsive)
    }
    return (
        <div className={props.className}>
            <div className="container">
                <div className="headerBottomMainWrapper">
                    <div className="row">
                        <div className="col-lg-3 col-md-10 col-sm-6 col-8">
                            <div className="logo">
                                <NavLink to="/">
                                    <img src={logo} alt="" />
                                </NavLink>
                            </div>
                        </div>
                        <div className={responsive ? "col-lg-8 responsiveWrapper active" : "col-lg-8 responsiveWrapper"}>
                            <ul className="mainMenuWrap">
                                <li><NavLink exact to='/'>Home</NavLink></li>
                                <li><NavLink exact to='/about'>About</NavLink></li>
                                <li><NavLink exact to='/practice'>Practice</NavLink></li>
                                <li><NavLink exact to='/contact'>Contact</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-lg-1 col-md-2 col-sm-6 col-4">
                            <div className="searchMenuWrapper">
                                <div className="searchWrap">
                                    <i onClick={clickHandler} className="fa fa-search"></i>
                                    <div className={trigger ? 'searchform active' : 'searchform'}>
                                        <form onSubmit={submitHandler}>
                                            <input
                                                placeholder="search here"
                                                value={search}
                                                type="text"
                                                onChange={event => setSearch(event.target.value)}
                                            />
                                            <button><i className="fa fa-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                                <div onClick={responsiveHandler} className="responsiveTrigger">
                                    <span className="first"></span>
                                    <span className="second"></span>
                                    <span className="third"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeaderBottom