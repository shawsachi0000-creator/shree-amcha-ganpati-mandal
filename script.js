const videoInput = document.getElementById("videoInput");
const uploadBtn = document.getElementById("uploadBtn");
const uploadCard = document.getElementById("uploadCard");

const videoSection = document.getElementById("videoSection");
const videoPreview = document.getElementById("videoPreview");

const fileName = document.getElementById("fileName");
const fileSize = document.getElementById("fileSize");
const duration = document.getElementById("duration");
const videoInfo = document.getElementById("videoInfo");

const analyzeBtn = document.getElementById("analyzeBtn");

const processingSection =
  document.getElementById("processingSection");

const settingsSection =
  document.getElementById("settingsSection");

const resultsSection =
  document.getElementById("resultsSection");

const editorSection =
  document.getElementById("editorSection");

const progressBar =
  document.getElementById("progressBar");

const progressPercent =
  document.getElementById("progressPercent");

const processingStatus =
  document.getElementById("processingStatus");

const processingTitle =
  document.getElementById("processingTitle");

const processingText =
  document.getElementById("processingText");

const generateBtn =
  document.getElementById("generateBtn");

const clipsGrid =
  document.getElementById("clipsGrid");

const downloadAllBtn =
  document.getElementById("downloadAllBtn");

const newProjectBtn =
  document.getElementById("newProjectBtn");

let selectedVideo = null;
let videoURL = null;
let generatedClips = [];


/* =========================
   UPLOAD BUTTON
========================= */

uploadBtn.addEventListener("click", () => {
  videoInput.click();
});


videoInput.addEventListener("change", (event) => {

  const file = event.target.files[0];

  if (!file) return;

  handleVideo(file);

});


/* =========================
   DRAG & DROP
========================= */

uploadCard.addEventListener("dragover", (event) => {

  event.preventDefault();

  uploadCard.classList.add("dragover");

});


uploadCard.addEventListener("dragleave", () => {

  uploadCard.classList.remove("dragover");

});


uploadCard.addEventListener("drop", (event) => {

  event.preventDefault();

  uploadCard.classList.remove("dragover");

  const file = event.dataTransfer.files[0];

  if (!file) return;

  if (!file.type.startsWith("video/")) {

    alert("Please upload a video file.");

    return;
  }

  handleVideo(file);

});


/* =========================
   HANDLE VIDEO
========================= */

function handleVideo(file) {

  if (!file.type.startsWith("video/")) {

    alert("Please select a valid video.");

    return;
  }

  selectedVideo = file;

  if (videoURL) {

    URL.revokeObjectURL(videoURL);

  }

  videoURL = URL.createObjectURL(file);

  videoPreview.src = videoURL;

  fileName.textContent = file.name;

  fileSize.textContent =
    formatFileSize(file.size);

  videoInfo.textContent =
    "Video successfully uploaded.";

  videoSection.classList.remove("hidden");

  settingsSection.classList.add("hidden");

  resultsSection.classList.add("hidden");

  editorSection.classList.add("hidden");

  videoPreview.onloadedmetadata = () => {

    duration.textContent =
      formatDuration(videoPreview.duration);

  };

  videoSection.scrollIntoView({
    behavior: "smooth"
  });

}


/* =========================
   FORMAT FILE SIZE
========================= */

function formatFileSize(bytes) {

  if (bytes < 1024 * 1024) {

    return (
      (bytes / 1024).toFixed(1) +
      " KB"
    );

  }

  return (
    (bytes / (1024 * 1024)).toFixed(2) +
    " MB"
  );

}


/* =========================
   FORMAT DURATION
========================= */

function formatDuration(seconds) {

  if (!Number.isFinite(seconds)) {

    return "Unknown";

  }

  const totalSeconds =
    Math.floor(seconds);

  const hours =
    Math.floor(totalSeconds / 3600);

  const minutes =
    Math.floor(
      (totalSeconds % 3600) / 60
    );

  const secs =
    totalSeconds % 60;

  if (hours > 0) {

    return (
      String(hours).padStart(2, "0") +
      ":" +
      String(minutes).padStart(2, "0") +
      ":" +
      String(secs).padStart(2, "0")
    );

  }

  return (
    String(minutes).padStart(2, "0") +
    ":" +
    String(secs).padStart(2, "0")
  );

}


