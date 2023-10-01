import simple from '../../../assets/svgs/simple.svg';
import easy from '../../../assets/svgs/easy.svg';
import revisit from '../../../assets/svgs/revisit.svg';

export const navLinks = [
  {
    title: 'Features',
    link: '#',
  },
  {
    title: 'How It Works',
    link: '#',
  },
];

export const featureObj = [
  {
    icon: simple,
    title: 'Simple Screen Recording',
    description:
      'Effortless screen recording for everyone. Record with ease, no tech expertise required.',
  },
  {
    icon: easy,
    title: 'Easy-to-Share URL',
    description:
      'Share your recordings instantly with a single link. No attachments, no downloads.',
  },
  {
    icon: revisit,
    title: 'Revisit Recordings',
    description:
      'Access and review your past content effortlessly. Your recordings, always at your fingertips.',
  },
];

export const howItWorks = [
  {
    id: 1,
    title: 'Record Screen',
    description:
      'Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.',
  },
  {
    id: 2,
    title: 'Share Your Recording',
    description:
      'We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.',
  },
  {
      id: 3,
      title: 'Learn Effortlessly',
      description:
        'Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.',
    },
];

export const footerNavigations = [
  {
      title: 'Menu',
      children: ['Home', 'Converter', 'How it Works']
  },
  {
      title: 'About us',
      children: ['About', 'Contact Us', 'Privacy Policy']
  },
  {
      title: 'Screen Record',
      children: ['Browser Window', 'Desktop', 'Application']
  }
]