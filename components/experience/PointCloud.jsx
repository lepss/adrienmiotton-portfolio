"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMemo } from "react";
import { PLYLoader } from "three-stdlib";

const loader = new PLYLoader();

const loadModel = (url) => {
  return new Promise((resolve, reject) => {
    loader.load(
      url,
      (geometry) => {
        if (!geometry || !geometry.attributes.position) {
          return reject(
            new Error("La géométrie ne contient pas d'attributs de position."),
          );
        }

        // Directement récupérer le Float32Array au lieu d'un tableau JS
        const vertices = new Float32Array(geometry.attributes.position.array);

        resolve(vertices);
      },
      undefined,
      reject,
    );
  });
};

const Points = ({ url }) => {
  const points = useMemo(async () => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const data = await loadModel(url);
        if (isMounted) {
          // console.log(data);
          return data;
        }
      } catch (error) {
        console.error("Erreur de chargement du PLY :", error);
      }
    };
    return fetchData();
  });

  console.log(points);

  // const vertices = useMemo(() => {
  //   return usePLYLoader("./models/face_point_cloud_01.ply");
  // });

  const positions = new Float32Array([1, 0, 0, 0, 1, 0, -1, 0, 0, 0, -1, 0]);
  // const positions = points.attributes.position.array;
  const indices = new Uint16Array([0, 1, 3, 2, 3, 1]);

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
          // onUpdate={(self) => {
          //   self.needsUpdate = true;
          //   // self.verticesNeedUpdate = true;
          // }}
        />
        {/* <bufferAttribute
          attach="index"
          array={indices}
          count={indices.length}
          itemSize={1}
        /> */}
      </bufferGeometry>
      <pointsMaterial
        sizeAttenuation
        attach="material"
        color={"#11529c"}
        depthWrite={false}
        size={20}
      />
    </points>
  );
};

export const PointCloud = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <Canvas className="" camera={{ position: [0, 0, 50], fov: 45 }}>
        <OrbitControls target={[0, 0, -30]} />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Points url="./models/face_point_cloud_01.ply" />
      </Canvas>
    </div>
  );
};
