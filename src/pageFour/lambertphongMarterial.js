import * as Three from 'three'

const lambertMaterial = new Three.MeshLambertMaterial({
  color: 0xc9c9c9,
})
const phoneMaterial = new Three.MeshPhongMaterial({
  color: 0x7c7c7c,
  specular: 0x7c7c7c,
})
const geo = new Three.BoxGeometry(10, 10, 10)

export const metalCube = new Three.Mesh(geo, phoneMaterial)
export const lambertCube = new Three.Mesh(geo, lambertMaterial)
metalCube.position.set(10, 10, 10)
