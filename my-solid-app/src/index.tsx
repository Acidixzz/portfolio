/* @refresh reload */
import { render } from 'solid-js/web';

//component css
import './index.css';
import "./components/NameDisplay/NameDisplay.css";
import "./components/NameDisplay/sun.css";
import "./components/Footer/Footer.css";
import "./components/Nav/Nav.css";
//route css
import "./routes/home.css";
import "./routes/education.css";
import "./routes/projects.css";

import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./routes/home";
import Education from "./routes/education";
import Experience from "./routes/experience";
import Projects from "./routes/projects";
import TuneVault from './routes/tunevault';
import NotFound from "./routes/[...404]";

import { Route, Router } from '@solidjs/router';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() =>
  <>
    <Nav />
    <Router>
      <Route path="/portfolio" component={Home} /> {/* Home redirects to Education */}
      <Route path="/portfolio/education" component={Education} />
      {/* <Route path="/experience" component={Experience} /> */}
      <Route path="/portfolio/projects" component={Projects} />
      <Route path="/portfolio/tunevault" component={TuneVault} />
      <Route path="*" component={NotFound} /> {/* 404 fallback */}
    </Router>
    <Footer />
  </>
  , root!);
