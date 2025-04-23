
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, ChartPie, ChartBar, Image } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-medical-50 to-background py-16 sm:py-20">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl animate-fade-in" style={{animationDelay: '0.1s'}}>
                    BrainWave Alzheimer's Detection
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-fade-in" style={{animationDelay: '0.3s'}}>
                    An AI-powered tool that helps detect early signs of Alzheimer's Disease from brain imaging data with advanced deep learning technology.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row animate-fade-in" style={{animationDelay: '0.5s'}}>
                  <Link to="/analyze">
                    <Button className="bg-alzheimer hover:bg-alzheimer-dark">Start Analysis</Button>
                  </Link>
                  <Link to="/about">
                    <Button variant="outline">Learn More</Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <div className="relative animate-fade-in" style={{animationDelay: '0.7s'}}>
                  <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-medical-100 animate-brain-pulse">
                    <Brain className="absolute inset-0 m-auto w-40 h-40 text-alzheimer opacity-80" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-medical-50 shadow-lg border border-medical-100 flex items-center justify-center">
                    <span className="text-medical-700 font-bold text-lg">98%</span>
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-24 h-24 rounded-full bg-medical-50 shadow-lg border border-medical-100 flex items-center justify-center">
                    <span className="text-medical-700 font-bold text-lg">Early Detection</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20">
          <div className="container">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-4xl">
                Advanced Brain Analysis Technology
              </h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Our deep learning model analyzes brain imaging data to detect patterns associated with Alzheimer's Disease,
                helping healthcare professionals make more informed decisions.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-12">
              <Card className="medical-card">
                <CardHeader>
                  <Image className="w-10 h-10 text-alzheimer" />
                  <CardTitle>Image Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Advanced convolutional neural networks analyze MRI and PET scans to detect subtle patterns associated with Alzheimer's Disease.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="medical-card">
                <CardHeader>
                  <ChartBar className="w-10 h-10 text-alzheimer" />
                  <CardTitle>Accurate Detection</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Our model achieves high accuracy in distinguishing between Normal, MCI, and Alzheimer's Disease cases.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="medical-card">
                <CardHeader>
                  <ChartPie className="w-10 h-10 text-alzheimer" />
                  <CardTitle>Visual Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Visualization techniques like Grad-CAM highlight regions of interest in brain scans for better interpretability.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-medical-50 py-16 sm:py-20">
          <div className="container">
            <h2 className="text-center font-bold text-3xl leading-[1.1] sm:text-3xl md:text-4xl mb-12">
              How It Works
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="bg-medical-100 rounded-full p-4">
                  <Image className="w-8 h-8 text-alzheimer" />
                </div>
                <h3 className="font-bold text-xl">Upload Scan</h3>
                <p className="text-muted-foreground">Upload MRI or PET scans in standard medical formats.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="bg-medical-100 rounded-full p-4">
                  <Brain className="w-8 h-8 text-alzheimer" />
                </div>
                <h3 className="font-bold text-xl">AI Processing</h3>
                <p className="text-muted-foreground">Our deep learning model analyzes the brain scan data.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="bg-medical-100 rounded-full p-4">
                  <ChartBar className="w-8 h-8 text-alzheimer" />
                </div>
                <h3 className="font-bold text-xl">Result Analysis</h3>
                <p className="text-muted-foreground">Get probability scores for different cognitive conditions.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="bg-medical-100 rounded-full p-4">
                  <ChartPie className="w-8 h-8 text-alzheimer" />
                </div>
                <h3 className="font-bold text-xl">Visualize Results</h3>
                <p className="text-muted-foreground">See which brain regions influenced the AI's decision.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20">
          <div className="container">
            <div className="flex flex-col items-center justify-center text-center space-y-4">
              <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-4xl">
                Ready to Try BrainWave?
              </h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Start analyzing brain scans with our advanced AI model to assist in early detection of Alzheimer's Disease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link to="/analyze">
                  <Button className="bg-alzheimer hover:bg-alzheimer-dark">Start Analysis</Button>
                </Link>
                <Link to="/resources">
                  <Button variant="outline">Explore Resources</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 bg-medical-50/50">
          <div className="container">
            <div className="rounded-lg border border-medical-200 bg-white p-4 shadow-sm">
              <h3 className="font-medium text-medical-800">Medical Disclaimer</h3>
              <p className="text-sm text-muted-foreground mt-2">
                BrainWave is a research tool designed to assist healthcare professionals. It is not intended to replace clinical judgment or provide a definitive diagnosis. Always consult with qualified medical professionals for healthcare decisions.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
