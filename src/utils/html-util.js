export const htmlUtil = {
  /**
   * @param {String} html HTML String
   * @returns {HTMLCollection} returns the parsed HTML elements
   */
  parseHTML: function(html) {
    var dummyEle = document.createElement("DIV");
    dummyEle.innerHTML = html;
    return dummyEle.children;
  }
};
