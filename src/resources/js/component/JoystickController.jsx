import { useState } from "react";
import { Joystick } from "react-joystick-component";
import { useMovementContext } from "../context/MovementContext";
const JoystickController = () => {
    const { movement, setMovement } = useMovementContext();

    const onMove = (stick) => {
        switch (stick.direction) {
            case "FORWARD":
                setMovement((m) => ({
                    ...m,
                    up: true,
                    down: false,
                    right: false,
                    left: false,
                }));
                break;
            case "BACKWARD":
                setMovement((m) => ({
                    ...m,
                    up: false,
                    down: true,
                    right: false,
                    left: false,
                }));
                break;
            case "RIGHT":
                setMovement((m) => ({
                    ...m,
                    up: false,
                    down: false,
                    right: true,
                    left: false,
                }));
                break;
            case "LEFT":
                setMovement((m) => ({
                    ...m,
                    up: false,
                    down: false,
                    right: false,
                    left: true,
                }));
                break;
        }
    };

    const onStop = () => {
        setMovement((m) => ({
            ...m,
            up: false,
            down: false,
            right: false,
            left: false,
        }));
    };
    return (
        <div className="joystick">
            <Joystick
                baseColor="gray"
                stickColor="black"
                move={onMove}
                stop={onStop}
                size={50}
            />
        </div>
    );
};
export default JoystickController;
