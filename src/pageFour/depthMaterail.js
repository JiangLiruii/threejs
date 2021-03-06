import dat from 'dat.gui'
import {initRender} from '../utils/init'

const createMultiMaterialObject= function( geometry, materials ) {
  const group = new THREE.Group()

  for ( let i = 0, l = materials.length; i < l; i ++ ) {
    group.add( new THREE.Mesh( geometry, materials[i] ) )
  }

  return group
}


export const makeScene = function() {
  const renderer = initRender()

  const scene = new THREE.Scene()
  // scene.overrideMaterial = new THREE.MeshDepthMaterial()

  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 50, 200)
  camera.position.set(-50, 40, 50)
  camera.lookAt(new THREE.Vector3(0, 0, 0))
  const controls = new function() {
    this.cameraNear = camera.near
    this.cameraFar = camera.far
    this.rotationSpeed = 0.02
    this.numberOfObjects = scene.children.length

    this.removeCube = function() {
      const allChildren = scene.children
      const lastObject = allChildren[allChildren.length - 1]
      if (lastObject instanceof THREE.Mesh) {
        scene.remove(lastObject)
        this.numberOfObjects = scene.children.length
      }
    }

    this.addCube = function() {
      const cubeSize = Math.ceil(3 + (Math.random() * 3))
      const cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize)
      const cubeMaterial = new THREE.MeshNormalMaterial()
      const colorMaterial = new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        transparent: true,
        blending: THREE.MultiplyBlending,
      })
      const cube = createMultiMaterialObject(cubeGeometry, [cubeMaterial, colorMaterial])
      cube.castShadow = true

      // position the cube randomly in the scene
      cube.position.x = -60 + Math.round((Math.random() * 100))
      cube.position.y = Math.round((Math.random() * 10))
      cube.position.z = -100 + Math.round((Math.random() * 150))

      // add the cube to the scene
      scene.add(cube)
      this.numberOfObjects = scene.children.length
    }

    this.outputObjects = function() {
      console.log(scene.children)
    }
  }

  const gui = new dat.GUI()

  gui.add(controls, 'rotationSpeed', 0, 0.5)
  gui.add(controls, 'addCube')
  gui.add(controls, 'removeCube')
  gui.add(controls, 'cameraNear', 0, 100).onChange(function(e) {
    camera.near = e
    camera.updateProjectionMatrix()
  })
  gui.add(controls, 'cameraFar', 50, 200).onChange(function(e) {
    camera.far = e
    camera.updateProjectionMatrix()
  })

  let i = 0
  while (i < 5) {
    controls.addCube()
    i++
  }

  const render = function() {
    scene.traverse(function(e) {
      if (e instanceof THREE.Mesh) {
        e.rotation.x += controls.rotationSpeed
        e.rotation.y += controls.rotationSpeed
        e.rotation.z += controls.rotationSpeed
      }
    })
    requestAnimationFrame(render)
    renderer.render(scene, camera)
  }
  render()
}
