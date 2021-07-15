var rhit = rhit || {};

var textWrapper = document.querySelector('.moving-letters .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

rhit.timeline({loop: true})
    .add({
        targets: '.moving-letters .letters',
        scale: [0, 1],
        duration: 1500,
        elasticity: 600,
        delay: (el, i)  => 45 * (i+1)
        }).add({
            targets: '.moving-letters',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
    });

rhit.main = (params) => {
    rhit.timeline();
}

rhit.main();