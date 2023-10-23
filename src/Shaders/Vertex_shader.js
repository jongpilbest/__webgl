

const Vertex_shader= `
precision mediump float ;
varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;

uniform vec2 uPixels;

float PI = 3.14159265359;

void main() {
  vUv = uv;
  vPosition = position;


  vec4 modelPosition = modelMatrix * vec4(position, 1.0);


  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
}

`
export default Vertex_shader