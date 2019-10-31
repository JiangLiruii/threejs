import * as THREE from 'three'
const vertices = [
  new THREE.Vector3(1, 3, 1),
  new THREE.Vector3(1, 3, -1),
  new THREE.Vector3(1, -1, 1),
  new THREE.Vector3(1, -1, -1),
  new THREE.Vector3(-1, 3, -1),
  new THREE.Vector3(-1, 3, 1),
  new THREE.Vector3(-1, -1, -1),
  new THREE.Vector3(-1, -1, 1),
]
const faces = [
  new THREE.Face3(0, 2, 1),
  new THREE.Face3(2, 3, 1),
  new THREE.Face3(4, 6, 5),
  new THREE.Face3(6, 7, 5),
  new THREE.Face3(4, 5, 1),
  new THREE.Face3(5, 0, 1),
  new THREE.Face3(7, 6, 2),
  new THREE.Face3(6, 3, 2),
  new THREE.Face3(5, 7, 0),
  new THREE.Face3(7, 2, 0),
  new THREE.Face3(1, 3, 4),
  new THREE.Face3(3, 6, 4),
]

const gem = new THREE.Geometry()
gem.vertices = vertices
gem.faces = faces
gem.computeFaceNormals()
const mat = [
  new THREE.MeshBasicMaterial({color: 0x000000, wireframe: true}),
  new THREE.MeshLambertMaterial({opacity: 0.6, color: 0x44ff44, transparent: true}),
]
const group = new THREE.Group()

for ( let i = 0, l = mat.length; i < l; i ++ ) {
  group.add( new THREE.Mesh( gem, mat[i] ) )
}
// 遍历所有mesh
group.children.forEach((mesh) => mesh.castShadow = true)


export default group
