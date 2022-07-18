
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
function App() {
  return (
    <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route path= "/blogs/:id">
                <BlogDetails />
              </Route>
              <Route path="*">
                <NotFound/>
              </Route>
            </Switch>
          </div>
        </div>
    </Router>
  );
}
//whatever the type we have given ,the react will turn them into string
export default App;
//Inorder to render it to the react dom we need to import it in index.js,so thats why we need to export the components