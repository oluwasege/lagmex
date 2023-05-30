import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"
import {Link} from "react-router-dom";

export default function Header(){


    return(
        <div>
            <div className='fixWidth'>
                <nav>
                    <Link to='/'>
                        <LazyLoadImage effect = "blur" className='logo' src="https://res.cloudinary.com/dk80ynx1w/image/upload/v1685223641/Group_1_dsvo7q.svg"/>
                    </Link>
                    <div>
                        <div className='nav_d'>
                            <section className="p-menu1">
                                <div id="navbar" className="navigation" role="navigation">
                                    <input id="toggle1" type="checkbox"/>
                                    <label className="hamburger1" htmlFor="toggle1">
                                        <div className="top"></div>
                                    </label>
                                    <div className="menu1">

                                        <a className="link1" href='#loader' >Why LAGMEX</a>
                                        <a className="link1" href='#educate' >Education</a>
                                        <a className="link1" href='#frequent'  >FAQs</a>
                                        <a className="link1" href='#contact' >Contact us</a>
                                    </div>
                                </div>
                            </section>
                            <div className='hideAndSeek'>
                                <div className='navContainer'>
                                        <div >
                                            <a href='#loader'>
                                                Why LAGMEX
                                            </a>
                                        </div>
                                        <div>
                                            <a href='#educate'>
                                                Education
                                            </a>
                                        </div>
                                        <div>
                                            <a href='#frequent'>
                                                FAQs
                                            </a>
                                        </div>
                                        <div>
                                            <a href='#contact'>Contact us</a>
                                        </div>


                                </div>


                            </div>


                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )

}