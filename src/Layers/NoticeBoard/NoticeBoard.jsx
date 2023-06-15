import "./styles.css";

const NoticeBoard = () => {
  return (
    <div className="notice-board-container">
      <div className="notice-board-img-container">
        <img
          src="https://mediahub.unc.edu/wp-content/uploads/2022/04/WorshippersAtWatts-1024x570.jpeg"
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
