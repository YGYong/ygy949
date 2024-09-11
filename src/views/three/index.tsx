import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function ThreeJSComponent() {
  const mountRef = useRef(null);

  useEffect(() => {
    // 创建场景、相机和渲染器
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    // 设置渲染器大小
    renderer.setSize(window.innerWidth, window.innerHeight);

    // 创建一个立方体并添加到场景中
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // 设置相机位置
    camera.position.z = 5;

    // 将渲染器的画布插入到ref引用的DOM元素中
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // 动画函数，用于更新立方体的旋转
    const animate = () => {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    // 开始动画循环
    animate();

    // 清理函数，在组件卸载时移除事件监听和DOM元素
    return () => {
      mountRef.current && mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} />;
}

export default ThreeJSComponent;