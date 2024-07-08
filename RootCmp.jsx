
const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter
import { ContactIndex } from './cmps/ContactIndex.jsx'


export function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" exact component={ContactIndex} />
                </Routes>
            </div>
        </Router>
    )
}

