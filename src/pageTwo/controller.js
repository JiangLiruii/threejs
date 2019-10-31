import * as dat from 'dat.gui'
import * as THREE from 'three'
import {scene, camera, planeGeometry, renderer} from './index'
import {groupBy} from 'C:/Users/pc/AppData/Local/Microsoft/TypeScript/3.6/node_modules/rxjs/internal/operators/groupBy'
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
  this.numberOfObjects = scene.children.length,

  renderer.render(scene, camera)
}
const removeBlock = function() {
  if (this.numberOfCubes > 0) {
    const lastOne = scene.getObjectByName(`cube-${this.numberOfCubes}`)
    scene.remove(lastOne)
    this.numberOfCubes -= 1
    renderer.render(scene, camera)
    this.numberOfObjects = scene.children.length
  }
}
const clone = function() {
  const geo = scene.getObjectByName('customCube').children[0].geometry
  const mats = [
    new THREE.MeshLambertMaterial({opacity: 0.6, color: 0xff44ff, transparent: true}),
    new THREE.MeshBasicMaterial({color: 0x000000, wireframe: true}),
  ]
  const group = new THREE.Group()
  for (let i = 0, l=mats.length; i < l; i ++) {
    group.add(new THREE.Mesh(geo, mats[i]))
  }
  group.translateX(10 * (Math.random() + 1))
  group.translateY(3)
  group.name = 'clone'
  scene.remove(scene.getObjectByName('clone'))
  scene.add(group)
}
export const controller = {
  addBlock: () => addBlock.call(controller),
  numberOfCubes: 0,
  numberOfObjects: scene.children.length,
  removeBlock: () => removeBlock.call(controller),
  rotationSpeed: 0,
  clone,
}
// 选择哪些参数需要添加到控制GUI中
gui.add(controller, 'addBlock')
gui.add(controller, 'numberOfCubes').listen()
gui.add(controller, 'numberOfObjects').listen()
gui.add(controller, 'removeBlock')
gui.add(controller, 'rotationSpeed', 0, 0.5)
gui.add(controller, 'clone')

