import * as THREE from 'three'
export const initRender = (additionalProps={}) => {
  const renderer = new THREE.WebGLRenderer(additionalProps)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setClearColor(new THREE.Color(0xfffffff))
  renderer.shadowMapEnabled = true
  document.getElementById('webgl-output').appendChild(renderer.domElement)
  return renderer
}
