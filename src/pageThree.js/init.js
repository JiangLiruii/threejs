import * as THREE from 'three'
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000)
camera.position.set(30, 30, 50)


const planeGeometry = new THREE.PlaneGeometry(30, 30)

const planeMaterial = new THREE.MeshLambertMaterial({color: 'green'})

const plane = new THREE.Mesh(planeGeometry, planeMaterial)
plane.rotation.x = -0.5 * Math.PI
plane.position.x = 0
plane.position.y = 0
plane.position.z = 0

const axes = new THREE.AxesHelper(20)
scene.add(axes)

scene.add(plane)
// scene.add(ambientLight)
const ambientLight = new THREE.AmbientLight(new THREE.Color('yellow'), 0.5)
scene.add(ambientLight)

camera.lookAt(new THREE.Vector3(0, 0, 0))
const renderer = new THREE.WebGLRenderer()
renderer.setClearColor(new THREE.Color('grey'))
renderer.setSize(window.innerWidth, window.innerHeight)
document.getElementById('webgl-output').appendChild(renderer.domElement)

renderer.render(scene, camera)


