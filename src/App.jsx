import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  ShieldCheck, 
  Handshake, 
  CheckCircle,
  Factory,
  Search,
  Package,
  Truck,
  Send,
  Camera,
  User,
  ChevronDown
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Custom Leaf Icon for separators
  const LeafIcon = () => (
    <img 
      src="https://via.placeholder.com/24x24?text=Leaf" 
      alt="Leaf" 
      className="inline-block mx-2 w-5 h-5 object-contain opacity-90" 
    />
  );

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 overflow-x-hidden">
      
      {/* --- Navigation --- */}
      <div className="absolute top-0 left-0 w-full z-50 px-6 md:px-12 py-6 flex justify-center">
        <nav className="w-full max-w-7xl h-16 bg-white/30 backdrop-blur-md rounded-full px-6 shadow-sm border border-white/40 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center cursor-pointer">
            <img
              src="/images/logo.png"
              alt="logo"
              className="h-20 md:h-24 w-auto object-contain"
            />
          </div>

          {/* Links Container */}
          <div className="hidden md:flex items-center gap-8 text-gray-800 font-medium text-[15px]">
            <a href="#" className="hover:text-green-800 transition-colors">Home</a>
            <div className="flex items-center gap-1 cursor-pointer hover:text-green-800 transition-colors">
              Business <ChevronDown size={14} />
            </div>
            <a href="#" className="hover:text-green-800 transition-colors">About Us</a>
            <a href="#" className="hover:text-green-800 transition-colors">Export Ready</a>
            
            <button className="ml-4 bg-[#4CAF50] hover:bg-green-600 text-white px-8 py-2.5 rounded-full text-[15px] font-medium transition-all shadow-sm">
              Contact Us
            </button>
          </div>

          <button className="md:hidden text-gray-800 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu size={28} />
          </button>
        </nav>
      </div>

      {/* --- Hero Section --- */}
      <section className="relative h-screen flex items-center px-6 md:px-16 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/images/main.png")',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          <div className="absolute inset-0 bg-black/15"></div>
        </div>

        <div className="relative z-10 max-w-4xl pt-20">
          <h1 className="text-5xl md:text-[3.5rem] font-bold text-white mb-4 tracking-tight leading-tight">
            Premium Food Products
          </h1>
          <div className="flex flex-wrap items-center text-base md:text-[20px] text-white mb-8 font-normal drop-shadow-md gap-2">
            <span>Authentic Origins</span>
            <img
              src="/images/herologo.png"
              alt="leaf"
              className="w-5 h-5 object-contain"
            />            
            <span>Premium Quality</span>
            <img
              src="/images/herologo.png"
              alt="leaf"
              className="w-5 h-5 object-contain"
            />
            <span>Trusted Globally</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#388E3C] text-white px-8 py-2.5 rounded-lg font-medium text-[15px] hover:bg-green-700 transition-all shadow-md">
              Contact Us
            </button>
            <button className="bg-transparent border-[1.5px] border-white/70 text-white px-8 py-2.5 rounded-lg font-medium text-[15px] hover:bg-white/10 transition-all">
              Explore Products
            </button>
          </div>
        </div>
      </section>

      {/* --- About Section --- */}
      <section className="relative pt-32 pb-40 px-6 md:px-16 max-w-7xl mx-auto overflow-hidden">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">About Anavi Global</h2>
            <p className="text-[#A0A0A0] leading-relaxed text-[15px] font-medium text-left">
              Anavi Global is a Chennai, India-based company building premium food products sourced directly from their regions of origin. Under our flagship brand Padmavathi, we offer aromatic short-grain rice such as Jeera Rice widely known as (Seeraga Samba, kaima and Govind bhog ) for the Indian market, while we also supply premium basmati rice exclusively for export. We focus on delivering consistent quality, authenticity, and trust through direct sourcing and careful selection.
            </p>
            <p className="text-[#A0A0A0] leading-relaxed text-[15px] font-medium text-left pb-4">
              With a strong foundation in sourcing and quality, we are expanding across multiple food categories to build trusted products for everyday consumption.
            </p>
            
            {/* Custom Slanted Button */}
            <div className="relative inline-block drop-shadow-md cursor-pointer group">
              <button 
                className="bg-[#388E3C] text-white pl-8 pr-12 py-3.5 font-semibold text-[15px] group-hover:bg-green-700 transition-all rounded-l-md"
                style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)' }}
              >
                EXPLORE MORE
              </button>
            </div>
          </div>

          {/* Image Collage */}
          <div className="relative w-full mt-16 md:mt-0 flex flex-col items-end">
             <div className="w-full md:w-[95%] h-[180px] md:h-[220px] rounded-3xl overflow-hidden shadow-sm mb-6">
                <img src="/images/about1.png" className="w-full h-full object-cover" alt="Grains with scoop" />
             </div>
             
             <div className="w-full md:w-[95%] h-[240px] md:h-[320px] rounded-3xl overflow-hidden shadow-sm">
                <img src="/images/about2.png" className="w-full h-full object-cover" alt="Rice Field" />
             </div>
             
             <div className="absolute bottom-[-30px] md:bottom-[-10px] left-[-10px] md:left-[5%] w-[220px] md:w-[280px] aspect-square rounded-[2rem] overflow-hidden shadow-xl border-[12px] md:border-[16px] border-white z-10 bg-white">
                <img src="/images/about3.png" className="w-full h-full object-cover" alt="Processing" />
             </div>
          </div>
        </div>
        {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl pointer-events-none">
          <img
            src="/images/belowabout.png"
            alt="pattern"
            className="w-full object-contain opacity-40"
          />
        </div> */}
      </section>

      {/* --- Sourcing Section --- */}
      <section className="relative bg-[#F5FAF5] py-32 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          <div className="space-y-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">Sourcing & Origin</h2>
            <p className="text-[#A0A0A0] leading-relaxed text-[15px] font-medium text-left">
              We source rice from trusted regions across India, including aromatic short-grain varieties for the domestic market and premium basmati from the Himalayan foothills for export.
            </p>
            
            <div className="grid grid-cols-3 gap-4 max-w-md py-2">
              <div className="flex flex-col items-center gap-3">
                 <img src="/images/sourcelogo1.png" alt="Authentic Origin" className="w-10 h-10 object-contain" />
                 <span className="text-[13px] text-gray-800 font-medium text-center">Authentic Origin</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                 <img src="/images/sourcelogo2.png" alt="Direct Partnerships" className="w-10 h-10 object-contain" />
                 <span className="text-[13px] text-gray-800 font-medium text-center">Direct Partnerships</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                 <img src="/images/sourcelogo3.png" alt="Quality Assured" className="w-10 h-10 object-contain" />
                 <span className="text-[13px] text-gray-800 font-medium text-center">Quality Assured</span>
              </div>
            </div>

            <div className="relative inline-block drop-shadow-md cursor-pointer group mt-4">
              <button 
                className="bg-[#388E3C] text-white pl-8 pr-12 py-3.5 font-semibold text-[15px] group-hover:bg-green-700 transition-all rounded-l-md uppercase tracking-wide"
                style={{ clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0 100%)' }}
              >
                EXPLORE OUR PRODUCTS
              </button>
            </div>
          </div>

          <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
             <img src="/images/sourcemain.png" className="w-full h-full object-cover" alt="Farmer hands planting" />
          </div>
        </div>
      </section>

      {/* --- Our Processes --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center relative overflow-hidden">
        <h2 className="text-4xl font-bold mb-20 text-gray-900">Our Processes</h2>
        
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 relative max-w-4xl mx-auto">
          <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] border-t-[1.5px] border-dashed border-gray-400 -z-10"></div>
          
          {[
            { id: 1, label: "Authentic Mills",img: "/images/processlogo1.png" },
            { id: 2, label: "Quality Testing",img: "/images/processlogo2.png" },
            { id: 3, label: "Packaging",img: "/images/processlogo3.png" },
            { id: 4, label: "Delivery",img: "/images/processlogo4.png" }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-2">
              <div className="w-20 h-20 flex items-center justify-center">
                <img src={item.img} 
                alt={item.label} className="w-16 h-16 object-contain" />
              </div>
              <p className="font-medium text-gray-900 text-[15px]">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Brand Section --- */}
      <section className="py-24 px-6 bg-[#F6FCF6] relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          
          <div className="flex items-center justify-center mb-20 gap-3">
             <div className="relative flex items-center justify-center min-w-[150px] h-[75px]">
               <svg 
                 className="absolute inset-0 w-full h-full text-[#388E3C]" 
                 preserveAspectRatio="none" 
                 viewBox="0 0 100 100" 
                 fill="currentColor"
               >
                 <path d="M 12 4 L 92 14 C 97 14.5 100 18 100 24 L 100 76 C 100 82 97 85.5 92 86 L 12 96 C 5 96.5 0 91 0 82 L 0 18 C 0 9 5 3.5 12 4 Z" />
               </svg>
               <span className="relative z-10 text-white text-[48px] lg:text-[54px] font-bold tracking-tight leading-none pb-1">
                 Our
               </span>
             </div>
             <div className="text-[#1A1A1A] text-[48px] lg:text-[54px] font-bold tracking-tight leading-none">
               Brand
             </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl">
            {[
              { title: "BASMATI RICE", link: "View Varieties" },
              { title: "NON-BASMATI RICE", link: "View Varieties" }
            ].map((product, idx) => (
              <div key={idx} className="bg-white p-12 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col items-center transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                <div className="w-full h-80 mb-8 flex items-center justify-center">
                   <img src="/images/brandrice1.png" className="h-full object-contain drop-shadow-xl" alt={product.title} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide">{product.title}</h3>
                <a href="#" className="text-[#408499] font-medium text-[15px] underline decoration-1 underline-offset-4 hover:text-[#2d6171] transition-colors">
                  {product.link}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Connect With Us --- */}
      <section className="py-24 px-6 bg-[#FAFAFA] text-center flex flex-col items-center">
        <h2 
          className="text-[40px] md:text-[56px] font-black mb-6 tracking-widest uppercase"
          style={{
            color: '#1A1A1A',
            WebkitTextStroke: '2px #ffffff',
            textShadow: '3px 3px 0px #1A1A1A, 4px 4px 0px #1A1A1A, 5px 5px 0px #1A1A1A'
          }}
        >
          Connect With Us
        </h2>
        <p className="text-gray-800 text-lg md:text-[22px] font-medium mb-10">
          Expand Your Business Globally with Reliable Rice Supply
        </p>
        <button className="bg-[#388E3C] hover:bg-green-700 text-white px-10 py-3 rounded-xl font-medium text-[16px] transition-all shadow-sm">
          Contact Us
        </button>
      </section>

      {/* --- Footer --- */}
      <footer className="relative bg-[#8bb589] text-white pt-16 md:pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 flex flex-col">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-4">
            {/* Logo Area (Left) */}
            <div className="w-full md:w-[40%] flex items-center justify-center md:justify-start h-full md:pl-6 lg:pl-10 pb-6 md:pb-0">
               <img 
                 src="/images/logo.png" 
                 alt="Anavi Global Logo" 
                 className="h-28 md:h-32 lg:h-36 object-contain relative z-10" 
               />
            </div>

            {/* Links Area (Middle) */}
            <div className="w-full md:w-[25%] flex flex-col items-center md:items-start gap-3 md:gap-4 text-[17px] font-medium pt-2">
              <a href="#" className="hover:text-green-900 transition-colors">Abouts</a>
              <a href="#" className="hover:text-green-900 transition-colors">Products</a>
              <a href="#" className="hover:text-green-900 transition-colors">Global Presence</a>
              <a href="#" className="hover:text-green-900 transition-colors">Contact</a>
            </div>

            {/* Contact Info Area (Right) */}
            <div className="w-full md:w-[35%] flex flex-col items-center md:items-start gap-3 md:gap-4 text-[17px] font-medium pt-2">
              <p>+91 99999 99999</p>
              <p>info@anaviglobal.com</p>
              <p>Chennai, India</p>
              <div className="flex gap-4 mt-2">
                <Send className="cursor-pointer hover:scale-110 transition-transform" size={22} />
                <Camera className="cursor-pointer hover:scale-110 transition-transform" size={22} />
                <User className="cursor-pointer hover:scale-110 transition-transform" size={22} />
              </div>
            </div>
          </div>

          {/* Copyright Area */}
          <div className="mt-16 md:mt-24 pt-6 border-t-[1.5px] border-dashed border-white/50 flex flex-col md:flex-row justify-between items-center text-[13px] font-medium opacity-90 gap-4">
            <p>Copyright © 2026 PM Media. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;