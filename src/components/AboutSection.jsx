import { Briefcase, ShoppingCart, Leaf, GraduationCap } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400">Kristoni</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400">A Multi-Sector Hub for Growth and Empowerment</span>
            </h3>

            <p className="text-muted-foreground">
              Kristoni Holdings is a dynamic and diversified company operating across four major sectors: Rentals, E-commerce, Farming, and Education. We bring innovative and accessible solutions to individuals, businesses, and communities alike.
            </p>

            <p className="text-muted-foreground">
              Our mission is to empower people through quality services, sustainable farming practices, digital commerce, and educational opportunities — all under one platform. We are committed to growth, reliability, and community impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center sm:justify-start">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="tel:+233 24 854 8141"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Services Summary Cards */}
          <div className="grid grid-cols-1 gap-6">
            {/* Rentals */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Reliable Rentals</h4>
                  <p className="text-muted-foreground">
                    Offering quality rentals — from event equipment to property and vehicles — with trusted service and timely delivery.
                  </p>
                </div>
              </div>
            </div>

            {/* E-commerce */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <ShoppingCart className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Digital Marketplace</h4>
                  <p className="text-muted-foreground">
                    A growing e-commerce platform where customers can shop and communities can thrive through trade.
                  </p>
                </div>
              </div>
            </div>

            {/* Farming */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Sustainable Farming</h4>
                  <p className="text-muted-foreground">
                    We promote sustainable agriculture by offering fresh farm produce, modern techniques, and market access for farmers.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Learning & Empowerment</h4>
                  <p className="text-muted-foreground">
                    Through courses, resources, and mentorship, we empower individuals with knowledge in farming, business, and beyond.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
