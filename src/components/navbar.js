import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"
import {Link, useLocation} from "react-router-dom";

export default function Header(){

    return(
        <div>
            <div className='fixWidth'>
                <nav>
                    <Link to='/'>
                        <LazyLoadImage effect = "blur" className='logo' src="https://res.cloudinary.com/dk80ynx1w/image/upload/v1685223641/Group_1_dsvo7q.svg"/>
                    </Link>
                    <div className='nav_d'>
                        <section className="p-menu1">
                            <div id="navbar" className="navigation" role="navigation">
                                <input id="toggle1" type="checkbox"/>
                                <label className="hamburger1" htmlFor="toggle1">
                                    <div className="top"></div>
                                </label>
                                <div className="menu1">

                                    <a className="link1" href="">Flight</a>
                                    <a className="link1" href="">Visa</a>
                                    <a className="link1" href="">Our Service</a>
                                    <Link to='/Support' className="link1" >
                                        <a className="link1" href="">Support</a>
                                    </Link>

                                    <Link to='/AboutUs' className="link1" >
                                        <a className="link1" href="">About Us</a>
                                    </Link>
                                    {/*<a className='bot'>NGN<LazyLoadImage effect = "blur" onClick={handleShowButton} className='dd' src={arr}/></a>*/}
                                    {/*{showDiv && <div><button className="buttonBlue menuSize">Sign up</button></div>}*/}

                                    {/*<a className="link1" href="">About Us</a>*/}
                                    {/*<a className='bot'>NGN<LazyLoadImage effect = "blur" onClick={handleShowButton} className='dd' src={arr}/></a>*/}
                                    {/*{showDiv && */}
                                    <div><button className="buttonBlue menuSize">Sign up</button></div>
                                    {/*}*/}

                                    {/*</Link>*/}
                                    {/*    <div><button className="buttonBlue menuSize">Sign up</button></div>*/}
                                </div>
                            </div>
                        </section>
                        <div className='hideAndSeek'>
                            <div className='navContainer'>
                                <Link to='/'  className='link2'>
                                    <div >Why LAGMEX</div>
                                </Link>
                                <Link to='/visa'  className='link2'>
                                    <div>Education</div>
                                </Link>
                                <Link to='#ourServicesRoute'  className='link2' >
                                    <div>FAQs</div>
                                </Link>
                                <Link to='/Support'  className='link2'>
                                    <div>Contact us</div>
                                </Link>


                            </div>


                        </div>


                    </div>
                </nav>
            </div>
        </div>
    )

}