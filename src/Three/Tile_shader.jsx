const Tile_shader = `
uniform vec3 u_colorA;
uniform vec3 u_colorB;
varying float vZ;
uniform sampler2D uTexture;

varying vec2 vUv;


void main() {
  vec4 textureColor = texture2D(uTexture, vUv);
    gl_FragColor = textureColor;
}

`

export default Tile_shader