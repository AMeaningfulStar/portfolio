export type ServiceItem = {
  image: string
  title: string
  description: string
}

export type Testimonial = {
  id: string
  name: string
  avatar: string
  text: string
}

export type Client = {
  id: string
  name: string
  href: string
  logo: string
}

export const aboutIntro: { description: string[] } = {
  description: [
    'I am a frontend developer who enjoys building intuitive and meaningful user experiences.',
    'I focus on creating maintainable code structures and scalable UI systems.',
  ],
}

export const services: ServiceItem[] = [
  {
    image: 'https://placehold.co/50x50',
    title: 'Frontend Development',
    description: 'Building responsive and interactive web interfaces using modern frameworks.',
  },
  {
    image: 'https://placehold.co/50x50',
    title: 'UI Architecture',
    description: 'Designing scalable component structures and reusable design systems.',
  },
  {
    image: 'https://placehold.co/50x50',
    title: 'Performance Optimization',
    description: 'Improving loading speed and application performance.',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'John One',
    avatar: 'https://placehold.co/60x60',
    text: 'Great developer with excellent communication skills.',
  },
  {
    id: 'testimonial-2',
    name: 'John Two',
    avatar: 'https://placehold.co/60x60',
    text: 'Great developer with excellent communication skills.',
  },
]

export const clients: Client[] = [
  {
    id: 'client-1',
    name: 'Client A',
    href: '#',
    logo: 'https://placehold.co/50x50',
  },
  {
    id: 'client-2',
    name: 'Client B',
    href: '#',
    logo: 'https://placehold.co/50x50',
  },
  {
    id: 'client-3',
    name: 'Client C',
    href: '#',
    logo: 'https://placehold.co/50x50',
  },
  {
    id: 'client-4',
    name: 'Client D',
    href: '#',
    logo: 'https://placehold.co/50x50',
  },
]
