let scanner = new Instascan.Scanner({ video: document.getElementById('preview') })
scanner.addListener('scan', function (content) {
  // console.log('found',content);
  document.getElementById('fill').value = content
})
Instascan.Camera.getCameras()
.then(function (cameras) {
  if (cameras.length > 0) {
    console.log('cameras', cameras)
    // need to toggle camera view between [0] to [1]
    // let camSwitch = increment
    let increment = 0
    // document.getElementById('button1')
    scanner.start(cameras[increment])
  } else {
    console.error('No cameras found.')
  }
})
.catch(function (e) {
  console.error(e)
})
