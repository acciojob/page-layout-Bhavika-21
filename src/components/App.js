
import React from "react";
import './../styles/App.css';
import PageLayout from "./PageLayout";

const App = () => {
  return (
    <div>
        <PageLayout header ={<h1>Welcome to my website</h1>} footer ={<p>This is the content of my website.</p>} >
        © 2023 My Website. All rights reserved.
        </PageLayout>
    </div>
  )
}

export default App
