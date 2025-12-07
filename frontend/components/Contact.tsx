import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Instagram, Linkedin, Phone } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: 'Thank you for your message. I will get back to you soon!',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'haekal.jibril@smktelkom-jkt.sch.id',
      href: 'mailto:haekal.jibril@smktelkom-jkt.sch.id',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@haekaljibril',
      href: 'https://instagram.com/haekaljibril',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Haekal Jibril',
      href: 'https://linkedin.com/in/haekaljibril',
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+62 812-3456-7890',
      href: 'https://wa.me/6281234567890',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interested in working together? Let's discuss your project!
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/10">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/10">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors group"
                  >
                    <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <link.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{link.label}</p>
                      <p className="font-medium">{link.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <h3 className="text-xl font-semibold mb-3">Available for Freelance</h3>
              <p className="text-muted-foreground mb-4">
                I'm currently available for freelance photography, videography, and video editing
                projects. Let's create something amazing together!
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">
                  Event Coverage
                </span>
                <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">
                  Portrait Sessions
                </span>
                <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">
                  Commercial Videos
                </span>
                <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">
                  Video Editing
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
