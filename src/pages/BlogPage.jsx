import { Card } from "@nextui-org/react";
import NavbarApp from "../components/NavbarApp";
import Layout from "./layout/Layout";
import Footer from "../components/Footer";

const BlogPage = () => {
  return (
    <Layout pageName="Blog">
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
       {/* main */}
       <main className="flex-1 bg-white p-6 shadow-md rounded-lg lg:ml-6">
        <article>
          <img
           src="../src/assets/a.jpg"
           alt=""
           className="w-full h-64 object-cover rounded-lg mb-4"/>
           <h2 className="text-2xl font-bold mb-2">
             <a href="#">Seorang anak laki-laki yang berusaha mengubah karir nya melalui Ilmu Teknologi</a>
           </h2>
           <p className="text-gray-700 mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit alias exercitationem esse, quod aliquid ratione unde tenetur voluptatum delectus sunt voluptates voluptas reiciendis minus consequatur tempora iusto possimus nisi eius?</p>
        </article>
        {/* Blog Post Lainnya */}
        <article>
          <img
           src="../src/assets/react.svg"
           alt=""
           className="w-full h-64 object-cover rounded-lg mb-4"/>
           <h2 className="text-2xl font-bold mb-2">
             <a href="#">Aplikasi web yang sudah di buat olehnya</a>
           </h2>
           <p className="text-gray-700 mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit alias exercitationem esse, quod aliquid ratione unde tenetur voluptatum delectus sunt voluptates voluptas reiciendis minus consequatur tempora iusto possimus nisi eius?</p>
        </article>
       </main>
      </div>

      {/* Footer */}
      {/* <Footer /> */}
    </Layout>
  );
};

export default BlogPage;
