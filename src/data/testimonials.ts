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
    title: 'Chef de projet',
    company: 'Tech Solutions Inc',
    testimonial:
      'Ladji Moussa a livre une excellente plateforme web pour notre evenement. Son attention aux details et sa comprehension de nos besoins etaient remarquables.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Ibrahim Traore',
    title: 'Responsable d equipe',
    company: 'Digital Innovations',
    testimonial:
      'Ladji est un developpeur implique qui apporte des solutions creatives aux defis techniques. Je le recommande pour tout projet.',
    rating: 5,
  },
];
