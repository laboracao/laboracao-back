const Gamification = require("../schemas/gamificationService");

const postGamification = async (req, res) => {

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  const {email, year, month, exerciseCompleteCount} = req.body;
  const currentGamification = await Gamification.findOne({email, year:currentYear, month: currentMonth});

  if(!currentGamification){
    const newGamification = await Gamification.create({email, exerciseCompleteCount, year, month});
    newGamification.save()
    return res.send(newGamification)
  }

  if(currentGamification){
    const {exerciseCompleteCount: exerciseComplete, _id} = currentGamification;
    const id = _id.toString();
    await Gamification.findByIdAndUpdate(id, {exerciseCompleteCount: exerciseComplete + parseInt(exerciseCompleteCount, 10)});
    const updatedGame = await Gamification.findOne({email, year:currentYear, month: currentMonth});
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

  async getTheFirstsByMonthYear(req, res) {
    const {...rest} = req.params;

    const month = parseInt(rest.month, 10);
    const year = parseInt(rest.year, 10);

    const gamification = await Gamification.find({month, year}).sort({exerciseCompleteCount: -1}).limit(3);
    return res.json(gamification);
  },

  async getTheByEmailMonthYear(req, res) {
    const {email, ...rest} = req.body;

    const month = parseInt(rest.month, 10);
    const year = parseInt(rest.year, 10);

    const gamification = await Gamification.find({email, month, year}).sort({exerciseCompleteCount: -1}).limit(3);
    return res.json(gamification);
  },

  async get(req, res) {
    const gamification = await Gamification.find();
    return res.send(gamification);
  }
}