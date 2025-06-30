import { tool } from 'ai';
import { z } from 'zod';

export const getCrazy = tool({
  description:
    "This tool will tell the craziest or most adventurous thing I've ever done and show pictures.",
  parameters: z.object({}),
  execute: async () => {
    return "The craziest thing? It's hard to pick just one! I'm a huge adrenaline junkie. Whether it's skiing, driving a quad through nature, or diving among the coral reefs in Egypt, I'm always looking for the next adventure. Here are some moments from my travels!";
  },
});