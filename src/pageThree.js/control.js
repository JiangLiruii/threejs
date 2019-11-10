import dat from 'dat.gui'
import * as THREE from 'three'
export const setupControl = (ambientLight, spotLight) => {
  const gui = new dat.GUI()
  const controller = new function() {
    this.intensity = ambientLight.intensity,
    this.ambientColor = ambientLight.color.getStyle(),
    this.disableSpotLight = false
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
}
