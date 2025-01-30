import { Link } from 'react-router-dom';
import Footer from '../common/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <nav className="bg-white py-4 shadow-md">
        <div className="max-w-6xl mx-auto pl-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-[#4f46e5] text-3xl font-bold">TreeMaster</span>
            </div>
            <div className="flex items-center space-x-3">
              <Link 
                to="/login" 
                className="text-gray-600 hover:text-[#4f46e5] px-4 py-2 rounded-md text-lg font-medium"
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="bg-[#4f46e5] text-white px-6 py-2 rounded-md hover:bg-[#4338ca] text-lg font-medium"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section - Centered */}
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-5xl font-bold text-[#4f46e5] mb-8">
            Master Binary Search Trees<br />
            Through Interactive Learning
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Learn and practice Binary Search Tree concepts through our gamified platform. 
            Progress through levels, earn points, and become a BST expert!
          </p>
          <Link 
            to="/login"
            className="bg-[#4f46e5] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#4f46e5] border-2 border-[#4f46e5] transition-all duration-300"
          >
            Start Learning
          </Link>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-[#4f46e5] text-4xl mb-4">🎮</div>
              <h3 className="text-gray-800 text-xl font-semibold mb-2">Interactive Learning</h3>
              <p className="text-gray-600">Learn through hands-on practice with our interactive visualization tools</p>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-[#4f46e5] text-4xl mb-4">📈</div>
              <h3 className="text-gray-800 text-xl font-semibold mb-2">Track Progress</h3>
              <p className="text-gray-600">Monitor your learning journey with detailed progress tracking</p>
            </div>
            <div className="bg-pink-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-[#4f46e5] text-4xl mb-4">🏆</div>
              <h3 className="text-gray-800 text-xl font-semibold mb-2">Earn Points</h3>
              <p className="text-gray-600">Complete challenges and earn points to unlock new levels</p>
            </div>
          </div>
        </div>

        {/* BST Visualizations Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Visualize Binary Search Trees</h2>
          
          {/* First Row - Two Columns */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Array Representation */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Array Representation</h3>
              <div className="aspect-video overflow-hidden rounded-lg">
                <img 
                  src="https://prettygood236.github.io/assets/img/data-structures-and-algorithms/tree/bst_inorder.gif" 
                  alt="Array Representation of BST"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* BST Operations */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">BST Operations</h3>
              <div className="aspect-video overflow-hidden rounded-lg">
                <img 
                  src="https://www.mathwarehouse.com/programming/images/binary-search-tree/binary-search-tree-degenerating-demo-animation.gif" 
                  alt="BST Operations Animation"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Second Row - Single Centered Column */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Tree Traversal</h3>
              <div className="aspect-video overflow-hidden rounded-lg">
                <img 
                  src="https://tylerewillis.com/static/media/pre-order-depth-first-traversal-animation.gif" 
                  alt="Pre-order Traversal Animation"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;