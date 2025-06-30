import Image from 'next/image';
import { Image as Img } from 'lucide-react';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { url } from 'inspector';

// Enhanced project content array with all projects
const PROJECT_CONTENT = [
  {
    title: 'Dent Master',
    description:
      'Dent Master is a scalable SaaS AI solution tailored for dental practices, designed to centralize appointment scheduling, patient records, and financial tracking into one smart and intuitive platform.We are starting with dentists, but our long-term vision is to evolve into a full healthcare CRM — providing clinics and private practices with digital infrastructure to manage their business and deliver better care.With an MVP focused on real user feedback, we are building a tool that solves everyday pain points and grows with the needs of modern healthcare professionals.',

    techStack: [
      'Next.js',
      'TailwindCSS',
      'Shadcn-ui',
      'TypeScript',
      'OpenAI API',
      'Vercel AI SDK',
      'Python',
      'Django',
      'PostgreSQL',
      'Digital Ocean',
    ],
    date: '2025',
    links: [
      {
        name: 'website',
        url: 'https://site.dentmaster.app',
      },  
      {
        name: 'Pitch Idea',
        url: 'https://www.youtube.com/watch?v=FZT5yTd-CgY&t=2s',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/company/dentmaster-saas',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/dentmaster.app/',
      }
    ],
    images: [
      {
        src: '/SC.png',
        alt: 'Dent Master Dashboard',
      },
      {
        src: '/dm-finance.png',
        alt: 'Dent Master Finance Page',
      },
      {
        src: '/dm-expenses.png',
        alt: 'Dent Master Expenses Page',
      },
      {
        src: '/dm-kalendar.png',
        alt: 'Dent Master Calendar Page',
      },
      {
        src: '/dm-klijenti.png',
        alt: 'Dent Master All Clients Page',
      },
      {
        src: '/dm-termin.png',
        alt: 'Dent Master Appointment Page',
      },
      {
        src: '/dm-karton.png',
        alt: 'Dent Master Patient Record Page',
      },
    ],
  },
  {
    title: 'Fuzzie',
    description:
      "Fuzzie is a Zapier-style automation platform with a visual drag-and-drop workflow builder, where I implemented backend logic using Prisma, authentication with Clerk, NeonTech as the database, and integrated tools like Slack, Discord, Notion, and Google Drive.",
    techStack: [
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'shadcn/ui',
  'Clerk',
  'Neon (PostgreSQL)',
  'Prisma',
  'Stripe',
  'Uploadcare',
  'Bun',
  'Ngrok',
  'React Flow',
  'Zod',
  'React Hook Form',
  'Lucide Icons'
],
    date: '2024',
    links: [
      
      {
        name: 'github',
        url: 'https://github.com/aminnicevic04/Automation-Builder-Fuzzie',
      },
    ],
    images: [
      {
        src: '/f-1.png',
        alt: 'SaaS Automation Builder - Fuzzie',
      },
      {
        src: '/f-2.png',
        alt: 'SaaS Automation Builder - Fuzzie',
      },
      {
        src: '/f-3.png',
        alt: 'SaaS Automation Builder - Fuzzie',
      },
      {
        src: '/f-4.png',
        alt: 'SaaS Automation Builder - Fuzzie',
      },
      {
        src: '/f-5.png',
        alt: 'SaaS Automation Builder - Fuzzie',
      },
      {
        src: '/f-6.png',
        alt: 'SaaS Automation Builder - Fuzzie',
      },
    ],
  },
  {
    title: 'Internet of Things (Energy Saving) APP',
    description:
      "Internet of Things (Energy Saving) is a full stack web application built in just 24 hours during a hackathon. The app allows users to monitor, store, and optimize energy usage from IoT-connected devices in real-time. It features interactive data visualization, cloud-based storage, and a responsive UI.",
    techStack: [
  'React.js',
  'Next.js',
  'Chart.js',
  'Node.js',
  'MongoDB',
  'Mongoose'
],
    date: '2023',
    links: [
      
      {
        name: 'github',
        url: 'https://github.com/aminnicevic04/Hackathon-App?tab=readme-ov-file',
      },
    ],
    images: [
      {
        src: '/h1-1.png',
        alt: 'Landing Page of Defai',
      },
      {
        src: '/defai2.png',
        alt: 'Confirmation popup of Defai',
      },
      {
        src: '/defai3.png',
        alt: 'Chatbot of Defai',
      },
      {
        src: '/defai4.jpeg',
        alt: 'Winner team',
      },
    ],
  },
  {
    title: 'Learnify - Online Learning Platform',
    description:
      'An advanced full-stack e-learning platform built in under 24 hours during a hackathon, designed to empower both instructors and students with a seamless and interactive online learning experience.  Built as part of a winning hackathon project, this platform balances design, scalability, and functionality under tight deadlines.',
    techStack: [
  'React.js',
  'Next.js (v14)',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Mongoose'
],
    date: '2024',
    links: [
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/posts/amin-nicevic_hackathonwinners-uninphackathon-activity-7190400990037078017-AL-e?utm_source=share&utm_medium=member_desktop',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/aminnicevic04/Hackathon-winner-project',
      },
    ],
    
  },
  {
    title: 'Troškovnik - Finance Tracker',
    description:
      "A financial management application for small and medium-sized local businesses. With additional tools to help with marketing and additional reminders and tasks. Including a modern dashboard with all the statistics.",
    techStack: [
      'Next.js',
      'TailwindCSS',
      'TypeScript',
      'Prisma',
      'Neon tech (PostgreSQL)',
    ],
    date: '2024',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/aminnicevic04/Finance-App',
      },
      
    ],
    
  },
  {
    title: 'Countdown Game',
    description:
      "This is an funy web predict/reaction game made in React. In this project I practise portals and refs.",
    techStack: [ 'React'],
    date: '2023',
    links: [
      {
        name: 'Website',
        url: 'https://countdown-game-react.vercel.app',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/aminnicevic04/Countdown-Game-React',
      },
    ],
    images: [
      {
        src: '/g-1.png',
        alt: 'Old Portfolio landing page',
      },
      
    ],
    
  },
  {
    title: 'Global news hub',
    description:
      "Global news hub is a website that provides the latest news at any time, taking it from the wall street journal. filters | search | pagination | responsive",
    techStack: ['C', 'Unix', 'Bash'],
    date: '2023',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/aminnicevic04/newsApp-React',
      },
    ],
    
  },
  
  
];

