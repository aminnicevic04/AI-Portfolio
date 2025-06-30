import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Gives a summary of what kind of job I'm looking for, plus my contact info and  how to reach me. Use this tool when the user asks about my job search or how to contact me for opportunities.",
  parameters: z.object({}),
  execute: async () => {
    return `I'm actively looking for a job! Here’s what you should know 👇

- 👨‍💻 **Role**: I'm seeking a **Frontend Developer** position.
- 🌍 **Location**: I'm based in Novi Pazar, Serbia, and I'm open to **remote work** or **relocation** for the right opportunity.
- 🚀 **Focus**: I'm passionate about building user-focused SaaS applications, MVPs, and scalable frontend systems.
- 🛠️ **Stack**: My main tools are **React, Next.js, TypeScript, and Tailwind CSS**. I also have experience with Node.js, Prisma, and the Vercel AI SDK.
- ✅ **What I bring**: I have hands-on experience leading frontend development at **Dent Master**, building a full SaaS product from scratch. I've also won hackathons, including building a complete online learning platform, IoT App and AI Agent Marketplace. I'm a fast learner who is driven and focused on shipping real products.
- 🔥 I'm ready to bring my energy and skills to a dynamic team and make a real impact.

📬 **Contact me** via:
- Email: aminnicevic@gmail.com
- LinkedIn: https://www.linkedin.com/in/amin-nicevic
- GitHub: https://github.com/aminnicevic04

Let's build something great together! 🚀
    `;
  },
});
