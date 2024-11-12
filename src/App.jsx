import "./CSS/Locomotice.css";
import {Link, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import PageWrapper from "./components/PageWrapper";
import React, {useEffect, useRef, useState} from "react";
import Navbar from "./partials/Navbar";
import Lenis from "lenis";

const App = () => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Listen for the scroll event and log the event data
    lenis.on("scroll", (e) => {
        console.log(e);
    });

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return (
        <>
            <div className="  bg-[#111] text-white h-[400vh]">
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <PageWrapper>
                                <Home />
                            </PageWrapper>
                        }
                    />
                    <Route
                        path="/About"
                        element={
                            <PageWrapper>
                                <About />
                            </PageWrapper>
                        }
                    />
                </Routes>
            </div>
        </>
    );
};

export default App;
