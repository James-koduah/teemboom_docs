import styles from './css_modules/generic.module.css'
import { useNavigate } from 'react-router-dom';

function Overview(){
    const navigate = useNavigate()
    return (
        <div className={styles.page}>
            <h1>Overview</h1>
            <p>
                Welcome to the TeemBoom Comments Documentation!</p>
            <p> 
                Here, You'll integrate a comments section in just a few steps, 
                giving you extensive features such as UI customization, intuitive moderation, and layout flexibility.
            </p>
            <h2>Problems We Solve</h2>
            <p>
                Creating your own comments section can take a lot of time and effort. 
            </p>
            <p>Instead of starting from scratch and reinventing the wheel, why not use our ready-made solution?
                Our product provides more dedicated features so you can focus on other business matters.
            </p>
            <h3>This documentation will guide you through:</h3>
            <ul>
                <li>Integrating TeemBoom Comment into your site.</li>
                <li>Customizing your comment sections to match your page decor.</li>
                <li>Managing comments, user interactions, and analytics.</li>
            </ul>
            <div className={styles.navigation}>
                <div></div>
                <button onClick={()=>{navigate('/installation/add_script_tag')}} className={styles.next}>Next: Installation</button>
            </div>
        </div>


    )
}

export default Overview