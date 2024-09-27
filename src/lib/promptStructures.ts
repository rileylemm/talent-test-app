// src/lib/promptStructures.ts

export interface PromptData {
  topTalents: { talent: string; score: number }[];
  lowestTalents: { talent: string; score: number }[];
  interests: string[];
  currentStatus: string;
  favoriteSubjects: string[];
}

export function createPrompt(data: PromptData): string {
  // Add null checks before using map
  const topTalentsString = data.topTalents?.map((t, i) => `${i + 1}. ${t.talent} - Score: ${t.score}`).join('\n') || 'No top talents data';
  const lowestTalentsString = data.lowestTalents?.map((t, i) => `${i + 1}. ${t.talent} - Score: ${t.score}`).join('\n') || 'No lowest talents data';
  const interestsString = data.interests?.map(i => `- ${i}`).join('\n') || 'No interests data';
  const favoriteSubjectsString = data.favoriteSubjects?.map(s => `- ${s}`).join('\n') || 'No favorite subjects data';

  const prompt = `
Based on the following weighted information about a user, provide career and education suggestions:

Top Talents (Weight: 35%):
${topTalentsString}

Lowest Talents (Weight: 10%):
${lowestTalentsString}

Interests/Hobbies (Weight: 20%):
${interestsString}

Current Status (Weight: 15%): ${data.currentStatus || 'No current status data'}

Favorite Subjects (Weight: 20%):
${favoriteSubjectsString}

Please provide:
1. 3-5 potential career fields (aligned with top talents and interests)
2. 5-7 specific job suggestions (considering both top and lowest talents)
3. 2-3 education path recommendations (based on favorite subjects and current status)
4. 4-5 skills to develop (focusing on improving lowest talents that are relevant to suggested careers)

For each suggestion, please provide a brief explanation of why it's recommended based on the user's profile.

Ensure the suggestions are tailored to the user's talents (both strengths and areas for improvement), interests, favorite subjects, and current status. Consider the weighted importance of each factor in your recommendations.

Please format your response in Markdown, using headers for each section.
`;

  return prompt;
}