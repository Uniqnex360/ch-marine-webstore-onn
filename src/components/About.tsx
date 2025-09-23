import React from 'react';
import { Ship, Award, Users, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          About CHMarine
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          For over 50 years, CH Marine Ltd has grown to become Ireland's leading marine equipment 
          supplier and safety services centre, serving customers nationwide and globally.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        <div className="text-center">
          <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Clock className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mb-2">50+</h3>
          <p className="text-gray-600">Years of Experience</p>
        </div>
        
        <div className="text-center">
          <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Users className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mb-2">120</h3>
          <p className="text-gray-600">Leading Brands</p>
        </div>
        
        <div className="text-center">
          <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Ship className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mb-2">4,000+</h3>
          <p className="text-gray-600">Products Available</p>
        </div>
        
        <div className="text-center">
          <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Award className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mb-2">500+</h3>
          <p className="text-gray-600">SOLAS Hire Liferafts</p>
        </div>
      </div>

      {/* Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Company</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              CH Marine Ltd was established over 50 years ago and has grown to become Ireland's leading 
              marine equipment supplier and safety services centre. We supply nationwide throughout Ireland 
              via our own stores or through our dealer network and have, over more recent years, built up 
              a substantial global internet trade covering both B2B and B2C.
            </p>
            <p>
              We also operate the CH Marine INSTORE convenience chandlery franchises and run our own 
              product line under the SOWESTER brand.
            </p>
          </div>
        </div>
        
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Marine equipment warehouse"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* What We Supply Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">What We Supply</h2>
        <div className="bg-gray-50 rounded-lg p-8">
          <p className="text-gray-600 leading-relaxed text-lg">
            CH Marine holds one of the most comprehensive ranges of marine products available in Europe. 
            We carry over 4,000 lines of active stock and supply all the marine industries: leisure, 
            commercial fishing, merchant shipping, MOD, government departments & NGOs.
          </p>
        </div>
      </div>

      {/* Locations Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Where We Are Located</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Skibbereen</h3>
            <p>
              CH Marine headquarters are located in the heart of the Irish Sailing Riviera of West Cork 
              in the town Skibbereen. Our central distribution warehouse, comprehensive retail outlet 
              and SOLAS approved Service Station are all based there.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Cork City</h3>
            <p>
              Cork City is the home to CH Marine's second important outlet, where we operate a 10,000 
              square feet facility for wholesale and retail. This unit also houses a lifejacket 
              service department.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Northern Ireland</h3>
            <p>
              Through our subsidiary company CH Marine (NI) Ltd, we operate two outlets in Northern 
              Ireland namely Kilkeel and Newtonards. The latter includes a SOLAS approved service 
              station under the jurisdiction of the MCA.
            </p>
          </div>
        </div>
      </div>

      {/* Brands Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Who We Represent</h2>
        <div className="bg-blue-50 rounded-lg p-8">
          <p className="text-gray-700 leading-relaxed text-lg">
            CH Marine is an approved distributor for 120 of the world's leading brands in marine products. 
            Jabsco pumps, Baltic lifejackets, Viking liferafts, McMurdo EPRIBS and Pains Wessex/Comet 
            pyrotechnics are just a few with whom we have had long and successful partnerships over many years.
          </p>
        </div>
      </div>

      {/* Websites Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Websites</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Main Website</h3>
            <p className="text-gray-600 mb-3">
              Our main website can be found at <a href="https://www.chmarine.com/" className="text-blue-600 hover:text-blue-700 underline">https://www.chmarine.com/</a>
            </p>
            <p className="text-gray-600">Here you can access our primary range of products.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Specialised Range Websites</h3>
            <p className="text-gray-600 mb-4">
              To help our customers with special interests we also operate several satellite websites 
              that are dedicated to particular product ranges:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Workwear365 - <a href="https://www.workwear365.ie/" className="text-blue-600 hover:text-blue-700 underline">https://www.workwear365.ie/</a></li>
              <li>• Kayaks365 - <a href="https://www.kayaks365.com/" className="text-blue-600 hover:text-blue-700 underline">https://www.kayaks365.com/</a></li>
              <li>• Meaco Domestic Dehumidifiers - <a href="https://www.meaco-dehumidifiers.ie/" className="text-blue-600 hover:text-blue-700 underline">https://www.meaco-dehumidifiers.ie/</a></li>
              <li>• Meaco Domestic Dehumidifiers - <a href="https://www.meaco.ie/" className="text-blue-600 hover:text-blue-700 underline">https://www.meaco.ie/</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Safety Servicing and Related Services</h3>
            <p className="text-gray-600">
              CH Marine operates an approved service centre for liferafts, lifejackets, immersion suits, 
              inflatable MOB buoys, inflatable self-righting equipment and rescue boats. We are an approved 
              shore-based maintenance facility for EPIRBs, PLBs and GMDSS equipment and we operate and 
              manage a fleet of over 500 SOLAS and leisure hire liferafts.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">SAMS Management System</h3>
            <p className="text-gray-600">
              We are also the developers of SAMS (Safety Asset Management System), a cloud based system 
              allowing full management of all your safety equipment with notifications of pending service 
              requirements, as well as comprehensive record keeping and reporting.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Ethos</h2>
        <div className="text-center mb-8">
          <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto">
            At CH Marine, we pride ourselves on our customer service and we strive for continued improvement, 
            development and growth. Our mission is to supply leading brand products and services at competitive 
            prices with efficient delivery times, backed by a high level of technical support and product knowledge.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto mt-4">
            We take our corporate responsibility very seriously and never compromise safety over gain.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality First</h3>
            <p className="text-gray-600">
              Every product we sell meets the highest standards of quality and durability, 
              tested in real marine conditions.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Customer Focus</h3>
            <p className="text-gray-600">
              Our customers are at the heart of everything we do. We listen, understand, 
              and deliver solutions that exceed expectations.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Ship className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Safety First</h3>
            <p className="text-gray-600">
              We never compromise safety over gain and take our corporate responsibility 
              very seriously in all our operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;