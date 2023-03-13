//在写css时，只要将px单位替换成rem，这里设置的比例是100px=1rem,例如，宽度为100px时，可以直接写成1rem。
fnResize()
window.onresize = function () {
fnResize()
}
function fnResize() {
var deviceWidth = document.documentElement.clientWidth || window.innerWidth
if (deviceWidth >= 750) {
    deviceWidth = 750
}
if (deviceWidth <= 320) {
    deviceWidth = 320
}
document.documentElement.style.fontSize = (deviceWidth / 7.5*1) + 'px'
}