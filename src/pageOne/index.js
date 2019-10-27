import * as THREE from 'three'

/**
 * 初始化函数
 */
export function init() {
  // 实例化一个场景
  const scene = new THREE.Scene()
  // 实例化一个透视摄像机(物体会近大远小), 参数分别为视场fov, 比例aspect, 近场 near, 远场far
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000)
  // 实例化一个渲染器, 基于WebGL
  const renderer = new THREE.WebGLRenderer()
  // 设置清除颜色
  renderer.setClearColor(new THREE.Color(0x000000))
  // 设置渲染器大小
  renderer.setSize(window.innerWidth, window.innerHeight)
  // 实例化一个辅助轴
  const axes = new THREE.AxesHelper(20)
  // 将辅助轴添加到场景中
  scene.add(axes)
  // 创建平面几何体, 只需要高宽
  const planeGeometry = new THREE.PlaneGeometry(60, 20)
  // 创建基本材质, 颜色为灰色
  const planeMaterial = new THREE.MeshBasicMaterial({color: 'grey'})
  // 创建plane的网格对象
  const plane = new THREE.Mesh(planeGeometry, planeMaterial)
  // 绕x轴旋转, 让其水平放置
  plane.rotation.x = -0.5 * Math.PI
  // 设置plane的位置为 x,y,z
  plane.position.set(15, 0, 0)
  // 将plane添加近scene
  scene.add(plane)
  // 创建立体几何体, 长宽高
  const cubeGeometry = new THREE.BoxGeometry(4, 4, 4)
  // 创建网格材质, wireframe是指定显示线框
  const cubeMaterial = new THREE.MeshBasicMaterial({
    wireframe: true,
    color: 'red',
  })
  // 实例化一个cube的网格实例
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
  // 设置cube的位置为x,y,z
  cube.position.set(-4, 4, 4)
  // 添加cube到scene
  scene.add(cube)
  // 指定摄像头的位置为 x,y,z,会根据之前设置的参数显示对应范围的物体, 很重要
  camera.position.set(-30, 30, 30)
  // camera是360°的, 指定看的目标
  camera.lookAt(scene.position)
  // 将render的dom对象放到DOM中进行渲染
  document.getElementById('webgl-output').appendChild(renderer.domElement)
  // 进行渲染
  renderer.render(scene, camera)
}
