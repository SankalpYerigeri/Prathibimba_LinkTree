import react from "react"
import  ReactDOM  from "react-dom/client"


const Header = () =>
{
    return (
        <>
        <div className="header">
            <div>
                <img className="logo" src="https://i.ibb.co/zhGxCzf/Pralogo.png" alt="Our Logo"/>
            </div>
            <div className="name">
                <h1>UVCE Prathibimba</h1>
                
                <h4>The Art and Photography club of UVCE</h4>
            </div>
            <div className="details">
                <i class="fa-solid fa-location-pin m-0"></i>
                <h4>UVCE, Benagaluru</h4>
            </div>
        </div>
        </>
    )
}

const AppLayout = () =>
{
    return (
        <>
        <div className="app">
            <Header/>
        </div>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)