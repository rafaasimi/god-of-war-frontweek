document.addEventListener('DOMContentLoaded', () => {
    let timeline = new TimelineMax();

    timeline.fromTo('.bg-loader', 2, 
    { width: '100%' }, 
    { width: '0%', delay: 3, ease: Expo.easeInOut });

    timeline.fromTo('.bg-video', 2, 
    { width: '0%', opacity: 0 }, 
    { width: '100%', opacity: 1, ease: Expo.easeInOut }, '-=1');

    timeline.fromTo('.logo', 0.7, 
    { y: -50, opacity: 0 }, 
    { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.5');

    timeline.fromTo('.nav-list', 0.7, 
    { y: -50, opacity: 0 }, 
    { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.5');

    timeline.fromTo('.nav-social', 0.7, 
    { y: -50, opacity: 0 }, 
    { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.5');

    timeline.fromTo('.item-1', 0.7, 
    { y: -50, opacity: 0 }, 
    { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.5');

    timeline.fromTo('.item-2', 0.7, 
    { y: -50, opacity: 0 }, 
    { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.5');

    timeline.fromTo('.item-3', 0.7, 
    { y: -50, opacity: 0 }, 
    { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.5');

    timeline.fromTo('.item-4', 0.7, 
    { y: -50, opacity: 0 }, 
    { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.5');

    timeline.fromTo('.item-5', 0.7, 
    { y: -50, opacity: 0 }, 
    { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.5');
})