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
directionalLight.shadowCameraNear = 1
directionalLight.shadowCameraFar = 40
directionalLight.shadowCameraBottom = -10
directionalLight.shadowCameraLeft = -10
directionalLight.shadowCameraRight = 10
directionalLight.shadowCameraTop = 10
directionalLight.castShadow = true

export const hemisphereLight = new THREE.HemisphereLight(0x0000ff, 0x00ff00, 0.6)
hemisphereLight.position.set(0, 400, 0)


