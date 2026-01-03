import Picture from "./assets/Cat.png"

function Card(){
    return(
        <div className="card">
            <img className="card-image"src={Picture} alt="NaumanPatel"></img>
            <h2 className="card-title">Nauman Patel</h2>
            <p className="card-text">I am a CS Student here in the UK.</p>

        </div>
    );
}

export default Card;