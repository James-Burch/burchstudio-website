import React from "react";
import ContactForm from "../components/forms/ContactForm";

const Contact: React.FC = () => {
  return (
    <div className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-charcoal dark:text-white">
            Let's Work Together
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to transform your online presence? Tell us about your project
            and we'll get back to you with a detailed proposal.
          </p>
        </div>

        <ContactForm />

        {/* Alternative Contact Methods */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-brand-charcoal dark:text-white">
            Other Ways to Reach Us
          </h3>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-navy text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                💬
              </div>
              <h4 className="font-semibold mb-2 text-brand-charcoal dark:text-white">
                WhatsApp
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Quick questions?
              </p>
              <a
                href="https://wa.me/YOUR_WHATSAPP_NUMBER"
                className="text-brand-navy dark:text-blue-400 hover:underline"
              >
                +44 XXX XXX XXXX
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-navy text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                📧
              </div>
              <h4 className="font-semibold mb-2 text-brand-charcoal dark:text-white">
                Email
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Send us an email
              </p>
              <a
                href="mailto:hello@burchstudio.com"
                className="text-brand-navy dark:text-blue-400 hover:underline"
              >
                hello@burchstudio.com
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-navy text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                📅
              </div>
              <h4 className="font-semibold mb-2 text-brand-charcoal dark:text-white">
                Book a Call
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                30-minute strategy call
              </p>
              <a
                href="#"
                className="text-brand-navy dark:text-blue-400 hover:underline"
              >
                Schedule Meeting
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
