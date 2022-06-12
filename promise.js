 const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async(emotion) => {
  try {
    const responseIXX = await promiseTheaterIXX();
    const responseVGC = await promiseTheaterVGC();
    const responses = responseIXX.concat(responseVGC);

    let jmlEmosi = 0;
    responses.map(item => item.hasil === emotion && (jmlEmosi += 1));
    return jmlEmosi;
  } catch (error) {
    return `Error: ${error}`;
  }
};

module.exports = {
  promiseOutput,
};
