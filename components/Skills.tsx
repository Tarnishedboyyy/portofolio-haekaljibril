import { Card } from '@/components/ui/card';

export default function Skills() {
  const skills = [
    {
      name: 'CapCut',
      description: 'Professional video editing with advanced effects',
      icon: '/images/capcut-icon.png',
      color: 'from-black to-gray-800',
    },
    {
      name: 'DaVinci Resolve',
      description: 'Color grading and professional post-production',
      icon: '/images/davinci-icon.png',
      color: 'from-red-500 to-orange-500',
    },
    {
      name: 'Lightroom',
      description: 'Photo editing and color correction',
      icon: '/images/lightroom-icon.png',
      color: 'from-blue-400 to-blue-600',
    },
    {
      name: 'Canva',
      description: 'Graphic design and social media content',
      icon: '/images/canva-icon.png',
      color: 'from-teal-400 to-cyan-500',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Software</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Proficient in industry-standard software for creating stunning visual content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-3 bg-card/50 backdrop-blur-sm border-primary/10 group"
            >
              <div className={`w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-16 h-16 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<span class="text-2xl font-bold text-gray-800">${skill.name.charAt(0)}</span>`;
                      }
                    }}
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
