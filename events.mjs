import { buttonPrevious, buttonNext, body } from "./components.mjs";
import { previousTheme, nextTheme, checkButton } from "./index.js";

body.addEventListener('keydown', checkButton)

buttonPrevious.addEventListener('click', previousTheme)
buttonNext.addEventListener('click', nextTheme)