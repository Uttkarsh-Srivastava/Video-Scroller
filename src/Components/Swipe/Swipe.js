import React, { useRef } from "react";

function Swipe({ Component, SwipeLeft, SwipeRight, SwipeUp, SwipeDown }) {
    const x = useRef();
    const y = useRef();
    const swiping = useRef(false);

    const minDistance = 2;
    function getDirection(deltaX, deltaY, degree) {
        if (
            (deltaX < 0 && deltaY > 0 && degree > 45) ||
            (deltaX > 0 && deltaY > 0 && degree > 45)
        ) {
            //Swipe Up
            SwipeUp();
            // alert("Up");
        } else if (
            (deltaX < 0 && deltaY < 0 && degree > 45) ||
            (deltaX > 0 && deltaY < 0 && degree > 45)
        ) {
            //Swipe Down
            SwipeDown();
            // alert("Down");
        } else if (
            (deltaX < 0 && deltaY > 0 && degree <= 45) ||
            (deltaX < 0 && deltaY < 0 && degree <= 45)
        ) {
            //Swipe Right
            SwipeRight();
            // alert("Right");
        } else if (
            (deltaX > 0 && deltaY > 0 && degree <= 45) ||
            (deltaX > 0 && deltaY < 0 && degree <= 45)
        ) {
            // alert("left");
            SwipeLeft();
            //Swipe Left
        }
    }

    function onTouchStart(e) {
        e.preventDefault();
        const touch = e.touches[0];
        x.current = touch.clientX;
        y.current = touch.clientY;
    }

    function onTouchMove(e) {
        e.preventDefault();

        if (e.changedTouches && e.changedTouches.length) {
            swiping.current = true;
        }
    }

    function onTouchEnd(e) {
        e.preventDefault();

        const touch = e.changedTouches[0];

        const deltaX = x.current - touch.clientX;
        const deltaY = y.current - touch.clientY;

        const abX = Math.abs(deltaX);
        const abY = Math.abs(deltaY);
        if (abX > minDistance) {
            const angle = Math.atan(abY / abX);
            const degree = angle * (180 / 3.14);
            getDirection(deltaX, deltaY, degree);
        }
    }
    return (
        <div
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            {Component}
        </div>
    );
}

export default Swipe;
