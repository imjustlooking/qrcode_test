let scanner = new Instascan.Scanner({ video: document.getElementById('preview') })
scanner.addListener('scan', function (content) {
  document.getElementById('fill').value = content
})
Instascan.Camera.getCameras()
.then(function (cameras) {
  // document.getElementById('fill').value = (cameras.length + ' camera(s)')
  if (cameras.length === 1) {
    scanner.start(cameras[0])
  } else if (cameras.length > 1) {
    let index = 1
    document.getElementById('button1').addEventListener('click',
    function () {
      scanner.stop()
      let increment = 1
      if (index < cameras.length - 1) {
        index += increment
        scanner.start(cameras[index])
      } else if (index === cameras.length - 1) {
        index -= increment
        scanner.start(cameras[index])
      }
    })
    scanner.start(cameras[index])
  } else {
    console.error('No cameras found.')
  }
})
.catch(function (e) {
  console.error(e)
})
