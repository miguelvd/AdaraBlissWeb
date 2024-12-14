import React, { useRef, useEffect, Suspense, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Group } from 'three';

gsap.registerPlugin(ScrollTrigger);

// Componente para el modelo 3D
function Model() {
  const modelRef = useRef<Group>(null);
  
  // Cargar las texturas
  const diffuseMap = useLoader(THREE.TextureLoader, '/models/Marina_1276_Textures/Marina_1276_DIFF.jpg');
  const normalMap = useLoader(THREE.TextureLoader, '/models/Marina_1276_Textures/Marina_1276_NORM.png');
  const reflectionMap = useLoader(THREE.TextureLoader, '/models/Marina_1276_Textures/Marina_1276_REFL.jpg');
  
  // Crear el material una vez que las texturas estén cargadas
  const material = new THREE.MeshStandardMaterial({
    map: diffuseMap,
    normalMap: normalMap,
    metalnessMap: reflectionMap,
    metalness: 0.2,
    roughness: 0.8,
    side: THREE.DoubleSide
  });

  const obj = useLoader(OBJLoader, '/models/Mujer.obj');

  // Aplicar el material al modelo
  useEffect(() => {
    if (obj) {
      obj.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material = material;
        }
      });
    }
  }, [obj, material]);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={modelRef}>
      <primitive 
        object={obj} 
        scale={0.003} 
        position={[0, -2, 0]}
      />
    </group>
  );
}

// Componente para las luces
function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, 10, 5]} intensity={0.5} />
    </>
  );
}

// Componente para los textos animados
function AnimatedText({ text, className = "" }: { text: string, className?: string }) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    gsap.fromTo(element,
      {
        opacity: 0,
        y: 100,
        scale: 0.5
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: "top center+=100",
          end: "top center-=200",
          toggleActions: "play reverse play reverse",
          scrub: 1
        }
      }
    );
  }, []);

  return (
    <div ref={textRef} className={`transform transition-all ${className}`}>
      {text}
    </div>
  );
}

// Componente de fallback para cuando el modelo 3D falla
function ModelFallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="#F25AA3" wireframe />
    </mesh>
  );
}

export const ParallaxHeader = () => {
  useEffect(() => {
    // Animación para el título principal
    gsap.to("#main-title", {
      scale: 1.5,
      opacity: 0,
      scrollTrigger: {
        trigger: "#main-title",
        start: "top top",
        end: "center top",
        scrub: 1
      }
    });
  }, []);

  return (
    <div className="relative">
      {/* Header con modelo 3D */}
      <div className="h-screen bg-black overflow-hidden relative">
        {/* Capa 1 - Gradiente superior */}
        <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 to-transparent z-10" />
        
        {/* Capa 2 - Modelo 3D */}
        <div className="absolute inset-0">
          <Canvas>
            <color attach="background" args={['#000000']} />
            <PerspectiveCamera 
              makeDefault 
              position={[0, 0, 10]} 
              fov={50}
            />
            <Lights />
            <Suspense fallback={<ModelFallback />}>
              <Model />
            </Suspense>
            <OrbitControls 
              enableZoom={false}
              enablePan={false}
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
            />
          </Canvas>
        </div>

        {/* Capa 3 - Gradiente inferior */}
        <div className="absolute inset-0 bg-gradient-to-t from-pink-500/10 to-transparent z-10" />

        {/* Título principal */}
        <div id="main-title" className="absolute inset-0 flex items-center justify-center z-20">
          <h1 className="text-6xl text-white font-bold">Adara Bliss</h1>
        </div>
      </div>

      {/* Sección "El poder del alisado" */}
      <div className="min-h-screen bg-white relative py-20">
        <div className="container mx-auto px-4">
          <AnimatedText 
            text="El Poder del Alisado" 
            className="text-5xl font-bold text-[#F25AA3] mb-16 text-center"
          />
          
          <div className="space-y-32">
            <AnimatedText 
              text="Transforma tu cabello con nuestra técnica exclusiva" 
              className="text-3xl text-gray-800 text-center"
            />
            
            <AnimatedText 
              text="Resultados duraderos y naturales" 
              className="text-3xl text-gray-800 text-center"
            />
            
            <AnimatedText 
              text="Cuidamos tu cabello mientras lo embellecemos" 
              className="text-3xl text-gray-800 text-center"
            />
            
            <AnimatedText 
              text="Expertos en belleza capilar" 
              className="text-3xl text-gray-800 text-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
