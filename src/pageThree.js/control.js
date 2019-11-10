import dat from 'dat.gui'
import * as THREE from 'three'
export const setupControl = (ambientLight, spotLight, cube) => {
  const gui = new dat.GUI()
  const controller = new function() {
    this.intensity = ambientLight.intensity,
    this.ambientColor = ambientLight.color.getStyle(),
    this.disableSpotLight = false
    this.disableAmbientLight = false
    this.x = cube.position.x
    this.y = cube.position.y
    this.z = cube.position.z
  }
  gui.add(controller, 'intensity', 0, 3, 0.1).onChange(() => {
    ambientLight.intensity = controller.intensity
  })
  // 注意这里是addColor来显示颜色选择框
  gui.addColor(controller, 'ambientColor').onChange((e) => {
    ambientLight.color = new THREE.Color(controller.ambientColor)
  })
  gui.add(controller, 'disableSpotLight').onChange((e) => {
    spotLight.visible = !e
  })
  gui.add(controller, 'disableAmbientLight').onChange((e) => {
    ambientLight.visible = !e
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
