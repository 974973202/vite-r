import { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { TWEEN } from 'three/examples/jsm/libs/tween.module.min.js';

let stats: any;

let camera: any, scene: any, renderer: any;

let points: any,
  geometry: any,
  textGeometryList: any,
  textIndex = 0,
  startIndex = 0;

function Three() {
  useEffect(() => {
    init();
    animate();
  }, []);

  //canvas 生成粒子贴图
  function generateSprite() {
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;

    const context = canvas.getContext('2d');
    const gradient = context?.createRadialGradient(
      canvas.width / 2,
      canvas.height / 2,
      0,
      canvas.width / 2,
      canvas.height / 2,
      canvas.width / 2
    );
    gradient?.addColorStop(0, 'rgba(255,255,255,1)');
    gradient?.addColorStop(0.2, 'rgba(0,255,255,1)');
    gradient?.addColorStop(0.4, 'rgba(0,0,64,1)');
    gradient?.addColorStop(1, 'rgba(0,0,0,1)');

    if (context && gradient) {
      context.fillStyle = gradient;
    }
    context?.fillRect(0, 0, canvas.width, canvas.height);

    const texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;
    return texture;
  }

  function tweenPoints(geom: any) {
    for (let i = 0; i < geom.attributes.position.count; i++) {
      const x = geom.attributes.position.array[i * 3];
      const y = geom.attributes.position.array[i * 3 + 1];
      const z = geom.attributes.position.array[i * 3 + 2];
      const ox = geometry.attributes.position.array[(startIndex + i) * 3];
      const oy = geometry.attributes.position.array[(startIndex + i) * 3 + 1];
      const oz = geometry.attributes.position.array[(startIndex + i) * 3 + 2];

      const fromPoint = { x: ox, y: oy, z: oz };
      const positionAttribute = geometry.getAttribute('position');
      const tween = new TWEEN.Tween(fromPoint);
      tween
        .to({ x, y, z }, 1000)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .delay((1000 * i) / geom.attributes.position.count)
        .onUpdate(function () {
          positionAttribute.setXYZ(
            startIndex + i,
            fromPoint.x,
            fromPoint.y,
            fromPoint.z
          );
          positionAttribute.needsUpdate = true; //更新
        })
        .start();
    }
    setTimeout(() => {
      if (textIndex < textGeometryList.length - 1) {
        textIndex++;
        startIndex += geom.attributes.position.count;
        tweenPoints(textGeometryList[textIndex].geometry);
      }
    }, 2000);
  }

  const init = () => {
    const container = document.getElementById('container');
    // 场景
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050505);

    //相机
    camera = new THREE.PerspectiveCamera(
      45,
      (window.innerWidth - 232) / (window.innerHeight - 112),
      0.1,
      10000
    );
    if (window.innerWidth < 768) {
      console.log('mobile');
      camera.position.set(400, 400, 400);
    } else {
      camera.position.set(200, 200, 200);
    }
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    //渲染器
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth - 232, window.innerHeight - 112);

    container?.appendChild(renderer.domElement);

    //初始化粒子

    const particles = 9308;

    geometry = new THREE.BufferGeometry();

    const positions = [];

    const n = 500,
      n2 = n / 2; // particles spread in the cube

    for (let i = 0; i < particles; i++) {
      // positions

      const x = Math.random() * n - n2;
      const y = Math.random() * n - n2;
      const z = Math.random() * n - n2;

      positions.push(x, y, z);
    }

    geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(positions, 3)
    );

    //粒子材质

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 4,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      map: generateSprite(),
      depthWrite: false,
    });

    points = new THREE.Points(geometry, material);
    scene.add(points);

    //load model
    const loader = new GLTFLoader();
    loader.load('/texts.glb', function (obj) {
      textGeometryList = obj.scene.children;
      // 对每个模型做一些简单形变
      for (let i = 0; i < textGeometryList.length; i++) {
        textGeometryList[i].geometry.scale(100, 100, 100);
        textGeometryList[i].geometry.rotateX(Math.PI / 5);
        textGeometryList[i].geometry.rotateY(Math.PI / 4);
      }
      //模型加载后立即执行动画
      tweenPoints(textGeometryList[textIndex].geometry);
    });

    //渲染监测
    stats = new (Stats as any)();
    container?.appendChild(stats.dom);

    //resize listener

    window.addEventListener('resize', onWindowResize);
  };

  function onWindowResize() {
    camera.aspect = (window.innerWidth - 232) / (window.innerHeight - 112);
    camera.updateProjectionMatrix();
    if (window.innerWidth < 768) {
      camera.position.set(400, 400, 400);
    } else {
      camera.position.set(200, 200, 200);
    }

    renderer.setSize(window.innerWidth - 232, window.innerHeight - 112);
  }

  //渲染

  function animate() {
    TWEEN.update();
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
    stats.update();
  }

  return (
    <div
      style={{ width: 'calc(100vw - 232px)', height: 'calc(100vh - 112px)' }}
      id="container"
    ></div>
  );
}

export default Three;
