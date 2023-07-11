const Count = require("../schemas/countAccessService");

const postCount = async (req, res) => {
  const currentCount = await Count.findOne();

  if(!currentCount){
    const newCount = await Count.create({count: 0});
    newCount.save();
    return res.send(newCount);
  }


  if(currentCount){
    const {_id, count} = currentCount;
    const id = _id.toString();
    const plusOne = count + 1;
    await Count.findByIdAndUpdate(id, {count: plusOne});
    const updatedCount = await Count.findOne();
    return res.send(updatedCount);
  }
}

module.exports = {
  async post(req, res) {
    await postCount(req, res);
  },
}