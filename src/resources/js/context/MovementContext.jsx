import { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

export function useMovementContext() {
    return useContext(Context);
}

export function MovementProvider({ children }) {
    const [movement, setMovement] = useState({
        forward: false,
        backward: false,
        left: false,
        right: false,
        up: false,
        down: false,
    });

    const Controls = () => {
        const keys = {
            ArrowUp: "up",
            ArrowDown: "down",
            ArrowLeft: "left",
            ArrowRight: "right",
            KeyA: "up",
            KeyD: "down",
            KeyW: "forward",
            KeyS: "backward",
        };
        const moveFieldByKey = (key) => keys[key];
        const handleMouseMove = (e) => {};

        useEffect(() => {
            const handleKeyDown = (e) =>
                setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: true }));
            const handleKeyUp = (e) =>
                setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: false }));
            document.addEventListener("keydown", handleKeyDown);
            document.addEventListener("keyup", handleKeyUp);
            document.addEventListener("pointermove", handleMouseMove);

            return () => {
                document.removeEventListener("keydown", handleKeyDown);
                document.removeEventListener("keyup", handleKeyUp);
                document.removeEventListener("pointermove", handleMouseMove);
            };
        }, []);
        return movement;
    };

    const value = {
        movement,
        setMovement,
        Context,
        Controls,
    };
    return <Context.Provider value={value}>{children}</Context.Provider>;
}
