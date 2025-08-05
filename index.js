getLessonsData();
function getLessonsData() {
  fetch("https://openapi.programming-hero.com/api/levels/all#")
    .then((res) => res.json())
    .then((data) => displayLessonsBtns(data.data));
}
function removeActiveClass() {
  let activeBtns = document.getElementsByClassName("active");
  for (let btn of activeBtns) {
    btn.classList.remove("active");
  }
  let activeBtnsImg = document.getElementsByClassName("active-img");
  for (let btnImg of activeBtnsImg) {
    btnImg.classList.remove("active-img");
  }
}
function displayLessonsBtns(lessons) {
  let lessonsContainer = document.getElementById("lessons-container");
  for (let i = 1; i <= lessons.length; i++) {
    let lessonBox = document.createElement("div");
    lessonBox.innerHTML = `  <button onclick="getWords(${i})" id="btn-${i}" class="border border-[#422AD5] rounded-sm px-3 py-2 text-[#422AD5] flex items-center justify-center gap-2 hover:bg-blue-500 hover:text-white group"
          >
            <img
              class="group-hover:brightness-0 group-hover:invert"
              id="img-${i}"
              src="/assets/fa-book-open.png"
              alt="Book icon"
            />
            <p>Lesson-${i}</p>
          </button>`;
    lessonsContainer.appendChild(lessonBox);
  }
}

function getWords(lessonNum) {
  const spinner = document.getElementById("spinner");
  setTimeout(() => {
    fetch(`https://openapi.programming-hero.com/api/level/${lessonNum}`)
      .then((res) => res.json())
      .then((data) => {
        spinner.style.display = "none";
        removeActiveClass();
        let clickedBtn = document.getElementById(`btn-${lessonNum}`);
        let clickedBtnImg = document.getElementById(`img-${lessonNum}`);
        clickedBtn.classList.add("active");
        clickedBtnImg.classList.add("active-img");

        displayWords(data.data);
      });
  }, 1000);
  let cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  spinner.style.display = "block";
}

function displayWords(words) {
  let cardContainer = document.getElementById("card-container");
  if (words.length == 0) {
    cardContainer.classList.remove("grid");
    cardContainer.classList.remove("grid-cols-3");
    cardContainer.innerHTML = ` <div
        class="gap-10 bg-gray-100 w-11/12 mx-auto p-10 rounded-4xl flex flex-col items-center"
      >
        <img src="assets/alert-error.png" alt="" />
        <p>এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
        <p class="bangla-semibold text-2xl">নেক্সট Lesson এ যান</p>
      </div>`;
  } else {
    cardContainer.classList.add("grid");
    cardContainer.classList.add("grid-cols-3");
    for (let word of words) {
      let wordCard = document.createElement("div");
      if (word.meaning === null) {
        word.meaning = "অর্থ খুঁজে পাইনি";
      }
      wordCard.innerHTML = `<div class="bg-white p-8 flex flex-col gap-11 w-auto rounded-xl">
              <div class="flex flex-col gap-5 items-center">
                <p class="text-2xl inter font-extrabold">${word.word}</p>
                <p class="inter font-semibold">Meaning /Pronounciation</p>
                <p class="bangla-semibold text-2xl">${
                  word.meaning + "/" + word.pronunciation
                }</p>
              </div>
              <div class="flex justify-between">
                <div
                  class="h-12 w-12 bg-blue-100 flex items-center justify-center rounded-md"
                >
                  <button
                class="h-12 w-12 bg-blue-100 flex items-center justify-center rounded-md"
                onclick=loadWordDetail(${word.id})
              >
                <img class="h-7" src="./assets/info.png" alt="" />
              </button>
              
                </div>
                <div
                  class="h-12 w-12 bg-blue-100 flex items-center justify-center rounded-md"
                >
                  <img class="h-7" src="./assets/volume.png" alt="" />
                </div>
              </div>
            </div>`;
      cardContainer.appendChild(wordCard);
    }
  }
}
function loadWordDetail(id) {
  fetch(`https://openapi.programming-hero.com/api/word/${id}`)
    .then((res) => res.json())
    .then((data) => displayWordDetail(data.data));
}
function displayWordDetail(wordDetail) {
  console.log(wordDetail);
  let wordDetailModal = document.getElementById("wordDetailModal");
  wordDetailModal.showModal();
  let modalItems = document.getElementById("modal-items");
  if (wordDetail.meaning === null) {
    wordDetail.meaning = "অর্থ খুঁজে পাইনি";
  }
  modalItems.innerHTML = `       <h3 class="bangla-semibold text-3xl">
            <span id="modalTitle">
              ${wordDetail.word}(
              <i class="fa-solid fa-microphone-lines"></i> : ${wordDetail.pronunciation})</span
            >
          </h3>
          <div>
            <p class="poppins-bold text-2xl">Meaning</p>
            <p class="bangla text-xl">${wordDetail.meaning}</p>
          </div>
          <div>
            <p class="poppins-bold text-2xl">Example</p>
            <p class="poppins text-xl">
              ${wordDetail.sentence}
            </p>
          </div>
          <div>
            <p class="bangla-semibold text-2xl pb-3">সমার্থক শব্দ গুলো</p>
            <div class="flex gap-5" id="synonymBox">
          
            </div>
          </div>`;
  makeSynonymBoxs(wordDetail);
}
function makeSynonymBoxs(wordDetail) {
  let synonymBox = document.getElementById("synonymBox");
  for (let synonym of wordDetail.synonyms) {
    let singlesino = document.createElement("div");
    singlesino.innerText = synonym;
    singlesino.setAttribute(
      "class",
      "bg-blue-100 border border-blue-300 px-3 py-2 rounded-md"
    );
    synonymBox.appendChild(singlesino);
  }
}
function checkPassword() {
  let nameVal = document.getElementById("name").value;
  let passwordVal = document.getElementById("password").value;
  if (nameVal.length != 0 && passwordVal === "123456") {
    showHiddenSec();
  } else if (nameVal === "") {
    alert("Please , Enter your name!");
  } else if (passwordVal != "123456") {
    alert("Please , Enter correct password!");
  }
}
function showHiddenSec() {
  let heroSection = document.getElementById("hero-section");
  let navBar = document.getElementById("navBar");
  let vocabulary = document.getElementById("vocabulary");
  let faq = document.getElementById("faq");
  heroSection.classList.toggle("hidden");
  navBar.classList.toggle("hidden");
  vocabulary.classList.toggle("hidden");
  faq.classList.toggle("hidden");
}
