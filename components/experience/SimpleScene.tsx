"use client";

import { PLYLoader } from "three-stdlib";

// function SphreMesh() {
//   // const fileUrl = "/shiba/scene.gltf";
//   const mesh = useRef<Mesh>(null!);
//   // const gltf = useLoader(GLTFLoader, fileUrl);

//   useFrame(() => {
//     mesh.current.rotation.y += 0.01;
//   });

//   return (
//     <mesh ref={mesh} position={[0, 0, 0]}>
//       <sphereGeometry args={[1, 64, 64]} />
//       <meshBasicMaterial color={"red"} />
//     </mesh>
//   );
// }

// interface MeshProps {
//   url: string;
// }

// function FaceMesh({ url }: MeshProps) {
//   // const fileUrl = "/shiba/scene.gltf";
//   const mesh = useRef<Mesh>(null!);
//   const geometry = useLoader(PLYLoader, url);
//   // const gltf = useLoader(GLTFLoader, fileUrl);

//   // useFrame(() => {
//   //   mesh.current.rotation.y += 0.01;
//   // });

//   return (
//     <mesh
//       ref={mesh}
//       position={[0, 0, -30]}
//       scale={[0.1, 0.1, 0.1]}
//       rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
//     >
//       <primitive object={geometry} />
//       <meshBasicMaterial color={"red"} wireframe />
//     </mesh>
//   );
// }

// interface pointCloudProps {
//   url: string;
// }

// const POINT_BUDGET = 200_000;

// function PointCloud({ url }: pointCloudProps) {
//   // if (!url) {
//   //   return null;
//   // }

//   const { scene } = useThree();
//   const [points, setPoints] = useState();

//   const data = useLoader(PLYLoader, url);

//   useEffect(() => {
//     THREE.Object3D.DEFAULT_UP = new THREE.Vector3(0, 0, 1);
//   }, []);

//   useEffect(() => {
//     if (data) {
//       const geometry = new THREE.BufferGeometry();

//       const vertexCount = data.attributes.position.count;
//       console.log("Vertex count : ", vertexCount);
//       const pointCount = Math.min(vertexCount, POINT_BUDGET);
//       console.log("Point count : ", pointCount);
//       console.log(data.attributes);

//       const { samplePositions: positions, sampledColors: colors } =
//         randomSamplingTwoArrays(
//           data.attributes.position,
//           data.attributes.uv,
//           pointCount,
//           3,
//           3,
//         );

//       for (let i = 0; i < colors.length; i++) {
//         colors[i] = colors[i] / 255;
//       }

//       geometry.setAttribute(
//         "position",
//         new THREE.Float32BufferAttribute(positions, 3),
//       );
//       geometry.setAttribute(
//         "color",
//         new THREE.Float32BufferAttribute(colors, 3),
//       );
//       geometry.computeBoundingSphere();

//       const material = new THREE.PointsMaterial({
//         size: 0.04,
//         vertexColors: true,
//       });

//       const points = new THREE.Points(geometry, material);
//       setPoints(points);
//     }
//   }, [data]);

//   useEffect(() => {
//     if (points) {
//       scene.add(points);

//       return () => {
//         // Cleanup
//         scene.remove(points);
//         points.geometry.dispose();
//         points.material.dispose();
//       };
//     }
//   }, [points, scene]);

//   return null;
// }

const loader = new PLYLoader();

interface PointCloudProps {
  url: string;
}

const PointCloud = ({ url }: PointCloudProps) => {
  //   const [points, setPoints] = useState<THREE.BufferGeometry>();
  //   useEffect(() => {
  //     if (url != null) {
  //       loader.load(url, (points) => {
  //         setPoints(() => points);
  //         console.log(points.attributes.position.array);
  //         console.log(points.attributes.uv.array);
  //       });
  //     }
  //   }, [url]);
  //   useEffect(() => {
  //     if (points) {
  //     }
  //   }, [points]);
  //   const positions = new Float32Array([1, 0, 0, 0, 1, 0, -1, 0, 0, 0, -1, 0]);
  //   const indices = new Uint16Array([0, 1, 3, 2, 3, 1]);
  //   return (
  //     <points>
  //       <bufferGeometry attach="geometry">
  //         <bufferAttribute
  //           attach="attributes-position"
  //           array={points?.attributes.position.array}
  //           // count={points?.attributes.position.array.length / 3}
  //           itemSize={3}
  //         />
  //         {/* <bufferAttribute
  //           attach="index"
  //           array={indices}
  //           count={indices.length}
  //           itemSize={1}
  //         /> */}
  //       </bufferGeometry>
  //       <pointsMaterial
  //         sizeAttenuation
  //         attach="material"
  //         color={"#11529c"}
  //         depthWrite={false}
  //         size={6}
  //       />
  //     </points>
  //   );
  // };
  // export function SimpleScene() {
  //   return (
  //     <div className="flex h-full items-center justify-center">
  //       <Canvas className="" camera={{ position: [0, 0, 30], fov: 45 }}>
  //         <OrbitControls target={[0, 0, -30]} />
  //         <ambientLight />
  //         <pointLight position={[10, 10, 10]} />
  //         {/* <SphreMesh /> */}
  //         {/* <FaceMesh url="./models/face_point_cloud_01.ply" /> */}
  //         <PointCloud url="./models/face_point_cloud_01.ply" />
  //         {/* <PerspectiveCamera makeDefault fov={75} position={[5, 5, 10]} /> */}
  //       </Canvas>
  //     </div>
  //   );
};
