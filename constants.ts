import { Github, Linkedin, Youtube, Brain, Boxes, Globe } from 'lucide-react';
import { Project, SocialLink, Skill } from './types';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/decoderr24',
    icon: Github,
    label: '@decoderr24'
  },
  {
    name: 'Hugging Face',
    url: 'https://huggingface.co/Decoder24',
    icon: Brain,
    label: 'Decoder24'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rifkybintang/',
    icon: Linkedin,
    label: 'Rifky Bintang'
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@rifkybntng446',
    icon: Youtube,
    label: 'Channel'
  }
];

export const INTERESTS: string[] = [
  "Deep Learning",
  "Large Language Models (LLM)",
  "Machine Learning",
  "Computer Vision",
  "Object Detection",
  "MLOps"
];

export const PROJECTS: Project[] = [
  {
    title: "Indonesian NER using BERT",
    description: "A fine-tuned BERT model specifically designed for Named Entity Recognition tasks within the Indonesian language context.",
    tags: ["NLP", "BERT", "HuggingFace", "Python"],
    link: "https://huggingface.co/Decoder24/indonesian-ner-bert",
    category: "NLP",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Indonesian Batik Classifier",
    description: "Leveraging Vision Transformers (ViT) to accurately classify different patterns of traditional Indonesian Batik fabrics.",
    tags: ["Computer Vision", "ViT", "Transformers", "Classification"],
    link: "https://github.com/decoderr24/Indonesian-Batik-ViT",
    category: "CV",
    image: "https://images.unsplash.com/photo-1590605207864-0e6d1ceb5f89?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Premier League Prediction",
    description: "A predictive model analyzing match statistics to forecast outcomes of English Premier League soccer matches.",
    tags: ["Machine Learning", "Data Analysis", "Pandas", "Scikit-learn"],
    link: "https://github.com/decoderr24/premier-league_prediction",
    category: "Prediction",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0565c6a?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "ViT for Limited Medical Data",
    description: "Research and implementation of Transformer models optimized for medical imaging datasets with limited samples.",
    tags: ["Healthcare AI", "ViT", "Research", "Deep Learning"],
    link: "https://github.com/decoderr24/ViT-for-Limited-Medical-Data",
    category: "CV",
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Sugarcane Leaf Disease",
    description: "An efficient mobile-ready model using MobileNetV2-CNN to detect and classify diseases in sugarcane leaves.",
    tags: ["CNN", "MobileNet", "Agriculture", "TensorFlow"],
    link: "https://github.com/decoderr24/klasifikasi-tebu-mobilenetv2",
    category: "CV",
    image: "https://images.unsplash.com/photo-1611776961386-03e46823042f?q=80&w=1000&auto=format&fit=crop"
  }
];