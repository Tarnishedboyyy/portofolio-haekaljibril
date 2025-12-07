import { Card } from '@/components/ui/card';
import { Camera, Aperture, Film, Zap } from 'lucide-react';

export default function Equipment() {
  const specs = [
    {
      icon: Aperture,
      label: 'Sensor',
      value: '24.1 MP APS-C CMOS',
    },
    {
      icon: Film,
      label: 'Video',
      value: '4K 24p / Full HD 60p',
    },
    {
      icon: Zap,
      label: 'ISO Range',
      value: '100-25600 (expandable)',
    },
    {
      icon: Camera,
      label: 'Autofocus',
      value: 'Dual Pixel CMOS AF',
    },
  ];

  return (
    <section id="equipment" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Equipment</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional gear for capturing stunning visuals
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden bg-gradient-to-br from-card via-card to-primary/5 border-primary/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12">
              {/* Camera Image */}
              <div className="flex items-center justify-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-500"></div>
                  <div className="relative">
                    <img
                      src="/images/canon-250d.png"
                      alt="Canon EOS 250D"
                      className="w-full h-auto max-w-md transform group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23374151" width="400" height="300"/%3E%3Ctext fill="%239CA3AF" font-family="sans-serif" font-size="24" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3E📷%3C/text%3E%3C/svg%3E';
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Camera Details */}
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2">Canon EOS 250D</h3>
                  <p className="text-primary text-lg mb-4">EOS Rebel SL3</p>
                  <p className="text-muted-foreground leading-relaxed">
                    The Canon EOS 250D is a powerful and compact DSLR camera perfect for both
                    photography and videography. With its lightweight design and advanced features,
                    it delivers professional-quality results in any shooting scenario.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {specs.map((spec, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-background/50 rounded-lg hover:bg-background/80 transition-colors"
                    >
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <spec.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{spec.label}</p>
                        <p className="font-medium">{spec.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <h4 className="font-semibold mb-2">Key Features</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Vari-angle touchscreen LCD for flexible shooting
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Built-in Wi-Fi and Bluetooth connectivity
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Continuous shooting up to 5 fps
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Creative filters and effects
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
