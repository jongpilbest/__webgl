const Tile_intro = `
uniform float uTime;
varying vec2 vUv;
varying float vZ;
void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  
  modelPosition.z += sin(modelPosition.x * 5.0 + uTime * 4.0) * 0.03;
  modelPosition.z += sin(modelPosition.y * 2.0 + uTime * 4.0) * 0.03;
  
  vZ = modelPosition.y;
  vUv = uv;
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
}`

export default Tile_intro
