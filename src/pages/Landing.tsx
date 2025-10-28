import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Droplet, Activity, Shield, Zap, ArrowRight, Scan } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AnimatedBackground } from '@/components/AnimatedBackground';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 rounded-full mb-8">
                <Scan className="w-5 h-5 text-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">Advanced Biometric Technology</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight animate-scale-in">
              Smart Blood Group
              <br />
              <span className="text-primary">Detection System</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Instant identification powered by cutting-edge AI and biometric analysis
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button
                onClick={() => navigate('/detector')}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105"
              >
                Start Detection
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-10 py-7 border-2 hover:bg-secondary transition-all duration-300"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-1">92.3%</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-1">&lt;3s</div>
                <div className="text-sm text-muted-foreground">Analysis Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose Our System?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of blood group identification
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 text-center space-y-6 bg-card border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-slide-in-left">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-primary/20">
                <Zap className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold">Lightning Fast</h3>
              <p className="text-muted-foreground leading-relaxed">
                Get accurate results in under 3 seconds with our optimized AI algorithms
              </p>
            </Card>

            <Card className="p-8 text-center space-y-6 bg-card border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-accent/20">
                <Activity className="w-10 h-10 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold">Medical Grade</h3>
              <p className="text-muted-foreground leading-relaxed">
                92.3% accuracy with hospital-grade biometric detection technology
              </p>
            </Card>

            <Card className="p-8 text-center space-y-6 bg-card border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-primary/20">
                <Shield className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold">Fully Secure</h3>
              <p className="text-muted-foreground leading-relaxed">
                Enterprise-level encryption ensures your data remains private and protected
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-secondary/30 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple, fast, and accurate in three steps
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-12">
            {[
              {
                step: '01',
                title: 'Upload Sample Image',
                description: 'Drop your blood sample image into our secure upload zone',
                delay: '0s'
              },
              {
                step: '02',
                title: 'AI Analysis',
                description: 'Advanced neural networks process and analyze your sample instantly',
                delay: '0.2s'
              },
              {
                step: '03',
                title: 'Get Results',
                description: 'Receive precise blood group identification with confidence metrics',
                delay: '0.4s'
              }
            ].map((item) => (
              <div 
                key={item.step}
                className="flex gap-8 items-start animate-slide-in-right"
                style={{ animationDelay: item.delay }}
              >
                <div className="w-24 h-24 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center flex-shrink-0 text-3xl font-bold shadow-xl">
                  {item.step}
                </div>
                <div className="flex-1 pt-4">
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button
              onClick={() => navigate('/detector')}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-7 shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:scale-105"
            >
              Try It Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-12 text-center bg-primary text-primary-foreground border-0 shadow-2xl animate-scale-in">
            <Droplet className="w-16 h-16 mx-auto mb-6 animate-float" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Experience instant blood group identification today
            </p>
            <Button
              onClick={() => navigate('/detector')}
              size="lg"
              variant="secondary"
              className="text-lg px-10 py-7 hover:scale-105 transition-all duration-300"
            >
              Start Detection Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t bg-secondary/20">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        </div>
      </footer>
    </div>
  );
};

export default Landing;
