
const progressBar = document.querySelectorAll(".languages-progress .progress-bar");

Array.from(progressBar).forEach((bar) => {
    const progress = bar.dataset.progress;
    bar.querySelector("span").style.width = progress + "%";
});