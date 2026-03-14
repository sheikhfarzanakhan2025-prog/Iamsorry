function revealMessage() {
    const audio = document.getElementById('sorryVoice');
    
    // Smooth transition using GSAP
    gsap.to("#intro-screen", {
        duration: 0.8,
        y: -50,
        opacity: 0,
        display: "none",
        ease: "power2.in"
    });

    gsap.to("#main-content", {
        duration: 1.2,
        display: "block",
        opacity: 1,
        delay: 0.8,
        ease: "power3.out"
    });

    // Voice play
    audio.play().catch(e => console.log("Audio needs user click"));
}
