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
  gui.add(controller, 'ambientColor').onChange(() => {
    ambientLight.color = new THREE.Color(controller.ambientColor)
  })
  gui.add(controller, 'disableSpotLight').onChange((e) => {
    spotLight.visible = !e
  })
}
