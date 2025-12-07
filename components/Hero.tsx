import { ArrowDown, Camera, Video, Film } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-6 animate-fade-in">
          {/* Icons Animation */}
          <div className="flex justify-center gap-6 mb-8">
            <div className="p-4 bg-primary/10 rounded-full animate-float">
              <Camera className="w-8 h-8 text-primary" />
            </div>
            <div className="p-4 bg-primary/10 rounded-full animate-float delay-200">
              <Video className="w-8 h-8 text-primary" />
            </div>
            <div className="p-4 bg-primary/10 rounded-full animate-float delay-400">
              <Film className="w-8 h-8 text-primary" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary">
            Haekal Jibril Deliansyah
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            SMK Telkom Jakarta Student
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <span className="px-4 py-2 bg-primary/10 rounded-full">Photography</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">Videography</span>
            <span className="px-4 py-2 bg-primary/10 rounded-full">Video Editing</span>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            Freelance creative professional specializing in capturing moments and bringing stories to life through visual media
          </p>

          <div className="flex justify-center gap-4 mt-8">
            <Button size="lg" onClick={scrollToAbout}>
              View My Work
            </Button>
            <Button size="lg" variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get In Touch
            </Button>
          </div>

          <button
            onClick={scrollToAbout}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <ArrowDown className="w-8 h-8 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
}
