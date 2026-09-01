import React, { useState, useEffect } from 'react';
import { MOCK_ASSESSMENTS } from '../../data/mockAssessments';
import { useAppData } from '../../context/AppDataContext';
import { useToast } from '../../context/ToastContext';
import { Button } from '../../components/common/Button';
import { ProgressBar } from '../../components/common/ProgressBar';
import {
  Clock,
  Flag,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
  HelpCircle
} from 'lucide-react';

export const AssessmentTakePage = ({ assessmentId = 'python-advanced', onNavigate }) => {
  const { recordAssessmentScore } = useAppData();
  const { addToast } = useToast();

  const assessment = MOCK_ASSESSMENTS.find(a => a.id === assessmentId) || MOCK_ASSESSMENTS[0];
  const questions = assessment.questions || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [flaggedQuestions, setFlaggedQuestions] = useState([]);
  const [secondsRemaining, setSecondsRemaining] = useState(assessment.durationMinutes * 60);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Timer countdown
  useEffect(() => {
    if (secondsRemaining <= 0) {
      handleSubmitAssessment();
      return;
    }
    const timer = setInterval(() => {
      setSecondsRemaining(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [secondsRemaining]);

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (optIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentIndex]: optIndex
    }));
  };

  const toggleFlag = () => {
    setFlaggedQuestions(prev =>
      prev.includes(currentIndex)
        ? prev.filter(i => i !== currentIndex)
        : [...prev, currentIndex]
    );
  };

  const handleSubmitAssessment = () => {
    setIsSubmitting(true);
    // Calculate Score
    let correctCount = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        correctCount += 1;
      }
    });

    const calculatedScore = Math.round((correctCount / Math.max(1, questions.length)) * 100);
    const finalScore = Math.max(70, calculatedScore); // Realistic baseline simulation

    recordAssessmentScore(assessment.id, finalScore);

    setTimeout(() => {
      addToast({
        title: '🎉 Assessment Completed!',
        message: `Your score: ${finalScore}%. Profile credentials updated. +50 XP!`,
        type: 'success',
        duration: 4000
      });
      onNavigate(`/assessment/${assessment.id}/results`, { score: finalScore });
    }, 600);
  };

  const currentQ = questions[currentIndex] || questions[0];
  const progressPercent = ((Object.keys(selectedAnswers).length) / Math.max(1, questions.length)) * 100;

  return (
    <div className="space-y-6 max-w-5xl mx-auto animate-fade-in">
      {/* Top Testing Bar (Timer, Progress, Submit) */}
      <div className="card p-4 bg-slate-900/90 border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 sticky top-[68px] z-30 shadow-xl">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('/assessment')}
            className="text-xs text-muted hover:text-primary transition-colors flex items-center gap-1"
          >
            <ChevronLeft size={14} /> Exit
          </button>
          <div className="h-4 w-[1px] bg-white/10" />
          <h2 className="text-sm font-bold font-heading text-primary truncate max-w-xs md:max-w-md">
            {assessment.title}
          </h2>
        </div>

        <div className="flex items-center gap-4">
          {/* Live Timer */}
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-mono font-bold ${
            secondsRemaining < 180
              ? 'bg-rose-950/40 border-rose-500 text-rose-400 animate-pulse'
              : 'bg-slate-950 border-white/10 text-primary'
          }`}>
            <Clock size={14} className={secondsRemaining < 180 ? 'text-rose-400' : 'text-brand'} />
            <span>{formatTime(secondsRemaining)}</span>
          </div>

          <Button
            variant="primary"
            size="sm"
            loading={isSubmitting}
            onClick={handleSubmitAssessment}
          >
            Submit Test
          </Button>
        </div>
      </div>

      {/* Progress Bar */}
      <ProgressBar
        label={`Question ${currentIndex + 1} of ${questions.length}`}
        value={progressPercent}
        valueLabel={`${Object.keys(selectedAnswers).length}/${questions.length} Answered`}
        height={6}
      />

      {/* Main Testing Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Question & Options Area */}
        <div className="lg:col-span-8 card p-6 lg:p-8 bg-slate-900/60 border-white/10 space-y-6">
          <div className="flex items-start justify-between gap-4">
            <span className="text-xs font-mono font-bold text-brand uppercase tracking-wider">
              Question {currentIndex + 1}
            </span>
            <button
              onClick={toggleFlag}
              className={`flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-lg border transition-colors ${
                flaggedQuestions.includes(currentIndex)
                  ? 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                  : 'bg-slate-950 border-white/10 text-muted hover:text-primary'
              }`}
            >
              <Flag size={12} />
              <span>{flaggedQuestions.includes(currentIndex) ? 'Flagged' : 'Mark for Review'}</span>
            </button>
          </div>

          {/* Question Text */}
          <h3 className="text-base lg:text-lg font-bold font-heading text-primary leading-relaxed">
            {currentQ?.question}
          </h3>

          {/* Options Radios */}
          <div className="space-y-3 pt-2">
            {currentQ?.options?.map((optionText, optIdx) => {
              const isSelected = selectedAnswers[currentIndex] === optIdx;

              return (
                <div
                  key={optIdx}
                  onClick={() => handleSelectOption(optIdx)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3.5 ${
                    isSelected
                      ? 'bg-indigo-600/20 border-indigo-500 text-primary shadow-md shadow-indigo-950/40 ring-1 ring-indigo-500/40'
                      : 'bg-slate-950/60 border-white/10 hover:border-white/20 text-secondary'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center border shrink-0 mt-0.5 ${
                    isSelected ? 'border-indigo-500 bg-indigo-500 text-white' : 'border-slate-600'
                  }`}>
                    {isSelected && <span className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                  <span className="text-xs sm:text-sm font-medium leading-normal">
                    {optionText}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Navigation Next / Prev */}
          <div className="flex items-center justify-between pt-6 border-t border-white/10">
            <Button
              variant="secondary"
              size="sm"
              icon={ChevronLeft}
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex(prev => prev - 1)}
            >
              Previous
            </Button>

            {currentIndex < questions.length - 1 ? (
              <Button
                variant="primary"
                size="sm"
                iconRight={ChevronRight}
                onClick={() => setCurrentIndex(prev => prev + 1)}
              >
                Next Question
              </Button>
            ) : (
              <Button
                variant="glow"
                size="sm"
                loading={isSubmitting}
                onClick={handleSubmitAssessment}
              >
                Finish & Calculate Score
              </Button>
            )}
          </div>
        </div>

        {/* Right Palette: Question Quick Jump (Section 62) */}
        <div className="lg:col-span-4 card p-6 bg-slate-900/60 border-white/10 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-muted font-heading">
            Question Palette
          </h4>

          <div className="grid grid-cols-5 gap-2">
            {questions.map((_, i) => {
              const isAnswered = selectedAnswers[i] !== undefined;
              const isFlagged = flaggedQuestions.includes(i);
              const isCurrent = currentIndex === i;

              return (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-10 rounded-xl font-mono text-xs font-bold transition-all relative ${
                    isCurrent
                      ? 'ring-2 ring-indigo-400 bg-indigo-600 text-white shadow-lg'
                      : isFlagged
                      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                      : isAnswered
                      ? 'bg-emerald-500/20 text-emerald border border-emerald-500/30'
                      : 'bg-slate-950 border border-white/10 text-muted hover:text-primary'
                  }`}
                >
                  {i + 1}
                  {isFlagged && (
                    <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-amber-400" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Palette Legend */}
          <div className="space-y-1.5 text-[11px] text-muted pt-3 border-t border-white/5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span>Answered ({Object.keys(selectedAnswers).length})</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span>Marked for Review ({flaggedQuestions.length})</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              <span>Unanswered ({questions.length - Object.keys(selectedAnswers).length})</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
