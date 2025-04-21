import { NavLink, Project, Skill, SocialLink } from "../types";

export const navLinks: NavLink[] = [
  {
    id: "home",
    title: "Home",
    url: "#home",
  },
  {
    id: "about",
    title: "About",
    url: "#about",
  },
  {
    id: "skills",
    title: "Skills",
    url: "#skills",
  },
  {
    id: "projects",
    title: "Projects",
    url: "#projects",
  },
  {
    id: "contact",
    title: "Contact",
    url: "#contact",
  },
];

export const skills: Skill[] = [
  {
    name: "AWS",
    icon: "Cloud",
    color: "text-sky-500",
  },
  {
    name: "Terraform",
    icon: "Boxes",
    color: "text-blue-600",
  },
  {
    name: "Docker",
    icon: "Container",
    color: "text-yellow-500",
  },
  {
    name: "Prometheus",
    icon: "LineChart",
    color: "text-orange-500",
  },
  {
    name: "Grafana",
    icon: "BarChart3",
    color: "text-blue-500",
  },
  {
    name: "Kubernetes",
    icon: "Network",
    color: "text-green-600",
  },
  {
    name: "Tailwind",
    icon: "Wind",
    color: "text-cyan-500",
  },
  {
    name: "Git",
    icon: "GitBranch",
    color: "text-red-500",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Personal Blog",
    description: "A responsive blog built with React and Tailwind CSS featuring dark mode and content management.",
    image: "https://i.pinimg.com/736x/78/e6/18/78e618353a3e1706b00f5bbcbf16c1d0.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    demoLink: "https://example.com",
    sourceLink: "https://github.com",
  },
  {
    id: 2,
    title: "Kubernetes Dashboard",
    description: "An interactive dashboard for tracking sales, inventory, and customer metrics with real-time updates.",
    image: "https://i.pinimg.com/736x/a3/81/fd/a381fd4cb1a7ded90f3c041e7612339d.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "TypeScript", "Chart.js"],
    demoLink: "https://example.com",
    sourceLink: "https://github.com",
  },
  {
    id: 3,
    title: "Weather App",
    description: "A weather application that provides current conditions and forecasts with beautiful visualizations.",
    image: "https://i.pinimg.com/736x/a2/80/5d/a2805dd8ebd0d51d00a5dfcfacc64a2a.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "API Integration", "CSS"],
    demoLink: "https://example.com",
    sourceLink: "https://github.com",
  },
  {
    id: 4,
    title: "Docker Containers",
    description: "A productivity app that helps users organize tasks, set priorities, and track progress.",
    image: "https://i.pinimg.com/736x/fa/4c/6b/fa4c6bff7d08b1968196121f933a3d00.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Redux", "Firebase"],
    demoLink: "https://example.com",
    sourceLink: "https://github.com",
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com",
    icon: "Github",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com",
    icon: "Linkedin",
  },
  {
    platform: "Twitter",
    url: "https://twitter.com",
    icon: "Twitter",
  },
  {
    platform: "Instagram",
    url: "https://instagram.com",
    icon: "Instagram",
  },
];