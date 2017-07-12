import React from 'react';
import Util from '../../util/util';

class ToDoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      done: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const todo = Object.assign({}, this.state);
    this.props.createTodo({ todo })
    .then(
      () => this.setState({
        title: "",
        body: ""
      })
    );
  }

  update(key) {
    return ( e => this.setState({[key]: e.target.value}));
  }

  render () {
    const { errors } = this.props;

    return (
      <form>
        <ul className="errors-list">
          { errors.map( (e, i) => <li key={ i }>{ e }</li>) }
        </ul>

        <label>
          Title:
          <input onChange={ this.update('title')} value={this.state.title} />
        </label>
        <br/>
        <label>
          Body:
          <textarea onChange={ this.update('body')} value={this.state.body} >
          </textarea>
        </label>
        <br/>
        <button type="submit" onClick={this.handleSubmit} >Enter</button>
      </form>
    );
  }
}


export default ToDoForm;
