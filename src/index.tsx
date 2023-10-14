import './index.css';
import * as singleSpa from 'single-spa';
import reportWebVitals from './reportWebVitals';


singleSpa.registerApplication({
    app: () => import('./App'),
    name: 'demo-app',
    activeWhen: () => true,
    customProps: {
        domElement: document.getElementById('root')
    }
});

singleSpa.start();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
