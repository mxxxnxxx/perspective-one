// import { useEffect, useState } from "react";
// import * as THREE from "three";

// const keys = {
//     ArrowUp: "forward",
//     ArrowDown: "backward",
//     ArrowLeft: "left",
//     ArrowRight: "right",
//     KeyA: "left",
//     KeyD: "right",
//     KeyW: "forward",
//     KeyS: "backward",
// };

// const moveFieldByKey = (key) => keys[key];

// const Controls = () => {
//     const [movement, setMovement] = useState({
//         forward: false,
//         backward: false,
//         left: false,
//         right: false,
//         up: false,
//         down: false,
//     });
//     const handleMouseMove = (e) => {};

//     useEffect(() => {
//         const handleKeyDown = (e) =>
//             setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: true }));
//         const handleKeyUp = (e) =>
//             setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: false }));
//         document.addEventListener("keydown", handleKeyDown);
//         document.addEventListener("keyup", handleKeyUp);
//         document.addEventListener("pointermove", handleMouseMove);

//         return () => {
//             document.removeEventListener("keydown", handleKeyDown);
//             document.removeEventListener("keyup", handleKeyUp);
//             document.removeEventListener("pointermove", handleMouseMove);
//         };
//     }, []);
//     return movement;
// };

// export default Controls;
