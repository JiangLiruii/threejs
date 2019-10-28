import * as dat from 'dat.gui'
import * as THREE from 'three'
import {scene, camera, planeGeometry, renderer} from './index'
const gui = new dat.GUI()
const addBlock = function() {
  this.numberOfCubes += 1
  const cubeL = Math.random() * 5
  const cubeGeometry = new THREE.BoxGeometry(cubeL, cubeL, cubeL)
  const cubeMaterial = new THREE.MeshLambertMaterial({
    color: Math.random() * 0xffffff,
  })
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
  cube.castShadow = true
  cube.position.x = camera.position.x + Math.round(Math.random() * planeGeometry.parameters.width)
  cube.position.y = Math.round(Math.random() * 5)
  cube.position.z = -20 + Math.round(Math.random() * planeGeometry.parameters.height)
  cube.name='cube-'+this.numberOfCubes
  scene.add(cube)
  renderer.render(scene, camera)
}
const removeBlock = function() {
  if (this.numberOfCubes > 0) {
    const lastOne = scene.getObjectByName(`cube-${this.numberOfCubes}`)
    scene.remove(lastOne)
    this.numberOfCubes -= 1
    renderer.render(scene, camera)
  }
}
export const controller = {
  addBlock: () => addBlock.call(controller),
  numberOfCubes: scene.children.length,
  removeBlock: () => removeBlock.call(controller),
}
// 选择哪些参数需要添加到控制GUI中
gui.add(controller, 'addBlock')
gui.add(controller, 'numberOfCubes').listen()
gui.add(controller, 'removeBlock')

