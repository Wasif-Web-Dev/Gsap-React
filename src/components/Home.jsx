import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const images1 = [
        {
            url: "https://cdn.prod.website-files.com/60eeb025115a75902b86a796/636012de71827483a474ccb2_amelia-frame-2-p-500.jpg",
        },
        {
            url: "https://cdn.prod.website-files.com/60eeb025115a75902b86a796/636012de80eb703be71add91_amelia-frame-3-p-500.jpg",
        },
        {
            url: "https://cdn.prod.website-files.com/60eeb025115a75902b86a796/636012de14697f5b494ab8ba_amelia-frame-4-p-500.jpg",
        },
        {
            url: "https://cdn.prod.website-files.com/60eeb025115a75902b86a796/636012deb9248c1eb1b09ea0_amelia-frame-1-p-500.jpg",
        },
        {
            url: "https://cdn.prod.website-files.com/60eeb025115a75902b86a796/636012de71827483a474ccb2_amelia-frame-2-p-500.jpg",
        },
        {
            url: "https://cdn.prod.website-files.com/60eeb025115a75902b86a796/636012de80eb703be71add91_amelia-frame-3-p-500.jpg",
        },
        {
            url: "https://cdn.prod.website-files.com/60eeb025115a75902b86a796/636012de14697f5b494ab8ba_amelia-frame-4-p-500.jpg",
        },
    ];
    const images2 = [
        {
            url: "https://cdn.prod.website-files.com/60eeb025115a75902b86a796/636012e26f1d023dd5badc97_amelia-frame-8-p-500.jpg",
        },
        {
            url: "https://cdn.prod.website-files.com/60eeb025115a75902b86a796/636012e2183e60c290950ea3_amelia-frame-5-p-500.jpg",
        },
        {
            url: "https://cdn.prod.website-files.com/60eeb025115a75902b86a796/636012e2bc911635666911db_amelia-frame-6-p-500.jpg",
        },
        {
            url: "https://cdn.prod.website-files.com/60eeb025115a75902b86a796/636012e25de4aa1981aed859_amelia-frame-7-p-500.jpg",
        },
        {
            url: "https://cdn.prod.website-files.com/60eeb025115a75902b86a796/636012e26f1d023dd5badc97_amelia-frame-8-p-500.jpg",
        },
        {
            url: "https://cdn.prod.website-files.com/60eeb025115a75902b86a796/636012e2183e60c290950ea3_amelia-frame-5-p-500.jpg",
        },
        {
            url: "https://cdn.prod.website-files.com/60eeb025115a75902b86a796/636012e2bc911635666911db_amelia-frame-6-p-500.jpg",
        },
    ];

    const scrollRef = useRef(null);
    const scrollRef2 = useRef(null);

    useGSAP(() => {
        const scrollContainer = scrollRef.current;
        const scrollContainer2 = scrollRef2.current;

        gsap.to(scrollContainer, {
            x: () => -(scrollContainer.scrollWidth - window.innerWidth),
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: scrollContainer,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
                markers: true,
            },
        });

        gsap.fromTo(
            scrollContainer2,
            {
                x: () => -(scrollContainer2.scrollWidth - window.innerWidth),
            },
            {
                x: 0,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: scrollContainer2,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                    markers: true,
                },
            }
        );
    }, []);

    return (
        <div className="w-full h-[200vh]">
            {" "}
            {/* Increased height to make scrolling happen */}
            <div className="px-16 h-[100vh]">
                <div className="relative border-2 bg-[#222] h-[80vh] rounded-3xl">
                    <video src="youtube.com/watch?v=V9CEPZnmuvQ"></video>
                    <span className="absolute top-[50%] right-[50%] text-7xl -translate-x-[-30%] translate-y-[-60%] opacity-30">
                        Amelia
                    </span>
                    <span className="flex items-center gap-1 justify-center border-[1px] p-1 w-[8vw] absolute top-[62%] rounded-full text-center right-[49%] cursor-pointer text-xl translate-y-[-60%] opacity-30">
                        Watch
                        <i className="ri-play-circle-fill mt-[3px]"></i>
                    </span>
                </div>
            </div>
            <div className="h-[100vh] flex items-center justify-center flex-col">
                <h1 className="text-md font-semibold">DATE</h1>
                <h1 className="text-xl font-semibold">November 2022</h1>
                <div className="border-[1px] border-white h-[8vh] my-5"></div>
                <h1 className="text-md font-semibold">Location</h1>
                <h1 className="text-xl font-semibold">Cornwall, Scotland</h1>

                <h1 className="w-[45%] mt-16 text-2xl text-center">
                    The film AMELIA explores the colorful life of the photographer Amelia Le Brun. This film is a window
                    into how her past demons and nostalgic childhood memories have shaped her into the creative she is
                    today. Her turbulent yet adventurous upbringing sparked her creative appetite to document the world
                    around her and never to lose that younger version of herself.
                </h1>
            </div>
            {/* Horizontal Scrolling Images Section */}
            <div className="w-full h-[100vh] overflow-hidden flex flex-col gap-3">
                <div ref={scrollRef} className="flex gap-3">
                    {images1.map((i, index) => {
                        return <img key={index} src={i.url} alt="image" className="w-[23vw] object-cover rounded-xl" />;
                    })}
                </div>
                <div ref={scrollRef2} className="flex gap-3">
                    {images2.map((i, index) => {
                        return <img key={index} src={i.url} alt="image" className="w-[24vw] object-cover rounded-xl" />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Home;
