"use client";
import { Link } from "@mui/material";
import { useState } from "react";

export default function Page() {
  const [lnk1,setLnk1] = useState(false);
  const [lnk2,setLnk2] = useState(false);
  const[lnk3,setLnk3] = useState(false);
  const[lnk4,setLnk4] = useState(false);
  return (
    <div className="h-full">

      
      <nav className="bg-gray-800 shadow-md py-4 px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">Smart Mall</div>
        <div className="space-x-6">
          <Link
            href={lnk1 ? "/login/seller" : undefined}
            onClick = {() => setLnk1(!lnk1)}
            className="!no-underline !text-gray-300 !hover:text-white cursor-pointer"
          >
            Support
          </Link>
          <Link
            href={lnk2 ? "/login/customer" : undefined}
            onClick = {() => setLnk2(!lnk2)}
            className="!no-underline !text-white px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-500 cursor-pointer"
          >
            Login
          </Link>
        </div>
      </nav>

      
      <section className="text-center py-20 bg-[url('/mall.webp')] bg-cover bg-center m-[2vw] bg-gray-800 text-white">
        <h1 className="text-4xl font-bold text-white">
          Transform Your Shopping Experience
        </h1>
        <p className="text-lg mt-4 text-gray-300">
          Smart Mall Bot provides real-time assistance, navigation, and interactive shopping features.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-20 px-10">
     <Link href={lnk3 ? "/components/chatbot" : undefined} 
                onClick={() => setLnk3(!lnk3)} 
                className="!no-underline">
       <div className="shadow-md p-6 text-center rounded-lg bg-gray-700 text-white cursor-pointer">
        <h2 className="text-2xl font-semibold">
              Chatbot Assistance    </h2>
         <p className="text-gray-300 mt-2">
            Locate stores, find products, and get promotions in real-time.
         </p>
       </div>
     </Link>
        <Link href={lnk4 ? "/components/3d_view" : undefined}
                onClick={() => setLnk4(!lnk4)}
                className="!no-underline">
        <div className=" shadow-md p-6 text-center rounded-lg bg-gray-700 text-white cursor-pointer">
          <h2 className="text-2xl font-semibold">3D Mapping & Navigation</h2>
          <p className="text-gray-300 mt-2">
            Navigate efficiently with the shortest path guidance.
          </p>
        </div>
        </Link>
        <div className=" shadow-md p-6 text-center rounded-lg bg-gray-700 text-white">
          <h2 className="text-2xl font-semibold">Online Parking Assistance</h2>
          <p className="text-gray-300 mt-2">
            Find available parking spots quickly and easily.
          </p>
        </div>
        <div className=" shadow-md p-6 text-center rounded-lg bg-gray-700 text-white">
          <h2 className="text-2xl font-semibold">SOS Emergency Alerts</h2>
          <p className="text-gray-300 mt-2">
            Help in cases of lost items or missing children.
          </p>
        </div>
        <div className=" shadow-md p-6 text-center rounded-lg bg-gray-700 text-white">
          <h2 className="text-2xl font-semibold">Stock Clearance Ads</h2>
          <p className="text-gray-300 mt-2">
            Boost slow-moving stock with targeted promotions.
          </p>
        </div>
        <div className=" shadow-md p-6 text-center rounded-lg bg-gray-700 text-white">
          <h2 className="text-2xl font-semibold">Engagement Rewards</h2>
          <p className="text-gray-300 mt-2">
            Earn tokens for shopping and interactions.
          </p>
        </div>
      </section>

    </div>
  );
}



// /*import Head from 'next/head';
// import { IoSend } from 'react-icons/io5';

// export default function ChatBot() {
//   return (
//     <div className="h-screen flex flex-col bg-gray-900 text-white max-w-lg mx-auto">
//       <Head>
//         <title>Smart Mall Bot - Chat</title>
//         <meta name="description" content="Chat with our AI-powered mall assistant." />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       </Head>
      
      
//       <div className="bg-gray-800 text-white text-center py-3 text-lg font-bold sticky top-0 z-10 border-b border-gray-700">Smart Mall ChatBot</div>
      
      
//       <div className="flex-1 overflow-y-auto p-4 space-y-4">
//         <div className="flex items-start space-x-2">
//           <div className="bg-gray-700 text-white p-3 rounded-lg max-w-[80%]">Hello! How can I assist you today?</div>
//         </div>
//       </div>
      
//       <div className="bg-gray-800 p-3 border-t border-gray-700 sticky bottom-0 w-full flex items-center">
//         <input 
//           type="text" 
//           className="flex-1 p-2 bg-gray-700 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600" 
//           placeholder="Send a message..." 
//         />
//         <button 
//           className="ml-2 p-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 active:scale-95 transition"
//         >
//           <IoSend size={20} />
//         </button>
//       </div>
//     </div>
//   );
// }
// */

// /* CHAT BOT PAGE */

// "use client";
//  import Head from 'next/head';
//  import { IoSend } from 'react-icons/io5';
//  import { useState } from 'react';
//  import {FiUser, FiMenu, FiX} from 'react-icons/fi';

//  export default function ChatBot() {
//    const [showSidebar, setShowSidebar] = useState(false);

//    return (
//     <div className = "h-screen flex flex-col md:flex-row bg-grey-900 text-white relative">
//       <Head>
//         <title>Smart Mall Bot - Chat</title>
//         <meta name="description" content="Chat with our AI-powered mall assistant." />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       </Head>

//       <button className = "md:hidden p-3 bg-grey-800 text-white fixed top-2 left-2 z-30 rounded-lg"
//               onClick={() => setShowSidebar(true)}>
//                 <FiMenu size={24} />
//               </button>

