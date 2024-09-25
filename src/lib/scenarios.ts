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
  {
    question: "You are leading a project at work, and your team is struggling to meet deadlines. There's pressure from management to deliver on time, but your team members are feeling overwhelmed. What do you do?",
    answers: [
      {
        text: "Break down the project into smaller, manageable tasks and delegate them to the team",
        positiveScores: { "Organizational Talent": 3, "Goal Orientation": 2, "Leadership Competence": 1 },
        negativeScores: { "Flexibility": -2, "Creativity": -1 }
      },
      {
        text: "Motivate the team to push through the deadline stress and deliver results",
        positiveScores: { "Motivational Ability": 3, "Self-Confidence": 2, "Decisiveness": 1 },
        negativeScores: { "Empathy": -3, "Patience": -2 }
      },
      {
        text: "Negotiate with management for an extension to allow the team some breathing room",
        positiveScores: { "Negotiation Skills": 3, "Communication Skills": 2, "Sense of Responsibility": 1 },
        negativeScores: { "Competitive Spirit": -3, "Risk-Taking": -2 }
      },
      {
        text: "Come up with a creative solution or new process to speed up the project",
        positiveScores: { "Creativity": 3, "Problem-Solving Competence": 2, "Technical Understanding": 1 },
        negativeScores: { "Discipline": -3, "Reliability": -2 }
      }
    ]
  },
  {
    question: "You're working on a team project, and one of your team members is consistently underperforming, which is holding up progress. What do you do?",
    answers: [
      {
        text: "Confront the team member directly and ask them to step up their game",
        positiveScores: { "Conflict Resolution Competence": 3, "Decisiveness": 2, "Leadership Competence": 1 },
        negativeScores: { "Empathy": -3, "Patience": -2 }
      },
      {
        text: "Take on the extra work yourself to ensure the project moves forward",
        positiveScores: { "Sense of Responsibility": 3, "Discipline": 2, "Reliability": 1 },
        negativeScores: { "Delegation": -3, "Leadership Competence": -2 }
      },
      {
        text: "Talk to the team member privately to understand their struggles and offer support",
        positiveScores: { "Empathy": 3, "Communication Skills": 2, "Helpfulness": 1 },
        negativeScores: { "Assertiveness": -3, "Goal Orientation": -2 }
      },
      {
        text: "Escalate the issue to your manager to handle the underperformance",
        positiveScores: { "Strategic Planning": 3, "Problem-Solving Competence": 2, "Conflict Avoidance": 1 },
        negativeScores: { "Initiative": -3, "Negotiation Skills": -2 }
      }
    ]
  },
  {
    question: "You and your friends are thinking about starting a new hobby together, but no one is sure where to begin. What do you do?",
    answers: [
      {
        text: "Research different hobby ideas thoroughly and present the best options to the group",
        positiveScores: { "Information Gathering": 3, "Analytical Thinking": 2, "Communication Skills": 1 },
        negativeScores: { "Spontaneity": -3, "Flexibility": -2 }
      },
      {
        text: "Suggest starting something fun right away, without worrying too much about planning",
        positiveScores: { "Creativity": 3, "Flexibility": 2, "Initiative": 1 },
        negativeScores: { "Organizational Talent": -3, "Discipline": -2 }
      },
      {
        text: "Encourage everyone to discuss their interests and see where there's overlap",
        positiveScores: { "Empathy": 3, "Relationship Building": 2, "Conflict Resolution Competence": 1 },
        negativeScores: { "Self-Centeredness": -3, "Decisiveness": -2 }
      },
      {
        text: "Wait for the others to come up with ideas and offer support once a decision is made",
        positiveScores: { "Patience": 3, "Team Orientation": 2, "Sense of Responsibility": 1 },
        negativeScores: { "Initiative": -3, "Leadership Competence": -2 }
      }
    ]
  },
  {
    question: "You're on a hiking trip with friends when one of them injures their ankle. What do you do?",
    answers: [
      {
        text: "Take charge, assess the injury, and make a plan for how to get your friend safely back to the starting point",
        positiveScores: { "Leadership Competence": 3, "Problem-Solving Competence": 2, "Sense of Responsibility": 1 },
        negativeScores: { "Flexibility": -2, "Risk-Taking": -1 }
      },
      {
        text: "Suggest that you split up, with some people going ahead for help while the rest stay behind with the injured person",
        positiveScores: { "Strategic Planning": 3, "Team Orientation": 2, "Conflict Resolution Competence": 1 },
        negativeScores: { "Initiative": -3, "Leadership Competence": -2 }
      },
      {
        text: "Stay with the injured friend to comfort them while someone else handles getting help",
        positiveScores: { "Empathy": 3, "Helpfulness": 2, "Communication Skills": 1 },
        negativeScores: { "Decisiveness": -3, "Initiative": -2 }
      },
      {
        text: "Suggest waiting a bit longer to see if the injury improves before deciding what to do next",
        positiveScores: { "Patience": 3, "Deliberation": 2, "Positive Thinking": 1 },
        negativeScores: { "Problem-Solving Competence": -3, "Risk-Taking": -2 }
      }
    ]
  },
  {
    question: "You're working on a team project and have a clear solution in mind. However, a teammate has proposed a different idea that conflicts with yours. What do you do?",
    answers: [
      {
        text: "Explain your solution in detail, backing it up with logic and facts to persuade the team",
        positiveScores: { "Analytical Thinking": 3, "Communication Skills": 2, "Self-Confidence": 1 },
        negativeScores: { "Flexibility": -3, "Empathy": -2 }
      },
      {
        text: "Find a way to combine both ideas to create a compromise that satisfies everyone",
        positiveScores: { "Conflict Resolution Competence": 3, "Negotiation Skills": 2, "Team Orientation": 1 },
        negativeScores: { "Decisiveness": -3, "Competitive Spirit": -2 }
      },
      {
        text: "Stay quiet for now and let the team decide which idea is better through discussion",
        positiveScores: { "Patience": 3, "Deliberation": 2, "Context Awareness": 1 },
        negativeScores: { "Initiative": -3, "Leadership Competence": -2 }
      },
      {
        text: "Support your teammate's idea to maintain harmony within the group, even though you believe your solution is better",
        positiveScores: { "Empathy": 3, "Relationship Building": 2, "Sense of Justice": 1 },
        negativeScores: { "Competitive Spirit": -3, "Self-Confidence": -2 }
      }
    ]
  },
  {
    question: "You're in the middle of studying for an important exam, but your friends invite you on a spontaneous weekend trip. What do you do?",
    answers: [
      {
        text: "Decline the trip and stick to your study schedule to ensure you're fully prepared for the exam",
        positiveScores: { "Discipline": 3, "Goal Orientation": 2, "Sense of Responsibility": 1 },
        negativeScores: { "Flexibility": -3, "Spontaneity": -2 }
      },
      {
        text: "Go on the trip, trusting that you can catch up on your studying when you return",
        positiveScores: { "Flexibility": 3, "Positive Thinking": 2, "Risk-Taking": 1 },
        negativeScores: { "Discipline": -3, "Reliability": -2 }
      },
      {
        text: "Ask your friends if you can compromise by studying during the trip, so you can have the best of both worlds",
        positiveScores: { "Negotiation Skills": 3, "Organizational Talent": 2, "Initiative": 1 },
        negativeScores: { "Goal Orientation": -3, "Competitive Spirit": -2 }
      },
      {
        text: "Suggest that you study now and meet up with your friends later, balancing both priorities",
        positiveScores: { "Deliberation": 3, "Problem-Solving Competence": 2, "Context Awareness": 1 },
        negativeScores: { "Spontaneity": -3, "Initiative": -2 }
      }
    ]
  },
  {
    question: "You hear about a new, exciting topic in school, but it's not part of your regular curriculum. What do you do?",
    answers: [
      {
        text: "Do your own research in your free time to learn more about the topic",
        positiveScores: { "Curiosity": 3, "Information Gathering": 2, "Initiative": 1 },
        negativeScores: { "Discipline": -3, "Time Management": -2 }
      },
      {
        text: "Discuss the topic with your teacher and ask if there's a way to incorporate it into classwork or an assignment",
        positiveScores: { "Communication Skills": 3, "Negotiation Skills": 2, "Problem-Solving Competence": 1 },
        negativeScores: { "Self-Sufficiency": -3, "Patience": -2 }
      },
      {
        text: "Let it go for now, knowing you need to focus on the subjects already in your curriculum",
        positiveScores: { "Discipline": 3, "Goal Orientation": 2, "Sense of Responsibility": 1 },
        negativeScores: { "Curiosity": -3, "Initiative": -2 }
      },
      {
        text: "Tell your friends about it and see if they are interested in learning about it together outside of class",
        positiveScores: { "Networking": 3, "Relationship Building": 2, "Team Orientation": 1 },
        negativeScores: { "Self-Confidence": -3, "Competitive Spirit": -2 }
      }
    ]
  },
  {
    question: "You have 10 minutes left to finish a presentation when your computer fails. What do you do?",
    answers: [
      {
        text: "Try to troubleshoot and fix the computer issue as quickly as possible",
        positiveScores: { "Problem-Solving Competence": 3, "Technical Understanding": 2, "Initiative": 1 },
        negativeScores: { "Time Management": -3, "Flexibility": -2 }
      },
      {
        text: "Switch to another device, even if it means sacrificing some of the work you've already done, to ensure you finish on time",
        positiveScores: { "Flexibility": 3, "Decisiveness": 2, "Goal Orientation": 1 },
        negativeScores: { "Perfectionism": -3, "Emotional Reactivity": -2 }
      },
      {
        text: "Ask a colleague for help to get the presentation done on time",
        positiveScores: { "Team Orientation": 3, "Communication Skills": 2, "Helpfulness": 1 },
        negativeScores: { "Self-Sufficiency": -3, "Risk-Taking": -2 }
      },
      {
        text: "Improvise and prepare to present what you have without the full presentation completed",
        positiveScores: { "Positive Thinking": 3, "Creativity": 2, "Self-Confidence": 1 },
        negativeScores: { "Perfectionism": -3, "Organization": -2 }
      }
    ]
  },
  {
    question: "You're working on a hands-on project that involves building a physical product. One of your teammates is struggling to put their part together correctly. What do you do?",
    answers: [
      {
        text: "Take over their work and do it yourself to ensure the quality is up to standard",
        positiveScores: { "Craftsmanship": 3, "Goal Orientation": 2, "Sense of Responsibility": 1 },
        negativeScores: { "Delegation": -3, "Team Orientation": -2 }
      },
      {
        text: "Teach them how to complete the task correctly and work through the problems together",
        positiveScores: { "Helpfulness": 3, "Communication Skills": 2, "Leadership Competence": 1 },
        negativeScores: { "Speed/Time Efficiency": -3, "Risk-Taking": -2 }
      },
      {
        text: "Suggest they focus on something else they're good at while you focus on the technical aspect",
        positiveScores: { "Craftsmanship": 3, "Technical Understanding": 2, "Delegation": 1 },
        negativeScores: { "Team Orientation": -3, "Communication Skills": -2 }
      },
      {
        text: "Allow them to figure it out themselves, giving them the chance to grow through trial and error",
        positiveScores: { "Patience": 3, "Curiosity": 2, "Sense of Justice": 1 },
        negativeScores: { "Sense of Responsibility": -3, "Deliberation": -2 }
      }
    ]
  },
  {
    question: "Your company is running a competition for the most innovative sales pitch. You've been chosen to participate. How do you approach it?",
    answers: [
      {
        text: "Develop a creative and unconventional pitch to make your idea stand out from the rest",
        positiveScores: { "Creativity": 3, "Sales Talent": 2, "Risk-Taking": 1 },
        negativeScores: { "Discipline": -3, "Organizational Talent": -2 }
      },
      {
        text: "Research past winning pitches and craft your idea based on what's been successful before",
        positiveScores: { "Information Gathering": 3, "Sales Talent": 2, "Curiosity": 1 },
        negativeScores: { "Creativity": -3, "Risk-Taking": -2 }
      },
      {
        text: "Work with your team to combine your talents and deliver a group effort that covers all angles",
        positiveScores: { "Team Orientation": 3, "Networking": 2, "Leadership Competence": 1 },
        negativeScores: { "Individualization": -3, "Competitive Spirit": -2 }
      },
      {
        text: "Make a simple, clear pitch that relies on a strong value proposition rather than flair",
        positiveScores: { "Self-Confidence": 3, "Communication Skills": 2, "Sense of Justice": 1 },
        negativeScores: { "Risk-Taking": -3, "Creativity": -2 }
      }
    ]
  },
  {
    question: "You're asked to lead a volunteer group for a local cause, but it conflicts with your personal beliefs. What do you do?",
    answers: [
      {
        text: "Politely decline, explaining that the cause doesn't align with your values",
        positiveScores: { "Belief": 3, "Decisiveness": 2, "Communication Skills": 1 },
        negativeScores: { "Flexibility": -3, "Relationship Building": -2 }
      },
      {
        text: "Take on the role, but use it as an opportunity to highlight the aspects of the cause that do align with your beliefs",
        positiveScores: { "Belief": 3, "Context Awareness": 2, "Strategic Planning": 1 },
        negativeScores: { "Self-Confidence": -3, "Initiative": -2 }
      },
      {
        text: "Agree to help lead but delegate more of the work to other volunteers, letting them steer the project",
        positiveScores: { "Team Orientation": 3, "Delegation": 2, "Flexibility": 1 },
        negativeScores: { "Belief": -3, "Leadership Competence": -2 }
      },
      {
        text: "Use the opportunity to open a dialogue with the group, raising constructive questions about how the cause could better align with different beliefs",
        positiveScores: { "Sense of Justice": 3, "Communication Skills": 2, "Conflict Resolution Competence": 1 },
        negativeScores: { "Decisiveness": -3, "Belief": -2 }
      }
    ]
  },
  {
    question: "You're tasked with creating a custom-built item for a client, but they're unclear about what they really want, and time is running short. What do you do?",
    answers: [
      {
        text: "Rely on your technical skills to create something based on the general information they provided, trusting your expertise",
        positiveScores: { "Craftsmanship": 3, "Self-Confidence": 2, "Problem-Solving Competence": 1 },
        negativeScores: { "Flexibility": -3, "Communication Skills": -2 }
      },
      {
        text: "Reach out to the client for further clarification, even though it might delay the project",
        positiveScores: { "Sales Talent": 3, "Communication Skills": 2, "Patience": 1 },
        negativeScores: { "Risk-Taking": -3, "Initiative": -2 }
      },
      {
        text: "Use your creativity to design something unique and hope the client will like the surprise",
        positiveScores: { "Creativity": 3, "Risk-Taking": 2, "Individualization": 1 },
        negativeScores: { "Sense of Responsibility": -3, "Organizational Talent": -2 }
      },
      {
        text: "Ask for help from a colleague who has more experience working with clients like this",
        positiveScores: { "Networking": 3, "Team Orientation": 2, "Helpfulness": 1 },
        negativeScores: { "Craftsmanship": -3, "Self-Confidence": -2 }
      }
    ]
  },
  {
    question: "You're working on a project with a diverse group, and some members feel left out because their contributions haven't been fully recognized. How do you handle this?",
    answers: [
      {
        text: "Acknowledge everyone's contributions equally and make sure all team members feel valued",
        positiveScores: { "Individualization": 3, "Sense of Justice": 2, "Relationship Building": 1 },
        negativeScores: { "Competitive Spirit": -3, "Risk-Taking": -2 }
      },
      {
        text: "Organize a group discussion to better understand how everyone feels and to address concerns directly",
        positiveScores: { "Communication Skills": 3, "Conflict Resolution Competence": 2, "Deliberation": 1 },
        negativeScores: { "Decisiveness": -3, "Goal Orientation": -2 }
      },
      {
        text: "Encourage the team to focus on the bigger picture and not get caught up in individual recognition",
        positiveScores: { "Significance": 3, "Positive Thinking": 2, "Leadership Competence": 1 },
        negativeScores: { "Individualization": -3, "Sense of Justice": -2 }
      },
      {
        text: "Speak privately with those who feel left out to address their concerns and offer support",
        positiveScores: { "Empathy": 3, "Sense of Justice": 2, "Connectedness": 1 },
        negativeScores: { "Competitive Spirit": -3, "Leadership Competence": -2 }
      }
    ]
  },
  {
    question: "You've been invited to a prestigious event where you'll meet several influential people in your field. How do you approach the opportunity?",
    answers: [
      {
        text: "Network with as many people as possible, aiming to build lasting connections",
        positiveScores: { "Networking": 3, "Sales Talent": 2, "Communication Skills": 1 },
        negativeScores: { "Individualization": -3, "Significance": -2 }
      },
      {
        text: "Focus on talking to a few key people who align with your interests, even if it means missing out on meeting others",
        positiveScores: { "Individualization": 3, "Strategic Planning": 2, "Deliberation": 1 },
        negativeScores: { "Risk-Taking": -3, "Flexibility": -2 }
      },
      {
        text: "Use the opportunity to promote yourself and your work, ensuring you stand out from the crowd",
        positiveScores: { "Self-Confidence": 3, "Significance": 2, "Competitive Spirit": 1 },
        negativeScores: { "Empathy": -3, "Team Orientation": -2 }
      },
      {
        text: "Take a more passive approach, letting the conversations flow naturally and not pushing your agenda",
        positiveScores: { "Flexibility": 3, "Deliberation": 2, "Connectedness": 1 },
        negativeScores: { "Initiative": -3, "Risk-Taking": -2 }
      }
    ]
  },
  {
    question: "You've been assigned to learn a new skill or technology that you're unfamiliar with for an upcoming project. How do you approach the task?",
    answers: [
      {
        text: "Dive deep into research and self-teach the skill using online resources, determined to master it",
        positiveScores: { "Curiosity": 3, "Technical Understanding": 2, "Self-Confidence": 1 },
        negativeScores: { "Patience": -3, "Risk-Taking": -2 }
      },
      {
        text: "Reach out to someone experienced in the skill and ask them to mentor you through the learning process",
        positiveScores: { "Connectedness": 3, "Context Awareness": 2, "Helpfulness": 1 },
        negativeScores: { "Self-Sufficiency": -3, "Risk-Taking": -2 }
      },
      {
        text: "Explore a different approach to the project that leverages your existing skills instead of learning something new",
        positiveScores: { "Strategic Planning": 3, "Problem-Solving Competence": 2, "Risk-Taking": 1 },
        negativeScores: { "Curiosity": -3, "Technical Understanding": -2 }
      },
      {
        text: "Start with small, manageable parts of the skill and slowly integrate what you learn into the project",
        positiveScores: { "Deliberation": 3, "Patience": 2, "Goal Orientation": 1 },
        negativeScores: { "Initiative": -3, "Creativity": -2 }
      }
    ]
  },
  {
    question: "Your community is organizing an event to raise awareness for a cause, but the cause doesn't fully resonate with your personal beliefs. What do you do?",
    answers: [
      {
        text: "Decline participation, as you feel you cannot support something that doesn't align with your beliefs",
        positiveScores: { "Belief": 3, "Decisiveness": 2, "Self-Confidence": 1 },
        negativeScores: { "Connectedness": -3, "Flexibility": -2 }
      },
      {
        text: "Volunteer to help in a neutral capacity (e.g., logistics), supporting the event while staying true to your beliefs",
        positiveScores: { "Sense of Justice": 3, "Context Awareness": 2, "Organizational Talent": 1 },
        negativeScores: { "Belief": -3, "Initiative": -2 }
      },
      {
        text: "Use the opportunity to discuss your beliefs with the organizers and see if there's a way to incorporate them",
        positiveScores: { "Communication Skills": 3, "Context Awareness": 2, "Conflict Resolution Competence": 1 },
        negativeScores: { "Risk-Taking": -3, "Decisiveness": -2 }
      },
      {
        text: "Participate fully, setting aside your beliefs for the sake of the community",
        positiveScores: { "Connectedness": 3, "Team Orientation": 2, "Positive Thinking": 1 },
        negativeScores: { "Belief": -3, "Self-Confidence": -2 }
      }
    ]
  },
  {
    question: "You're in charge of a high-stakes project, and everything is going well, but you feel like your contributions haven't been fully recognized. How do you address this?",
    answers: [
      {
        text: "Talk to your supervisor and highlight the contributions you've made, asking for formal recognition",
        positiveScores: { "Self-Confidence": 3, "Significance": 2, "Communication Skills": 1 },
        negativeScores: { "Team Orientation": -3, "Patience": -2 }
      },
      {
        text: "Continue working hard and trust that your contributions will be recognized in time without saying anything",
        positiveScores: { "Patience": 3, "Goal Orientation": 2, "Deliberation": 1 },
        negativeScores: { "Significance": -3, "Risk-Taking": -2 }
      },
      {
        text: "Reach out to your peers to ask if they've noticed your contributions and to gather feedback on your performance",
        positiveScores: { "Networking": 3, "Connectedness": 2, "Relationship Building": 1 },
        negativeScores: { "Significance": -3, "Self-Confidence": -2 }
      },
      {
        text: "Let your work speak for itself, prioritizing the success of the project over personal recognition",
        positiveScores: { "Team Orientation": 3, "Sense of Responsibility": 2, "Positive Thinking": 1 },
        negativeScores: { "Significance": -3, "Competitive Spirit": -2 }
      }
    ]
  },
  {
    question: "You're organizing a group fundraiser, and things aren't going according to plan. You've hit roadblocks with getting donors, but there's still time to make it work. How do you respond?",
    answers: [
      {
        text: "Rework the strategy to target more relevant donors and increase the chance of success",
        positiveScores: { "Negotiation Skills": 3, "Information Gathering": 2, "Goal Orientation": 1 },
        negativeScores: { "Flexibility": -3, "Empathy": -2 }
      },
      {
        text: "Work with your team to brainstorm new ideas and approaches to reach your goal",
        positiveScores: { "Individualization": 3, "Communication Skills": 2, "Creativity": 1 },
        negativeScores: { "Initiative": -3, "Self-Confidence": -2 }
      },
      {
        text: "Stick to the original plan and push harder to execute it better, trusting that it will eventually work",
        positiveScores: { "Sense of Justice": 3, "Craftsmanship": 2, "Discipline": 1 },
        negativeScores: { "Negotiation Skills": -3, "Curiosity": -2 }
      },
      {
        text: "Adapt to the situation by shifting the focus of the fundraiser to something more relevant",
        positiveScores: { "Flexibility": 3, "Problem-Solving Competence": 2, "Risk-Taking": 1 },
        negativeScores: { "Goal Orientation": -3, "Sense of Responsibility": -2 }
      }
    ]
  },
  {
    question: "You've been asked to present a controversial topic in front of a large group of people with differing opinions. How do you approach the presentation?",
    answers: [
      {
        text: "Present the topic objectively, acknowledging different perspectives without pushing your personal view",
        positiveScores: { "Sense of Justice": 3, "Context Awareness": 2, "Belief": 1 },
        negativeScores: { "Self-Confidence": -3, "Decisiveness": -2 }
      },
      {
        text: "Frame the topic in a way that will appeal to as many people as possible, focusing on common ground",
        positiveScores: { "Negotiation Skills": 3, "Communication Skills": 2, "Team Orientation": 1 },
        negativeScores: { "Competitive Spirit": -3, "Individualization": -2 }
      },
      {
        text: "Present your personal viewpoint strongly and make a case for why others should agree with you",
        positiveScores: { "Belief": 3, "Self-Confidence": 2, "Competitive Spirit": 1 },
        negativeScores: { "Flexibility": -3, "Context Awareness": -2 }
      },
      {
        text: "Use humor and creativity to keep the presentation light-hearted, even if it's a serious topic",
        positiveScores: { "Creativity": 3, "Positive Thinking": 2, "Flexibility": 1 },
        negativeScores: { "Sense of Responsibility": -3, "Significance": -2 }
      }
    ]
  },
  {
    question: "You're working on a project with a tight deadline, and you realize you've made a mistake that could jeopardize the entire project. What do you do?",
    answers: [
      {
        text: "Immediately inform your team and supervisor, taking responsibility for the mistake",
        positiveScores: { "Sense of Responsibility": 3, "Communication Skills": 2, "Honesty": 1 },
        negativeScores: { "Self-Confidence": -3, "Risk-Taking": -2 }
      },
      {
        text: "Try to fix the mistake yourself without telling anyone, working overtime if necessary",
        positiveScores: { "Initiative": 3, "Problem-Solving Competence": 2, "Self-Confidence": 1 },
        negativeScores: { "Team Orientation": -3, "Communication Skills": -2 }
      },
      {
        text: "Consult with a trusted colleague to get their advice on how to proceed",
        positiveScores: { "Networking": 3, "Helpfulness": 2, "Team Orientation": 1 },
        negativeScores: { "Self-Confidence": -3, "Initiative": -2 }
      },
      {
        text: "Analyze the impact of the mistake and develop a plan to mitigate its effects before informing others",
        positiveScores: { "Analytical Thinking": 3, "Strategic Planning": 2, "Problem-Solving Competence": 1 },
        negativeScores: { "Communication Skills": -3, "Honesty": -2 }
      }
    ]
  },
  {
    question: "You're leading a team and notice that one member is consistently underperforming. How do you address this situation?",
    answers: [
      {
        text: "Have a private conversation with the team member to understand their challenges and offer support",
        positiveScores: { "Empathy": 3, "Communication Skills": 2, "Leadership Competence": 1 },
        negativeScores: { "Decisiveness": -3, "Competitive Spirit": -2 }
      },
      {
        text: "Reassign tasks to better match the team member's strengths and abilities",
        positiveScores: { "Individualization": 3, "Strategic Planning": 2, "Problem-Solving Competence": 1 },
        negativeScores: { "Sense of Justice": -3, "Competitive Spirit": -2 }
      },
      {
        text: "Address the issue in a team meeting to encourage peer support and collaboration",
        positiveScores: { "Team Orientation": 3, "Communication Skills": 2, "Conflict Resolution Competence": 1 },
        negativeScores: { "Individualization": -3, "Empathy": -2 }
      },
      {
        text: "Set clear performance expectations and implement a formal improvement plan",
        positiveScores: { "Goal Orientation": 3, "Leadership Competence": 2, "Sense of Responsibility": 1 },
        negativeScores: { "Flexibility": -3, "Empathy": -2 }
      }
    ]
  },
  {
    question: "You've been offered a promotion that would require you to relocate to a different city. How do you approach this decision?",
    answers: [
      {
        text: "Research the new city thoroughly and weigh the pros and cons before making a decision",
        positiveScores: { "Analytical Thinking": 3, "Information Gathering": 2, "Deliberation": 1 },
        negativeScores: { "Risk-Taking": -3, "Spontaneity": -2 }
      },
      {
        text: "Accept the promotion immediately, seeing it as a great opportunity for career growth",
        positiveScores: { "Risk-Taking": 3, "Self-Confidence": 2, "Goal Orientation": 1 },
        negativeScores: { "Deliberation": -3, "Connectedness": -2 }
      },
      {
        text: "Discuss the opportunity with family and friends to get their input before deciding",
        positiveScores: { "Connectedness": 3, "Relationship Building": 2, "Empathy": 1 },
        negativeScores: { "Self-Confidence": -3, "Decisiveness": -2 }
      },
      {
        text: "Negotiate with your employer to see if there's a way to take on the new role without relocating",
        positiveScores: { "Negotiation Skills": 3, "Communication Skills": 2, "Problem-Solving Competence": 1 },
        negativeScores: { "Risk-Taking": -3, "Flexibility": -2 }
      }
    ]
  }
];

