import React from 'react';
import './App.css';

class StateDemo extends React.Component {
  state = {
    bgColor: 'whitesmoke',
    showArticles: false,
  };

  changeBGColorHandler = (event) => {
    const colors = ['rebeccapurple', 'blueviolet', 'red'];
    const index = Math.floor(Math.random() * colors.length);
    const color = colors[index];
    console.log('THis', this)
    this.setState({
      bgColor: color
    });
  };

  toggleArticlesHandler = (event) => {
    this.setState((prevState) => {
      return {
        ...this.state,
        showArticles: !prevState.showArticles
      }
    });
  };

  render() {
    return (
      <div className="wrapper" style={{backgroundColor: this.state.bgColor}}>
        <h1>React Contacts</h1>
        <button onClick={this.changeBGColorHandler}>Change Background</button>

        <section>
          <h2>Articles</h2>

          <button onClick={this.toggleArticlesHandler}>
            {this.state.showArticles ? 'Hide' : 'Show'} Articles
          </button>


          <div style={{display: this.state.showArticles ? 'block' : 'none'}}>
            <article>
              <h4>Aricle One</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos temporibus non laboriosam ex rerum earum, atque corporis praesentium quaerat eveniet necessitatibus voluptas unde vero sequi expedita eum animi nobis beatae debitis voluptatibus autem provident natus iste et. Aperiam, saepe ratione!</p>
            </article>
            <article>
              <h4>Aricle Two</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos temporibus non laboriosam ex rerum earum, atque corporis praesentium quaerat eveniet necessitatibus voluptas unde vero sequi expedita eum animi nobis beatae debitis voluptatibus autem provident natus iste et. Aperiam, saepe ratione!</p>
            </article>
          </div>
        </section>
      </div>
    );
  }
}

export default DemoState;
