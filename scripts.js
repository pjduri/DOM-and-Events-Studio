// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load',() => {
    const takeoffBtn = this.document.getElementById('takeoff')
    const flightStatus = this.document.getElementById('flightStatus')
    const shuttleBackground = this.document.getElementById('shuttleBackground')
    const spaceShuttleHeight = this.document.getElementById('spaceShuttleHeight')
    const landBtn = this.document.getElementById('landing')
    const missionAbortBtn = this.document.getElementById('missionAbort')
    const upBtn = this.document.getElementById('up')
    const downBtn = this.document.getElementById('down')
    const leftBtn = this.document.getElementById('left')
    const rightBtn = this.document.getElementById('right')
    const rocket = this.document.getElementById('rocket')
    const setDefaultPosition = () => {
    rocket.style.position = 'absolute'
    rocket.style.bottom = '0px'
    rocket.style.left = '0px'
    spaceShuttleHeight.innerHTML = 0
    }
    setDefaultPosition()

    takeoffBtn.addEventListener('click', () => {
        if (flightStatus.innerHTML === 'Shuttle in flight') {
            window.alert('Shuttle already in flight.')
            return
        }
        const takeoffResponse = window.confirm('Confirm that the shuttle is ready for takeoff.')
        if (takeoffResponse){
            flightStatus.innerHTML = 'Shuttle in flight'
            shuttleBackground.style.backgroundColor = 'blue'
            spaceShuttleHeight.innerHTML = 10000
            rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + 'px'
         }
     })

     landBtn.addEventListener('click', () => {
        if (flightStatus.innerHTML !== 'Shuttle in flight') {
            window.alert('Shuttle is already on ground.')
         } else {
            window.alert('The shuttle is landing. Landing gear engaged.')
            flightStatus.innerHTML = 'The shuttle has landed'
            shuttleBackground.style.backgroundColor = 'green'
            setDefaultPosition()
         }
       })

     missionAbortBtn.addEventListener('click', () => {
        const abortResponse = window.confirm('Confirm that you want to abort the mission.')
        if (abortResponse){
            flightStatus.innerHTML = 'Mission Aborted'
            shuttleBackground.style.backgroundColor = 'green'
            setDefaultPosition()
        }
       })

     upBtn.addEventListener('click', () => {
        if (flightStatus.innerHTML !== 'Shuttle in flight') {
            window.alert('Must take off first.')
        } else {
            rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + 'px'
            spaceShuttleHeight.innerHTML = String(Number(spaceShuttleHeight.innerHTML) + 10000)
        }
        if (parseInt(rocket.style.bottom) >= 260) {
            rocket.style.bottom = '0px'
        }
       })

     downBtn.addEventListener('click', () => {
        if (flightStatus.innerHTML !== 'Shuttle in flight') {
            window.alert('Must take off first.')
        }else if (spaceShuttleHeight.innerHTML <= 10000 && flightStatus.innerHTML === 'Shuttle in flight') {
            window.alert('Land or gain altitude.')
            spaceShuttleHeight.innerHTML = 10000
            rocket.style.bottom = '10px'
        } else {
            rocket.style.bottom = parseInt(rocket.style.bottom) - 10 + 'px'
            spaceShuttleHeight.innerHTML = spaceShuttleHeight.innerHTML - 10000
        }
       })

     leftBtn.addEventListener('click', () => {
        if (flightStatus.innerHTML !== 'Shuttle in flight') {
            window.alert('Must take off first.')
        } else {
            rocket.style.left = parseInt(rocket.style.left) - 10 + 'px'
        }
        if (parseInt(rocket.style.left) < 0) {
            rocket.style.left = '480px'
        }
     })
     rightBtn.addEventListener('click', () => {
        if (flightStatus.innerHTML !== 'Shuttle in flight') {
            window.alert('Must take off first.')
        } else {
            rocket.style.left = parseInt(rocket.style.left) + 10 + 'px'
        }
        if (parseInt(rocket.style.left) >= 480) {
            rocket.style.left = '0px'
        }
     })
       
})