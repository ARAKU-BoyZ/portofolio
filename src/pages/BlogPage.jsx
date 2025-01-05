import { Card } from "@nextui-org/react";
import NavbarApp from "../components/NavbarApp";

const ResumePage = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col">
      {/* Header */}
      <NavbarApp />

      {/* Main Content */}
      <div className="mx-auto flex flex-1 flex-col lg:flex-row px-4 py-8">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 bg-white p-4 rounded-lg shadow-md mb-6 lg:mb-0">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-blue-600 hover:underline">
                Tech
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">
                Lifestyle
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">
                Travel
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">
                Food
              </a>
            </li>
          </ul>
        </aside>
        {/* Blog Content */}
        <main className="flex-1 bg-white p-6 shadow-md rounded-lg lg:ml-6">
          {/* Blog Post */}
          <article className="mb-8">
            <img
              src="../src/assets/a.jpg"
              alt="Blog Cover"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">
              <a href="#">Blog Title</a>
            </h2>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              vel ligula non nulla faucibus venenatis a ac lorem. Donec non ex
              nec ipsum sodales sollicitudin vel nec nulla.
            </p>
          </article>
          {/* Additional Blog Post */}
          <article>
            <img
              src="../src/assets/aku.jpg"
              alt="Blog Cover"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">Another Blog Title</h2>
            <p className="text-gray-700 mb-4">
              Aliquam erat volutpat. Quisque facilisis ligula in mi pulvinar
              tincidunt. Donec sit amet arcu vel purus posuere mollis.
            </p>
          </article>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 My Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ResumePage;
