import * as THREE from 'three'
export const scene = new THREE.Scene()
export const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100)
export const renderer = new THREE.WebGLRenderer()
export const planeGeometry = new THREE.PlaneGeometry(60, 40, 1, 1)

window.scene = scene
export const init = function() {
  const axes = new THREE.AxesHelper(20)
  scene.add(axes)
  scene.add(camera)


  renderer.setClearColor(new THREE.Color(0x000000))
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.shadowMap.enabled = true

  const planeMaterial = new THREE.MeshLambertMaterial({
    color: 'red',
  })
  const plane = new THREE.Mesh(planeGeometry, planeMaterial)
  plane.receiveShadow = true
  plane.rotation.x = -0.5 * Math.PI
  plane.position.x = 0
  plane.position.y = 0
  plane.position.z = 0
  plane.name = 'plane'
  scene.add(plane)
  camera.position.x = -30
  camera.position.y = 40
  camera.position.z = 30
  // camera.position.set(new THREE.Vector3(-30, 40, 30))
  camera.lookAt(plane.position)

  const ambientLight = new THREE.AmbientLight(0x3c3c3c)
  scene.add(ambientLight)

  const spotLight = new THREE.SpotLight(0xffffff, 1.2, 150, 120)
  spotLight.position.set(-40, 60, -10)
  spotLight.castShadow = true
  scene.add(spotLight)

  const cubeGeometry = new THREE.BoxGeometry(10, 10, 10)
  const cubeMaterial = new THREE.MeshLambertMaterial({
    color: 'blue',
  })
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
  cube.castShadow = true
  scene.add(cube)

  document.getElementById('webgl-output').appendChild(renderer.domElement)
  renderer.render(scene, camera)
}
