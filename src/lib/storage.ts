export type TalentScore = {
  talent: string;
  score: number;
}

const storage = {
  getItem: (key: string): string | null => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key);
    }
    return null;
  },

  setItem: (key: string, value: string): void => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, value);
    }
  },

  getTalents: (): TalentScore[] => {
    const talentsJson = storage.getItem('talents');
    if (!talentsJson) {
      return [];
    }
    try {
      const talents = JSON.parse(talentsJson);
      if (Array.isArray(talents) && talents.every(t => typeof t.talent === 'string' && typeof t.score === 'number')) {
        return talents;
      }
    } catch (error) {
      console.error('Error parsing talents:', error);
    }
    return [];
  },

  setTalents: (talents: TalentScore[]): void => {
    storage.setItem('talents', JSON.stringify(talents));
  },

  setFavoriteSubjects: (subjects: string[]): void => {
    storage.setItem('favoriteSubjects', JSON.stringify(subjects));
  },

  getFavoriteSubjects: (): string[] => {
    const subjectsJson = storage.getItem('favoriteSubjects');
    if (!subjectsJson) {
      return [];
    }
    try {
      const subjects = JSON.parse(subjectsJson);
      if (Array.isArray(subjects) && subjects.every(s => typeof s === 'string')) {
        return subjects;
      }
    } catch (error) {
      console.error('Error parsing favorite subjects:', error);
    }
    return [];
  },

  // New methods
  getCurrentStatus: (): string => {
    const status = storage.getItem('currentStatus');
    return status || 'Other';
  },

  setCurrentStatus: (status: string): void => {
    storage.setItem('currentStatus', status);
  },

  getInterests: (): string[] => {
    const interestsJson = storage.getItem('interests');
    if (!interestsJson) {
      return [];
    }
    try {
      const interests = JSON.parse(interestsJson);
      if (Array.isArray(interests) && interests.every(i => typeof i === 'string')) {
        return interests;
      }
    } catch (error) {
      console.error('Error parsing interests:', error);
    }
    return [];
  },

  setInterests: (interests: string[]): void => {
    storage.setItem('interests', JSON.stringify(interests));
  }
};

export default storage;