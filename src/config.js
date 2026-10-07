// ============================================================
// BIRTHDAY WEBSITE CONFIGURATION
// Edit this file to personalize the website for your girlfriend
// ============================================================

const config = {
  // --- Names ---
  // GIRLFRIEND_NAME: Leave empty ("") if you don't want to use her name
  GIRLFRIEND_NAME: "Kanika",
  MY_NAME: "Dhruv",

  // --- Relationship Details ---
  RELATIONSHIP_YEARS: 2,
  BIRTHDAY_DATE: "October 8", // shown on the birthday section

  // --- Music ---
  // Place your music file in /public/audio/ folder
  // Example: "audio/our-song.mp3"
  // Leave empty ("") to disable the music button
  MUSIC_FILE: "", // e.g. "audio/song.mp3"

  // --- Photos ---
  // Files must exist in /public/images/
  // Use ONLY the filename relative to the public folder — no leading slash, no "public/"
  // Correct:   "images/photo1.jpg"
  // Wrong:     "/public/images/photo1.jpg"   ← never use this
  // Wrong:     "./public/images/photo1.jpg"  ← never use this
  //
  // If PHOTOS is empty ([]), the gallery section is simply hidden.
  PHOTOS: [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg",
  ],

  // --- GitHub Pages ---
  // The base path is controlled by the VITE_BASE_URL environment variable
  // set inside .github/workflows/deploy.yml — you do NOT need to change anything here.
};

export default config;
