const Gamification = require("../schemas/gamificationService");

const postGamification = async (req, res) => {

  const {email, exerciseCompleteCount, userId} = req.body;
  const currentGamification = await Gamification.findOne({email});

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  if(!currentGamification){
    const newGamification = await Gamification.create({email, exerciseCompleteCount, year: currentYear, month: currentMonth});
    newGamification.save()
    return res.send(newGamification)
  }

  if(currentGamification){
    const {exerciseCompleteCount: exerciseComplete, _id} = currentGamification;
    const id = _id.toString();
    await Gamification.findByIdAndUpdate(id, {exerciseCompleteCount: exerciseComplete + parseInt(exerciseCompleteCount, 10)});
    const updatedGame = await Gamification.findOne({email});
    return res.send(updatedGame);
  }
}

module.exports = {
  async post(req, res) {
    await postGamification(req, res);
  },

  async getTheFirsts(req, res) {
    const gamification = await Gamification.find().sort({exerciseCompleteCount: -1}).limit(3);
    return res.json(gamification);
  },

  async get(req, res) {
    const gamification = await Gamification.find();
    return res.send(gamification);
  }
}