import styles from './sidenavitem.module.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SideNavItem({data}){
    // State to track the visibility of the Children component
    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate()
    // Toggle function to change the state
    const toggleChildren = () => {
      setIsOpen(!isOpen);
    };
    const handleClick = () => {
        if (data.route) navigate(data.route); // Navigate to the route
        toggleChildren(); // Toggle the visibility of children
    };
    return (    
        <div className={styles.parent}>
            <div onClick={handleClick} className={styles.main}>    
                <header className={styles.parentHeader}>{data.title}</header>
                <div className={styles.dropIcon}>
                    {data.children && data.children.length > 0 ? 
                    (<ion-icon name={isOpen ? "chevron-down-outline" : "chevron-forward-outline"}></ion-icon>
                    ): null}
                </div>
            </div>
            {data.children && data.children.length && isOpen > 0 ?
            (<Children data={data.children} />): null}
            
        </div>
    )
}

function Children({data}){
    const navigate = useNavigate()
    return (
        <div className={styles.children}>
            {data.map((item, index)=>{
                return (
                    <div onClick={() => item.route && navigate(item.route)} key={index} className={styles.main}>    
                        <header className={styles.parentHeader}>{item.title}</header>
                    </div>
                )
            })}
        </div>
    )
}

export default SideNavItem