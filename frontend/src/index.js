// import axios from 'axios';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



// async function sendFile(file) {
//   try {
//     const url = '/api/upload'; // Ensure this URL is correct
//     const formData = new FormData();
//     formData.append('file', file);

//     const response = await axios.post(url, formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data'
//       }
//     });

//     console.log('File uploaded successfully', response.data);
//   } catch (error) {
//     console.error('Error uploading file', error);
//   }
// }
// axios.defaults.baseURL = 'https://your-api-domain.com';
// const url = process.env.REACT_APP_API_URL || 'http://localhost:5000';
// async function sendFile(file) {
//   try {
//     const url = '/api/upload'; // Ensure this URL is correct
//     console.log('Upload URL:', url);
//     console.log('File:', file);

//     if (!url || !file) {
//       throw new Error('URL or file is undefined');
//     }

//     const formData = new FormData();
//     formData.append('file', file);

//     const response = await axios.post(url, formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data'
//       }
//     });

//     console.log('File uploaded successfully', response.data);
//   } catch (error) {
//     console.error('Error uploading file', error);
//   }
// }
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';




// Setting the base URL for axios
axios.defaults.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

async function sendFile(file) {
  try {
    const url = '/api/upload'; // Ensure this URL is correct
    console.log('Upload URL:', axios.defaults.baseURL + url);
    console.log('File:', file);

    if (!file) {
      throw new Error('File is undefined');
    }

    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    console.log('File uploaded successfully', response.data);
  } catch (error) {
    console.error('Error uploading file', error);
  }
}

export default sendFile;
