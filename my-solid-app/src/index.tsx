/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';

import Nav from "./components/Nav/Nav";
import Home from "./routes/home";
import Education from "./routes/education";
import Experience from "./routes/experience";
import Projects from "./routes/projects";
import NotFound from "./routes/[...404]";

import { Route, Router } from '@solidjs/router';
import Footer from './components/Footer/Footer';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => 
  <>
  <Router>
    <Route path="/" component={Home} /> {/* Home redirects to Education */}
    <Route path="/education" component={Education} />
    <Route path="/experience" component={Experience} />
    <Route path="/projects" component={Projects} />
    <Route path="*" component={NotFound} /> {/* 404 fallback */}
  </Router>
  </>
, root!);
