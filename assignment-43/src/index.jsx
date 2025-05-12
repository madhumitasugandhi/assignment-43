import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <index />
  </React.StrictMode>
);
const index = () => {
  return (
    <div>index</div>
  )
}

export default index