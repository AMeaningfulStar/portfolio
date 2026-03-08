export type SocialLink = {
  label: string
  href: string
  icon: string
}

export type Profile = {
  name: string
  title: string
  avatar: string
  email: string
  phone: string
  birthday: {
    value: string
    dateTime: string
  }
  location: string
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Min-Seong, Kim',
  title: 'Frontend Developer',
  avatar: 'https://placehold.co/80x80',
  email: 'ghrlfehd123@gmail.com',
  phone: '+82 10-2802-4955',
  birthday: {
    value: 'May 21, 1998',
    dateTime: '1998-05-21',
  },
  location: 'Seoul, Korea',
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/',
      icon: 'logo-github',
    },
    {
      label: 'Notion',
      href: 'https://www.notion.so/',
      icon: 'document-text-outline',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/',
      icon: 'logo-linkedin',
    },
  ],
}
