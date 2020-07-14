const towerElement1 = document.getElementById("tower-1")
const towerElement2 = document.getElementById("tower-2")
const towerElement3 = document.getElementById("tower-3")
const disk1 = document.getElementById("disk-1")
const disk2 = document.getElementById("disk-2")
const disk3 = document.getElementById("disk-3")
const disk4 = document.getElementById("disk-4")
let active = false
let activeDisk

towerElement1.addEventListener("click", function() {
    let currentEventTarget = event.currentTarget
    let count = currentEventTarget.childElementCount
    if (active === false && count > 0) {
        activeDisk = currentEventTarget.lastElementChild
        activeDisk.focus()
        active = true
    }
    else if (active === true) {
        let diskWidth = activeDisk.clientWidth
        if (count === 0) {
            currentEventTarget.append(activeDisk)
            activeDisk.blur()
        }
        else {
            let stackWidth = currentEventTarget.lastElementChild.clientWidth
            if (diskWidth < stackWidth) {
                currentEventTarget.append(activeDisk)
                activeDisk.blur()
            }
        }
        active = false
    }
})

towerElement2.addEventListener("click", function() {
    let currentEventTarget = event.currentTarget
    let count = currentEventTarget.childElementCount
    if (active === false && count > 0) {
        activeDisk = currentEventTarget.lastElementChild
        activeDisk.focus()
        active = true
    }
    else if (active === true) {
        let diskWidth = activeDisk.clientWidth
        if (count === 0) {
            currentEventTarget.append(activeDisk)
            activeDisk.blur()
        }
        else {
            let stackWidth = currentEventTarget.lastElementChild.clientWidth
            if (diskWidth < stackWidth) {
                currentEventTarget.append(activeDisk)
                activeDisk.blur()
            }
        }
        active = false
    }
})

towerElement3.addEventListener("click", function() {
    let currentEventTarget = event.currentTarget
    let count = currentEventTarget.childElementCount
    if (active === false && count > 0) {
        activeDisk = currentEventTarget.lastElementChild
        activeDisk.focus()
        active = true
    }
    else if (active === true) {
        let diskWidth = activeDisk.clientWidth
        if (count === 0) {
            currentEventTarget.append(activeDisk)
            activeDisk.blur()
        }
        else {
            let stackWidth = currentEventTarget.lastElementChild.clientWidth
            if (diskWidth < stackWidth) {
                currentEventTarget.append(activeDisk)
                activeDisk.blur()
            }
        }
        active = false
    }
})