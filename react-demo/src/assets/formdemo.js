import React from "react";

class Formdemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gender: '',
      hobbies: [],
      messege: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeHobbies = this.handleChangeHobbies.bind(this);
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleChangeGender(event) {
    this.setState({gender: event.target.value});
  }

  handleChangeHobbies(event) {
    let arr = this.state.hobbies
    let item = event.target.value
    let i = arr.indexOf(item)
    if (i > -1) {
      arr.splice(i, 1)
    } else {
      arr.push(item)
    }
    this.setState({hobbies: arr});
  }

  handleSubmit(event) {
    this.setState({messege: '' + this.state.name + '(' + this.state.gender + ')，喜欢' + this.state.hobbies.join('，')});
    event.preventDefault();
  }

  getList = () => {
    const hobbies = ['swimming', 'hiking', 'running', 'reading'];
    return hobbies.map((item, index) => {
              return (
                <li key={index}>
                  <label>
                    <div className={["check-box", this.state.hobbies.indexOf(item)>-1 ? "checkedBox" : null].join(' ')}>
                      <i>
                        <input type="checkbox" name="check-box" value={item} onChange={this.handleChangeHobbies} />
                      </i>
                    </div>
                    <span>{item}</span>
                  </label>
                </li>
              ) 
            })
  }

  render() {
    return (
      <div>
        <h2>react表单</h2>
        <form onSubmit={this.handleSubmit} className="wrapper">
          <ul>
            <li>
              Name:
            </li>
            <li>
              <input type="text" value={this.state.name} onChange={(e)=>this.handleChangeName(e)} />
            </li> 
          </ul>
          <ul>
            <li>
              Gender:
            </li>
            <li>
              <label>
                <div className={["radio-btn", this.state.gender==="Male" && "checkedRadio"].join(' ')}>
                  <i>
                    <input type="radio" name="radio-btn" value='Male' onChange={(e)=>this.handleChangeGender(e)} />
                  </i>
                </div>
                Male
              </label>
            </li>
            <li>
              <label>
                <div className={["radio-btn", this.state.gender==="Female" && "checkedRadio"].join(' ')}>
                  <i>
                    <input type="radio" name="radio-btn" value='Female' onChange={(e)=>this.handleChangeGender(e)} />
                  </i>
                </div>
                Female
              </label>
            </li>
          </ul>

          <ul>
            <li>
              Hobbies:
            </li>
            {this.getList()}
          </ul>

          <input type="submit" value=" 确 认 " />

          <div>{this.state.messege}</div>
        </form>
        
      </div>
    );
  }
}

export default Formdemo;
