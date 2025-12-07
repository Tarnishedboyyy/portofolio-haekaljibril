import { GraduationCap, Briefcase, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'SMK Telkom Jakarta',
    },
    {
      icon: Briefcase,
      title: 'Freelancer',
      description: 'Photography & Videography',
    },
    {
      icon: Award,
      title: 'Expertise',
      description: 'Professional Video Editing',
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed">
            I'm a passionate student at SMK Telkom Jakarta with a deep love for visual storytelling.
            As a freelance photographer, videographer, and video editor, I combine technical skills
            with creative vision to produce compelling content that resonates with audiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-primary/10"
              >
                <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
