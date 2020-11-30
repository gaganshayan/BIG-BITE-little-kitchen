import React from 'react';


const Blogging = ({ articles }) => {
    console.log("Blogging - articles",articles)
    const{title, photo, ingredients, instructions} = articles.fields
    console.log("Blogging - photos, ingredients and instructions",articles)
    return (
        <div>
            <br />
            <h1>{title}</h1>
            {/* <h1>{fields.ingredients.content.[0].content.[0]}</h1>
            <h1>{instructions}</h1> */}
            <br />
            <h3>Ingredients:</h3>
                <h4>12oz New York Strip Steak</h4>
                <h4>2 tbsp H-E-B blackened cajun seasoning</h4>
                <h4>2 tbsp finely coarse ground black pepper</h4>
                <h4>2 tbsp butter</h4>
                <br />
                <h4>Time: 20 minutes</h4>
                <br />
            <h3>Instructions:</h3>
                <h4>After bringing your steak to room temperature, season liberally with cajun seasoning and ground black pepper</h4>
                <h4>In a cast iron pan, heat up 2 tbsp of butter over medium heat</h4>
                <h4>Once melted and sparkling, place your 12oz NY strip in the cast iron pan and cook 4-5 minutes on each side for a nice medium cooked steak</h4>
                <h4> - for medium rare, cook for 2-3 minutes on each side</h4>
                <h4> - for medium-well, cook for 6-8 minutes on each side</h4>
                <h4>After cooking on each side, remove steak from heat and allow to rest for 8-12 minutes</h4>
                <h4>Slice thin and serve over salad or accompanied by your choice of sides</h4>
                <br />
        </div>
    )};

Blogging.prototype = {

}

export default Blogging;