import React from 'react';
import "../NavbarHeader/NavbarHeader.scss";
import NavbarRight from './NavbarRight/NavbarRight';
import NavbarLeft from './NavbarLeft/NavbarLeft';
import NavbarFeed from './NavbarFeed/NavbarFeed';



function NavbarHeader(props) {
    return (
    <div className="Homecontainer">
        <div className="container-right">
           <NavbarRight/>
        </div>
        <div className="container-feed">
          <NavbarFeed/>
        </div>
        <div className="container-left">
           <NavbarLeft/>
        </div>
     </div>
    );
}

export default NavbarHeader;