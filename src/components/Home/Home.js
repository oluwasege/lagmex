
import YouTube from "react-youtube";

import './Home.css';

import "react-lazy-load-image-component/src/effects/blur.css"
import Splitter from "./splitter";
import React from "react";
import LastSplitter from "./lastSplit";
import ToggleComponent from "./toggleComponent";



export default function Home() {
    const videos = [
        {id: "RzmLaXULZAw", text: "Commodities Market For Beginners | Edelweiss Wealth Management"},
        {id: "DIJgms3O_lM", text: "What is a Futures Contract?" },
        {id: "ZQk8HmnI5Lg", text: "Benefits of Futures: Portfolio Diversification"},
        {id: "LNEYG3N2Hfo", text: "Introduction to Precious Metals"},
        {id: "-vL2NafXbdk", text: "Tokenization of assets using blockchain technology"},
        {id: "k5PdbA3-0cc", text: "What are Commodities & Commodity Investment? Investing 101: Easy Peasy Finance for Kids & Beginners"}
    ];
    const customPlayerOptions = {
        height: "220", // Specify the desired width in pixels
        width:"100%",
        playerVars: {
            // ... other player vars ...
        },
    };
    return (
        <div className='spec'>
            <div className='heroImg'>
                <button className='comingSoon'>
                    COMING SOON
                </button>
                <div className='firstText'>
                    Welcome to Lagos Mercantile Exchange, Africa’s first electronically traded commodity derivative exchange.
                </div>
                <div className='secondText'>
                    Be the first to know when we launch, receive exclusive insights about the market and get professional trading strategies.
                </div>
                <div className='joinG'>
                    <div className="joinGrp">
                        <input type='email' placeholder='Enter email address' />
                        <div className='joinButton'>
                            Join waitlist
                        </div>
                    </div>
                </div>


            </div>
            <div className="secondDiv">
                <span className='fix'>
                    Discover a world of opportunities as you engage in seamless buying and selling of commodities in real-time. With our user-friendly interface and advanced trading tools, you can take control of your investments and maximize your profits.

                </span>
            </div>
            <Splitter className='splitter' text='Extensive Market Coverage' anotherText='Gain access to a diverse range of commodities, including metals, energy, agricultural products, and more. Explore global markets and capitalize on emerging trends with ease.'/>
            <Splitter className='splitter' splitID='splitID' imgID='splitterImg2' id='spliter' text='Robust Trading Tools' anotherText='Empower yourself with our powerful trading tools, including real-time market data, charts, and analysis. Make informed decisions and execute trades with confidence.'/>
            <Splitter className='splitter' imgID='splitterImg3' text='Seamless Integration' anotherText='Connect your existing trading accounts, access our API, or utilize third-party integrations to streamline your trading experience. We make it easy to integrate with your preferred tools and systems.'/>
            <Splitter className='splitter' splitID='splitID' imgID='splitterImg4' id='spliter' text='Secure and Reliable' anotherText='Rest assured knowing that your transactions are protected by state-of-the-art security measures. Our platform is built to ensure the safety of your investments and personal information.'/>
            <div className='vidHead'>
                Improve your Knowledge of <span>commodity exchange</span>
            </div>
            <div className='videos'>
                {videos.map((video) => (
                    <div className='video' key={video.id}>
                        <YouTube videoId={video.id} opts={customPlayerOptions} />
                        <p className='ptext'>{video.text}</p>
                    </div>
                ))}
            </div>
            <div className='thirdDiv'>
                <div className='splitterText' id='splitID_' >
                    Why you should trade with our platfrom<br/>
                    <span id='fix'>
                    Are you tired of constantly missing out on market opportunities because you bought at the wrong time? Look no further than Lagmex,
                </span>
                </div>
                <div className='splitterContainer'>
                    <LastSplitter className='lastSplitter' text='Alternative Investment Opportunities with Tokenized Commodities' anotherText='Our platform offers access to tokenized commodities, which are alternative investment opportunities that may provide diversification benefits to your portfolio.' src='https://res.cloudinary.com/dk80ynx1w/image/upload/v1685252999/lagmex_resource/Frame_1000003352_vovw5h.svg' />
                    <LastSplitter className='lastSplitter' src='https://res.cloudinary.com/dk80ynx1w/image/upload/v1685253345/lagmex_resource/Frame_1000003353_qyua4k.svg' text='Experience Cutting Edge Data and Analytics' anotherText='We provide traders with advanced tools such as real-time market data, research reports, and trading analytics, allowing you to make informed trading decisions based on the latest information.'/>
                    <div className="mf">
                        <LastSplitter className='' id='lastSplitter' src='https://res.cloudinary.com/dk80ynx1w/image/upload/v1685253425/lagmex_resource/Frame_1000003354_fthixg.svg' text='Unlock Access to a Wide Range of Commodities' anotherText='Our platform offers a wide range of commodities such as metals, energy, agricultural products, and more, providing you with a multitude of investment options to suit your preferences and goals.'/>
                    </div>
                </div>


            </div>
            <div className='frequent'>
                Frequently Asked Questions
            </div>
            <ToggleComponent text='Where is Lagmex incorporated?' another='LAGMEX is incorporated in Lagos, Nigeria.'/>
            <ToggleComponent text='Who can use the commodities exchange?' another='The commodities exchange is open to a wide range of participants, including individuals, institutions, corporations, and other entities involved in commodities trading. Eligibility criteria and requirements may differ based on purpose.'/>
            <ToggleComponent text='Are there any membership or registration requirements to access the commodities exchange?' another='Membership of the exchange is entirely free. However, KYC requirement are important to be admitted to the exchange.'/>
            <ToggleComponent text='Can individual traders participate on the commodities exchange?' another='Yes.'/>
            <ToggleComponent text='Do I need a broker to access the commodities exchange?' another='No. However, institutions might use a broker to place certain trades on their behalf.'/>
            <ToggleComponent text='What are the asset classes that can be traded on the exchange?' another='Assets include metals, agriculture, energy and tokenized commodities'/>
            <div className='emailDiv'>
                <div className='heroImg joinG' id='join'>
                    <div className='text'>
                        Join our waitlist for a new way to invest in African commodities with tokenization and derivatives trading.
                    </div>
                    <div className="joinGrp">
                        <input type='email' placeholder='Enter email address' />
                        <div className='joinButton'>
                            Join waitlist
                        </div>
                    </div>
                </div>
            </div>
            <div className='connection'>
                Connect with us
            </div>
            <div className='socialBox'>
                <div className="social">
                    <img src='https://res.cloudinary.com/dk80ynx1w/image/upload/v1685341977/lagmex_resource/Frame_1000003287_onj0fc.svg' alt='socialImage'/>
                    <img src='https://res.cloudinary.com/dk80ynx1w/image/upload/v1685341977/lagmex_resource/Frame_1000003288_xxenib.svg' alt='socialImage'/>
                    <img src='https://res.cloudinary.com/dk80ynx1w/image/upload/v1685341977/lagmex_resource/Frame_1000003289_obp7sw.svg' alt='socialImage'/>
                </div>
            </div>

            <div className="connection" id='lastDiv'>
                2023 LAGMEX. All rights reserved
            </div>
        </div>
    );
}