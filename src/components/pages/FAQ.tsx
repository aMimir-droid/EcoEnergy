import React from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "How does EcoEnergy help reduce energy consumption?",
      answer: "EcoEnergy uses smart monitoring systems and AI-powered analytics to track your energy usage patterns and provide personalized recommendations for reducing consumption. Our devices can automatically optimize your energy usage based on your habits and preferences."
    },
    {
      question: "What types of devices are compatible with EcoEnergy?",
      answer: "EcoEnergy is compatible with most modern smart home devices, including thermostats, lighting systems, appliances, and solar panels. We provide a comprehensive list of compatible devices and can help you determine if your existing equipment will work with our system."
    },
    {
      question: "How much can I save on my energy bills?",
      answer: "On average, our customers see a 20-30% reduction in their energy bills within the first three months of using EcoEnergy. However, actual savings can vary based on your current energy usage patterns and the specific solutions implemented."
    },
    {
      question: "Is EcoEnergy difficult to install?",
      answer: "Not at all! Most EcoEnergy devices can be installed in minutes without professional help. For more complex installations, we have a network of certified professionals who can assist you."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide 24/7 customer support through our app, email, and phone. Our team of energy experts is always ready to help you optimize your energy usage and resolve any issues you might encounter."
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-green-600" />
                ) : (
                  <Plus className="h-5 w-5 text-green-600" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;