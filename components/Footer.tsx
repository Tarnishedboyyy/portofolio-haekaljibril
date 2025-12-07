import { Camera, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted/30 py-8 border-t border-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center gap-2">
            <Camera className="w-5 h-5 text-primary" />
            <span className="font-semibold">Haekal Jibril Deliansyah</span>
          </div>
          
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for visual storytelling
          </p>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Haekal Jibril Deliansyah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
