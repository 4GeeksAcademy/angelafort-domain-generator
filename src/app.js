/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronouns = ["the", "our", "my", "a"];
  let adjectives = ["great", "big", "amazing", "cool"];
  let nouns = ["jogger", "raccoon", "cat", "pencil"];
  let extensions = [".com", ".net", ".us", ".ve"];

  function generateRandomDomain() {
    let randomPronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
    let randomAdjective =
      adjectives[Math.floor(Math.random() * adjectives.length)];
    let randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    let randomExtension =
      extensions[Math.floor(Math.random() * extensions.length)];

    return `${randomPronoun}${randomAdjective}${randomNoun}${randomExtension}`;
  }

  let domainElement = document.getElementById("domainName");
  domainElement.textContent = generateRandomDomain();
};
