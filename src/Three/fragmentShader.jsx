const fragmentShader = `
uniform vec3 u_colorA;
uniform vec3 u_colorB;
varying float vZ;
uniform sampler2D u_texture;
void main() {
  vec3 color = mix(u_colorA, u_colorB, vZ * 2.0 + 0.5); 
  vec3 texture = texture2D(u_texture, vZ).rgb;
  gl_FragColor = vec4(texture, 1.0);
}

`

export default fragmentShader
