import "./style.css";
import * as THREE from "three";
import { addBoilerPlateMesh, addSphere } from "./addMeshes";
import { addStandardMesh } from "./addMeshes";
import { addBoilerSphere } from "./addMeshes";
import { addLight } from "./addLights";
import { addCone } from "./addMeshes";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ antialias: true });
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100,
);

camera.position.set(0, 0, 20);
const meshes = {};
const controls = new OrbitControls(camera, renderer.domElement);
let tick = 0;
let tick2 = 100000000;

init();
function init() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  //lights
  meshes.defaultLight = addLight();

  //meshes
  // meshes.default = addBoilerPlateMesh();
  // meshes.standard = addStandardMesh();
  // meshes.cone = addCone();
  meshes.sphere = addSphere();
  meshes.planet1 = addSphere();
  meshes.planet2 = addSphere();
  meshes.planet3 = addBoilerSphere();
  meshes.planet4 = addBoilerSphere();
  //console.log(meshes.default);

  //scene operations
  // scene.add(meshes.default);
  // scene.add(meshes.standard);
  // scene.add(meshes.cone);
  scene.add(meshes.sphere);
  scene.add(meshes.planet1);
  scene.add(meshes.planet2);
  scene.add(meshes.planet3);
  scene.add(meshes.planet4);
  scene.add(meshes.defaultLight);

  resize();
  animate();
}

function resize() {
  window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });
}

function animate() {
  requestAnimationFrame(animate);
  tick += 0.1;
  tick2 -= 0.1;
  if (tick2 < 1) {
    tick2 = 100000000;
  }
  meshes.planet1.position.x = Math.sin(tick2 * 2);
  meshes.planet1.position.y = Math.cos(tick2 * 2);
  meshes.planet1.scale.x = 0.5;
  meshes.planet1.scale.y = 0.5;
  meshes.planet1.scale.z = 0.5;
  meshes.planet2.position.x = 3 * Math.sin(tick);
  meshes.planet2.position.y = 3 * Math.cos(tick);
  meshes.planet2.scale.x = 2;
  meshes.planet2.scale.y = 2;
  meshes.planet2.scale.z = 2;
  meshes.planet3.position.x = 10 * Math.sin(tick * 2);
  meshes.planet3.position.y = 10 * Math.cos(tick * 2);
  meshes.planet3.scale.x = 0.2;
  meshes.planet3.scale.y = 0.2;
  meshes.planet3.scale.z = 0.2;
  meshes.planet4.position.x = 15 * Math.sin(tick * 0.2);
  meshes.planet4.position.z = 15 * Math.cos(tick * 0.2);
  meshes.defaultLight.position.x = 15 * Math.sin(tick * 0.2);
  meshes.defaultLight.position.z = 15 * Math.cos(tick * 0.2);
  meshes.planet4.scale.x = 8;
  meshes.planet4.scale.y = 8;
  meshes.planet4.scale.z = 8;
  // meshes.default.rotation.x += 0.01;
  // meshes.default.rotation.y += 0.01;
  // meshes.standard.rotation.x += 0.01;
  // meshes.standard.rotation.y += 0.01;
  // meshes.standard.position.x = Math.sin(tick);
  // meshes.default.scale.x = Math.sin(tick);
  // meshes.default.scale.y = Math.cos(tick);
  // meshes.standard.position.x = Math.sin(tick);
  // meshes.standard.position.y = Math.cos(tick);

  renderer.render(scene, camera);
}
