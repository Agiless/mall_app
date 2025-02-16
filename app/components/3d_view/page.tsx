'use client';
import { useState } from 'react';

interface MallGraph {
  [key: string]: {
    floor: number | "multi";
    connections: string[];
  };
}

const mallGraph: MallGraph = {
  "Nike": { floor: 0, connections: ["Puma", "Skechers", "Reebok"] },
   "Puma": { floor: 0, connections: ["Nike", "Reebok", "Staircase1", "Skechers"] },
   "Skechers": { floor: 0, connections: ["Nike", "Reebok", "Puma", "Kids Corner"] },
   "Reebok": { floor: 0, connections: ["Skechers", "Burger King"] },
   "Burger King": { floor: 0, connections: ["Kids Corner", "Reebok", "McDonald's", "Staircase1"] },
   "McDonald's": { floor: 0, connections: ["Burger King", "The Concourse", "Staircase1"] },
   "Kids Corner": { floor: 0, connections: ["Burger King", "Cafe Coffee Day", "Plam", "Skechers", "Reebok"] },
   "Cafe Coffee Day": { floor: 0, connections: ["Kids Corner", "Perfume Shop", "Plam", "Burger King"] },
   "Perfume Shop": { floor: 0, connections: ["Plam", "Cafe Coffee Day", "Burger King"] },
   "The Concourse": { floor: 0, connections: ["McDonald's", "Staircase2"] },
   "Maintenance Area": { floor: 0, connections: ["Elevator", "Staircase2"] },
   "Display Area": { floor: 0, connections: ["Elevator"] },
   "Plam": { floor: 0, connections: ["Perfume Shop", "Cafe Coffee Day", "Kids Corner"] },
 
   // First floor
   "Pantaloons": { floor: 1, connections: ["PepperFry", "RockClimbing1", "Staircase1"] },
   "PepperFry": { floor: 1, connections: ["Pantaloons", "RockClimbing1"] },
   "RockClimbing1": { floor: 1, connections: ["Pantaloons", "PepperFry", "RockClimbing2", "Lifestyle"] },
   "RockClimbing2": { floor: 1, connections: ["RockClimbing1", "Marks & Spencer", "Lifestyle", "ZARA", "Starbucks", "Gucci"] },
   "Marks & Spencer": { floor: 1, connections: ["RockClimbing2", "Gucci"] },
   "Gucci": { floor: 1, connections: ["Marks & Spencer", "Cafe Noir", "Elevator", "RockClimbing2", "Starbucks"] },
   "Cafe Noir": { floor: 1, connections: ["Gucci", "Elevator"] },
   "Lifestyle": { floor: 1, connections: ["Staircase1", "ZARA", "RockClimbing1", "RockClimbing2"] },
   "ZARA": { floor: 1, connections: ["Staircase2", "Lifestyle", "Starbucks", "RockClimbing2"] },
   "Starbucks": { floor: 1, connections: ["ZARA", "Woodland", "RockClimbing2", "Gucci", "Staircase2"] },
   "Woodland": { floor: 1, connections: ["Starbucks", "Elevator", "Staircase2"] },
 
   // Second floor
   "KFC": { floor: 2, connections: ["Domino's", "Staircase1", "Anchor Store"] },
   "Domino's": { floor: 2, connections: ["Apple Store", "Zodiac", "KFC", "Anchor Store"] },
   "Zodiac": { floor: 2, connections: ["Domino's", "Anchor Store", "Food Stall", "Apple Store"] },
   "Apple Store": { floor: 2, connections: ["Domino's", "Food Stall", "Zodiac"] },
   "Food Stall": { floor: 2, connections: ["Zodiac", "Apple Store", "Anchor Store"] },
   "Anchor Store": { floor: 2, connections: ["Domino's", "Zodiac", "Atrium", "Staircase1", "Food Stall", "KFC"] },
   "Atrium": { floor: 2, connections: ["Anchor Store", "Thriller Room", "Staircase1", "Staircase2", "Washroom"] },
   "Thriller Room": { floor: 2, connections: ["Atrium", "Tanishq", "Washroom", "Titan"] },
   "Tanishq": { floor: 2, connections: ["Thriller Room", "Elevator", "Titan"] },
   "US Polo": { floor: 2, connections: ["Washroom", "Staircase2", "Elevator"] },
   "Washroom": { floor: 2, connections: ["US Polo", "Staircase2", "Elevator", "Atrium", "Titan"] },
   "Titan": { floor: 2, connections: ["Washroom", "Thriller Room", "Tanishq", "Elevator"] },
 
   //Third Floor
   "KK Cinemas" :{floor: 3, connections:["Fun Land"]},
   "Fun Land" :{floor: 3, connections:["Book Tickets","Elevator","Snacks Counter"]},
   "Book Tickets" :{floor: 3, connections:["Fun Land","Elevator"]},
   "Snacks Counter" :{floor: 3, connections:["Fun Land","Elevator"]},
 
   // Combined connections between floors
   "Staircase1": { floor: "multi", connections: ["Burger King", "Puma", "Reebok", "McDonald's", "Lifestyle", "Pantaloons", "KFC", "Anchor Store", "Atrium","KK Cinemas","Fun Land"] },
   "Staircase2": { floor: "multi", connections: ["The Concourse", "Maintenance Area", "ZARA", "Starbucks", "Woodland", "Washroom", "US Polo", "Atrium","Fun Land","Book Tickets"] },
   "Elevator": { floor: "multi", connections: ["Maintenance Area", "Display Area", "Woodland", "Gucci", "Cafe Noir", "US Polo", "Washroom", "Tanishq", "Titan","Book Tickets","Snack Counter"] }
 };
const findShortestPath = (graph: MallGraph, start: string, end: string): string[] => {
  if (!graph[start] || !graph[end]) return [];
  
  const queue: string[][] = [[start]];
  const visited: Set<string> = new Set();

  while (queue.length > 0) {
    const path = queue.shift()!;
    const node = path[path.length - 1];

    if (node === end) return path;

    if (!visited.has(node)) {
      visited.add(node);
      for (const neighbor of (graph[node]?.connections || [])) {
        if (!visited.has(neighbor)) {
          queue.push([...path, neighbor]);
        }
      }
    }
  }
  return [];
};

export default function MallPathFinder() {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [path, setPath] = useState<string[]>([]);

  const handleFindPath = () => {
    const shortestPath = findShortestPath(mallGraph, start, end);
    setPath(shortestPath);
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-white mb-6">Mall Path Finder</h1>
      <div className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="text-white block">Start Point:</label>
          <input type="text" value={start} onChange={(e) => setStart(e.target.value)} placeholder="Enter Start Point"
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        <div className="mb-4">
          <label className="text-white block">End Point:</label>
          <input type="text" value={end} onChange={(e) => setEnd(e.target.value)} placeholder="Enter End Point"
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        <button onClick={handleFindPath} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">Find Path</button>
      </div>
      <div className="w-full max-w-lg bg-gray-800 p-6 mt-6 rounded-lg shadow-lg">
        {path.length > 0 ? (
          <div className="text-white">
            <h2 className="text-xl font-semibold">Shortest Path:</h2>
            <ul className="list-disc pl-5 mt-2">
              {path.map((location, index) => (
                <li key={index} className="mt-1">{location}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="text-gray-400">No path found</div>
        )}
      </div>
    </div>
  );
}