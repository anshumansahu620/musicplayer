const list = [
    "sadqey.mp3",
    "Eyes Blue Like The Atlantic (feat. Subvrbs) - Sista Prod (youtube).mp3",
    "blackbear - hot girl bummer [Low Budget Video] - blackbear (youtube).mp3"
];

const imagelist = [
    "eyesblue.jpg",
    "sadqay.jpg",
    "image.jpg"
];

let first = document.querySelector("#first");
let imagelabel = document.querySelector("#imagelabel");
let second = document.querySelector("#second");
let third = document.querySelector("#third");
let audio = document.querySelector("audio"); // Assuming an <audio> element wraps the <source>
let source = document.querySelector("source");

first.addEventListener("click", () => {
    source.src = list[1]; // Relative path
    imagelabel.src = imagelist[0];
    audio.load(); // Reloads the audio element to use the new source
});

second.addEventListener("click", () => {
    source.src = list[0]; // Relative path
    imagelabel.src = imagelist[1];
    audio.load();
});

third.addEventListener("click", () => {
    source.src = list[2]; // Relative path
    imagelabel.src = imagelist[2];
    audio.load();
});
