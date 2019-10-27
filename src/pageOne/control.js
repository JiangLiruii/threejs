import * as dat from 'dat.gui'
const gui = new dat.GUI()

export const controller = {
  x : -4,
  y : 4,
  z : 4,
}
// 选择哪些参数需要添加到控制GUI中
gui.add(controller, 'x', -10, 10)
gui.add(controller, 'y', -10, 10)
gui.add(controller, 'z', -10, 10)

