const Tea = require("../models/tea");

// GET "/tea"
const getAllTea = async (req, res) => {
  try {
    const teas = await Tea.find({});
    res.json(teas);
  } catch (error) {
    res.json({ Error: error });
  }
};

// POST "/tea"
const newTea = async (req, res) => {
  try {
    const tea = await Tea.findOne({ name: req.body.name });

    if (tea === null) {
      const newTea = new Tea({
        name: req.body.name, 
        image: req.file.path, 
        description: req.body.description, 
        keywords: req.body.keywords, 
        origin: req.body.origin, 
        brew_time: req.body.brew_time, 
        temperature: req.body.temperature
      });

      newTea.save();
      res.json(newTea);
    } else {
      res.json({ message: "Tea already exists" });
    }
  } catch (error) {
    res.json({ Error: error });
  }
};

// DELETE "/tea"
const deleteAllTea = async (req, res) => {
  try {
    await Tea.deleteMany({});
    res.json({ message: "Complete delete successful" });
  } catch (error) {
    res.json({ Error: error });
  }
};

// GET "/tea/:name"
const getOneTea = async (req, res) => {
  try {
    const tea = await Tea.findOne({ name: req.params.name });

    if (tea === null) {
      res.json({ message: "Tea doesn't exist." });
    } else {
      res.json(tea);
    }
  } catch (error) {
    res.json({ Error: error });
  }
};

// POST "/tea/:name"
const newComment = async (req, res) => {
  try {
    const tea = await Tea.findOne({ name: req.params.name });
    
    if (tea === null || !req.body.comment) {
      res.json({ message: "Tea doesn't exist." });
    } else {
      tea.comments.push({
        text: req.body.comment,
        date: new Date()
      });

      await tea.save();
      res.json(tea);
    }
  } catch (error) {
    res.json({ Error: error });
  }
};

// DELETE "/tea/:name"
const deleteOneTea = async (req, res) => {
  try {
    const tea = await Tea.findOne({ name: req.params.name });

    if (tea === null) {
      res.json({ message: "Tea doesn't exist." });
    } else {
      await tea.deleteOne();
      res.json({ message: "Tea deleted." });
    }
  } catch (error) {
    res.json({ Error: error });
  }
};

// Export for routes/tea.js use
module.exports = {
  getAllTea,
  newTea,
  deleteAllTea,
  getOneTea,
  newComment,
  deleteOneTea
};