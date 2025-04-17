
import wordpress from './wordpress.svg';
import figma from './figma.svg';
import git from './git.svg';
import visual_studio_code from './visual-studio-code.svg';
import wordpress_blue from './wordpress-blue.svg';
import figma_blue from './figma-blue.svg';
import git_blue from './git-blue.svg';
import visual_studio_code_blue from './visual-studio-code-blue.svg';
import adapt from './adapt.svg';
import ux from './ux.svg';
import team from './team.svg';
import detail from './detail.svg';
import adapt_blue from './adapt-blue.svg';
import ux_blue from './ux-blue.svg';
import team_blue from './team-blue.svg';
import detail_blue from './detail-blue.svg';
import kaya_logo from './kaya-kim-logo-stone.svg';
import kaya_logo_color from './kaya-kim-logo-color.svg';
import kaya_logo_blue from './kaya-kim-logo-blue.svg';
import kaya_profile from './kaya-profile.png';
import cheeyu_profile from './cheeyu-profile.png';
import hand_icon from './hand-icon.png';
import tail_icon from './tail-icon.png';
import { CodeXml, GraduationCap, SwatchBook } from 'lucide-react';

export const assets = {
    wordpress,
    figma,
    git,
    visual_studio_code,
    wordpress_blue,
    figma_blue,
    git_blue,
    visual_studio_code_blue,
    adapt,
    ux,
    team,
    detail,
    adapt_blue,
    ux_blue,
    team_blue,
    detail_blue,
    kaya_logo,
    kaya_logo_color,
    kaya_logo_blue,
    kaya_profile,
    cheeyu_profile,
    hand_icon,
    tail_icon
};

export const workData = [
    {
        title: 'Compass Health',
        description: 'Custom WordPress build focused on simplifying complex site architecture. I developed a dynamic mega menu and custom templates to help users easily navigate services. Built fully responsive with accessible design in mind.',
        link: 'https://www.compasshealth.org/',
        tags: ['WordPress CMS', 'PHP', 'jQuery', 'React']
    },
    {
        title: 'RIDE.co',
        description: 'Custom WordPress build with reusable blocks, scroll animations, and responsive templates. Focused on clean design, performance, and a smooth editing experience.',
        link: 'https://ride.co/',
        tags: ['WordPress CMS', 'PHP', 'jQuery', 'React']
    },
    {
        title: 'Ben Bridge',
        description: 'Maintained and updated a large-scale jewelry eCommerce site. Took ownership of bug fixes, seasonal campaign updates, and feature additions. Learned and worked in Demandware (Salesforce Commerce Cloud).',
        link: 'https://www.benbridge.com/',
        tags: ['Demandware', 'CSS']
    },
]

export const skillData = [
    { title: 'Languages', detail: 'HTML, CSS, PHP, JavaScript React Js, Next Js', icon: <CodeXml /> },
    { title: 'Education', detail: 'Bachelors in Visual Arts', icon: <GraduationCap /> },
    { title: 'Design & Tools', detail: 'Figma, Adobe Creative Suite, Sketch, InVision', icon: <SwatchBook /> },
]

export const hireData = [
    { icon: assets.ux_blue, iconDark: assets.ux, title: 'Design-Driven Development', description: 'I bring a designer’s eye to development—pixel-perfect builds and thoughtful UX are part of my process.' },
    { icon: assets.adapt_blue, iconDark: assets.adapt, title: 'Adaptable & Fast Learner', description: 'From picking up React to working in custom company frameworks, I learn quickly and adapt seamlessly.' },
    { icon: assets.detail_blue, iconDark: assets.detail, title: 'Reliable & Detail-Oriented', description: 'Known for meeting deadlines, juggling multiple projects, and catching the little things that matter.' },
    { icon: assets.team_blue, iconDark: assets.team, title: 'Team-Ready', description: 'I work well with cross-functional teams, review mockups with designers, and help onboard other devs through documentation.' },
]

export const toolsData = [
    { icon: assets.visual_studio_code_blue, iconDark: assets.visual_studio_code },
    { icon: assets.figma_blue, iconDark: assets.figma },
    { icon: assets.wordpress_blue, iconDark: assets.wordpress },
    { icon: assets.git_blue, iconDark: assets.git }
];  
