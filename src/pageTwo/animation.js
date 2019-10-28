import {scene, renderer, camera} from './index'
import {controller} from './controller'

export const animationRender = function render() {
  scene.traverse((obj) => {
    if (obj.name.includes('cube')) {
      obj.rotation.x += controller.rotationSpeed
      obj.rotation.y += controller.rotationSpeed
      obj.rotation.Z += controller.rotationSpeed
    }
  })
  requestAnimationFrame(animationRender)
  renderer.render(scene, camera)
}
