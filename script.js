var audio = new Audio('01420d36ff.mp3');


document.querySelector("img").onclick = () => {
	audio.play();
	document.querySelector("img").src = "animate.gif"
	setTimeout(() => {
		document.querySelector("img").src = "frame_001.gif"
	}, 2000);
}