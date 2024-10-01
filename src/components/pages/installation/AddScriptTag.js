import styles from '../css_modules/generic.module.css'
import { useNavigate } from 'react-router-dom';

function AddScriptTag(){
    const navigate = useNavigate()
    const copyScript = ()=>{
        let text = '<script src="https://scripts.teemboom.com/teemboom_comments.js"></script>'
        navigator.clipboard.writeText(text).then(
            alert('Script copied')
        )
    }
    return (
        <div className={styles.page}>
            <h1>Installation</h1>
            <p>
                Place the following <code>&lt;script&gt; </code>
                in the <code>&lt;head&gt;&lt;/head&gt; </code> tag <strong>OR </strong>
                right before the closing <code>&lt;/body&gt;</code> tag.
            </p>
            <div className={styles.copy_code}>
                <div className={styles.copy_code_scroll}>
                    <p>
                        <code>
                            &lt;script src="https://scripts.teemboom.com/teemboom_comments.js"&gt;&lt;/script&gt;
                        </code>
                    </p>
                </div>
                <button onClick={()=>{copyScript()}} className={styles.copy_code_button}>Copy</button>
            </div>
            
            <div className={styles.navigation}>
                <div></div>
                <button onClick={()=>{navigate('/installation/position_comment_section')}} className={styles.next}>Next: Position Comment Section</button>
            </div>
        </div>
    )
}

export default AddScriptTag