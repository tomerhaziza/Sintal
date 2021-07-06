import ReactDOM from 'react-dom';
import Layout from './components/layout/layout';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Layout />,
  document.getElementById('root')
);
document.getElementsByTagName('html')[0].setAttribute("dir", "rtl");
reportWebVitals();
