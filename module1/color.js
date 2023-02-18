function applyRandomColor() {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    let color = `rgb(${r},${g},${b})`;
    document.getElementById('container').style.backgroundColor = color;
}

export default applyRandomColor;