var canvas = document.querySelector("#scene"),
    ctx = canvas.getContext("2d"),
    particles = [],
    amount = 0,
    mouse = { x: 0, y: 0 },
    radius = 1;

var colors = ["#7B68EE", "#D8BFD8", "#EE82EE", "#5551cf", "#BA55D3"];

var texte = "Entre deux eaux"
var ww = canvas.width = window.innerWidth;
var wh = canvas.height = window.innerHeight;

function Particle(x, y, radius) {
    this.x = Math.random() * ww;
    this.y = Math.random() * wh;
    this.dest = {
        x: x,
        y: y
    };
    if (!radius){
        this.r = Math.random() * 5 + 2;
    }else{
        this.r = Math.random() *radius*2  + radius;
    }
    this.vx = (Math.random() - 0.5) * 0;
    this.vy = (Math.random() - 0.5) * 0;
    this.accX = 0;
    this.accY = 0;
    this.friction = Math.random() * 0.05 + 0.8;

    this.color = colors[Math.floor(Math.random() * 6)];
}

Particle.prototype.render = function() {


    this.accX = (this.dest.x - this.x) / 100;
    this.accY = (this.dest.y - this.y) / 100;
    this.vx += this.accX;
    this.vy += this.accY;
    this.vx *= this.friction;
    this.vy *= this.friction;

    this.x += this.vx;
    this.y += this.vy;

    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
    ctx.fill();

    var a = this.x - mouse.x;
    var b = this.y - mouse.y;

    var distance = Math.sqrt(a * a + b * b);
    if (distance < (radius * 70)) {
        this.accX = (this.x - mouse.x) / 100;
        this.accY = (this.y - mouse.y) / 100;
        this.vx += this.accX;
        this.vy += this.accY;
    }

}

function onMouseMove(e) {
    var rect = canvas.getBoundingClientRect();
    mouse.x = (e.clientX- rect.left)*ww/(rect.right-rect.left);
    mouse.y = (e.clientY- rect.top)*wh/(rect.bottom-rect.top);
}

function onTouchMove(e) {
    if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
    }
}

function onTouchEnd(e) {
    mouse.x = -9999;
    mouse.y = -9999;
}

function initScene() {
    ww = canvas.width = window.innerWidth;
    wh = canvas.height = window.innerHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "bold " + (ww / 10) + "px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(texte, ww / 2, wh / 2);

    var data = ctx.getImageData(0, 0, ww, wh).data;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = "screen";

    particles = [];
    for (var i = 0; i < ww; i += Math.round(ww / 150)) {
        for (var j = 0; j < wh; j += Math.round(ww / 150)) {
            if (data[((i + j * ww) * 4) + 3] > 150) {
                particles.push(new Particle(i, j,(ww+wh)/800 ));
            }
        }
    }
    amount = particles.length;

}

function onMouseClick() {
    radius++;
    if (radius === 5) {
        radius = 0;
    }
}

function render(a) {
    requestAnimationFrame(render);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < amount; i++) {
        particles[i].render();
    }
};

window.addEventListener("resize", initScene);
window.addEventListener("mousemove", onMouseMove);
window.addEventListener("touchmove", onTouchMove);
window.addEventListener("click", onMouseClick);
window.addEventListener("touchend", onTouchEnd);
initScene();
requestAnimationFrame(render);