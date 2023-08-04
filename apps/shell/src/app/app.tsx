import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const Read = React.lazy(() => import('read/Module'));

const Write = React.lazy(() => import('write/Module'));

const Contribute = React.lazy(() => import('contribute/Module'));

const Moderate = React.lazy(() => import('moderate/Module'));

const Manage = React.lazy(() => import('manage/Module'));

const Profile = React.lazy(() => import('profile/Module'));

const Members = React.lazy(() => import('members/Module'));

const Faq = React.lazy(() => import('faq/Module'));

const About = React.lazy(() => import('about/Module'));

const Contact = React.lazy(() => import('contact/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/read">Read</Link>
        </li>

        <li>
          <Link to="/write">Write</Link>
        </li>

        <li>
          <Link to="/contribute">Contribute</Link>
        </li>

        <li>
          <Link to="/moderate">Moderate</Link>
        </li>

        <li>
          <Link to="/manage">Manage</Link>
        </li>

        <li>
          <Link to="/profile">Profile</Link>
        </li>

        <li>
          <Link to="/members">Members</Link>
        </li>

        <li>
          <Link to="/faq">Faq</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="shell" />} />

        <Route path="/read" element={<Read />} />

        <Route path="/write" element={<Write />} />

        <Route path="/contribute" element={<Contribute />} />

        <Route path="/moderate" element={<Moderate />} />

        <Route path="/manage" element={<Manage />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/members" element={<Members />} />

        <Route path="/faq" element={<Faq />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
