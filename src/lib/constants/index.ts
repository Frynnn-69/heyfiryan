import LinkedinIcon from '@/components/ui/icons/linkedin.astro'
import GmailIcon from '@/components/ui/icons/gmail.astro'
import WhatsappIcon from '@/components/ui/icons/whatsapp.astro'

export const NAV_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Articles",
    href: "/articles",
  },
  {
    label: "Projects",
    href: "/projects",
  },
] as const;

export const SOCIAL_LINKS = [
  {
    name: 'Email',
    icon: GmailIcon,
    url: "mailto:firyanfatihf01@gmail.com",
  },
  {
    name: 'Linkedin',
    icon: LinkedinIcon,
    url: "https://www.linkedin.com/in/firyan-fatih-fadilah/",
  },
  {
    name: 'Whatsapp',
    icon: WhatsappIcon,
    url: "https://wa.me/+628561949399", 
  },
];