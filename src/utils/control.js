import dat from 'dat.gui'
import * as THREE from 'three'
export const setupControl = ({ambientLight, spotLight, pointLight, directionalLight, hemisphereLight, areaLight, cube}) => {
  const gui = new dat.GUI()
  if (ambientLight) ambientLight.visible = false
  if (spotLight) spotLight.visible = false
  if (pointLight) pointLight.visible = false
  if (directionalLight) directionalLight.visible = false
  if (hemisphereLight) hemisphereLight.visible = false
  if (areaLight)areaLight.visible = false
  const controller = new function() {
    this.intensity = ambientLight.intensity,
    this.distance = spotLight.distance
    this.ambientColor = ambientLight.color.getStyle(),
    this.enableSpotLight = false
    this.enableAmbientLight = false
    this.enablePointLight = false
    this.enableDirectionalLight = false
    this.enableHemisphereLight = false
    this.enableAreaLight = false
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
  chooseOneLight.add(controller, 'enableAreaLight').onChange((e) => {
    areaLight.visible = e
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
