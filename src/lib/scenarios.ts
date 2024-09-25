export type Talent = string;
export type ScoreMapping = Record<Talent, number>;
export type Answer = {
  text: string;
  positiveScores: ScoreMapping;
  negativeScores: ScoreMapping;
};
export type Scenario = {
  question: string;
  answers: Answer[];
};

export const scenarios: Scenario[] = [
  {
    question: "Your friend group has a problem deciding on an activity for the weekend, and the discussion is getting heated. What do you do?",
    answers: [
      {
        text: "Analyze the suggestions and see which suits the group best",
        positiveScores: { "Analytical Thinking": 3, "Problem-Solving Competence": 2, "Context Awareness": 1 },
        negativeScores: { "Initiative": -2, "Leadership Competence": -1 }
      },
      {
        text: "Find a compromise that makes everyone happy",
        positiveScores: { "Empathy": 3, "Conflict Resolution Competence": 2, "Negotiation Skills": 1 },
        negativeScores: { "Competitive Spirit": -3, "Decisiveness": -2 }
      },
      {
        text: "Stay patient and wait until the discussion calms down",
        positiveScores: { "Patience": 3, "Sense of Responsibility": 2, "Connectedness": 1 },
        negativeScores: { "Initiative": -3, "Problem-Solving Competence": -2 }
      },
      {
        text: "Take initiative to suggest a new activity to take away decision making",
        positiveScores: { "Initiative": 3, "Leadership Competence": 2, "Decisiveness": 1 },
        negativeScores: { "Flexibility": -3, "Conflict Resolution Competence": -2 }
      }
    ]
  },
  // Add the rest of your scenarios here...
];
