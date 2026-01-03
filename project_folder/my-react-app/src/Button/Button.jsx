import styles from "./Button.module.css"

function Button() {

    // const styles = {
    //     width: '150px',
    //     height: "50px",
    //     borderRadius: '20px',
    //     border: '0px',
    //     margin: '20px',
    //     fontSize: "15px",
    //     backgroundColor:' rgb(112, 176, 229)',
    //     cursor: "pointer",
    //     color: "white"
    //     }

    return(
        <>
            <button style={styles}> CLICK ME </button>
            <button className={styles.button}> CLICK ME </button>
        </>
        
    );
}

export default Button;