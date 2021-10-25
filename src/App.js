import {Component} from "react";
import Layout from "./hoc/Layout/Layout";

class App extends Component {
    render() {
        return (
            <Layout>
                <div style={{border: '1px solid #ccc', width: 400, margin: '0 auto'}}>
                    <h1>Layout</h1>
                </div>
            </Layout>
        )
    }
}

export default App;