export const talents: Talent[] = [
  "Analytical Thinking",
  "Problem-Solving Competence",
  "Context Awareness",
  "Initiative",
  "Leadership Competence",
  "Empathy",
  "Conflict Resolution Competence",
  "Negotiation Skills",
  "Competitive Spirit",
  "Decisiveness",
  "Patience",
  "Sense of Responsibility",
  "Connectedness",
  "Flexibility",
  "Organizational Talent",
  "Goal Orientation",
  "Motivational Ability",
  "Self-Confidence",
  "Communication Skills",
  "Creativity",
  "Technical Understanding",
  "Discipline",
  "Reliability",
  "Delegation",
  "Assertiveness",
  "Strategic Planning",
  "Conflict Avoidance",
  "Information Gathering",
  "Spontaneity",
  "Relationship Building",
  "Self-Centeredness",
  "Team Orientation",
  "Positive Thinking",
  "Deliberation",
  "Risk-Taking",
  "Helpfulness",
  "Emotional Reactivity",
  "Self-Sufficiency",
  "Perfectionism",
  "Craftsmanship",
  "Speed/Time Efficiency",
  "Curiosity",
  "Sense of Justice",
  "Sales Talent",
  "Individualization",
  "Belief",
  "Significance",
  "Networking",
  "Honesty"
];
