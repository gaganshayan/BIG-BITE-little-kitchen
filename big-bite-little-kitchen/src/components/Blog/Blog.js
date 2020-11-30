import React from 'react';
import './Blog.css';
import { client } from '../../client'
import Blogposts from './Blogposts'
import Blogging from './Blogging'

class Blog extends React.Component {
  state = {
    articles: []
  }

  componentDidMount() {
    client.getEntries()
      .then((response) => {
        console.log("here is what we are looking at", response)
        this.setState({
          articles: response.items
        })
      })
      .catch(console.error)
  }


  render() {
    console.log("inside the log")
    return (
      <div className="Blog">
        
        <div className='container'>
          <main>
            <div className='wrapper'>
              {this.state.articles.length && <Blogposts blogposts={this.state.articles} />}
            </div>
          </main>


        </div>
      </div>
    );
  }
}

export default Blog;
