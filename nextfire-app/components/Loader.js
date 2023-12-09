import React from 'react';

export default function Loader() {
    return (
        <div className="loader">
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
            <style jsx>{`
             .loader {
                    width: 100%;
                    height: 100%;
                    position: fixed;
                    top: 0;
                    left: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: rgba(0, 0, 0, 0.75);
                    z-index: 1000;
                }

                .lds-ripple {
                    display: inline-block;
                    position: relative;
                    width: 80px;
                    height: 80px;
                }

                .lds-ripple div {
                    position: absolute;
                    border: 4px solid #fff;
                    opacity: 1;
                    border-radius: 50%;
                    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
                }

                .lds-ripple div:nth-child(2) {
                    animation-delay: -0.5s;
                }

                @keyframes lds-ripple {
                    0% {
                        top: 36px;
                        left: 36px;
                        width: 0;
                        height: 0;
                        opacity: 1;
                    }
                    100% {
                        top: 0px;
                        left: 0px;
                        width: 72px;
                        height: 72px;
                        opacity: 0;
                    }
                }
            `}</style>
        </div>
    );
}