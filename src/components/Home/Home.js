
import YouTube from "react-youtube";

import './Home.css';

import "react-lazy-load-image-component/src/effects/blur.css"
import Splitter from "./splitter";
import React from "react";
import LastSplitter from "./lastSplit";



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
        <div>
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
        </div>
    );
}