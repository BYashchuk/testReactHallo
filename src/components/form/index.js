import React from 'react'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
             value: '',
             valueRef: ''  };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeRef = this.handleChangeRef.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value})
        console.log(e.target.value)       
     }  
     handleChangeRef() {
        this.setState({valueRef: this.refs.name2.value})
        console.log(this.refs.name2.value)       
     }

    handleSubmit() {
        alert(this.state.value + '\n' + this.refs.name2.value)
    } 

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                target.value:
                      <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
<br/>
                 <label>
                 refs.value:
                      <input type="text" ref='name2' onChange={this.handleChangeRef} />
                </label>
                <input type="submit" value="Submit" />

                <div className='val-text'>{this.state.value === '' ? this.props.firstValur : this.state.value}</div>
                <div className='val-text'>{this.state.valueRef === '' ? this.props.secValur : this.state.valueRef}</div>
           
                
            </form>
        );
    }
}

export default Form
