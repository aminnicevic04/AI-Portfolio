import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Amin Nicevic. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  async execute() {
    return {
      presentation:
        "That's the professional summary! Here are a few fun facts you might not know: I'm a former basketball player who traded the court for a keyboard, I've won multiple hackathons, and I'm a huge adrenaline junkie—always looking for the next adventure. What are you curious to explore next? My projects, skills, or maybe my crazy adventures?",
    };
  },
});
