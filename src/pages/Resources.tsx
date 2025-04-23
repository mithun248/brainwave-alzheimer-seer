
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, ChartBar, ChartLine, ChartPie } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Resources = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        <section className="py-10 bg-medical-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Educational Resources
              </h1>
              <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
                Learn more about Alzheimer's Disease, brain imaging, and AI in medical diagnostics.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <Tabs defaultValue="alzheimers" className="max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-3 w-[500px] mx-auto">
                <TabsTrigger value="alzheimers">Alzheimer's Disease</TabsTrigger>
                <TabsTrigger value="imaging">Brain Imaging</TabsTrigger>
                <TabsTrigger value="ai">AI in Medicine</TabsTrigger>
              </TabsList>
              
              <TabsContent value="alzheimers" className="mt-6">
                <Card className="medical-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="w-5 h-5 text-alzheimer" />
                      Understanding Alzheimer's Disease
                    </CardTitle>
                    <CardDescription>
                      Key information about Alzheimer's Disease, symptoms, and progression.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">What is Alzheimer's Disease?</h3>
                        <p className="text-muted-foreground">
                          Alzheimer's disease is a progressive neurological disorder that causes brain cells to degenerate and die. It's the most common cause of dementia — a continuous decline in thinking, behavioral and social skills that affects a person's ability to function independently.
                        </p>
                        
                        <h4 className="text-lg font-medium mt-4 mb-2">Common Symptoms</h4>
                        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                          <li>Memory loss that disrupts daily life</li>
                          <li>Challenges in planning or solving problems</li>
                          <li>Difficulty completing familiar tasks</li>
                          <li>Confusion with time or place</li>
                          <li>Trouble understanding visual images and spatial relationships</li>
                          <li>New problems with words in speaking or writing</li>
                          <li>Misplacing things and losing the ability to retrace steps</li>
                          <li>Decreased or poor judgment</li>
                          <li>Withdrawal from work or social activities</li>
                          <li>Changes in mood and personality</li>
                        </ul>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Disease Progression</h3>
                        <p className="text-muted-foreground mb-4">
                          Alzheimer's typically progresses slowly in three general stages: early (mild), middle (moderate), and late (severe). The symptoms vary based on the person and the stage of the disease.
                        </p>
                        
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="border rounded-md p-4">
                            <h5 className="font-medium">Early Stage (Mild)</h5>
                            <p className="text-sm text-muted-foreground mt-1">
                              A person may function independently but experience memory lapses, such as forgetting familiar words or the location of everyday objects.
                            </p>
                          </div>
                          <div className="border rounded-md p-4">
                            <h5 className="font-medium">Middle Stage (Moderate)</h5>
                            <p className="text-sm text-muted-foreground mt-1">
                              Damage occurs in areas of the brain that control language, reasoning, conscious thought, and sensory processing. Memory and cognitive issues become more pronounced.
                            </p>
                          </div>
                          <div className="border rounded-md p-4">
                            <h5 className="font-medium">Late Stage (Severe)</h5>
                            <p className="text-sm text-muted-foreground mt-1">
                              Individuals lose the ability to respond to their environment, carry on a conversation, and eventually, control movement. They may still say words or phrases.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-2">External Resources</h3>
                        <ul className="space-y-2">
                          <li>
                            <a href="https://www.alz.org" target="_blank" rel="noopener noreferrer" className="text-alzheimer hover:underline flex items-center">
                              Alzheimer's Association
                            </a>
                            <p className="text-sm text-muted-foreground">Comprehensive information about Alzheimer's disease, care, support and research</p>
                          </li>
                          <li>
                            <a href="https://www.nia.nih.gov/health/alzheimers" target="_blank" rel="noopener noreferrer" className="text-alzheimer hover:underline flex items-center">
                              National Institute on Aging
                            </a>
                            <p className="text-sm text-muted-foreground">Government resource with the latest research and information</p>
                          </li>
                          <li>
                            <a href="https://www.mayoclinic.org/diseases-conditions/alzheimers-disease/" target="_blank" rel="noopener noreferrer" className="text-alzheimer hover:underline flex items-center">
                              Mayo Clinic
                            </a>
                            <p className="text-sm text-muted-foreground">Medical information on symptoms, causes, and treatment</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="imaging" className="mt-6">
                <Card className="medical-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ChartPie className="w-5 h-5 text-alzheimer" />
                      Brain Imaging Technologies
                    </CardTitle>
                    <CardDescription>
                      Understanding different brain imaging methods used in Alzheimer's diagnosis.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Types of Brain Imaging</h3>
                        <p className="text-muted-foreground mb-4">
                          Several brain imaging technologies are used to visualize the structure and function of the brain, helping in the diagnosis of Alzheimer's Disease and other neurological conditions.
                        </p>
                        
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="border rounded-md p-4">
                            <h5 className="font-medium">Structural Imaging</h5>
                            <p className="text-sm text-muted-foreground mt-1">
                              These techniques visualize the structure of the brain to identify abnormalities.
                            </p>
                            <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground mt-2">
                              <li><strong>MRI (Magnetic Resonance Imaging):</strong> Uses magnetic fields and radio waves to create detailed images of the brain's structure.</li>
                              <li><strong>CT (Computed Tomography):</strong> Uses X-rays to create cross-sectional images of the brain.</li>
                            </ul>
                          </div>
                          <div className="border rounded-md p-4">
                            <h5 className="font-medium">Functional Imaging</h5>
                            <p className="text-sm text-muted-foreground mt-1">
                              These techniques measure activity within the brain by detecting changes in metabolism, blood flow, or chemical composition.
                            </p>
                            <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground mt-2">
                              <li><strong>PET (Positron Emission Tomography):</strong> Uses radioactive tracers to visualize metabolic processes in the brain.</li>
                              <li><strong>fMRI (Functional MRI):</strong> Measures brain activity by detecting changes in blood flow.</li>
                              <li><strong>SPECT (Single-Photon Emission Computed Tomography):</strong> Similar to PET but uses different tracers and technology.</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Brain Imaging in Alzheimer's Disease</h3>
                        <p className="text-muted-foreground mb-4">
                          Imaging techniques can reveal specific changes in the brain associated with Alzheimer's Disease:
                        </p>
                        
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                          <li>
                            <strong>Brain Atrophy:</strong> MRI can detect shrinkage in specific areas of the brain, particularly the hippocampus and entorhinal cortex, which are typically affected early in Alzheimer's Disease.
                          </li>
                          <li>
                            <strong>Amyloid Plaques:</strong> PET scans with specific tracers can visualize amyloid plaques, a hallmark of Alzheimer's Disease.
                          </li>
                          <li>
                            <strong>Tau Tangles:</strong> Newer PET tracers can detect tau protein tangles, another key feature of Alzheimer's pathology.
                          </li>
                          <li>
                            <strong>Glucose Metabolism:</strong> FDG-PET scans can show reduced glucose metabolism in certain brain regions, indicating decreased neuronal activity.
                          </li>
                          <li>
                            <strong>Blood Flow Changes:</strong> SPECT and certain MRI techniques can reveal alterations in cerebral blood flow.
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-medical-50 border border-medical-100 rounded-lg p-4">
                        <h4 className="font-medium mb-2">Challenges in Imaging Analysis</h4>
                        <p className="text-sm text-muted-foreground">
                          While brain imaging is valuable, interpretation can be challenging due to:
                        </p>
                        <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground mt-1">
                          <li>Normal age-related changes that may resemble pathological changes</li>
                          <li>Variations in brain structure between individuals</li>
                          <li>Subtlety of early disease-related changes</li>
                          <li>Overlap between different types of dementia</li>
                        </ul>
                        <p className="text-sm text-muted-foreground mt-2">
                          AI technologies like BrainWave aim to address these challenges by detecting subtle patterns that might not be immediately apparent to human observers.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="ai" className="mt-6">
                <Card className="medical-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ChartLine className="w-5 h-5 text-alzheimer" />
                      AI in Medical Imaging
                    </CardTitle>
                    <CardDescription>
                      Understanding how artificial intelligence is transforming medical diagnostics.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">How AI Analyzes Medical Images</h3>
                        <p className="text-muted-foreground mb-4">
                          Artificial intelligence, particularly deep learning, has emerged as a powerful tool for analyzing medical images, including brain scans for Alzheimer's Disease detection.
                        </p>
                        
                        <div className="bg-medical-50 border border-medical-100 rounded-lg p-4 mb-4">
                          <h4 className="font-medium mb-2">Key AI Technologies in Medical Imaging</h4>
                          <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                            <li>
                              <strong>Convolutional Neural Networks (CNNs):</strong> Specialized deep learning models that excel at analyzing visual imagery by identifying patterns and features.
                            </li>
                            <li>
                              <strong>Transfer Learning:</strong> Utilizing pre-trained networks on general image data and fine-tuning them for medical applications.
                            </li>
                            <li>
                              <strong>Explainable AI:</strong> Techniques like Grad-CAM that help visualize which parts of an image influenced the AI's decision.
                            </li>
                            <li>
                              <strong>Segmentation Models:</strong> AI that can automatically identify and outline specific structures within medical images.
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-2">AI in Alzheimer's Disease Detection</h3>
                        <p className="text-muted-foreground mb-4">
                          AI models can analyze brain scans to detect patterns associated with Alzheimer's Disease:
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="border rounded-md p-4">
                            <h5 className="font-medium">Pattern Recognition</h5>
                            <p className="text-sm text-muted-foreground mt-1">
                              AI can identify subtle patterns of brain atrophy, reduced metabolism, or abnormal protein deposits that may not be immediately apparent to human observers.
                            </p>
                          </div>
                          <div className="border rounded-md p-4">
                            <h5 className="font-medium">Quantitative Analysis</h5>
                            <p className="text-sm text-muted-foreground mt-1">
                              AI can provide precise measurements of brain structures and compare them to normative data, detecting deviations that may indicate disease.
                            </p>
                          </div>
                          <div className="border rounded-md p-4">
                            <h5 className="font-medium">Predictive Modeling</h5>
                            <p className="text-sm text-muted-foreground mt-1">
                              Some AI models can predict disease progression or convert from mild cognitive impairment to Alzheimer's Disease based on imaging biomarkers.
                            </p>
                          </div>
                          <div className="border rounded-md p-4">
                            <h5 className="font-medium">Multimodal Integration</h5>
                            <p className="text-sm text-muted-foreground mt-1">
                              Advanced AI can integrate data from different imaging modalities, genetic information, and clinical assessments for more comprehensive analysis.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Benefits and Limitations</h3>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium mb-2">Benefits of AI in Medical Imaging</h4>
                            <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                              <li>Can detect subtle patterns human observers might miss</li>
                              <li>Provides objective, quantitative assessments</li>
                              <li>Processes images rapidly, potentially increasing efficiency</li>
                              <li>May detect disease at earlier stages than conventional methods</li>
                              <li>Can analyze large datasets to identify new biomarkers</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Limitations and Challenges</h4>
                            <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                              <li>Requires large, diverse datasets for training</li>
                              <li>"Black box" nature of some models limits interpretability</li>
                              <li>May perpetuate biases present in training data</li>
                              <li>Regulatory challenges for clinical implementation</li>
                              <li>Need for validation across different populations and settings</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-medical-50 border border-medical-100 rounded-lg p-4">
                        <h4 className="font-medium mb-2">The Future of AI in Alzheimer's Research</h4>
                        <p className="text-sm text-muted-foreground">
                          AI technologies like BrainWave represent an evolving frontier in Alzheimer's research and diagnosis. Future developments may include:
                        </p>
                        <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground mt-2">
                          <li>More advanced models that can detect disease years before symptoms appear</li>
                          <li>Integration with other biomarkers like blood tests for more comprehensive assessment</li>
                          <li>Personalized prediction of disease progression and treatment response</li>
                          <li>Fully automated screening tools for population-wide early detection</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;
