import * as THREE from 'three';

export function addLight(){
    const light = new THREE.DirectionalLight(0xffffff, 4);
    light.position.set(1, 10, 10);
    return light;
}