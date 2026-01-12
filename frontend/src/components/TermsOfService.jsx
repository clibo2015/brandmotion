import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-6xl font-akira text-gray-900 mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Last updated:</strong> January 12, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600">
                By accessing and using the BrandSurge Creative website and services, you accept and agree to be bound by 
                the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services</h2>
              <p className="text-gray-600 mb-4">
                BrandSurge Creative provides creative design services including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Logo design and brand identity</li>
                <li>Marketing materials and campaigns</li>
                <li>Digital printing services</li>
                <li>Creative consultation</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Project Terms</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Project Scope</h3>
              <p className="text-gray-600 mb-4">
                All projects will be clearly defined in a separate project agreement or proposal. Changes to project scope 
                may result in additional charges.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Revisions</h3>
              <p className="text-gray-600 mb-4">
                Each project includes a specified number of revision rounds. Additional revisions beyond the agreed amount 
                will be charged at our standard hourly rate.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.3 Timeline</h3>
              <p className="text-gray-600">
                Project timelines are estimates and may be affected by client feedback response times, scope changes, 
                or unforeseen circumstances.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
              <ul className="list-disc pl-6 text-gray-600">
                <li>50% deposit required before project commencement</li>
                <li>Final payment due upon project completion</li>
                <li>Late payments may incur additional charges</li>
                <li>All prices are in South African Rand (ZAR) unless otherwise specified</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Client Rights</h3>
              <p className="text-gray-600 mb-4">
                Upon full payment, clients receive full rights to the final approved designs for their intended use.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Portfolio Rights</h3>
              <p className="text-gray-600">
                BrandSurge Creative reserves the right to display completed work in our portfolio and marketing materials 
                unless otherwise agreed in writing.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Client Responsibilities</h2>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Provide clear project briefs and requirements</li>
                <li>Supply necessary materials and content in a timely manner</li>
                <li>Provide feedback within agreed timeframes</li>
                <li>Ensure all provided content is legally owned or licensed</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-600">
                BrandSurge Creative's liability shall not exceed the total amount paid for the specific project. 
                We are not liable for any indirect, incidental, or consequential damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
              <p className="text-gray-600">
                Either party may terminate a project with written notice. In case of termination, payment is due for 
                work completed up to the termination date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Governing Law</h2>
              <p className="text-gray-600">
                These terms shall be governed by and construed in accordance with the laws of South Africa.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600">
                  <strong>BrandSurge Creative</strong><br />
                  Email: hello@brandsurge.co.za<br />
                  Phone: +27 12 345 6789
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;