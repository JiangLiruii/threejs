import * as THREE from 'three'
import {setupControl} from './control'
import {ambientLight, spotLight, pointLight, directionalLight, hemisphereLight} from './lights'
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000)
camera.position.set(30, 30, 30)
const planeGeometry = new THREE.PlaneGeometry(100, 100)
const grassTexture = new THREE.TextureLoader().load(require('../assets/textures/ground/grasslight-big.jpg'))
grassTexture.wrapS = THREE.RepeatWrapping
grassTexture.wrapT = THREE.RepeatWrapping
grassTexture.repeat.set(2, 2)
const planeMaterial = new THREE.MeshLambertMaterial({map: grassTexture})
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
scene.add(ambientLight)

scene.add(hemisphereLight)


scene.add(pointLight)
// 添加一个立方体观察效果
const cube = new THREE.Mesh(new THREE.BoxGeometry(5, 5, 5), new THREE.MeshLambertMaterial({color: 'blue'}))
cube.position.set(5, 0, 5)
cube.castShadow = true
cube.receiveShadow = true
scene.add(cube)

// 创建点光源增强效果

scene.add(spotLight)

scene.add(directionalLight)
spotLight.target = plane
const cameraHelper = new THREE.CameraHelper( directionalLight.shadow.camera )
// scene.add(cameraHelper)
camera.lookAt(new THREE.Vector3(0, 0, 0))

const renderer = new THREE.WebGLRenderer()
renderer.setClearColor(new THREE.Color('grey'))
renderer.setSize(window.innerWidth, window.innerHeight)
document.getElementById('webgl-output').appendChild(renderer.domElement)
renderer.shadowMap.enabled = true
// 创建更加柔和的阴影
// renderer.shadowMap.type = THREE.PCFSoftShadowMap
const render = function() {
  renderer.render(scene, camera)
  requestAnimationFrame(render)
}

render()

// 设置dat.gui
setupControl(ambientLight, spotLight, pointLight, directionalLight, hemisphereLight, cube)

