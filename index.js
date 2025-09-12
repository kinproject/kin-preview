
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';

const mockPosts = [
  { id: 1, title: 'Share Food', description: 'Leftover meals available for neighbors', category: 'Food' },
  { id: 2, title: 'Offer Skills', description: 'Teach piano lessons online', category: 'Skills' },
  { id: 3, title: 'Free Books', description: 'Collection of used books for sharing', category: 'Items' },
];

const mockMessages = [
  { id: 1, from: 'Alice', message: 'Hi! I can help with your request.' },
  { id: 2, from: 'Bob', message: 'Thanks! I will join the sharing event.' },
];

function Navbar(){ return (<nav><Link style={{color:'white',textDecoration:'none'}} to="/">Home</Link> <Link style={{color:'white',textDecoration:'none'}} to="/share">Share</Link> <Link style={{color:'white',textDecoration:'none'}} to="/explore">Explore</Link> <Link style={{color:'white',textDecoration:'none'}} to="/messages">Messages</Link> <Link style={{color:'white',textDecoration:'none'}} to="/profile">Profile</Link></nav>); }

function Home(){ return (<div className="container"><h1>Welcome to Kin 🌱</h1><p>Connect, Share, and Build a Global Community without Money.</p></div>); }
function Share(){ return (<div className="container"><h2>Share Your Resources</h2>{mockPosts.map(p=> (<div key={p.id} className="card"><h3>{p.title}</h3><p>{p.description}</p><small>Category: {p.category}</small></div> ))}</div>); }
function Explore(){ return (<div className="container"><h2>Explore Shared Resources</h2>{mockPosts.map(p=> (<div key={p.id} className="card"><h3>{p.title}</h3><p>{p.description}</p><small>Category: {p.category}</small></div> ))}</div>); }
function Messages(){ return (<div className="container"><h2>Messages</h2>{mockMessages.map(m=> (<div key={m.id} className="card"><strong>{m.from}:</strong> {m.message}</div> ))}</div>); }
function Profile(){ return (<div className="container"><h2>Your Profile</h2><p>Name: John Doe</p><p>Location: Global</p><p>Trusted Member Score: 95%</p></div>); }

function App(){ return (<Router><Navbar /><Routes><Route path='/' element={<Home/>} /><Route path='/share' element={<Share/>} /><Route path='/explore' element={<Explore/>} /><Route path='/messages' element={<Messages/>} /><Route path='/profile' element={<Profile/>} /></Routes></Router>); }

const root = createRoot(document.getElementById('root'));
root.render(<App />);
