import React, { useState } from 'react';
import styles from './css_modules/sidenav.module.css'
import SideNavItem from './sidenavitem/SideNavItem'

function SideNav(){
    const nav_data = [
        {
            title: 'Overview',
            route: '/'
        },
        {
            title: 'Installation',
            route: '/installation/add_script_tag',
            children: [
                {   
                    title: 'Add Script Tag',
                    route: '/installation/add_script_tag'
                },
                {
                    title: 'Position Comment Section',
                    route: '/installation/position_comment_section'
                }
            ]
        },
        {
            title: 'Customization',
            route: null,
            children: [
                {
                    title: 'Customize Colors',
                    route: '/customization/colors'
                },
                {
                    title: 'Customize Font Size',
                    route: '/customization/font_size'
                }
            ]
        }
    ]
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleNavBar = () => {
      setIsOpen(!isOpen);
    };
    return (
        <nav id='SideNav'>
            <div id="sideNavMobile" onClick={toggleNavBar}>Content</div>
            <div id="sideNavPC" style={{display: window.innerWidth < 800 ? isOpen ? 'block' : 'none' : null}}>
                <div className={styles.parent}>
                    <input type="text" className={styles.searchBar} placeholder='Search Docs'/>
                </div>
                {nav_data.map((item, index)=>{
                return <SideNavItem data={item} key={index} />
                })}
            </div>
        </nav>
    )
}
export default SideNav