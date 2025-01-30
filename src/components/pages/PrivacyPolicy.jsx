import NavHeader from "../../components/common/NavHeader";
import Footer from "../../components/common/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavHeader />
      
      <main className="flex-grow bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[#4f46e5] mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-6">
              We collect information that you provide directly to us, including your name, email address, and learning progress data. This information is used to provide and improve our educational services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>To provide and maintain our Service</li>
              <li>To track your learning progress</li>
              <li>To communicate with you about your account</li>
              <li>To improve our educational content</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about this Privacy Policy, please contact us at privacy@treemaster.com
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 