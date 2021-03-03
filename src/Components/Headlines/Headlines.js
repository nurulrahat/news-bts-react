import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
const Headlines = (props) => {
    const {title,content,description,urlToImage} = props.article;
    //style={{width:250}} 
    return (
        <>
        <Jumbotron className="w-50 border border-primary m-4"> 
       <h3>{title}</h3>
       <img src={urlToImage} className="w-75" alt="" srcset=""/>
       <p>
         {content}
       </p>
       <p>
         <Button variant="primary">Learn more</Button>
       </p>
     </Jumbotron>
        </>
    );
};

export default Headlines;