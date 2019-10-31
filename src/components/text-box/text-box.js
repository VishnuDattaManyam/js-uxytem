import { htmlUtil } from './utils/html-util.js';

export class TextBox {
  constructor(settings) {
    this.options = {
      html: `<div>
              <input />
            </div>`
    };
    this.settings = settings;
  }

  getUI() {
    return 'Hello';
  }
}
