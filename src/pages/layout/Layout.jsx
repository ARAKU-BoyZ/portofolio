import React from 'react';
import NavbarApp from '../../components/NavbarApp';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Layout = ({pageName, children}) => {
  return (
    <>
      <div className='h-full bg-gray-100'>
        <div className='h-full'>
          <div className="min-h-full">
            {/* Navbar */}
            <NavbarApp />

            {/* Header */}
            <Header name={pageName} />

            <main>
              <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                {/* <!-- Your content --> */}
                {children}
              </div>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
