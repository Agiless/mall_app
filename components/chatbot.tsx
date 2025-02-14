import Head from 'next/head';

export default function ChatBot() {
  return (
    <div className="h-screen flex flex-col bg-gray-900 text-white max-w-md mx-auto">
      <Head>
        <title>Smart Mall Bot - Chat</title>
        <meta name="description" content="Chat with our AI-powered mall assistant." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
     
      <div className="bg-gray-800 text-white text-center py-3 text-lg font-bold sticky top-0 z-10">Smart Mall ChatBot</div>
      
     
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="p-3 rounded-lg max-w-[75%] bg-gray-700 text-white self-start">
          Hello!!
        </div>
      </div>
      
     
      <div className="flex p-3 bg-gray-800 shadow-md sticky bottom-0 w-full">
        <input 
          type="text" 
          className="flex-1 p-2 border rounded-l-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600" 
          placeholder="Type your message..." 
        />
        <button 
          className="bg-gray-700 text-white px-4 py-2 rounded-r-lg hover:bg-gray-600 active:scale-95 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}