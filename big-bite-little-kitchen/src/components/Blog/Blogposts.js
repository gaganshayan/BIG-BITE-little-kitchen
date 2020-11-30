import React from 'react';
import Blogging from './Blogging'

const Blogposts = ({blogposts}) => {
    console.log("Blogposts - Blogposts", blogposts)
    return (
        <div>
            {blogposts.map((articles, index) => <Blogging articles={articles} key={index} />)}
        </div>
    )
}

export default Blogposts