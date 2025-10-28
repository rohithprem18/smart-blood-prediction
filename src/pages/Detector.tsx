import { BloodGroupDetector } from '@/components/BloodGroupDetector';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Detector = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <div className="absolute top-6 left-6 z-20 animate-fade-in">
        <Button
          onClick={() => navigate('/')}
          variant="outline"
          size="sm"
          className="backdrop-blur-sm bg-background/80 border-2 hover:border-primary transition-all duration-300 hover:scale-105 shadow-lg"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </div>
      <BloodGroupDetector />
    </div>
  );
};

export default Detector;
