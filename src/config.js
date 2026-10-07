// ============================================================
// BIRTHDAY WEBSITE CONFIGURATION
// Edit this file to personalize the website for your girlfriend
// ============================================================

const config = {
  // --- Names ---
  // GIRLFRIEND_NAME: Leave empty ("") if you don't want to use her name
  GIRLFRIEND_NAME: "",
  MY_NAME: "",

  // --- Relationship Details ---
  RELATIONSHIP_YEARS: 2,
  BIRTHDAY_DATE: "", // e.g. "October 8" — shown on the birthday section

  // --- Music ---
  // Place your music file in /public/audio/ folder
  // Example: "audio/our-song.mp3"
  // Leave empty to disable music button
  MUSIC_FILE: "", // e.g. "audio/song.mp3"

  // --- Photos ---
  // Add photo filenames here from /public/images/ folder
  // Example: ["images/photo1.jpg", "images/photo2.jpg"]
  // Leave empty to skip the gallery (site still looks great without photos)
  PHOTOS: [
    // "images/photo1.jpg",
    // "images/photo2.jpg",
    // "images/photo3.jpg",
    // "images/photo4.jpg",
  ],

  // --- GitHub Pages ---
  // This is used for the Vite base path
  // Set this to your repo name: e.g. "/birthday-website/"
  // This is automatically read from vite.config.js
};

export default config;
