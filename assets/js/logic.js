let scanner = new Instascan.Scanner({ video: document.getElementById('preview'), mirror: false })
scanner.addListener('scan', function (content) {
  document.getElementById('fill').select()
  document.getElementById('fill').value = content
})
Instascan.Camera.getCameras()
.then(function (cameras) {
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

document.getElementById('copy').addEventListener('click',
function () {
  document.getElementById('fill').select()
  document.execCommand('copy')
})
document.getElementById('clear').addEventListener('click',
function () {
  document.getElementById('fill').value = ''
})
document.getElementById('visit').addEventListener('click',
function () {
  var inputCheck = document.getElementById('fill').value
  if (inputCheck.slice(0,4) !== 'http'){
    location.href = 'http://' + document.getElementById('fill').value
  } else {
    location.href = document.getElementById('fill').value
  }
})
