import {Link} from "@mui/material";

export default function App(){


  return(
  <>

    <div>

      
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">Smart Mall</div>
        <div className="space-x-6">
          <Link href="#" className = "!no-underline"><a className="text-gray-600 hover:text-black">Support</a></Link>
          <Link href="#" className = "!no-underline"><a className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">Login</a></Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-100 ">
        <h1 className="text-4xl font-bold text-gray-800">Transform Your Shopping Experience</h1>
        <p className="text-lg text-gray-600 mt-4">Smart Mall Bot provides real-time assistance, navigation, and interactive shopping features.</p>
        {/* <Link href="#">
          <a className="mt-6 inline-block bg-orange-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-orange-600">Learn More</a>
        </Link> */}
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-20 px-10">
        <div className="bg-white shadow-md p-6 text-center rounded-lg">
          <h2 className="text-2xl font-semibold">Chatbot Assistance</h2>
          <p className="text-gray-600 mt-2">Locate stores, find products, and get promotions in real-time.</p>
        </div>
        <div className="bg-white shadow-md p-6 text-center rounded-lg">
          <h2 className="text-2xl font-semibold">3D Mapping & Navigation</h2>
          <p className="text-gray-600 mt-2">Navigate efficiently with the shortest path guidance.</p>
        </div>
        <div className="bg-white shadow-md p-6 text-center rounded-lg">
          <h2 className="text-2xl font-semibold">Online Parking Assistance</h2>
          <p className="text-gray-600 mt-2">Find available parking spots quickly and easily.</p>
        </div>
        <div className="bg-white shadow-md p-6 text-center rounded-lg">
          <h2 className="text-2xl font-semibold">SOS Emergency Alerts</h2>
          <p className="text-gray-600 mt-2">Help in cases of lost items or missing children.</p>
        </div>
        <div className="bg-white shadow-md p-6 text-center rounded-lg">
          <h2 className="text-2xl font-semibold">Stock Clearance Ads</h2>
          <p className="text-gray-600 mt-2">Boost slow-moving stock with targeted promotions.</p>
        </div>
        <div className="bg-white shadow-md p-6 text-center rounded-lg">
          <h2 className="text-2xl font-semibold">Engagement Rewards</h2>
          <p className="text-gray-600 mt-2">Earn tokens for shopping and interactions.</p>
        </div>
      </section>
    </div>

  </>
  );
}