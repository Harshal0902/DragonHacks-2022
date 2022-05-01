import React, { useRef, useEffect, useState } from "react"
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd"
import Webcam from "react-webcam"
import { drawRect } from "../utilities/utilities";

function Uload() {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    const runCoco = async () => {
        const net = await cocossd.load();
        console.log("Handpose model loaded.");
        setInterval(() => {
            detect(net);
        }, 10);
    };

    const detect = async (net) => {
        if (
            typeof webcamRef.current !== "undefined" &&
            webcamRef.current !== null &&
            webcamRef.current.video.readyState === 4
        ) {
            const video = webcamRef.current.video;
            const videoWidth = webcamRef.current.video.videoWidth;
            const videoHeight = webcamRef.current.video.videoHeight;

            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;

            canvasRef.current.width = videoWidth;
            canvasRef.current.height = videoHeight;

            const obj = await net.detect(video);

            const ctx = canvasRef.current.getContext("2d");
            drawRect(obj, ctx);
        }
    };

    useEffect(() => { runCoco() }, []);

    const [dropdown, setDropDown] = React.useState(false);

    const handleCLick = async () => {
        setDropDown(!dropdown);
    };

    return (
        <div className="text-center font-montserrat">
            <header className="min-h-screen flex flex-col items-center justify-center text-white text-2xl">
                <Webcam
                    ref={webcamRef}
                    muted={true}
                    style={{
                        position: "absolute",
                        marginLeft: "auto",
                        marginRight: "auto",
                        left: 0,
                        right: 0,
                        textAlign: "center",
                        zindex: 9,
                        width: 680,
                        height: 480,
                    }}
                />

                <canvas
                    ref={canvasRef}
                    style={{
                        position: "absolute",
                        marginLeft: "auto",
                        marginRight: "auto",
                        left: 0,
                        right: 0,
                        textAlign: "center",
                        zindex: 8,
                        width: 680,
                        height: 480,
                    }}
                />
            </header>

            <div className="-mt-28">
                <button className='bg-primary text-xl px-4 py-2 rounded-md font-semibold' onClick={handleCLick}>Capture</button>
                {dropdown && (
                    <div className="py-2 text-lg text-white">The item is recyclable</div>
                )}
            </div>
        </div>
    );
}

export default Uload;
