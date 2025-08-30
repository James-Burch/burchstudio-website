import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    projectType: "custom",
    budget: "5000-10000",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Add EmailJS integration here later
    alert("Form ready for EmailJS integration!");
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-brand-charcoal dark:text-white">
        Let's Build Your Website
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Your Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-navy focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="John Smith"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-navy focus:border-transparent dark:bg-gray-700 dark:text-white"
              placeholder="john@company.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Company Name
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-navy focus:border-transparent dark:bg-gray-700 dark:text-white"
            placeholder="Your Company Name"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Project Type
            </label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-navy focus:border-transparent dark:bg-gray-700 dark:text-white"
            >
              <option value="custom">Custom Website</option>
              <option value="template">Template Customization</option>
              <option value="redesign">Website Redesign</option>
              <option value="optimization">SEO Optimization</option>
              <option value="maintenance">Website Maintenance</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Budget Range
            </label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-navy focus:border-transparent dark:bg-gray-700 dark:text-white"
            >
              <option value="1000-2500">£1,000 - £2,500</option>
              <option value="2500-5000">£2,500 - £5,000</option>
              <option value="5000-10000">£5,000 - £10,000</option>
              <option value="10000+">£10,000+</option>
              <option value="template">Template Only (£200-£500)</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Tell Us About Your Project
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-navy focus:border-transparent dark:bg-gray-700 dark:text-white"
            placeholder="Describe your project, goals, timeline, or any specific requirements..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-brand-navy hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition-colors duration-200 transform hover:scale-105"
        >
          Send Project Details 🚀
        </button>
      </form>

      <div className="mt-6 text-center text-gray-500 dark:text-gray-400 text-sm">
        <p>We typically respond within 24 hours</p>
        <p className="mt-2">
          Prefer to talk? WhatsApp us at{" "}
          <a
            href="https://wa.me/447407195061"
            className="text-brand-navy dark:text-blue-400 hover:underline"
          >
            +44 7407 195061
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
