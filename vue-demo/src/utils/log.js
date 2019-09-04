const Log = {
  /**
   * @msg: 信息提示
   * @param {String} title
   * @param {String} color: MidnightBlue
   * @param {String} bg：Aquamarine
   * @param {String} msg
   */
  info(title, msg) {
    this.commonLog(title, "MidnightBlue", "Aquamarine", msg);
  },
  warning(title, msg) {
    this.commonLog(title, "#7b5822", "Aquamarine", msg);
  },
  error(title, msg) {
    this.commonLog(title, "red", "white", msg);
  },
  commonLog(title, color, bg, msg = "") {
    console.log(`%c${title}`, `color:${color};background:${bg};font-size:20px`, msg);
  },
  clear() {
    console.clear();
  }
};
export default Log;
