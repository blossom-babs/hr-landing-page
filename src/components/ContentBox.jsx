import React from "react";

function ContentBox({title, content}){
    return(
<div className="about__values">
  <p className="about__values--title">{title}</p>
  <p className="about__values--content">{content}</p>
</div>
    )
}

export default ContentBox;