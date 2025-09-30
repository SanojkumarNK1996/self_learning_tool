const CourseTopics = require('../models/CourseTopics.model');
const Subtopics = require('../models/Subtopics.model');

const createSubtopic = async (req, res) => {
  try {
    const { topicId } = req.params;
    const topic = await CourseTopics.findByPk(topicId);
    if (!topic) return res.status(404).json({ message: 'Topic not found' });

    const subtopic = await Subtopics.create({ ...req.body, topicId });
    res.status(201).json(subtopic);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const bulkCreateSubtopics = async (req, res) => {
  try {
    const { topicId } = req.params;
    const { subTopics } = req.body;

    const topic = await CourseTopics.findByPk(topicId);
    if (!topic) {
      return res.status(404).json({ message: 'Topic not found' });
    }

    if (!Array.isArray(subTopics) || subTopics.length === 0) {
      return res.status(400).json({ message: 'Invalid input. Expecting an array of subtopics.' });
    }

    // Attach topicId to each subtopic
    const subtopicsData = subTopics.map((sub) => ({
      ...sub,
      topicId,
    }));

    const subtopics = await Subtopics.bulkCreate(subtopicsData, { returning: true });

    res.status(201).json({
      success: true,
      count: subtopics.length,
      data: subtopics,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getSubtopics = async (req, res) => {
  try {
    const { topicId } = req.params;
    const subtopics = await Subtopics.findAll({
      where: { topicId },
      order: [['displayOrder', 'ASC']],
    });
    res.json(subtopics);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getSubtopicById = async (req, res) => {
  try {
    const subtopic = await Subtopics.findByPk(req.params.subtopicId);
    if (!subtopic) return res.status(404).json({ message: 'Subtopic not found' });
    res.json(subtopic);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateSubtopic = async (req, res) => {
  try {
    const [updated] = await Subtopics.update(req.body, {
      where: { id: req.params.subtopicId },
    });
    if (!updated) return res.status(404).json({ message: 'Subtopic not found' });
    const updatedSubtopic = await Subtopics.findByPk(req.params.subtopicId);
    res.json(updatedSubtopic);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteSubtopic = async (req, res) => {
  try {
    const deleted = await Subtopics.destroy({
      where: { id: req.params.subtopicId },
    });
    if (!deleted) return res.status(404).json({ message: 'Subtopic not found' });
    res.json({ message: 'Subtopic deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createSubtopic,
  bulkCreateSubtopics,
  getSubtopics,
  getSubtopicById,
  updateSubtopic,
  deleteSubtopic
}