/* =========================
   ANALYZE VIDEO
========================= */

analyzeBtn.addEventListener("click", () => {

  if (!selectedVideo) {

    alert("Please upload a video first.");

    return;
  }

  startAnalysis();

});


function startAnalysis() {

  processingSection.classList.remove("hidden");

  settingsSection.classList.add("hidden");

  resultsSection.classList.add("hidden");

  editorSection.classList.add("hidden");

  processingTitle.textContent =
    "AI is analyzing your video...";

  processingText.textContent =
    "Preparing your video for automatic editing.";

  progressBar.style.width = "0%";

  progressPercent.textContent = "0%";

  processingStatus.textContent =
    "Starting...";


  let progress = 0;

  const steps = [

    "Reading video...",
    "Detecting scenes...",
    "Analyzing audio...",
    "Finding interesting moments...",
    "Preparing automatic cuts...",
    "Almost ready..."

  ];


  const interval = setInterval(() => {

    progress += Math.floor(
      Math.random() * 7
    ) + 3;

    if (progress >= 100) {

      progress = 100;

      clearInterval(interval);

      processingTitle.textContent =
        "Analysis complete!";

      processingText.textContent =
        "Choose your automatic editing settings.";

      processingStatus.textContent =
        "Complete";

      setTimeout(() => {

        processingSection.classList.add("hidden");

        settingsSection.classList.remove("hidden");

        settingsSection.scrollIntoView({
          behavior: "smooth"
        });

      }, 700);

      return;
    }


    progressBar.style.width =
      progress + "%";

    progressPercent.textContent =
      progress + "%";

    const stepIndex =
      Math.min(
        Math.floor(progress / 17),
        steps.length - 1
      );

    processingStatus.textContent =
      steps[stepIndex];

  }, 500);

}


/* =========================
   GENERATE CLIPS
========================= */

generateBtn.addEventListener("click", () => {

  if (!selectedVideo) {

    alert("Please upload a video first.");

    return;
  }

  generateClips();

});


function generateClips() {

  processingSection.classList.remove("hidden");

  settingsSection.classList.add("hidden");

  processingTitle.textContent =
    "Creating your clips...";

  processingText.textContent =
    "AI is preparing automatic parts and captions.";

  progressBar.style.width = "0%";

  progressPercent.textContent = "0%";

  processingStatus.textContent =
    "Preparing...";


  let progress = 0;

  const interval = setInterval(() => {

    progress += Math.floor(
      Math.random() * 8
    ) + 4;

    if (progress >= 100) {

      progress = 100;

      clearInterval(interval);

      createDemoClips();

      processingTitle.textContent =
        "Your clips are ready!";

      processingText.textContent =
        "Automatic editing has finished.";

      processingStatus.textContent =
        "Complete";

      setTimeout(() => {

        processingSection.classList.add("hidden");

        resultsSection.classList.remove("hidden");

        editorSection.classList.remove("hidden");

        resultsSection.scrollIntoView({
          behavior: "smooth"
        });

      }, 800);

      return;
    }


    progressBar.style.width =
      progress + "%";

    progressPercent.textContent =
      progress + "%";

    processingStatus.textContent =
      "Creating clips...";

  }, 400);

}


/* =========================
   CREATE CLIPS
========================= */

function createDemoClips() {

  clipsGrid.innerHTML = "";

  generatedClips = [];

  const clipLength =
    Number(
      document.getElementById(
        "clipLength"
      ).value
    );

  const totalDuration =
    videoPreview.duration || 3600;

  const numberOfClips =
    Math.min(
      8,
      Math.max(
        1,
        Math.ceil(
          totalDuration / clipLength
        )
      )
    );


  for (
    let i = 0;
    i < numberOfClips;
    i++
  ) {

    const start =
      i * clipLength;

    const end =
      Math.min(
        start + clipLength,
        totalDuration
      );


    const clip = {

      id: i + 1,

      start: start,

      end: end,

      title:
        "Part " + (i + 1),

      caption:
        "✨ Automatic captions will appear here"

    };


    generatedClips.push(clip);

    renderClip(clip);

  }

}


