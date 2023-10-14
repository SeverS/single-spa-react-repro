import React from 'react';
import logo from './logo.svg';
import './App.css';
import singleSpaReact from 'single-spa-react';
import ReactDOMClient from 'react-dom/client';
import Parcel from 'single-spa-react/parcel';

function App() {
  const [showModal, setShowModal] = React.useState(false);
  const handleClick = () => {
    setShowModal(true);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Modal should be rendered in body */}
          {showModal && <Parcel config={() => import('./modal.parcel')} appendTo={document.body} />}
          <Parcel config={() => import('./button.parcel')} onClick={handleClick} />
        </p>
      </header>
    </div>
  );
}

export const {bootstrap,mount, unmount} = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: App,
  errorBoundary: (err) => {
    console.error(err);
    return <></>;
  },
});
