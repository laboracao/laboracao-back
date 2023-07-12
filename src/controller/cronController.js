// const day = ((1000 * 60) * 60 )* 24;
const day = 10000;

module.exports = {
  executeClearGamification(){

    const dayInterval = setInterval(() => {
      console.log("teste")
      const dateNow = new Date();
      const monthNow = dateNow.getMonth() + 1;
      console.log(monthNow);
      console.log(dateNow);
    }, day);

  }
}