import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../src/components/ui-kit/accordian/_Accordian.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
