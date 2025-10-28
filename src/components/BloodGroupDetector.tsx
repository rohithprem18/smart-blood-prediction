import { useState, useCallback } from 'react';
import { Upload, Droplet, Activity, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { AnimatedBackground } from './AnimatedBackground';

interface PredictionResult {
  filename: string;
  predicted_blood_group: string;
  confidence: string;
}

export const BloodGroupDetector = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const { toast } = useToast();

  const handleFileSelect = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) {
      toast({
        title: 'Invalid file type',
        description: 'Please upload an image file',
        variant: 'destructive',
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedImage(e.target?.result as string);
      setResult(null);
    };
    reader.readAsDataURL(file);
  }, [toast]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file) handleFileSelect(file);
  }, [handleFileSelect]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const analyzeImage = async () => {
    if (!selectedImage) return;

    setIsAnalyzing(true);
    try {
      const blob = await fetch(selectedImage).then(r => r.blob());
      const formData = new FormData();
      formData.append('file', blob, 'blood_sample.bmp');

      const response = await fetch('https://rohithprem91-blood-classifier.hf.space/predict', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Analysis failed');

      const data: PredictionResult = await response.json();
      setResult(data);
      
      toast({
        title: 'Analysis Complete',
        description: `Blood group detected: ${data.predicted_blood_group}`,
      });
    } catch (error) {
      toast({
        title: 'Analysis Failed',
        description: 'Unable to analyze the image. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative">
      <AnimatedBackground />
      
      <div className="w-full max-w-4xl space-y-8 relative z-10">
        <div className="text-center space-y-3 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center shadow-lg">
              <Droplet className="w-7 h-7 text-accent-foreground animate-pulse" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Blood Group Detector
          </h1>
          <p className="text-lg text-muted-foreground">
            Upload your sample for instant biometric analysis
          </p>
        </div>

        <Card className="p-8 md:p-12 shadow-2xl border-2 transition-all duration-300 hover:shadow-primary/10 animate-scale-in">
          <div
            className={`relative border-2 border-dashed rounded-2xl p-12 md:p-16 transition-all duration-300 ${
              isDragging
                ? 'border-primary bg-primary/5 scale-[1.02]'
                : 'border-border hover:border-primary/50 hover:bg-secondary/30'
            }`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            {!selectedImage ? (
              <div className="text-center space-y-6">
                <div className="flex justify-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center animate-float">
                    <Upload className="w-12 h-12 text-primary" />
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-2xl font-semibold text-foreground">
                    Drop your blood sample image here
                  </p>
                  <p className="text-base text-muted-foreground">
                    or click to browse files
                  </p>
                  <div className="flex items-center justify-center gap-2 pt-2">
                    <AlertCircle className="w-4 h-4 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      Supports JPG, PNG, BMP formats
                    </p>
                  </div>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
            ) : (
              <div className="space-y-8">
                <div className="relative group">
                  <img
                    src={selectedImage}
                    alt="Blood sample"
                    className="w-full h-80 object-contain rounded-2xl bg-secondary p-4"
                  />
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      setSelectedImage(null);
                      setResult(null);
                    }}
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                  >
                    Change Image
                  </Button>
                </div>

                {!result && (
                  <Button
                    onClick={analyzeImage}
                    disabled={isAnalyzing}
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-7 text-lg shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:scale-[1.02]"
                  >
                    {isAnalyzing ? (
                      <>
                        <Activity className="w-6 h-6 mr-3 animate-spin" />
                        Analyzing Sample...
                      </>
                    ) : (
                      <>
                        <Activity className="w-6 h-6 mr-3" />
                        Analyze Blood Group
                      </>
                    )}
                  </Button>
                )}
              </div>
            )}
          </div>

          {result && (
            <div className="mt-10 space-y-6 animate-fade-in">
              <div className="h-px bg-border" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-8 bg-primary/5 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg animate-slide-in-left">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                      <Droplet className="w-5 h-5" />
                      Detected Blood Group
                    </div>
                    <p className="text-5xl font-bold text-primary">
                      {result.predicted_blood_group}
                    </p>
                  </div>
                </Card>

                <Card className="p-8 bg-accent/5 border-2 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg animate-slide-in-right">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                      <Activity className="w-5 h-5" />
                      Confidence Level
                    </div>
                    <p className="text-5xl font-bold text-accent">
                      {result.confidence}
                    </p>
                  </div>
                </Card>
              </div>

              <Button
                onClick={() => {
                  setSelectedImage(null);
                  setResult(null);
                }}
                variant="outline"
                size="lg"
                className="w-full py-6 border-2 hover:bg-secondary transition-all duration-300"
              >
                Analyze Another Sample
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};
