import cookieImg from "../assets/cookie-1.png";

function CookieClicker({ count, setCount}) {

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div style= {{ marginTop: "2rem" }}>
            <h2>Cookie Cat Clicker</h2>

            <button
            onClick={handleClick}
            style={{
                background: "none",
                border: "none",
                cursor: "pointer",
            }}
            >
                <img src={cookieImg} alt="cookie" style={{ width: "150px", height: "150px" }} />
            </button>

            <p>You have clicked {count} times!</p>
        </div>
    );
}

export default CookieClicker;