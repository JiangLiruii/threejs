import * as THREE from 'three'
export const initRender = (additionalProps={}) => {
  const renderer = new THREE.WebGLRenderer()
  renderer.setClearColor(new THREE.Color(0x000000))
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.getElementById('webgl-output').appendChild(renderer.domElement)
  renderer.shadowMap.enabled = true
  return renderer
}

export const initScene = () => {
  const scene = new THREE.Scene()
  const axes = new THREE.AxesHelper(20)
  scene.add(axes)
  return scene
}

export const initCamera = ({position}) => {
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000)
  camera.position.set(...position)
  camera.lookAt(new THREE.Vector3(0, 0, 0))
  return camera
}

export const initPlane = ({size}) => {
  const planeGeometry = new THREE.PlaneGeometry(...size)
  const planeMaterial = new THREE.MeshLambertMaterial({color: 'white'})
  const plane = new THREE.Mesh(planeGeometry, planeMaterial)
  plane.rotation.x = -0.5 * Math.PI
  plane.position.x = 0
  plane.position.y = 0
  plane.position.z = 0
  return plane
}

export const initCube = () => {
  const cube = new THREE.Mesh(new THREE.BoxGeometry(5, 5, 5), new THREE.MeshPhongMaterial({color: 'blue'}))
  cube.position.set(5, 0, 5)
  cube.castShadow = true
  return cube
}


