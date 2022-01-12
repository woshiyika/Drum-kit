//1.按下按键的时候，播放相应的声音
function palySound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    //判断是否有对应按键
    if (!audio) return;
    console.log(audio);
    //让声音同步
    audio.currentTime = 0;
    //输出声音
    audio.play();
    //2.按下按键的时候，改变按键的显示效果
    key.classList.add('playing');
    // key.classList.remove('playing')
    // key.classList.toggle('playing')

}
//3.效果转换完后，返回到最初状态
// setTimeout(function() {
//     key.classList.remove('playing');
// }, 70);
function removePlaying(e) {
    console.log(e.propertyName);
    if (e.propertyName !== 'border-bottom-color') return;
    this.classList.remove('playing');
}
const keys = this.document.querySelectorAll('.key')
keys.forEach(key => {
    key.addEventListener('transitionend', removePlaying)
        // console.log(key)
})
window.addEventListener('keydown', palySound);