export function move() {
    document.getElementById('mul').style.marginTop = "-90px";
    document.getElementById('add').style.marginTop = "60px";
    document.getElementById('add').style.marginLeft = "-70px";
    document.getElementById('sub').style.marginTop = "60px";
    document.getElementById('sub').style.marginLeft = "70px";
}

export function changeColor() {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    let color = `rgb(${r},${g},${b})`;
    document.getElementById('btn').style.backgroundColor = color;
    /*  document.getElementById('btn').style.backgroundColor = "yellow"; */
}
