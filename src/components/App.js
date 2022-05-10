import React from 'react';
// need to import both BrowserRouter and Router
import { BrowserRouter, Route, Switch} from 'react-router-dom';

// app components
import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';
import NotFound from './NotFound';
import Featured from './Featured';

const App = () => (
  
  // wrap container with routes inside BrowserRouter tags
  <BrowserRouter>
    <div className='container'>
      <Header />

      <Switch>
        {/* use path to define the url & component to define which component to render when url matches */}
        {/* use 'exact' to make it only render when url is exactly the same (ex: not '/about', only '/') */}
        <Route exact path='/' component={Home} />

        {/* render={} allows route to pass props to component to render */}
        <Route path='/about' render={() => <About title='About'/>} />
        <Route exact path='/teachers' component={Teachers} />
        <Route path='/teachers/:topic/:name' component={Featured} />
        <Route path='/courses' component={Courses} />
        <Route component={NotFound}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;