import "../index.css"
// Images
import One from "../assets/images/c1.jpeg"
import Two from "../assets/images/c2.jpeg"
import Three from "../assets/images/c3.jpeg"
import Four from "../assets/images/c4.jpeg"
import Five from "../assets/images/c5.jpeg"

const chat = [
    {
        src : One,
        name : "Vani Bhojan",
        message : "Hii, How are you? Man!",
        time : "11.20 AM",
        emojii : "💙"
    },
    {
        src : Two,
        name : "Vijay",
        message : "I'm at meeting",
        time : "04.20 PM",
        emojii : "💙"
    },
    {
        src : Three,
        name : "Priya Bhavani Shankar",
        message : "Call me at 5",
        time : "04.20 PM",
        emojii : "💙"
    },
    {
        src : Four,
        name : "Vijay Sethupathi",
        message : "I've reached the location",
        time : "12.53 PM",
        emojii : "💙"
    },
    {
        src : Five,
        name : "Suriya",
        message : "I need to talk to you!",
        time : "06.15 AM",
        emojii : "💙"
    }
]

// Chat Component
function Chat() {
    return(
        <div>{
            chat.map((item,index) => (
            <div  className="chat__container" key = {index}>
                <div  className="img__container">
                    <img className="c_img" src={item.src} alt={item.name} />
                    <div className="chat__container-desc">
                        <h2>{item.name}</h2>
                        <p>{item.message}</p>
                    </div>
                </div>
                <div className="time__container">
                    <p>{item.time}</p>
                    <p>{item.emojii}</p>
                </div>
            </div>
            ))
            }
        </div>
    )
}
export default Chat