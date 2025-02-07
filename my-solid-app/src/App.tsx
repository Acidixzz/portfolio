import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class="flex justify-center items-center h-screen bg-blue-500 text-white text-2xl">
      Welcome to Solid.js with Tailwind!
    </div>
  );
};

export default App;
