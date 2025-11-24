export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-deep-purple to-purple-700 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 font-satoshi">
              <p>
                <a href="tel:817-966-3989" className="hover:text-lavender-300 transition-colors">
                  📞 817-966-3989
                </a>
              </p>
              <p>
                <a href="mailto:GoretyDNP@gmail.com" className="hover:text-lavender-300 transition-colors">
                  📧 GoretyDNP@gmail.com
                </a>
              </p>
              <p className="text-white/80">
                📍 2204 Joe Battle Blvd Suite D203B
                <br />
                El Paso, TX 79938
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2 font-satoshi">
              <p>
                <a href="/" className="hover:text-lavender-300 transition-colors">
                  Home
                </a>
              </p>
              <p>
                <a href="#about" className="hover:text-lavender-300 transition-colors">
                  About Dr. Gorety
                </a>
              </p>
              <p>
                <a href="#services" className="hover:text-lavender-300 transition-colors">
                  Services
                </a>
              </p>
              <p>
                <a href="#contact" className="hover:text-lavender-300 transition-colors">
                  Contact
                </a>
              </p>
            </div>
          </div>

          {/* Practice Info */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Practice</h3>
            <div className="space-y-2 font-satoshi text-white/80">
              <p>
                Board-Certified Psychiatric
                <br />
                Nurse Practitioner
              </p>
              <p>
                Mental Health Counseling &<br />
                Medication Management
              </p>
              <p>Telehealth Sessions Available</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center font-satoshi text-white/70 text-sm">
          <p>&copy; 2025 Zimuche Health Harmony. All rights reserved.</p>
          <p className="mt-2">Serving El Paso, Texas with compassionate mental health care.</p>
        </div>
      </div>
    </footer>
  )
}
