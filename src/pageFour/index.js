import {initPlane, initScene, initCamera, initRender} from '../utils/init'

const scene = initScene()
const camera = initCamera({position: [10, 30, 30]})
const render = initRender()
const plane = initPlane({size: [30, 30]})
const spotLight = new THREE.SpotLight(0xffffff, 1, 180, Math.PI / 4)
spotLight.castShadow = true
spotLight.position.set(-10, 20, -10)

const cubeMaterial = new THREE.MeshBasicMaterial({
  vertexColors: THREE.VertexColors,
})
const cubeGeometry = new THREE.BoxGeometry(5, 5, 5)
cubeMaterial.color = new THREE.Color(0xffccdd)
cubeMaterial.name = 'material-1'
// cubeMaterial.opacity = '0.3'
// cubeMaterial.transparent = true
cubeMaterial.wireframe = true
cubeMaterial.wireframeLinewidth= 2
cubeGeometry.colors = [new THREE.Color(0x000000), new THREE.Color(0x000000), new THREE.Color(0x000000), new THREE.Color(0x000000), new THREE.Color(0x000000), new THREE.Color(0x000000), new THREE.Color(0x000000), new THREE.Color(0x000000)]
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
cube.position.set(0, 5, 0)

plane.receiveShadow = true
scene.add(plane)
scene.add(camera)
scene.add(cube)
scene.add(spotLight)
cube.castShadow = true

const renderFn = function() {
  render.render(scene, camera)
  requestAnimationFrame(renderFn)
}

renderFn()
