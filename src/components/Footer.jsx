const Footer = () => {
  return (
    <footer className="bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="flex items-center justify-center">
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-50 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="flex flex-col items-center text-sm text-gray-50 sm:text-center">
              <span>© 2025 <a href="https://flowbite.com/" className="hover:underline">ARAKU&trade;</a></span>
              <span>All Rights Reserved.</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer