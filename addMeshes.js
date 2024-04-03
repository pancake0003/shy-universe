import * as THREE from 'three'

const textureLoader = new THREE.TextureLoader();


//export: declaration to import this into main.js
export const addBoilerPlateMesh = () => {
    const box = new THREE.BoxGeometry(1, 1, 1);
    const boxMaterial = new THREE.MeshBasicMaterial({color: 0xFFBF00});
    const boxMesh = new THREE.Mesh(box, boxMaterial);
    boxMesh.position.set(-2, 0, 0);
    return boxMesh;
}

export function addStandardMesh (){
    const box = new THREE.BoxGeometry(1, 1, 1);
    const boxMaterial = new THREE.MeshStandardMaterial({ color: 0xffff00 });
    const boxMesh = new THREE.Mesh(box, boxMaterial);
    boxMesh.position.set(2, 0, 0);
    return boxMesh;
}

export function addCone (){
    const geometry = new THREE.ConeGeometry( 1, 1, 32 ); 
    const material = new THREE.MeshStandardMaterial( {color: 0xffff00} );
    const cone = new THREE.Mesh( geometry, material ); 
    cone.position.set(4, 0, 0);
    return cone;
}

export function addSphere() {
    const geometry = new THREE.SphereGeometry( 0.5, 32, 16 ); 
    const color = textureLoader.load('/blush_test3.jpg')
    ///blue_ice/Blue_Ice_001_COLOR.jpg
    //const displace = textureLoader.load('/blush.jpg');
    const material = new THREE.MeshStandardMaterial( {
        map: color,
        //displacementMap: displace,
        //displacementScale: 0.1,
    } ); 
    const sphere = new THREE.Mesh( geometry, material ); 
    sphere.position.set(0, 0, 0);
    return sphere;
}

export function addBoilerSphere() {
    const geometry = new THREE.SphereGeometry( 0.5, 32, 16 ); 
    const material = new THREE.MeshBasicMaterial( {color: 0xFFffff} ); 
    const sphere = new THREE.Mesh( geometry, material ); 
    sphere.position.set(0, 0, 0);
    return sphere;
}