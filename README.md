### 🚀 Live Demo

You can view the live project here: https://animated-centaur-1d313a.netlify.app/#vocabulary

---

### 📚 English Janala: An Interactive Learning Platform

**English Janala** ("English Window" in Bengali) is an educational web application designed to help users learn English vocabulary in an interactive and engaging way. The platform features a simple authentication system, dynamic lessons, and a detailed view for each word, providing a smooth and responsive user experience.

---

### ✨ Features

* **Simple Authentication:** 🔑 A basic login system requires a name and a hardcoded password to access the learning content.
* **Interactive Lessons:** 📖 Users can select different lessons from a dynamic list. Clicking a lesson button fetches and displays relevant vocabulary words.
* **Dynamic Word Cards:** 🗂️ Each vocabulary word is presented in a card format, showing the word, its meaning, and its pronunciation.
* **Detailed Word View:** 🔍 Clicking the info icon on a word card opens a modal that provides more information, including an example sentence and a list of synonyms.
* **Frequently Asked Questions (FAQ):** ❓ An accordion-style FAQ section provides explanations on common JavaScript concepts, offering an additional learning resource.
* **Loading State:** ⏳ A spinner is displayed while the application fetches data from the API, ensuring a good user experience.

---

### 🛠️ Technologies Used

* **HTML:** The project's structure is built with semantic HTML5.
* **CSS:** Styling is powered by **Tailwind CSS** and **DaisyUI**, used via a CDN for a modern and responsive design.
* **JavaScript:** The core logic, including all dynamic features, is written in vanilla JavaScript.
* **Fonts:** The application uses **Poppins** for English text and **Hind Siliguri** for Bengali, creating a bilingual interface.
* **API:** All vocabulary data is fetched from the public **Programming Hero API**.

### 💡 How It Works

The application operates by fetching data and dynamically updating the DOM based on user interaction.

1.  **Authentication:** Upon entering the correct credentials, the main learning sections are revealed, and the navigation bar becomes visible.
2.  **Lesson Selection:** The list of lessons is populated by a `fetch` request on page load. When a user clicks a lesson button, another `fetch` request is sent to get the words for that specific lesson.
3.  **Data Rendering:** The `displayWords` function takes the fetched data and dynamically generates HTML for each word card.
4.  **Modal Display:** When a user clicks a card's info button, the `loadWordDetail` function fetches specific word details from the API and populates a DaisyUI modal with the information.
5.  **Navigation:** The navigation links use anchor tags to smoothly scroll to different sections on the page, providing a single-page application feel.
