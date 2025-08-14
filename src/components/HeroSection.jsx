import { ArrowDown, ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <div className="slideshow">
          <div
            className="slideshow-image"
            style={{
              backgroundImage:
                "url('https://pixabay.com/get/g31d818e0dc0a5a70443452e4b0938fd77ad53622f2489e5dadd1bcf762a81cb11871dfcff9f0d899057ca67c6ca47b400f3c33c4fa92a5c9485f4068bd1c9c5f_1280.jpg')",
            }}
          ></div>
          <div
            className="slideshow-image"
            style={{
              backgroundImage:
                "url('https://pixabay.com/get/g1151854e1d59bd3acf328906b412a8e9dda97f82a41ef14792dcc6a301960198c67d9175947f488053959601aaa06767a20b9116a39858a05e15fbe4a8dde237_1280.jpg')",
            }}
          ></div>

          <div
            className="slideshow-image"
            style={{
              backgroundImage:
                "url('https://pixabay.com/get/gc6c5384b4decde607debd10d158dbaed3dba9eb998e55260e89e3a6b21c2f51e8fd37ea97b85618adef4bb721484c38dc25af41cf316f5af2b131072fa164a6a_1280.jpg')",
            }}
          ></div>

          <div
            className="slideshow-image"
            style={{
              backgroundImage:
                "url('https://pixabay.com/get/ged5ecad19eb45791274be12a16b263bbfbbe65d2930644342ed935daa48fa43baab8d8735b7fa3063b4fb6584af96093df51f02414675242303e77d685d0d992_1280.jpg')",
            }}
          ></div>

          <div
            className="slideshow-image"
            style={{
              backgroundImage:
                "url('https://pixabay.com/get/g52b859f6f7ec3bbeaae4ddda76e53f31dfebaf39681452188a09d014e705d0daf56f77633b8f079def4b3d54958e230c_1280.jpg')",
            }}
          ></div>
          <div
            className="slideshow-image"
            style={{
              backgroundImage:
                "url('https://pixabay.com/get/g1c563dd85488f464d598059d0d1d03c0261daf76ea50423aca975765bf31b3b85b1afadb6f5cdbc69353d527feff9b68ba4e6f38177afcbe7ca9ca9b22985464_1280.jpg')",
            }}
          ></div>
        </div>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            <span className="text-primary opacity-0 animate-[fadeIn_1s_ease-out_forwards_0.2s]">
              Kristoni <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400">Holdings</span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto opacity-0 animate-[fadeInSlideUp_0.8s_ease-out_forwards_0.4s]">
            Empowering communities through rentals, e-commerce, farming, and education. 
            A one-stop platform for growth, innovation, and opportunity.
          </p>

          <div className="pt-6 opacity-0 animate-[fadeInSlideUp_0.8s_ease-out_forwards_0.6s]">
            <a
              href="#services"
              className="inline-flex items-center px-6 py-3 text-lg font-bold text-white bg-primary rounded-full shadow-lg hover:bg-primary/90 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out group"
            >
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-400">Explore Our Services</span>
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
        <span className="text-sm text-white/80 mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>

      {/* Inline CSS for animations */}
      <style jsx>{`
        .slideshow {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .slideshow-image {
          position: absolute;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transform: scale(1);
          animation: slide 18s infinite ease-in-out;
        }

        .slideshow-image:nth-child(1) {
          animation-delay: 0s;
        }

        .slideshow-image:nth-child(2) {
          animation-delay: 6s;
        }

        .slideshow-image:nth-child(3) {
          animation-delay: 12s;
        }

        @keyframes slide {
          0% {
            opacity: 0;
            transform: scale(1.05);
          }
          10% {
            opacity: 1;
            transform: scale(1);
          }
          33.33% {
            opacity: 1;
            transform: scale(1);
          }
          43.33% {
            opacity: 0;
            transform: scale(1.05);
          }
          100% {
            opacity: 0;
            transform: scale(1.05);
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes fadeInSlideUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};