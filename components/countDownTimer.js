import { countDown } from '@/recoil/atoms';
import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';


const CountdownTimer = ({ targetTime }) => {


    const [isCountdownFinished, setIsCountdownFinished] = useRecoilState(countDown);

    const calculateTimeLeft = () => {
        const difference = targetTime - +new Date();
        let timeLeft = { minutes: 0, seconds: 0 };

        if (difference > 0) {
            timeLeft = {
                minutes: Math.floor(difference / (1000 * 60)),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            const timeLeft = calculateTimeLeft();
            if (timeLeft.minutes === 0 && timeLeft.seconds === 0) {
                // Countdown has finished, so stop the timer
                clearInterval(timer);
                setIsCountdownFinished(true);
            }
            setTimeLeft(timeLeft);
        }, 1000);

        return () => clearInterval(timer);
    }, [targetTime]);

    return (
        <div>
            {timeLeft.minutes.toString().padStart(2, '0')}:
            {timeLeft.seconds.toString().padStart(2, '0')}
        </div>
    );
};

export default CountdownTimer;
