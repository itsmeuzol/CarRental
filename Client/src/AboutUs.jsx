import {
  Car,
  Shield,
  Cpu,
  Calendar,
  Users,
  DollarSign,
  Lock,
  Leaf,
} from "lucide-react";

function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-16 space-y-24">
        {/* Hero Section */}
        <header className="text-center max-w-3xl mx-auto space-y-6">
          <h1 className="text-5xl font-bold tracking-tight">About Us</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Welcome to AutoFusion – your trusted hub for buying, renting,
            bidding, and servicing vehicles, designed to meet every automotive
            need under one platform.
          </p>
          <div className="pt-4">
            <Car className="w-16 h-16 mx-auto text-black opacity-80" />
          </div>
        </header>

        {/* Who We Are & Mission */}
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed">
              At AutoFusion, we bring innovation to the automotive world by
              offering a complete ecosystem — from purchasing and renting
              vehicles to participating in exciting auctions and booking
              professional servicing. With advanced technology, transparent
              processes, and customer-first values, we make automotive access
              smarter and simpler.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-semibold">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to empower individuals and businesses with a
              seamless vehicle experience — whether you’re buying your dream
              car, renting for your travels, bidding for deals, or ensuring your
              vehicle's top condition through our servicing network. AutoFusion
              makes it easy, secure, and accessible for everyone.
            </p>
          </section>
        </div>

        {/* What We Offer */}
        <section className="space-y-12 max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="group p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
                  <Shield className="w-6 h-6 text-black" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">
                    Quality-Assured Vehicles
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Every vehicle listed on AutoFusion goes through strict
                    quality checks to ensure you only buy, rent, or bid on the
                    best.
                  </p>
                </div>
              </div>
            </div>

            <div className="group p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
                  <Cpu className="w-6 h-6 text-black" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">
                    Smart Bidding System
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Participate in real-time vehicle auctions, place smart bids,
                    and win deals at your price with complete transparency.
                  </p>
                </div>
              </div>
            </div>

            <div className="group p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
                  <Calendar className="w-6 h-6 text-black" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">
                    Flexible Rental Plans
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Choose from daily, weekly, or monthly rental options — ideal
                    for personal adventures or business needs, all with clear
                    pricing and policies.
                  </p>
                </div>
              </div>
            </div>

            <div className="group p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
                  <Users className="w-6 h-6 text-black" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">
                    Professional Servicing
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Book vehicle servicing with trusted professionals easily
                    through our platform, ensuring your ride stays in perfect
                    condition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose AutoFusion */}
        <section className="space-y-12 max-w-6xl mx-auto bg-gray-50 rounded-3xl p-12">
          <h2 className="text-3xl font-semibold text-center">
            Why Choose AutoFusion?
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="group">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-white">
                  <Shield className="w-6 h-6 text-black" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Trusted Marketplace</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Verified listings, reliable sellers, and secure transactions
                    — we ensure peace of mind at every step.
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-white">
                  <DollarSign className="w-6 h-6 text-black" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Best Value Deals</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Whether buying, renting, or bidding, our platform brings you
                    unbeatable prices and transparent offers.
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-white">
                  <Lock className="w-6 h-6 text-black" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">
                    Secure & Easy Process
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Easy booking, secure payments, and user-friendly navigation
                    designed for the modern automotive buyer and renter.
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-white">
                  <Leaf className="w-6 h-6 text-black" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">
                    Sustainable Mobility
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Encouraging the reuse and extended lifecycle of vehicles to
                    promote eco-friendly automotive practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-semibold">
            Experience the Future of Automotive Access
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Join thousands who trust AutoFusion to buy, rent, bid, and service
            vehicles with ease, security, and innovation. Your journey to
            smarter mobility starts here.
          </p>
          <div className="pt-4">
            <Car className="w-12 h-12 mx-auto text-black animate-pulse" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default AboutUs;
