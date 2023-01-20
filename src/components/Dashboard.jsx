import styles from "../styles/dashboard.module.css"
import { Sidebar } from "./Sidebar";
import receipt from "../images/receipt.svg";
import appointmentSchedule from "../images/appointmentSchedule.svg";
import schedule from "../images/schedule.svg";
import graph from "../images/graph.svg";
import hospitalIcon from "../images/hospitalIcon.svg";
import notificationIcon from "../images/notificationIcon.svg";
import userActivity from "../images/userActivity.svg";
import summary from "../images/summary.svg";
export const Dashboard=()=>{
    let userName = JSON.parse(localStorage.getItem("ampcome_user")) || "User"
    return (
        <>
        <div className={styles.dashboard_container}>
            <Sidebar/>
            <div className={styles.dashboard_right_container}>
                <div className={styles.user_info_box}>
                    <p className={styles.set_welcome_banner}>Welcome  <b>{userName}</b></p>
                    <p className={styles.set_unit}>Cardiology</p>
                </div>
                <div className={styles.user_other_details_box}>
                    <div className={styles.user_other_details_sub_box}>
                        <div className={styles.user_earning_box}>
                            <div className={styles.user_earning_box_sub_div_1}>
                                <img style={{width:"20px"}} src={receipt} alt="" />
                                <div>
                                    <p>Total Earnings</p>
                                    <p>₹4000</p>
                                </div>
                            </div>
                            <div className={styles.user_earning_box_sub_div_2}>
                                <div>
                                    <p>Unit</p>
                                    <select name="" id=""></select>
                                </div>
                                <div>
                                    <p>Time Duration</p>
                                    <select name="" id=""></select>
                                </div>
                            </div>
                        </div>
                        <div className={styles.visits_appointments_box}>
                            <div>
                                <div>
                                    <p>Appointments</p>
                                    <p>54</p>
                                </div>
                                <div>
                                    <p>EMR Finalised</p>
                                    <p>47</p>
                                </div>
                                <div>
                                    <p>Patients Registration</p>
                                    <p>120</p>
                                </div>
                                <div>
                                    <p>KR4ALL Visits</p>
                                    <p>30</p>
                                </div>
                            </div>
                        </div>
                        {/* appointment and schedule boxes */}

                        <div className={styles.appointment_schedule_containter}>
                            <div className={styles.appointment_box}>
                                <img src={appointmentSchedule} alt="" />
                            </div>
                            <div className={styles.schedule_box}>
                                <img src={schedule} alt="" />
                            </div>
                        </div>
                        <div className={styles.graph_box}>
                            <img src={graph} alt="" />
                        </div>
                    </div>
                    {/* right side activity box */}

                    <div className={styles.user_activity_box}>
                        <img src={hospitalIcon} alt="" />
                        <div>
                            <div style={{marginBottom:"12px"}}>
                                <img src={notificationIcon} alt="" />
                                <span style={{marginLeft:"18px"}}>ACTIVITY</span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={userActivity} alt="" />
                                <span>User Activity</span>
                                <span>12:32</span>
                            </div>
                            <p>Vivek Kumar accepted the invitation</p>
                        </div>
                        <div>
                            <div>
                                <img src={userActivity} alt="" />
                                <span>User Activity</span>
                                <span>8:16</span>
                            </div>
                                <p>Ritu M blocked their calendar for 15th September</p>
                        </div>
                        <div>
                            <div>
                                <img src={summary} alt="" />
                                <span>Summary</span>
                                <span>8:00</span>
                            </div>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div>
                            <div>
                                <img src={userActivity} alt="" />
                                <span>Application update</span>
                                <span>yesterday</span>
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div>
                            <div>
                                <img src={userActivity} alt="" />
                                <span>User Activity</span>
                                <span>2 days age</span>
                            </div>
                            <p>Vivek Kumar accepted the invitation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}