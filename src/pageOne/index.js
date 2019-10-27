import * as THREE from 'three'

/**
 * 初始化函数
 */
export function init() {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer()
  renderer.setClearColor(new THREE.Color(0x000000))
  renderer.setSize(window.innerWidth, window.innerHeight)

  const axes = new THREE.AxesHelper(20)
  scene.add(axes)

  const planeGeometry = new THREE.PlaneGeometry(60, 20)
  const planeMaterial = new THREE.MeshBasicMaterial({color: 'grey'})
  const plane = new THREE.Mesh(planeGeometry, planeMaterial)
  plane.rotation.x = -0.5 * Math.PI
  plane.position.set(15, 0, 0)
  scene.add(plane)

  const cubeGeometry = new THREE.BoxGeometry(4, 4, 4)
  const cubeMaterial = new THREE.MeshBasicMaterial({
    wireframe: true,
    color: 'red',
  })
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)

  cube.position.set(-4, 4, 4)
  scene.add(cube)

  camera.position.set(-30, 30, 30)
  camera.lookAt(scene.position)
  // 将render的dom对象放到DOM中进行渲染
  document.getElementById('webgl-output').appendChild(renderer.domElement)
  renderer.render(scene, camera)
}
