import styles from "../styles/sidebar.module.css";
import vector from "../images/Vector.svg";
import queue from "../images/queue.svg";
import appointment from "../images/appointment.svg";
import bill from "../images/bill.svg";
import userIcon from "../images/userIcon.svg";
import rupee from "../images/rupee.svg";
import settings from "../images/settings.svg";


export const Sidebar=()=>{

    return(
        <>
            <div className={styles.sidebar_container}>
                <img src={vector} alt="" />
                <br />
                <img src={queue} alt="" />
                <br />
                <img src={appointment} alt="" />
                <br />
                <img src={rupee} alt="" />
                <br />
                <img src={bill} alt="" />
                <br />
                <img src={settings} alt="" />
                <br />
                <img src={userIcon} alt="" />
            </div>
        </>
    )
}