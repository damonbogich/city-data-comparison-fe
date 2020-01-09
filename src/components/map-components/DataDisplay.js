import  React, {useState} from "react";
import {NavLink, Route}  from "react-router-dom";
import Burger from '@animated-burgers/burger-squeeze' 
import Housing from "./Housing";
import Jobs from "./Jobs";
import Culture from "./Culture";
import MapSearch from "./MapSearch";
import CostNav from "./subnavs/CostNav";
import JobsNav from "./subnavs/JobsNav";
import SafetyNav from "./subnavs/SafetyNav";

import deleteIcon from "./icons/close_red.png";

const DataDisplay = ({search, selected, toggleSelected, onSearch, setSearch, cityMarkers, viewport, setViewport}) => {

    const [menu, setMenu] = useState({status: 'closed'})

    const toggleMenu = () => {
        if (menu.status === 'closed') {
            setMenu({...menu, status:'open'}) 
        } else if (menu.status === 'open') {
            setMenu({...menu, status:'closed'})
        }
    }

    const toggleVisibility = city => {
        console.log("toggling visibility of ", city.city)
    }

    return (
        <div className="data-browser">
            <nav className="data-nav">
                <div className= {`burger-menu ${menu.status}`} onClick={toggleMenu}>
                <div className="bar1" key="b1" />
                <div className="bar2" key="b2" />
                <div className="bar3" key="b3" />
                </div>
                    
                    <MapSearch
                        menu={menu.status}
                        setSearch={setSearch}
                        onSearch={onSearch} 
                        cityMarkers={cityMarkers} 
                        search={search}
                        viewport={viewport}
                        setViewport={setViewport}   
                    />
                    
                <div className={`menu-items ${menu.status}`}>
                <div className="data-nav-top">
                    <Route path="/map/housing" component={CostNav} />
                    <Route path="/map/jobs" component={JobsNav} />
                    <Route path="/map/culture" component={SafetyNav} />
                </div>
                <ul>
                    {selected.map(item => <li key={item._id} onClick={ _ => toggleVisibility(item)}>{item.name.replace(" city" , "")} 
                        <span onClick={ _ => toggleSelected(item)}>
                            <img className="delete-icon" src={deleteIcon} alt="delete icon" />
                        </span>
                    </li>)}
                </ul>
                </div>
            </nav>
            <div className="data-by-category">
                <nav className="data-subnav">
                   
                    <NavLink activeClassName="selected" to="/map/housing">Housing</NavLink>
                    <NavLink activeClassName="selected" to="/map/jobs">Job Market</NavLink>
                    <NavLink activeClassName="selected" to="/map/culture">Culture</NavLink>                             
                </nav>
                <Route path="/map/housing" render={_ => <Housing selected={selected} /> } />
                <Route path="/map/jobs" render={_ => <Jobs selected={selected} /> } />
                <Route path="/map/culture" render={_ => <Culture selected={selected} /> } />
            </div>
        </div>
    );
  };
  export default DataDisplay;