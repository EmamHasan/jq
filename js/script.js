var ml4 = {};
ml4.opacityIn = [0,1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 500;

anime.timeline({loop: true})
  .add({
    targets: '.ml4 .letters-1',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-1',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-2',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-2',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-3',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-3',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4',
    opacity: 0,
    duration: 500,
    delay: 500
  });


  // bubbley 

  bubbly({
    animate: false, // default is true
    blur: 1, // default is 4
    bubbleFunc: () => `hsla(${Math.random() * 360}, 100%, 50%, ${Math.random() * 0.25})`, // default is () => `hsla(0, 0%, 100%, ${r() * 0.1})`)
    canvas: document.querySelector("#background"), // default is created and attached
    shadowColor: "#0ff", // default is #fff
    angleFunc: () => Math.random() * Math.PI * 2, // default is this
    velocityFunc: () => 0.1 + Math.random() * 0.5, // default is this
    radiusFunc: () => 4 + Math.random() * 25 // default is 4 + Math.random() * width / 25
});
bubbly({
  colorStart: '#d5d5d5',
  colorStop: '#d5d5d5',
  bubbles:300,
  blur:1,
  compose: 'source-over',
  bubbleFunc:() => `hsla(${200 + Math.random() * 50}, 100%, 50%, .3)`,
  angleFunc:() => Math.random() > 0.5 ? Math.PI : 2 * Math.PI,
  velocityFunc:() => 1 + Math.random() * 50,
  radiusFunc:() => Math.random() * 5
});