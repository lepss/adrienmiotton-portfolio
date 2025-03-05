"use client";

import { OrbitControls, useFBO } from "@react-three/drei";
import {
  Canvas,
  createPortal,
  extend,
  useFrame,
  useLoader,
} from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { PLYLoader } from "three-stdlib";

import fragmentShader from "./shaders/fragmentShader.glsl";
import vertexShader from "./shaders/vertexShader.glsl";

import SimulationMaterial from "@/components/experience/simulationMaterial";
extend({ SimulationMaterial: SimulationMaterial });

function FaceMesh({ url }) {
  const mesh = useRef(null);
  const geometry = useLoader(PLYLoader, url);

  return (
    <mesh
      ref={mesh}
      position={[0, 0, 0]}
      rotation={[Math.PI / 2, Math.PI / 2, -Math.PI / 2]}
    >
      <primitive object={geometry} />
      <meshBasicMaterial color={"red"} wireframe />
    </mesh>
  );
}

const FaceCloud = ({ url }) => {
  const points = useRef();
  const geometry = useLoader(PLYLoader, url);
  const verticesCount = geometry.attributes.position.array.length;
  const force = 0.2;

  useFrame((state) => {
    const { clock } = state;
    for (let i = 0; i < verticesCount; i++) {
      const i3 = i * 3;

      points.current.geometry.attributes.position.array[i3] +=
        Math.sin(clock.elapsedTime + Math.random() * 10) * force;
      points.current.geometry.attributes.position.array[i3 + 1] +=
        Math.cos(clock.elapsedTime + Math.random() * 10) * force;
      points.current.geometry.attributes.position.array[i3 + 2] +=
        Math.sin(clock.elapsedTime + Math.random() * 10) * force;
    }

    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points
      ref={points}
      position={[0, -1.1, 0]}
      scale={[0.1, 0.1, 0.1]}
      rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
    >
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          array={geometry.attributes.position.array}
          count={geometry.attributes.position.array.length / 3}
          itemSize={3}
          normalized={false}
          onUpdate={(self) => {
            self.needsUpdate = true;
            // self.verticesNeedUpdate = true;
          }}
        />
      </bufferGeometry>
      <pointsMaterial
        sizeAttenuation
        attach="material"
        transparent={true}
        opacity={0.2}
        color={"#ffffff"}
        depthWrite={false}
        size={0.15}
        blending={1}
      />
    </points>
  );
};

const FaceCloudShader = ({ url }) => {
  const points = useRef();
  const geometry = useLoader(PLYLoader, url);
  const particlesPosition = geometry.attributes.position.array;
  const radius = 1;

  const uniforms = useMemo(
    () => ({
      uTime: {
        value: 0.0,
      },
      uRadius: {
        value: radius,
      },
    }),
    [],
  );

  useFrame((state) => {
    const { clock } = state;

    points.current.material.uniforms.uTime.value = clock.elapsedTime;
  });

  return (
    <points
      ref={points}
      position={[0, 0, 0]}
      rotation={[Math.PI / 2, Math.PI / 2, -Math.PI / 2]}
    >
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          array={geometry.attributes.position.array}
          count={geometry.attributes.position.array.length / 3}
          itemSize={3}
          normalized={false}
          onUpdate={(self) => {
            self.needsUpdate = true;
            // self.verticesNeedUpdate = true;
          }}
        />
      </bufferGeometry>
      <shaderMaterial
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </points>
  );
};

const FaceFBO = () => {
  const size = 256;
  const points = useRef();
  const simulationMaterialRef = useRef();

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(
    -1,
    1,
    1,
    -1,
    1 / Math.pow(2, 53),
    1,
  );
  const positions = new Float32Array([
    -1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0,
  ]);
  const uvs = new Float32Array([
    0,
    0, // bottom-left
    1,
    0, // bottom-right
    1,
    1, // top-right
    0,
    0, // bottom-left
    1,
    1, // top-right
    0,
    1, // top-left
  ]);

  const renderTarget = useFBO(size, size, {
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
    format: THREE.RGBAFormat,
    stencilBuffer: false,
    type: THREE.FloatType,
  });

  const particlesPosition = useMemo(() => {
    const length = size * size;
    const particles = new Float32Array(length * 3);
    for (let i = 0; i < length; i++) {
      let i3 = i * 3;
      particles[i3 + 0] = (i % size) / size;
      particles[i3 + 1] = i / size / size;
    }
    return particles;
  }, [size]);

  const uniforms = useMemo(
    () => ({
      uPositions: {
        value: null,
      },
    }),
    [],
  );

  useFrame((state) => {
    const { gl, clock } = state;

    gl.setRenderTarget(renderTarget);
    gl.clear();
    gl.render(scene, camera);
    gl.setRenderTarget(null);

    points.current.material.uniforms.uPositions.value = renderTarget.texture;

    simulationMaterialRef.current.uniforms.uTime.value = clock.elapsedTime;
  });

  return (
    <>
      {createPortal(
        <mesh>
          <simulationMaterial ref={simulationMaterialRef} args={[size]} />
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={positions.length / 3}
              array={positions}
              itemSize={3}
            />
            <bufferAttribute
              attach="attributes-uv"
              count={uvs.length / 2}
              array={uvs}
              itemSize={2}
            />
          </bufferGeometry>
        </mesh>,
        scene,
      )}
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesPosition.length / 3}
            array={particlesPosition}
            itemSize={3}
          />
        </bufferGeometry>
        <shaderMaterial
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={uniforms}
        />
      </points>
    </>
  );
};

export const PointCloud = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <Canvas className="" camera={{ position: [0, 0, 3], fov: 45 }}>
        <OrbitControls
          target={[0, 0, 0]}
          enablePan={false}
          enableZoom={false}
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI - Math.PI / 4}
        />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FaceFBO />
        {/* <FaceCloudShader url="./models/face_point_cloud_02.ply" /> */}
        {/* <FaceMesh url="./models/face_point_cloud_02.ply" /> */}
      </Canvas>
    </div>
  );
};
