import { useRef } from 'react';
// 引入three.js
import * as THREE from "three";
// 引入扩展库OrbitControls.js
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// 引入扩展库GLTFLoader.js
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export default function ThreePage() {
  console.log(THREE, "ttttt");
  const mountRef = useRef(null);
  // 创建3D场景对象Scene
  const scene = new THREE.Scene();

  //创建一个长方体几何对象Geometry
  const geometry = new THREE.BoxGeometry(100, 100, 100);

  //创建一个材质对象Material
  const material = new THREE.MeshBasicMaterial({
    color: 0xff0000, //0xff0000设置材质颜色为红色
  });

  // 两个参数分别为几何体geometry、材质material
//   const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh

  const mesh1 = new THREE.Mesh(geometry, material); //网格模型对象Mesh
  //设置网格模型在三维空间中的位置坐标，默认是坐标原点
  mesh1.position.set(0, 10, 0);

  scene.add(mesh1);

  // 实例化一个透视投影相机对象
const camera = new THREE.PerspectiveCamera();
//相机在Three.js三维坐标系中的位置
// 根据需要设置相机位置具体值
camera.position.set(200, 200, 200); 
//相机观察目标指向Threejs 3D空间中某个位置
camera.lookAt(0, 0, 0); //坐标原点

// width和height用来设置Three.js输出的Canvas画布尺寸(像素px)
const width = 800; //宽度
const height = 500; //高度
// 30:视场角度, width / height:Canvas画布宽高比, 1:近裁截面, 3000：远裁截面
const camera1 = new THREE.PerspectiveCamera(30, width / height, 1, 3000);

// 创建渲染器对象
const renderer = new THREE.WebGLRenderer();

renderer.setSize(width, height); 

renderer.render(scene, camera); //执行渲染操作

console.log(renderer.domElement,"renderer.domElement");
document.getElementById('three-canvas').appendChild(renderer.domElement);
// (mountRef.current as any).appendChild(renderer.domElement);


  return <div id="three-canvas" ref={mountRef} style={{'margin-top': '200px','margin-left':' 100px'}}></div>;
}
