
import React from "react";
import './../styles/App.css';
import PageLayout from "./PageLayout";

const App = () => {
  const header =<h1>Welcome to my website</h1>;
  const footer = <p>This is the content of my website.</p>
  return (
    <div>
        <PageLayout header ={header} footer={footer}>
        © 2023 My Website. All rights reserved.
        </PageLayout>
    </div>
  )
}

export default App
