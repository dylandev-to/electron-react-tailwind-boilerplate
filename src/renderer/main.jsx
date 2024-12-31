import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// Import Tailwind
import './index.css';

const root = createRoot(document.body);

root.render(<App/>);