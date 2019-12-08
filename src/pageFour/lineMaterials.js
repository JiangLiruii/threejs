import * as Three from 'three'
import {initRender, initScene, initCamera} from '../utils/init'


const lineMaterial = new Three.LineBasicMaterial({
  linewidth: 20,
  color: 'white',
})

const dashLineMaterial = new Three.LineDashedMaterial({
  color: 0xffffff,
  linewidth: 1,
  scale: 1,
  dashSize: 3,
  gapSize: 2,
})

const linesGeo = new Three.Geometry()
// 定义两个顶点
linesGeo.vertices.push(new Three.Vector3(0, 10, 10), new Three.Vector3(10, 10, 10))

const dashLineGeo = new Three.Geometry()

dashLineGeo.vertices.push(new Three.Vector3(0, 5, 0), new Three.Vector3(10, 5, 10))

const dashLine = new Three.Line(dashLineGeo, dashLineMaterial)
dashLine.computeLineDistances()
export const lines = new Three.Line(linesGeo, lineMaterial)

const renderer = initRender()

const scene = initScene()
scene.add(lines)
scene.add(dashLine)
const spotLight = new THREE.SpotLight(0xffffff)
spotLight.position.set(-40, 60, -10)
spotLight.castShadow = true
scene.add(spotLight)
const camera = initCamera({position: [-20, -20, 10]})
camera.lookAt(lines.position)
renderer.render(scene, camera)
