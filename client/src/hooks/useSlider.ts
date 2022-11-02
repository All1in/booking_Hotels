import {useEffect, useState} from "react";

interface SliderProps {
    autoPlay: boolean,
    autoPlayTime: number
}

interface SliderToPaste {
    id: number,
    textInfo: string,
    author: string,
    image: string
}

export const useSlider = ({ autoPlay, autoPlayTime }: SliderProps) => {
    const [items, setItems] = useState<SliderToPaste[]>([
        {
            id: 1,
            textInfo: "After a construction " +
                "project took longer than " +
                "expected, my husband, my daughter" +
                " and I\n" +
                "needed a place to stay for a few nights. As a Chicago resident, we know a lot about our\n" +
                "city, neighborhood and the types of housing options available and absolutely love our\n" +
                "vacation at Sona Hotel.",
            author: "- Alexander Vasquez",
            image: "https://www.advancetemplate.com/assets/zip/070069c9c3e3addaf305d3ff472958bc/sona/img/testimonial-logo.png"
        },
        {
            id: 2,
            textInfo: "Lorem ipsum dolor sit amet, " +
                "consectetur adipiscing elit, sed do eiusmod " +
                "tempor incididunt ut labore et dolore magna " +
                "aliqua. Ut enim ad minim veniam, quis nostrud" +
                " exercitation ullamco laboris nisi ut aliquip " +
                "ex ea commodo consequat. Duis aute irure dolor " +
                "in reprehenderit in voluptate velit esse cillum " +
                "dolore eu fugiat nulla pariatur. Excepteur sint " +
                "occaecat cupidatat non proident, sunt in culpa qui " +
                "officia deserunt mollit anim id est laborum.",
            author: "Vovan",
            image: "https://www.advancetemplate.com/assets/zip/070069c9c3e3addaf305d3ff472958bc/sona/img/testimonial-logo.png"
        },
        {
            id: 3,
            textInfo: "Some Text",
            author: "YA xyeu s etogo proJecta",
            image: "https://www.advancetemplate.com/assets/zip/070069c9c3e3addaf305d3ff472958bc/sona/img/testimonial-logo.png"
        },
    ]);
    const [slide, setSlide] = useState<number>(0);
    const [touchPosition, setTouchPosition] = useState(null)

    const changeSlide = (direction = 1) => {
        let slideNumber = 0;

        if (slide + direction < 0) {
            slideNumber = items.length - 1;
        } else {
            slideNumber = (slide + direction) % items.length;
        }
        setSlide(slideNumber);
    };

    const goToSlide = (number: number) => {
        setSlide(number % items.length);
    };

    const handleTouchStart = (e: any) => {
        const touchDown = e.touches[0].clientX;

        setTouchPosition(touchDown);
    }

    const handleTouchMove = (e: any) => {
        if (touchPosition === null) {
            return;
        }

        const currentPosition = e.touches[0].clientX;
        const direction = touchPosition - currentPosition;

        if (direction > 10) {
            changeSlide(1);
        }

        if (direction < -10) {
            changeSlide(-1);
        }

        setTouchPosition(null);
    }

    useEffect(() => {
        if (!autoPlay) return;

        const interval = setInterval(() => {
            changeSlide(1);
        }, autoPlayTime);

        return () => {
            clearInterval(interval);
        };
    }, [items.length, slide]);

    return {
        items,
        goToSlide,
        handleTouchStart,
        handleTouchMove,
        slide,
        touchPosition
    }
}

