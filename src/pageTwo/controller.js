import * as dat from 'dat.gui'
import * as THREE from 'three'
import {scene, camera, planeGeometry, renderer} from './index'
const gui = new dat.GUI()
const addBlock = function() {
  const cubeL = Math.random() * 10
  const cubeGeometry = new THREE.BoxGeometry(cubeL, cubeL, cubeL)
  const cubeMaterial = new THREE.MeshLambertMaterial({
    color: Math.random() * 0xffffff,
  })
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
  cube.castShadow = true
  cube.position.x = camera.position.x + Math.round(Math.random() * planeGeometry.parameters.width)
  cube.position.y = Math.round(Math.random() * 5)
  cube.position.z = -20 + Math.round(Math.random() * planeGeometry.parameters.height)
  scene.add(cube)
  this.numberOfObject = scene.children.length
  renderer.render(scene, camera)
}
export const controller = {
  addBlock: () => addBlock.call(controller),
  numberOfObject: scene.children.length,
}
// 选择哪些参数需要添加到控制GUI中
gui.add(controller, 'addBlock')
gui.add(controller, 'numberOfObject')

