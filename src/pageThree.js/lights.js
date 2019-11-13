import * as THREE from 'three'
const position = new THREE.Vector3(-30, 10, -10)
const color = 0xfffffff
export const ambientLight = new THREE.AmbientLight('#606008', 1)
export const spotLight = new THREE.SpotLight(color, 1, 180, Math.PI / 4)
spotLight.castShadow = true
spotLight.position.add(position)
spotLight.shadow.mapSize.set(2048, 2048)


export const pointLight = new THREE.PointLight(color, 1, 180)
pointLight.position.add(position)

export const directionalLight = new THREE.DirectionalLight(color, 2)
directionalLight.position.add(position)
directionalLight.shadow.camera.near = 1
directionalLight.shadow.camera.far = 40
directionalLight.shadow.camera.bottom = -10
directionalLight.shadow.camera.left = -10
directionalLight.shadow.camera.right = 10
directionalLight.shadow.camera.top = 10
directionalLight.castShadow = true

export const hemisphereLight = new THREE.HemisphereLight(0xcccccc, 0x0000ff, 1)
hemisphereLight.position.set(0, 50, 0)

export const areaLight = new THREE.RectAreaLight(0xffffff, 1, 10, 10)
areaLight.position.set(5, 5, 0)
areaLight.lookAt(0, 0, 0)

