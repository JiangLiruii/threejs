import dat from 'dat.gui'
import * as THREE from 'three'
export const setupControl = (ambientLight, spotLight, pointLight, directionalLight, hemisphereLight, cube) => {
  const gui = new dat.GUI()
  ambientLight.visible = false
  spotLight.visible = false
  pointLight.visible = false
  directionalLight.visible = false
  hemisphereLight.visible = false
  const controller = new function() {
    this.intensity = ambientLight.intensity,
    this.distance = spotLight.distance
    this.ambientColor = ambientLight.color.getStyle(),
    this.enableSpotLight = false
    this.enableAmbientLight = false
    this.enablePointLight = false
    this.enableDirectionalLight = false
    this.enableHemisphereLight = false
    this.x = cube.position.x
    this.y = cube.position.y
    this.z = cube.position.z
  }
  const guiAmbientSettings = gui.addFolder('settings')
  guiAmbientSettings.add(controller, 'intensity', 0, 3, 0.1).onChange(() => {
    ambientLight.intensity = controller.intensity
    spotLight.intensity = controller.intensity
    pointLight.intensity = controller.intensity
    hemisphereLight.intensity = controller.intensity
  })
  guiAmbientSettings.add(controller, 'distance', 0, 300, 1).onChange(() => {
    ambientLight.distance = controller.distance
    spotLight.distance = controller.distance
    pointLight.distance = controller.distance
  })
  // 注意这里是addColor来显示颜色选择框
  guiAmbientSettings.addColor(controller, 'ambientColor').onChange((e) => {
    ambientLight.color = new THREE.Color(controller.ambientColor)
  })
  const chooseOneLight = gui.addFolder('chooseLight')
  chooseOneLight.add(controller, 'enableSpotLight').onChange((e) => {
    spotLight.visible = e
  })
  chooseOneLight.add(controller, 'enableAmbientLight').onChange((e) => {
    ambientLight.visible = e
  })
  chooseOneLight.add(controller, 'enablePointLight').onChange((e) => {
    pointLight.visible = e
  })
  chooseOneLight.add(controller, 'enableDirectionalLight').onChange((e) => {
    directionalLight.visible = e
  })
  chooseOneLight.add(controller, 'enableHemisphereLight').onChange((e) => {
    hemisphereLight.visible = e
  })
  const guiCube = gui.addFolder('Cube Position')
  guiCube.add(controller, 'x', -10, 10, 1).onChange((e) => {
    cube.position.x = controller.x
  })
  guiCube.add(controller, 'y', -10, 10, 1).onChange((e) => {
    cube.position.y = controller.y
  })
  guiCube.add(controller, 'z', -10, 10, 1).onChange((e) => {
    cube.position.z = controller.z
  })
}
