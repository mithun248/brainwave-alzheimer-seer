
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Brain, ChartBar } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="py-10 bg-medical-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About BrainWave
              </h1>
              <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
                Using advanced AI to assist in early detection of Alzheimer's Disease.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Brain className="w-6 h-6 text-alzheimer" /> Our Mission
              </h2>
              <p>
                BrainWave was created with a singular focus: to harness the power of artificial intelligence to assist healthcare professionals in the early detection of Alzheimer's Disease. Early diagnosis is crucial for effective intervention and care planning, yet traditional diagnostic methods can be time-consuming, subjective, and sometimes miss subtle early indicators of the disease.
              </p>
              <p>
                By using deep learning to analyze brain imaging data, we aim to provide an additional tool that can help detect patterns associated with Alzheimer's Disease, even at early stages when intervention may be most effective.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4 flex items-center gap-2">
                <ChartBar className="w-6 h-6 text-alzheimer" /> The Technology
              </h2>
              <p>
                BrainWave utilizes convolutional neural networks (CNNs) trained on thousands of brain scans from patients with normal cognition, mild cognitive impairment (MCI), and Alzheimer's Disease. Our model learns to recognize patterns and anomalies that may be indicative of neurodegenerative changes.
              </p>
              <p>
                The system analyzes MRI or PET scans and provides probability scores for different cognitive states, helping to quantify the likelihood of Alzheimer's Disease. Additionally, visualization techniques like Gradient-weighted Class Activation Mapping (Grad-CAM) highlight regions of interest that influenced the model's decision, offering insights into which brain areas may be affected.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">Key Features:</h3>
              <ul className="space-y-2">
                <li>
                  <strong>Advanced Image Analysis:</strong> Utilizes deep learning to detect subtle patterns in brain scans.
                </li>
                <li>
                  <strong>Multi-Class Classification:</strong> Distinguishes between normal cognition, MCI, and Alzheimer's Disease.
                </li>
                <li>
                  <strong>Visualization:</strong> Highlights regions of interest for better interpretability.
                </li>
                <li>
                  <strong>Easy Integration:</strong> Designed to complement existing diagnostic workflows.
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Research Basis</h2>
              <p>
                Our model has been trained on publicly available datasets including ADNI (Alzheimer's Disease Neuroimaging Initiative) and OASIS (Open Access Series of Imaging Studies), which contain thousands of brain scans from individuals across the cognitive spectrum.
              </p>
              <p>
                The development of BrainWave was guided by recent advances in medical imaging analysis and deep learning research. Our approach builds upon published literature demonstrating the efficacy of convolutional neural networks in detecting patterns associated with Alzheimer's Disease from brain imaging data.
              </p>

              <Separator className="my-8" />

              <h2 className="text-2xl font-bold mt-8 mb-4">Important Disclaimer</h2>
              <div className="bg-medical-50 border border-medical-100 rounded-lg p-4 my-4">
                <p>
                  <strong>BrainWave is a research and educational tool, not a medical diagnostic device.</strong> It is designed to assist healthcare professionals, not to replace clinical judgment or provide definitive diagnoses. The results provided by BrainWave should always be interpreted by qualified medical professionals in conjunction with other clinical information.
                </p>
                <p className="mt-2 mb-0">
                  Always consult with qualified healthcare providers for diagnosis and treatment of Alzheimer's Disease or any other medical condition.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
