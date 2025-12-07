import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Eye, Calendar, MapPin, Camera } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  description: string;
  specifications: {
    date: string;
    location: string;
    camera: string;
    duration?: string;
    software: string[];
  };
  fullDescription: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'SMK Telkom Jakarta Event Coverage',
      category: 'Videography',
      thumbnail: '/images/project1.jpg',
      description: 'Comprehensive coverage of school annual event',
      specifications: {
        date: 'November 2024',
        location: 'SMK Telkom Jakarta',
        camera: 'Canon 250D',
        duration: '5 minutes',
        software: ['DaVinci Resolve', 'CapCut'],
      },
      fullDescription: 'Full event coverage including opening ceremony, performances, and closing remarks. Utilized multiple camera angles and professional editing techniques to create an engaging video that captures the spirit of the event.',
    },
    {
      id: 2,
      title: 'Senior Portrait Session',
      category: 'Photography',
      thumbnail: '/images/project2.jpg',
      description: 'Professional graduation photoshoot',
      specifications: {
        date: 'October 2024',
        location: 'Jakarta',
        camera: 'Canon 250D',
        software: ['Lightroom', 'Canva'],
      },
      fullDescription: 'Professional portrait session capturing senior students in their graduation attire. Focused on natural lighting and candid moments, with careful post-processing to enhance colors and create a timeless look.',
    },
    {
      id: 3,
      title: 'Product Advertisement Video',
      category: 'Commercial',
      thumbnail: '/images/project3.jpg',
      description: 'Dynamic product showcase with motion graphics',
      specifications: {
        date: 'December 2024',
        location: 'Jakarta Studio',
        camera: 'Canon 250D',
        duration: '30 seconds',
        software: ['DaVinci Resolve', 'CapCut', 'Canva'],
      },
      fullDescription: 'Created a sleek commercial video showcasing product features with dynamic camera movements, motion graphics, and color grading. The final product effectively communicates the brand message in a visually compelling format.',
    },
    {
      id: 4,
      title: 'Travel Vlog - Bandung',
      category: 'Videography',
      thumbnail: '/images/project4.jpg',
      description: 'Cinematic travel documentation',
      specifications: {
        date: 'September 2024',
        location: 'Bandung, West Java',
        camera: 'Canon 250D',
        duration: '8 minutes',
        software: ['DaVinci Resolve', 'CapCut'],
      },
      fullDescription: 'A cinematic travel vlog documenting the beauty of Bandung. Features aerial-like shots, time-lapses, and carefully crafted transitions to take viewers on a visual journey through the city\'s landmarks and hidden gems.',
    },
    {
      id: 5,
      title: 'Music Performance Recording',
      category: 'Videography',
      thumbnail: '/images/project5.jpg',
      description: 'Multi-camera music video production',
      specifications: {
        date: 'August 2024',
        location: 'School Auditorium',
        camera: 'Canon 250D',
        duration: '4 minutes',
        software: ['DaVinci Resolve', 'CapCut'],
      },
      fullDescription: 'Professional recording of a live music performance with synchronized multi-camera setup. Included dynamic editing to match the rhythm and energy of the performance, enhanced with color grading and audio mixing.',
    },
    {
      id: 6,
      title: 'Corporate Headshots',
      category: 'Photography',
      thumbnail: '/images/project6.jpg',
      description: 'Professional business portraits',
      specifications: {
        date: 'July 2024',
        location: 'Office Building Jakarta',
        camera: 'Canon 250D',
        software: ['Lightroom'],
      },
      fullDescription: 'Professional headshots for corporate clients emphasizing clean backgrounds and professional lighting. Each portrait was meticulously retouched to ensure a polished, business-appropriate appearance while maintaining natural features.',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in photography, videography, and video editing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden group hover:shadow-2xl transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/10"
            >
              <div className="relative overflow-hidden aspect-video bg-muted">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23374151" width="400" height="300"/%3E%3Ctext fill="%239CA3AF" font-family="sans-serif" font-size="20" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3E' + encodeURIComponent(project.title) + '%3C/text%3E%3C/svg%3E';
                  }}
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    onClick={() => setSelectedProject(project)}
                    className="gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    View Details
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <Badge className="mb-3">{project.category}</Badge>
                <h3 className="text-xl font-semibold mb-2 line-clamp-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedProject(project)}
                  className="w-full gap-2"
                >
                  <Eye className="w-4 h-4" />
                  View Project
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Project Details Dialog */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedProject?.title}</DialogTitle>
              <DialogDescription>
                <Badge className="mt-2">{selectedProject?.category}</Badge>
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <img
                  src={selectedProject?.thumbnail}
                  alt={selectedProject?.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23374151" width="400" height="300"/%3E%3Ctext fill="%239CA3AF" font-family="sans-serif" font-size="20" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3E' + encodeURIComponent(selectedProject?.title || '') + '%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Project Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject?.fullDescription}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Date</p>
                      <p className="text-sm text-muted-foreground">
                        {selectedProject?.specifications.date}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">
                        {selectedProject?.specifications.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Camera className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Camera</p>
                      <p className="text-sm text-muted-foreground">
                        {selectedProject?.specifications.camera}
                      </p>
                    </div>
                  </div>

                  {selectedProject?.specifications.duration && (
                    <div className="flex items-start gap-3">
                      <Eye className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Duration</p>
                        <p className="text-sm text-muted-foreground">
                          {selectedProject?.specifications.duration}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Software Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject?.specifications.software.map((software, index) => (
                    <Badge key={index} variant="secondary">
                      {software}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
