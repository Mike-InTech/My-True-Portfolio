let picture = document.getElementById('me');

/* red orange yellow green blue purple white black */
function changeColor() {
    let colors = ['red','orange','yellow','green','blue','purple','white','black']
    let randomNum = Math.floor(Math.random() * colors.length)
    
    picture.style.backgroundColor = colors[randomNum]
}
picture.onclick = changeColor