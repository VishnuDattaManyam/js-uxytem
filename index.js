// Import stylesheets
import { TextBox } from './components/text-box/text-box.js';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Subform Prototype</h1>`;

let t = new TextBox();

appDiv.innerHTML = t.getUI();