function Hidden (obj, time) {
    setTimeout(() => {
    document.getElementById(obj).classList.add('visible')
    }, time)
}

export default Hidden