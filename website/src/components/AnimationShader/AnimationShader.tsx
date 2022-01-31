import { EffectComposer } from 'postprocessing';
import * as THREE from 'three';

import React, { FunctionComponent, useEffect, useRef } from 'react';
import { useCallback } from 'react';

import {
  SceneState,
  TIME_DILATION,
  initScene,
  updateSceneSize,
} from 'utils/shader';

export const AnimationShader: FunctionComponent = () => {
  const scrollRef = useRef<number>(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sceneStateRef = useRef<SceneState | null>(null);
  const clockRef = useRef(new THREE.Clock());
  const requestRef = useRef(-1);

  const render = useCallback(
    (meshes: THREE.Mesh[], composer: EffectComposer) => () => {
      meshes.forEach((mesh) => {
        mesh.material.uniforms.u_time.value =
          clockRef.current.getElapsedTime() * TIME_DILATION;
        mesh.position.y = mesh.initialPositionY + scrollRef.current / 140;
        mesh.rotation.x = scrollRef.current / 2000;
      });

      composer.render();
      requestRef.current = requestAnimationFrame(render(meshes, composer));
    },
    []
  );

  const handleResize = useCallback(() => {
    if (sceneStateRef.current && canvasRef.current) {
      const width = window.innerWidth,
        height = window.innerHeight;
      canvasRef.current.width = width;
      updateSceneSize(sceneStateRef.current, width, height);
    }
  }, []);

  useEffect(() => {
    const listener = () => {
      if (typeof window !== 'undefined')
        scrollRef.current = window?.scrollY ?? 0;
    };

    listener();

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', listener);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', listener);
      }
    };
  }, [window]);

  useEffect(() => {
    if (!canvasRef.current) return;

    const width = canvasRef.current.offsetWidth,
      height = canvasRef.current.offsetHeight;

    sceneStateRef.current = initScene(canvasRef.current, width, height);

    const { meshes, composer } = sceneStateRef.current;
    render(meshes, composer)();

    return () => cancelAnimationFrame(requestRef.current);
  }, [canvasRef.current]);

  useEffect(() => {
    handleResize();

    if (typeof window !== 'undefined')
      window.addEventListener('resize', handleResize);
    return () => {
      if (typeof window !== 'undefined')
        window.removeEventListener('resize', handleResize);
    };
  }, [window]);

  return (
    <canvas
      style={{
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: `0px`,
        transform: `translateY(60px)`,
        zIndex: -10,
      }}
      ref={canvasRef}
    />
  );
};
