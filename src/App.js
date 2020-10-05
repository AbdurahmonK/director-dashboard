import './style.css'
import React from 'react'
import logo from './logo.png'
import { Home } from './components/Home'
import { LogOut } from './components/LogOut'
import 'font-awesome/css/font-awesome.min.css'
import { Settings } from './components/Settings'
import { Dashboard } from './components/Dashboard'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

export default function App() {

  return (
    <Router>
    <div className="main_container">
        <div className="leftSide">
            <img src={logo} alt="PDP" />
            <li><i className="fa fa-bar-chart" style={{fontSize:'20px'}}></i><Link to="/"><a href="">Dashboard</a></Link></li>
            <li><i className="fa fa-cog" style={{fontSize:'20px'}}></i><Link to="/settings">Sozlamalar</Link></li>
            <li><i className="fa fa-external-link" style={{fontSize:'20px'}}></i><Link to="/home">Home pdp.uz</Link></li>
            <li><i className="fa fa-power-off" style={{fontSize:'20px'}}></i><Link to="/logout">Chiqish</Link></li>
        </div>
        <div className="rightSide">
            <div className="contanier">
                <div className="user">
                    <h5 style={{fontSize:'16px', fontWeight: 500}}>Odilbek Mirzayev</h5>
                    <div className="icon">
                        <i className="fa fa-user" style={{fontSize:'20px'}}></i>
                    </div>
                    <div className="icon">
                        <i className="fa fa-bell" style={{fontSize:'20px'}}></i>
                    </div>
                </div>
                {/* <Dashboard /> */}
                <Switch>
                    <Route path="/" exact>
                        <Dashboard />
                    </Route>
                    <Route path="/settings">
                        <Settings />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/logout">
                        <LogOut />
                    </Route>
                </Switch>
            </div>
        </div>
    </div>
    </Router>
  )
}