//       {showSidebar && <div className = "fixed inset-0 bg-black bg-opacity-30 z-20 md:hidden" onClick = {()=> setShowSidebar(false)}></div>}
    
//       <div className={`fixed md:relative top-0 left-0 h-full w-3/4 md:w-1/4 bg-gray-800 p-4 border-r border-gray-700 flex flex-col z-30 transform transition-transform duration-300 ${showSidebar ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
//       <div className="flex justify-between items-center mb-4">
//       <h2 className="text-lg font-bold">Chat History</h2>
//       <button className="md:hidden text-white" onClick={() => setShowSidebar(false)}>
//         <FiX size={24} />
//       </button>
//     </div>
    
//     <div className="flex flex-col space-y-2">
//       <button className = "bg-gray-700 text-white p-2 rounded-lg text-left hover:bg-gray-600">history....</button>
//       <button className = "bg-gray-700 text-white p-2 rounded-lg text-left hover:bg-gray-600">history........</button>
//       <button className = "bg-gray-700 text-white p-2 rounded-lg text-left hover:bg-gray-600">history............</button>

//     </div>
//     </div>

//     <div className = "flex-1 flex flex-col max-w-full mx-auto">
//       <div className = "bg-gray-800 text-white text-center py-3 text-lg font-bold sticky top-0 z-10 border-b border-gray-700">Smart Mall ChatBot</div>
   

//    <div className="flex-1 overflow-y-auto p-4 space-y-4">
//           <div className="flex items-start space-x-2">
//             <div className="bg-gray-700 text-white p-3 rounded-lg max-w-[80%]">Hello! How can I assist you today?</div>
//           </div>
          
          
//           <div className="flex items-end space-x-2 justify-end">
//             <div className="bg-blue-500 text-white p-3 rounded-lg max-w-[80%]">I need help finding a store.</div>
//             <FiUser className="text-gray-400" size={24} />
//           </div>
//         </div>
        
        

//          <div className="bg-gray-800 p-3 border-t border-gray-700 fixed bottom-0 right-0 w-full flex items-center">
//           <input 
//             type="text" 
//             className="flex-1 p-3 bg-gray-700 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600" 
//             placeholder="Send a message..." 
//           />
//           <button 
//             className="ml-2 p-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 active:scale-95 transition"
//           >
//             <IoSend size={20} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// import Head from 'next/head';
// import { IoSend } from 'react-icons/io5';
// import { FiUser, FiMenu, FiX } from 'react-icons/fi';
// import { useState } from 'react';

// export default function ChatBot() {
//   const [showSidebar, setShowSidebar] = useState(false);

//   return (
//     <div className="h-screen flex flex-col md:flex-row bg-gray-900 text-white relative">
//       <Head>
//         <title>Smart Mall Bot - Chat</title>
//         <meta name="description" content="Chat with our AI-powered mall assistant." />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       </Head>
      
//       {/* Sidebar Toggle for Mobile */}
//       <button 
//         className="md:hidden p-3 bg-gray-800 text-white fixed top-2 left-2 z-30 rounded-lg" 
//         onClick={() => setShowSidebar(true)}
//       >
//         <FiMenu size={24} />
//       </button>
      
//       {/* Sidebar with Overlay */}
//       {showSidebar && <div className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden" onClick={() => setShowSidebar(false)}></div>}
      
//       <aside className={`fixed md:relative top-0 left-0 h-full w-64 bg-gray-800 p-4 border-r border-gray-700 flex flex-col z-30 transform transition-transform duration-300 ${showSidebar ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-lg font-bold">Chat History</h2>
//           <button className="md:hidden text-white" onClick={() => setShowSidebar(false)}>
//             <FiX size={24} />
//           </button>
//         </div>
//         <nav className="flex flex-col space-y-2">
//           <button className="bg-gray-700 text-white p-3 rounded-lg text-left hover:bg-gray-600">Conversation 1</button>
//           <button className="bg-gray-700 text-white p-3 rounded-lg text-left hover:bg-gray-600">Conversation 2</button>
//           <button className="bg-gray-700 text-white p-3 rounded-lg text-left hover:bg-gray-600">Conversation 3</button>
//         </nav>
//       </aside>
      
//       {/* Main Chat Window */}
//       <main className="flex-1 flex flex-col max-w-full mx-auto">
//         {/* Chat Header */}
//         <header className="bg-gray-800 text-white text-center py-4 text-lg font-bold sticky top-0 z-10 border-b border-gray-700">Smart Mall ChatBot</header>
        
//         {/* Chat Window */}
//         <section className="flex-1 overflow-y-auto p-4 space-y-4">
//           <div className="flex items-start space-x-2">
//             <div className="bg-gray-700 text-white p-4 rounded-lg max-w-[80%]">Hello! How can I assist you today?</div>
//           </div>
          
//           {/* User Message */}
//           <div className="flex items-end space-x-2 justify-end">
//             <div className="bg-blue-500 text-white p-4 rounded-lg max-w-[80%]">I need help finding a store.</div>
//             <FiUser className="text-gray-400" size={24} />
//           </div>
//         </section>
        
//         {/* Chat Input */}
//         <footer className="bg-gray-800 p-4 border-t border-gray-700 sticky bottom-0 w-full flex items-center">
//           <input 
//             type="text" 
//             className="flex-1 p-3 bg-gray-700 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600" 
//             placeholder="Send a message..." 
//           />
//           <button 
//             className="ml-2 p-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 active:scale-95 transition"
//           >
//             <IoSend size={20} />
//           </button>
//         </footer>
//       </main>
//     </div>
//   );
// }
