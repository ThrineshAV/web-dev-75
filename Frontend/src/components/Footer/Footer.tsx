

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="container mx-auto flex flex-wrap justify-between gap-8 px-4 md:flex-nowrap">
                
                <div className="w-full md:w-1/4">
                    <h3 className="text-xl font-semibold text-white mb-4">About Us</h3>
                    <p>We are dedicated to providing up-to-date financial insights and resources to help you make better financial decisions.</p>
                </div>

                <div className="w-full md:w-1/4">
                    <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
                    <ul>
                        <li><a href="#home" className="hover:text-white">Home</a></li>
                        <li><a href="#services" className="hover:text-white">Services</a></li>
                        <li><a href="#about" className="hover:text-white">About Us</a></li>
                        <li><a href="#contact" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>

                <div className="w-full md:w-1/4">
                    <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
                    <p>Email: info@financewebsite.com</p>
                    <p>Phone: +1 (234) 567-890</p>
                    <p>Address: 123 Finance St, New York, NY</p>
                </div>

                <div className="w-full md:w-1/4">
                    <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Facebook</a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Twitter</a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
                    </div>
                </div>
            </div>

            <div className="text-center mt-8 text-gray-400">
                <p>&copy; {new Date().getFullYear()} Finance Website. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
