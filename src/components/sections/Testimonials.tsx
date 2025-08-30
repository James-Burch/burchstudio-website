import React from 'react';
import { Link } from 'react-router-dom';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Alan Kingston",
      company: "Noble Mortgages",
      text: "Burch Studio built our amazing website. We've seen a 40% increase in leads since having it.",
      rating: 5
    },
    {
      name: "Rob Cunliffe", 
      company: "Refine Barbers",
      text: "Our new site looks fantastic and functions perfectly. James at Burch Studio was a pleasure to work with.",
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-charcoal dark:text-white">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real results from real businesses who trusted us with their online presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Star rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-center italic text-lg">
                "{testimonial.text}"
              </p>
              
              <div className="text-center">
                <h4 className="font-semibold text-brand-charcoal dark:text-white">
                  {testimonial.name}
                </h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-brand-charcoal dark:text-white">
            Ready to Join Them?
          </h3>
          <Link
            to="/contact"
            className="bg-brand-navy hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 inline-block"
          >
            Start Your Project Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;