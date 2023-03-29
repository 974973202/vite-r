import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function Three() {
  // useEffect(() => {
  //   const container = document.getElementById('three');
  //   const renderer = new THREE.WebGLRenderer();
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   container.appendChild(renderer.domElement);

  //   const camera = new THREE.PerspectiveCamera(
  //     45,
  //     window.innerWidth / window.innerHeight,
  //     1,
  //     500
  //   );
  //   camera.position.set(0, 0, 100);
  //   camera.lookAt(0, 0, 0);

  //   const scene = new THREE.Scene();
  // }, []);
  return <div id="three">123</div>;
}

export default Three;
