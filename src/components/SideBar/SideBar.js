import React from "react";
import "./SideBar.css";
import blender from "../../assets/ninja_blender.jpg";
import { useSelector } from "react-redux";

const SideBar = () => {
    const tags = useSelector((state) => state.data.data[0].tags);
    return(
        <div className="sidebar">
            <img src={blender} alt="ninja blender"/>
            <h1>Shark Ninja</h1>
            <p>Magic Bullet NutriBullet 12-Piece High-Speed Blender/Mixer System</p>
            <div className="tags">
                {
                    tags.map( (tag)=>(
                     <div key={tag}>{tag}</div>   
                    ))
                }
            </div>
        </div>
    )
  
};
export default SideBar;
