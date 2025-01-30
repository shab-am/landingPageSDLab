import NavHeader from "../../components/common/NavHeader";
import Footer from "../../components/common/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavHeader />
      
      <main className="flex-grow bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[#4f46e5] mb-8">About TreeMaster</h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-6">
              TreeMaster is an innovative educational platform designed to help students master Binary Search Trees through interactive learning experiences.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              Our mission is to make learning data structures, particularly Binary Search Trees, more accessible and enjoyable through gamification and interactive visualization.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">The Team</h2>
            <p className="text-gray-600 mb-6">
              TreeMaster was created by Team Innovatex, a group of passionate developers and educators committed to revolutionizing computer science education.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Approach</h2>
            <p className="text-gray-600 mb-6">
              We believe in learning by doing. Our platform combines theoretical knowledge with practical exercises, allowing students to visualize and interact with Binary Search Trees in real-time.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              Have questions or feedback? Reach out to us at:<br />
              Email: support@treemaster.com<br />
              Phone: +91 99999 XXXXX
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs; 