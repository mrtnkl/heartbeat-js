function heartbeat() {
  console.log('test 123')  
  
  // todo: implement Ventricular Assist Device (VAD) device here
}

setInterval(heartbeat, 1000)

onerror = function(e) {
  console.warn('oops')
}