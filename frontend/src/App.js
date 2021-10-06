import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home'
import BlogPage from './pages/BlogPage/BlogPage'
import About from './pages/About/About'
import BlogDetailPage from './pages/BlogDetailPage/BlogDetailPage'
import CategoryBlogPage from './pages/CategoryBlogPage/CategoryBlogPage'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
function App() {
    return (
        <div className="App">
            <Router>
                <Navigation />
                <Switch>
                    <Route exact path="/blog" component={BlogPage}></Route>
                    <Route
                        exact
                        path="/blog/:seo"
                        component={CategoryBlogPage}
                    ></Route>
                    <Route
                        path="/blogDetail/:seo"
                        component={BlogDetailPage}
                    ></Route>
                </Switch>
                <Switch>
                    <Route exact path="/" component={Home}></Route>

                    <Route path="/about" component={About}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/register" component={Register}></Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default App
