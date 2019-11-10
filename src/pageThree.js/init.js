import * as THREE from 'three'
import {setupControl} from './control'
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000)
camera.position.set(30, 30, 50)
const planeGeometry = new THREE.PlaneGeometry(30, 30)
const planeMaterial = new THREE.MeshPhongMaterial({color: 'grey'})
const plane = new THREE.Mesh(planeGeometry, planeMaterial)
plane.receiveShadow = true
plane.rotation.x = -0.5 * Math.PI
plane.position.x = 0
plane.position.y = 0
plane.position.z = 0
const axes = new THREE.AxesHelper(20)
scene.add(axes)
scene.add(plane)
// 创建ambient光源
const ambientLight = new THREE.AmbientLight('#606008', 1)
scene.add(ambientLight)
// 创建点光源增强效果
const spotLight = new THREE.SpotLight(new THREE.Color(0xcfcfcf), 1, 180, Math.PI / 4)
spotLight.castShadow = true
spotLight.position.set(-30, 10, -10)
spotLight.shadow.mapSize.set(2048, 2048)
scene.add(spotLight)
// 添加一个立方体观察效果
const cube = new THREE.Mesh(new THREE.BoxGeometry(5, 5, 5), new THREE.MeshPhongMaterial({color: 'blue'}))
cube.position.set(5, 0, 5)
cube.castShadow = true
cube.receiveShadow = true
scene.add(cube)

camera.lookAt(new THREE.Vector3(0, 0, 0))

const renderer = new THREE.WebGLRenderer()
renderer.setClearColor(new THREE.Color('grey'))
renderer.setSize(window.innerWidth, window.innerHeight)
document.getElementById('webgl-output').appendChild(renderer.domElement)
renderer.shadowMapEnabled = true
const render = function() {
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}
render()

// 设置dat.gui
setupControl(ambientLight, spotLight)

