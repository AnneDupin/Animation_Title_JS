var txtAnim = document.querySelector('h1');

var typewriter = new Typewriter(txtAnim, {
    deleteSpeed: 20,
});

typewriter
    .changeDelay(20)
    .typeString('Hello, je suis')
    .pauseFor(300)
    .typeString('<strong> Dev Web Junior</strong> !')
    .pause(1000)
    .deleteChars(13)
    .typeString('<span style="color: #27ae60;"> CSS</span> !')
    .pauseFor(1000)
    .deleteChars(5)
    .TypeString('<span style="color: midnightblue;"> React</span> !')
    .pauseFor(1000)
    .deleteChars(7)
    .TypeString('<span style="color: #ea39ff;"> PhP</span> !')
    .pauseFor(1000)
    .deleteChars(5)
    .TypeString('<span style="color: #ff6910;"> JavaScript</span> !')
    .pauseFor(1000)
    .start();
