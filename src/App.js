import React from "react";
import ProductInformation from "./views/ProductInformation/index";
import "./App.scss";

export default function App() {
    return (
        <div className="App">
            <main className="App-content">
                <ProductInformation />
            </main>
        </div>
    );
}

