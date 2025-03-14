import * as THREE from "three";
import simulationFragmentShader from "./shaders/simulationFragmentShader.glsl";
import simulationVertexShader from "./shaders/simulationVertexShader.glsl";

const getRandomData = (width, height) => {
  // we need to create a vec4 since we're passing the positions to the fragment shader
  // data textures need to have 4 components, R, G, B, and A
  const length = width * height * 4;
  const data = new Float32Array(length);

  for (let i = 0; i < length; i++) {
    const stride = i * 4;

    const distance = Math.sqrt(Math.random()) * 2.0;
    const theta = THREE.MathUtils.randFloatSpread(360);
    const phi = THREE.MathUtils.randFloatSpread(360);

    data[stride] = distance * Math.sin(theta) * Math.cos(phi);
    data[stride + 1] = distance * Math.sin(theta) * Math.sin(phi);
    data[stride + 2] = distance * Math.cos(theta);
    data[stride + 3] = 1.0; // this value will not have any impact
  }

  return data;
};

const getFileData = (positions) => {
  // const geometry = useLoader(PLYLoader, fileUrl);
  const vec3Position = positions;

  // Créer un nouveau tableau Float32Array avec 4 composantes par vertex
  const data = new Float32Array((vec3Position.length / 3) * 4);

  for (let i = 0, j = 0; i < vec3Position.length; i += 3, j += 4) {
    data[j] = vec3Position[i]; // x
    data[j + 1] = vec3Position[i + 1]; // y
    data[j + 2] = vec3Position[i + 2]; // z
    data[j + 3] = 1.0; // w (ajouté)
  }

  return data;
};

class SimulationMaterial extends THREE.ShaderMaterial {
  constructor(size) {
    const positionsTexture = new THREE.DataTexture(
      getRandomData(size, size),
      // getFileData(positions),
      size,
      size,
      THREE.RGBAFormat,
      THREE.FloatType,
    );
    positionsTexture.needsUpdate = true;

    const simulationUniforms = {
      positions: { value: positionsTexture },
      uFrequency: { value: 0.25 },
      uTime: { value: 0 },
    };

    super({
      uniforms: simulationUniforms,
      vertexShader: simulationVertexShader,
      fragmentShader: simulationFragmentShader,
    });
  }
}

export default SimulationMaterial;
