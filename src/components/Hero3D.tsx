import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

const Particles = ({ count = 500 }) => {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#00d4ff" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

const TechSphere = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.15;
      ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={ref} scale={1.8}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial color="#7c3aed" wireframe distort={0.3} speed={2} transparent opacity={0.5} />
      </mesh>
    </Float>
  );
};

const FloatingShape = ({ position, color, size }: { position: [number, number, number]; color: string; size: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.3;
      ref.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });
  return (
    <Float speed={1.5} floatIntensity={2}>
      <mesh ref={ref} position={position} scale={size}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color={color} wireframe transparent opacity={0.4} />
      </mesh>
    </Float>
  );
};

const TypingText = () => {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto font-poppins"
    >
      Annual College Fest Celebrating Innovation, Technology & Creativity
    </motion.p>
  );
};

const Hero3D = () => {
  const handleExplore = () => {
    document.querySelector("#branches")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[5, 5, 5]} intensity={0.8} color="#00d4ff" />
          <pointLight position={[-5, -5, 5]} intensity={0.5} color="#7c3aed" />
          <TechSphere />
          <FloatingShape position={[-3, 2, -2]} color="#00ffcc" size={0.4} />
          <FloatingShape position={[3.5, -1.5, -1]} color="#0088ff" size={0.3} />
          <FloatingShape position={[-2.5, -2, -3]} color="#7c3aed" size={0.5} />
          <FloatingShape position={[2, 2.5, -2]} color="#00d4ff" size={0.35} />
          <Particles />
        </Canvas>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-montserrat font-black text-5xl md:text-7xl lg:text-8xl tracking-wider neon-text-blue mb-6"
        >
          AMELIORATION
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <TypingText />
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleExplore}
          className="glow-button mt-10 text-primary-foreground font-montserrat text-sm tracking-wider uppercase"
        >
          Explore Branch Fests
        </motion.button>
      </div>
    </section>
  );
};

export default Hero3D;
