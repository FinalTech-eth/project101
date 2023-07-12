import "./styles.css";
import img from '../../Assets/Images/photo_5823502271126815178_y.jpg'
const NoticeBoard = () => {
  return (
    <div className="notice-board-container">
      <div className="notice-board-img-container">
        <img
          src={img}
          alt="church worship time"
        />
      </div>
      <div className="notice-message-container">
        <div className="notice-message">
          <h1>Notice: The Exciting Yearly Confrence is Approaching!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            porttitor velit eget nulla venenatis congue. Pellentesque commodo
            bibendum sem ac cursus. Duis vitae placerat mi. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Nunc porttitor velit eget
          </p>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  );
};

export default NoticeBoard;
