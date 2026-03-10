import "/assets/css/main.css";
import { footnote } from "./module/footnote.js";

document.addEventListener("DOMContentLoaded", async () => {

  if (document.querySelector(".body-copy")) {
    await footnote();
  }
});
