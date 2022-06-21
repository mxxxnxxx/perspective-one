import React, { useState } from 'react';
import THREE from 'three';
import CanvasContainer from '../component/CanvasContainer';
const EnhancedCanvasContainer: React.FC = () => {
    // 移動している状態を定義
    const [moveForward, setMoveForward] = useState(false)
    const [moveBackward, setMoveBackward] = useState(false)
    const [movesLeft, setMoveLeft] = useState(false)
    const [moveRight, setMoveRight] = useState(false)

    // // 移動速度
    // const velocity = new THREE.Vector3()
    // // 移動方向
    // const direction = new THREE.Vector3()

    // キーボード操作
    // 押し込んでいる状態
    const onKeyDown = (e: KeyboardEvent) => {
        switch (e.code) {
            case "ArrowUp":
                setMoveForward(true)
                console.log(e.code)
                break
            case "ArrowDown":
                setMoveBackward(true)
                break
            case "ArrowLeft":
                setMoveLeft(true)
                break
            case "ArrowRight":
                setMoveRight(true)
                break
        }
    }
    // キーボードを話した状態
    const onKeyUp = (e: KeyboardEvent) => {
        switch (e.code) {
            case "ArrowUp":
                setMoveForward(false)
                console.log(e.code)
                break
            case "ArrowDown":
                setMoveBackward(false)
                break
            case "ArrowLeft":
                setMoveLeft(false)
                break
            case "ArrowRight":
                setMoveRight(false)
                break
        }
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp)
    return (
        <CanvasContainer />
    )
}

export default EnhancedCanvasContainer
