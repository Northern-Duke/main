import React,{ useState } from "react";
import HexagonSVG from "../components/hexagon";
import '../styles/mainPage.css';


export default function MainPage() {
    const [hoveredPath, setHoveredPath] = useState(null);


    return(
        <div className="background">
            <div className="mainPage">
                <div className="profileBox">
                    <h
                    style={{
                        marginTop:'20%',
                        marginLeft: '10%'
                    }}
                    >PORTFOLIO</h>
                </div>
                <div className="profileBox">
                    <div className="box">
                        <HexagonSVG hoveredPath={hoveredPath} setHoveredPath={setHoveredPath} />
                    </div>
                </div> 
            </div>
        </div>
    );
}