import { INITIAL_ASSESSMENTS } from '../data/mockData.js';

let assessments = [...INITIAL_ASSESSMENTS];
let userResults = {};

export const getAllAssessments = (req, res) => {
  // Return list without full answers to prevent cheating
  const list = assessments.map(a => ({
    id: a.id,
    title: a.title,
    category: a.category,
    questionsCount: a.questionsCount,
    durationMinutes: a.durationMinutes,
    rewardXP: a.rewardXP
  }));
  res.json({ success: true, count: list.length, data: list });
};

export const getAssessmentById = (req, res) => {
  const { id } = req.params;
  const assessment = assessments.find(a => a.id === id);
  if (!assessment) {
    return res.status(404).json({ success: false, message: 'Assessment not found' });
  }

  // Return questions without correct answers
  const sanitized = {
    ...assessment,
    questions: assessment.questions.map(q => ({
      id: q.id,
      question: q.question,
      options: q.options
    }))
  };

  res.json({ success: true, data: sanitized });
};

export const submitAssessment = (req, res) => {
  const { id } = req.params;
  const { answers } = req.body; // e.g. { q1: 1, q2: 1 }

  const assessment = assessments.find(a => a.id === id);
  if (!assessment) {
    return res.status(404).json({ success: false, message: 'Assessment not found' });
  }

  let correctCount = 0;
  assessment.questions.forEach(q => {
    if (answers && answers[q.id] === q.correctIndex) {
      correctCount++;
    }
  });

  const total = assessment.questions.length;
  const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 85;
  const earnedXP = percentage >= 60 ? assessment.rewardXP : 10;

  userResults[id] = {
    percentage,
    correctCount,
    total,
    earnedXP,
    passed: percentage >= 60,
    timestamp: new Date().toISOString()
  };

  res.json({
    success: true,
    result: {
      assessmentId: id,
      percentage,
      correctCount,
      total,
      earnedXP,
      passed: percentage >= 60
    }
  });
};
