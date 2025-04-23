import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, ChartPie, Image as ImageIcon } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { toast } from "@/components/ui/use-toast";

const Analyze = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<null | {
    normal: number;
    mci: number;
    alzheimers: number;
    prediction: string;
  }>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
    
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      toast({
        title: "File selected",
        description: `${file.name} is ready for analysis`,
      });
    } else {
      setImagePreview(null);
    }
  };

  const handleAnalyze = () => {
    if (!selectedFile) return;
    
    setIsAnalyzing(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Mock results - in a real app, this would come from the API
      const mockResults = {
        normal: 0.15,
        mci: 0.25,
        alzheimers: 0.60,
        prediction: "Alzheimer's Disease"
      };
      
      setResults(mockResults);
      setIsAnalyzing(false);
      
      toast({
        title: "Analysis complete",
        description: `Prediction: ${mockResults.prediction}`,
      });
    }, 3000);
  };

  const resetAnalysis = () => {
    setSelectedFile(null);
    setImagePreview(null);
    setResults(null);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="py-10 bg-medical-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Analyze Brain Scans
              </h1>
              <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
                Upload MRI or PET brain scans to analyze for signs of Alzheimer's Disease using our AI model.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container">
            <Card className="medical-card max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-alzheimer" />
                  Brain Scan Analysis
                </CardTitle>
                <CardDescription>
                  Upload an MRI or PET scan to analyze for signs of Alzheimer's Disease.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!results ? (
                  <div className="space-y-8">
                    {imagePreview ? (
                      <div className="flex flex-col items-center gap-4">
                        <div className="relative w-full max-w-md mx-auto">
                          <div className="aspect-square w-full overflow-hidden rounded-lg brain-scan-shadow">
                            <img 
                              src={imagePreview} 
                              alt="Brain scan preview" 
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm"
                            onClick={resetAnalysis}
                          >
                            Change
                          </Button>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-muted-foreground">
                            {selectedFile ? `File: ${selectedFile.name}` : 'Image selected'}
                          </p>
                        </div>
                        <Button 
                          onClick={handleAnalyze} 
                          disabled={isAnalyzing} 
                          className="bg-alzheimer hover:bg-alzheimer-dark"
                        >
                          {isAnalyzing ? (
                            <>Analyzing Scan...</>
                          ) : (
                            <>Analyze Scan</>
                          )}
                        </Button>
                        {isAnalyzing && (
                          <div className="w-full max-w-md">
                            <Progress value={50} className="h-2 bg-medical-100" />
                            <p className="text-xs text-center text-muted-foreground mt-1">
                              Processing brain scan through neural network...
                            </p>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center border-2 border-dashed border-medical-200 rounded-lg p-12 text-center">
                        <ImageIcon className="w-10 h-10 text-medical-300 mb-4" />
                        <p className="text-muted-foreground mb-4">Drag and drop your brain scan or click to browse</p>
                        <label className="cursor-pointer">
                          <span className="inline-flex items-center justify-center rounded-md bg-alzheimer px-4 py-2 text-sm font-medium text-white hover:bg-alzheimer-dark transition-colors">
                            Select File
                          </span>
                          <input 
                            type="file" 
                            className="hidden" 
                            accept="image/*"
                            onChange={handleFileChange}
                          />
                        </label>
                        <p className="text-xs text-muted-foreground mt-4">
                          Supported formats: JPG, PNG, DICOM (uncompressed)
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="order-2 md:order-1">
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-lg font-semibold mb-1">Analysis Results</h3>
                            <p className="text-sm text-muted-foreground mb-3">
                              Prediction: <span className="font-medium text-alzheimer-dark">{results.prediction}</span>
                            </p>
                            <div className="space-y-3">
                              <div>
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-sm">Normal</span>
                                  <span className="text-sm font-medium">{(results.normal * 100).toFixed(1)}%</span>
                                </div>
                                <Progress value={results.normal * 100} className="h-2 bg-medical-100" />
                              </div>
                              <div>
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-sm">Mild Cognitive Impairment</span>
                                  <span className="text-sm font-medium">{(results.mci * 100).toFixed(1)}%</span>
                                </div>
                                <Progress value={results.mci * 100} className="h-2 bg-medical-100" />
                              </div>
                              <div>
                                <div className="flex items-center justify-between mb-1">
                                  <span className="text-sm">Alzheimer's Disease</span>
                                  <span className="text-sm font-medium">{(results.alzheimers * 100).toFixed(1)}%</span>
                                </div>
                                <Progress value={results.alzheimers * 100} className="h-2 bg-medical-100" />
                              </div>
                            </div>
                          </div>
                          <div className="pt-3 border-t">
                            <h4 className="text-md font-medium mb-2 flex items-center gap-1">
                              <ChartPie className="w-4 h-4" /> Regions of Interest
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              The model detected significant patterns in the hippocampal region and temporal lobe,
                              areas commonly affected in Alzheimer's Disease.
                            </p>
                          </div>
                        </div>
                        <div className="mt-6">
                          <Button onClick={resetAnalysis} className="bg-alzheimer hover:bg-alzheimer-dark">
                            Analyze Another Scan
                          </Button>
                        </div>
                      </div>
                      <div className="order-1 md:order-2">
                        <div className="aspect-square w-full overflow-hidden rounded-lg brain-scan-shadow">
                          <img 
                            src={imagePreview!} 
                            alt="Brain scan" 
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground rounded-md bg-medical-50 p-4 border border-medical-100">
                        <strong>Disclaimer:</strong> This analysis is for research and educational purposes only.
                        The results should not be used for clinical diagnosis. Always consult with a qualified healthcare professional.
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Analyze;
