import NavHeader from "../../components/common/NavHeader";
import Footer from "../../components/common/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavHeader />
      
      <main className="flex-grow bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[#4f46e5] mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using TreeMaster, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. User Accounts</h2>
            <p className="text-gray-600 mb-6">
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">3. Acceptable Use</h2>
            <p className="text-gray-600 mb-6">
              You agree to use TreeMaster only for lawful purposes and in accordance with these Terms. You agree not to share account credentials or attempt to circumvent any security features.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">4. Intellectual Property</h2>
            <p className="text-gray-600 mb-6">
              All content and materials available on TreeMaster are the property of TreeMaster and are protected by copyright and other intellectual property laws.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">5. Changes to Terms</h2>
            <p className="text-gray-600 mb-6">
              We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our platform.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">6. Contact</h2>
            <p className="text-gray-600 mb-6">
              For any questions regarding these Terms, please contact us at legal@treemaster.com
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService; 