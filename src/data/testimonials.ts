export type Testimonial = {
  id: number;
  name: string;
  title: string;
  company: string;
  testimonial: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ahmed Hassan',
    title: 'Project Manager',
    company: 'Tech Solutions Inc',
    testimonial:
      'Ladji Moussa delivered an exceptional web platform for our event. His attention to detail and ability to understand our requirements was impressive.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Fatima Diallo',
    title: 'Organization Lead',
    company: 'ASAA Organization',
    testimonial:
      'Working with Ladji on the ASAA portal was seamless. He transformed our vision into a fully functional platform that our members love.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ibrahim Traore',
    title: 'Team Lead',
    company: 'Digital Innovations',
    testimonial:
      'Ladji is a dedicated developer who brings creative solutions to technical challenges. Highly recommended for any project.',
    rating: 5,
  },
];

