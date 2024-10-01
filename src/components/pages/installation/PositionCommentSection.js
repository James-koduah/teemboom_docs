import styles from './../css_modules/generic.module.css'
import { useNavigate } from 'react-router-dom';

function PositionCommentSection(){
    const navigate = useNavigate()
    const copyScript = (arg=2)=>{
        let text
        if (arg == 1) text = '<div id="teemboom_comments"></div>'
        else text = '<button id="teemboom_popup">Show comments</button>'
        navigator.clipboard.writeText(text).then(
            alert('Script copied')
        )
    }
    return (
        <div className={styles.page}>            
            <h1>Position Comment Section</h1>
            <p>There are currently 3 placement options</p>
            <ul>
                <li><a href="#df_placement">Default - At the very end of the page</a></li>
                <li><a href="#ct_placement">Custom or Personalized Placement</a></li>
                <li><a href="#pop_placement">Popup</a></li>
            </ul>
            <h3 style={{"margin-top": "70px"}} id='df_placement'>Default Placement</h3>
            <p>
            As soon as you add the script tag to the page, this option is triggered. 
            It is activated when there are no other implementations of Personalized or Popup methods. 
            This approach is known as the <i>Last Div Standing</i> because it automatically generates 
            the comment section and appends it to the body element of the webpage.
            </p>
            <h3 style={{"margin-top": "70px"}} id="ct_placement">Custom Placement</h3>
            <p>
                With custom placement, you decide where in your webpage the comments section
                would go. Create an element (<code>&lt;div&gt;</code>, <code>&lt;section&gt;</code> etc)
                and give it an id of <code>teemboom_comments</code>. The comments section would be generated
                inside this element.
            </p>
            <div className={styles.copy_code}>
                <div className={styles.copy_code_scroll}>
                    <p>
                        <code>
                            &lt;div id="teemboom_comments"&gt;&lt;/div&gt;
                        </code>
                    </p>
                </div>
                <button onClick={()=>{copyScript(1)}} className={styles.copy_code_button}>Copy</button>
            </div>
            <p>VOILA! your Comment Section is ready to go.</p>
            <h3 id='pop_placement' style={{"margin-top": "70px"}}>Popup</h3>
            <p>
                This feature allows you to create a trigger point - <code>click event</code> -
                from which your comments will be displayed in a popup container.
                Create an element - <code>&lt;button&gt;</code> -
                and give it an id of <code>teemboom_popup</code>.
            </p>
            <div className={styles.copy_code}>
                <div className={styles.copy_code_scroll}>
                    <p>
                        <code>
                            &lt;button id="teemboom_popup"&gt;Show comments&lt;/button&gt;
                        </code>
                    </p>
                </div>
                <button onClick={()=>{copyScript()}} className={styles.copy_code_button}>Copy</button>
            </div>
            <div className={styles.navigation}>
                <div></div>
                <button onClick={()=>{navigate('/customization/colors')}} className={styles.next}>Next: Customization</button>
            </div>
        </div>
    )
}

export default PositionCommentSection