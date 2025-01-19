import searchIcon from "../assets/images/search.png"
import "../index.css"
// Search Component

function Find() {
    return(
        <div className="search__section">
            <input type = "text" className="search__input" placeholder = "Search"></input>
            <img src={searchIcon} alt="Search Icon" />
        </div>
    )
}

export default Find