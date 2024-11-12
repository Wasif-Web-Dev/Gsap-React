// PageWrapper.js
import React, {useEffect, useRef} from "react";
import {useLocation} from "react-router-dom";
import {gsap} from "gsap";

const PageWrapper = ({children}) => {
    const wrapperRef = useRef(null);
    const location = useLocation();

    // Fade-in effect on component load
    useEffect(() => {
        gsap.fromTo(wrapperRef.current, {opacity: 0}, {opacity: 1, duration: 2});
    }, [location]);

    // Fade-out effect when navigating away
    useEffect(() => {
        return () => {
            gsap.to(wrapperRef.current, {opacity: 0, duration: 0});
        };
    }, [location]);

    return <div ref={wrapperRef}>{children}</div>;
};

export default PageWrapper;