/* =========================
   RENDER CLIP
========================= */

function renderClip(clip) {

  const card =
    document.createElement("div");

  card.className =
    "clip-card";


  const video =
    document.createElement("video");

  video.className =
    "clip-video";

  video.src = videoURL;

  video.controls = true;

  video.playsInline = true;


  video.addEventListener(
    "loadedmetadata",
    () => {

      video.currentTime =
        Math.min(
          clip.start,
          Math.max(
            0,
            video.duration - 0.1
          )
        );

    }
  );


  video.addEventListener(
    "timeupdate",
    () => {

      if (
        video.currentTime >=
        clip.end
      ) {

        video.pause();

      }

    }
  );


  const info =
    document.createElement("div");

  info.className =
    "clip-info";


  const heading =
    document.createElement("h3");

  heading.textContent =
    clip.title;


  const description =
    document.createElement("p");

  description.textContent =
    formatDuration(clip.start) +
    " → " +
    formatDuration(clip.end);


  const actions =
    document.createElement("div");

  actions.className =
    "clip-actions";


  const editButton =
    document.createElement("button");

  editButton.textContent =
    "✏️ Edit";

  editButton.addEventListener(
    "click",
    () => {

      openEditor(clip);

    }
  );


  const downloadButton =
    document.createElement("button");

  downloadButton.textContent =
    "⬇️ Export";

  downloadButton.addEventListener(
    "click",
    () => {

      exportClip(clip);

    }
  );


  actions.appendChild(editButton);

  actions.appendChild(
    downloadButton
  );


  info.appendChild(heading);

  info.appendChild(description);

  info.appendChild(actions);


  card.appendChild(video);

  card.appendChild(info);


  clipsGrid.appendChild(card);

}


/* =========================
   OPEN EDITOR
========================= */

function openEditor(clip) {

  editorSection.classList.remove("hidden");

  editorSection.scrollIntoView({
    behavior: "smooth"
  });

}


/* =========================
   EXPORT CLIP
========================= */

function exportClip(clip) {

  /*
    Browser-only version:

    This creates a downloadable
    reference file for now.

    Real MP4 rendering will be
    connected through FFmpeg
    in the backend version.
  */

  const data = {

    name: clip.title,

    start: clip.start,

    end: clip.end,

    source: selectedVideo.name

  };


  const blob =
    new Blob(
      [JSON.stringify(data, null, 2)],
      {
        type: "application/json"
      }
    );


  const url =
    URL.createObjectURL(blob);


  const link =
    document.createElement("a");

  link.href = url;

  link.download =
    clip.title.replace(
      /\s+/g,
      "-"
    ) +
    "-project.json";


  document.body.appendChild(link);

  link.click();

  link.remove();

  URL.revokeObjectURL(url);

}


/* =========================
   DOWNLOAD ALL
========================= */

downloadAllBtn.addEventListener(
  "click",
  () => {

    if (
      generatedClips.length === 0
    ) {

      alert("No clips available.");

      return;
    }


    generatedClips.forEach(
      (clip, index) => {

        setTimeout(() => {

          exportClip(clip);

        }, index * 300);

      }
    );

  }
);


/* =========================
   NEW PROJECT
========================= */

newProjectBtn.addEventListener(
  "click",
  () => {

    selectedVideo = null;

    generatedClips = [];

    clipsGrid.innerHTML = "";

    videoInput.value = "";

    videoPreview.removeAttribute(
      "src"
    );

    videoPreview.load();


    videoSection.classList.add(
      "hidden"
    );

    processingSection.classList.add(
      "hidden"
    );

    settingsSection.classList.add(
      "hidden"
    );

    resultsSection.classList.add(
      "hidden"
    );

    editorSection.classList.add(
      "hidden"
    );


    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }
);


/* =========================
   INITIAL STATE
========================= */

console.log(
  "AutoClip AI frontend loaded."
);