// Define interface for project prop
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
                <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
                >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Main data export with updated content
export const data = [
  {
    category: 'SaaS Platform',
    title: 'Dent Master',
    src: '/3.png', 
    content: <ProjectContent project={{ title: 'Dent Master' }} />,
  },
  {
    category: 'Automation Platform',
    title: 'Fuzzie',
    src: '/f-1.png', 
    content: <ProjectContent project={{ title: 'Fuzzie' }} />,
  },
  {
    category: 'Hackathon Project',
    title: 'Internet of Things (Energy Saving) APP',
    src: '/h1-1.png', 
    content: (
      <ProjectContent
        project={{ title: 'Internet of Things (Energy Saving) APP' }}
      />
    ),
  },
  {
    category: 'Hackathon Winner',
    title: 'Learnify - Online Learning Platform',
    src: '/2.png', 
    content: (
      <ProjectContent project={{ title: 'Learnify - Online Learning Platform' }} />
    ),
  },
  {
    category: 'Finance App',
    title: 'Troškovnik - Finance Tracker',
    src: '/5.png',
    content: <ProjectContent project={{ title: 'Troškovnik - Finance Tracker' }} />,
  },
  {
    category: 'Web Game',
    title: 'Countdown Game',
    src: '/4.png', 
    content: <ProjectContent project={{ title: 'Countdown Game' }} />,
  },
  {
    category: 'Web Development',
    title: 'Global news hub',
    src: '/1.png', 
    content: <ProjectContent project={{ title: 'Global news hub' }} />,
  },
];