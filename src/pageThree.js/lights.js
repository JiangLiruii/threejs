import * as THREE from 'three'
export const ambientLight = new THREE.AmbientLight('#606008', 1)
export const spotLight = new THREE.SpotLight(new THREE.Color(0xcfcfcf), 1, 180, Math.PI / 4)
spotLight.castShadow = true
spotLight.position.set(-30, 10, -10)
spotLight.shadow.mapSize.set(2048, 2048)

export const pointLight = new THREE.PointLight('#ffffff', 1, 180)
pointLight.position.set(0, 1, 0)
