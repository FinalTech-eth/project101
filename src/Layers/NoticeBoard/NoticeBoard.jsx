import "./styles.css";
import img from "../../Assets/Images/photo_5823502271126815178_y.jpg";
const NoticeBoard = () => {
  return (
    <div className="notice-board-container">
      <div className="notice-board-img-container">
        <img src={img} alt="church worship time" />
      </div>
      <div className="notice-message-container">
        <div className="notice-message">
          <h1>ACIFCA ANNUAL CONFERENCE 2023</h1>
          <p>
            Join Us With Guest Speaker: <strong>Bishop Degu Kebede</strong>
          </p>
          <p style={{ marginTop: "10px" }}>
            <i>Morning Service 9AM to 12:30PM</i>
          </p>
          <p>
            <i>Afternoon Service 2PM to 5:30PM</i>
          </p>
          <blockquote class="blockquote">
            <p class="blockquote-text">
              Awake, Awake; put on thy strength, O Zion; Put on thy beautiful
              garments, O Jerusalem, the holy city: For HenceForth There Shall
              No More Come Into Thee The Uncircumscised and The unclean.
            </p>
          </blockquote>
          <i>Isaiah 52:1</i>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  );
};

export default NoticeBoard;
