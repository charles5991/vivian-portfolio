import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Vivian Sylvia Ting",
  initials: "DV",
  // url: "https://dillion.io",
  location: "Kuala Lumpur, MY",
  locationLink: "https://www.google.com/maps/place/Kuala+Lumpur,+Federal+Territory+of+Kuala+Lumpur/@3.1385059,101.6869895,12z/data=!3m1!4b1!4m6!3m5!1s0x31cc362abd08e7d3:0x232e1ff540d86c99!8m2!3d3.1319197!4d101.6840589!16zL20vMDQ5ZDE?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D",
  description:
    "Logical and hardworking mathematics lover with a passion for data and analysis. I possess communication skills and always ensure that the work completed on time and to a high standard.",
  summary:
    "Seeking a challenging role that involve data engineering, cloud-based data solutions, and the integration of machine learning and AI to drive insightful decision-making and innovative solutions.",
  avatarUrl: "/me.png",
  skills: [
    "R",
    "Python",
    "SQL",
    "PySpark",
    "RStudio",
    "Azure",
    "AWS",
    "CDatabricks",
    "Snowflake",
    "Power BI",
    "MS Fabric",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      // GitHub: {
      //   name: "GitHub",
      //   url: "https://dub.sh/dillion-github",
      //   icon: Icons.github,

      //   navbar: true,
      // },
      LinkedIn: {
        name: "LinkedIn",
        url: "www.linkedin.com/in/vivian-sylvia-ting",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "https://mail.google.com/mail/?view=cm&fs=1&to=viviansylvia98@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Plaza Premium Group",
      href: "https://www.plazapremiumgroup.com/",
      badges: [],
      location: "Kuala Lumpur",
      title: "Data Engineer",
      logoUrl: "/ppg.png",
      start: "Feb 2023",
      end: "Present",
      description:
      `Manage cloud-based enterprise data warehouse in Snowflake.
      Design data models for BI and analytics purposes using Power BI.
      Design and develop ETL pipelines that integrate data from Data Lake using Power Automate and AWS for daily runs.
      Perform data transformation from raw data to clean data using Databricks and Snowflake.
      Implement machine learning to support decision-making using R and Python.`
    },
    {
      company: "Centre for Social Infrastructure Research (CSIR)",
      badges: [],
      href: "https://www.facebook.com/csirmalaysia",
      location: "Kuala Lumpur",
      title: "Research Trainee",
      logoUrl: "/csir.png",
      start: "Jul 2021",
      end: "Sept 2021",
      description:
        "COVID-19 data collection and data entry. Demographics catchment analysis by using Excel. Market study in certain areas in Selangor. Support in developing a health-screening platform."
    },
  ],
  education: [
    {
      school: "University Technology Malaysia",
      href: "https://www.utm.my/",
      degree: " Bachelor of Science (Mathematics), first-class honors with CGPA 3.81.",
      logoUrl: "/utm.png",
      start: "2018",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Rummy",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With Bracelet enhancements, the game becomes more engaging and interactive. Players can now easily track their scores, compare them with others, and even challenge their friends to a game of Rummy.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "一条龙",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Very easy to archieve after 11PM",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "MUET",
      dates: "May 2017 - May 2022",
      location: "Bloomsvale",
      description:
        "band 4",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Esports Uni-League 2020",
      dates: "Oct 2020 - Nov 2020",
      location: "Bloomsvale",
      description:
        "Represent UTM, leader of HOK team and achieved 3rd runner up.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "The Covid-19 in My Eyes",
      dates: "Dec 2020",
      location: "Bloomsvale",
      description:
        "Photo shooting competition, event organizer.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "Simon Marais Mathematics Competition 2020",
      dates: "Oct2020",
      location: "Kuala Lumpur",
      description:
        "Represent UTM participated in international mathematics competition.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        // {
        //   title: "Github",
        //   icon: <Icons.github className="h-4 w-4" />,
        //   href: "https://github.com/cryptotrends/cryptotrends",
        // },
      ],
    },
    {
      title: "Xiamen University Malaysia Mathematics Competition",
      dates: "June 2019",
      location: "Bloomsvale",
      description:
        "Represent UTM participated in Olympiad Mathematics Competition.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
      ],
    },
    {
      title: "Sustainable Entrepreneurial Mindset Showcase (SEMS)",
      dates: "Apr, 2019",
      location: "Waterloo, Ontario",
      description:
        "Best category award in Clean Water and Sanitation.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
      ],
    },
    {
      title: "International Competitions and Assessment for Schools (UNSW Global Australia)",
      dates: "2016",
      location: "Australia",
      description:
        "Top13% of Form 5 & Lower 6 participants in Malaysia, achieved Credit.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
      ],
    },
    {
      title: "STPM",
      dates: "2017",
      location: "Toronto, Ontario",
      description:
        "CGPA 3.33, A in Mathematics (T), B in Physics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
      ],
    },
    
  ],
} as const;
