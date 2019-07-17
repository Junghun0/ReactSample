import React , {Component} from 'react';

class Gugudan extends Component{
    constructor(props){
        super(props);
        this.state = {
            first: Math.ceil(Math.random() * 9),
            second: Math.ceil(Math.random() * 9),
            value: '',
            result: '',
            answer: ''
        };
    }

    onSubmit = (e) => {
        e.preventDefault();
                    if (parseInt(this.state.value) === this.state.first * this.state.second){
                        this.setState({
                            result: '정답',
                            answer: this.state.first * this.state.second,
                            first: Math.ceil(Math.random() * 9),
                            second: Math.ceil(Math.random() * 9),
                            value: '',
                        });   
                    }else{
                        this.setState({
                            result: '땡',
                            value: '',
                            answer: ''
                        });
                    }
    }

    onChange = (e) => {
        this.setState({value: e.target.value});
    }


    render(){
        return(
            <React.Fragment>
                <div>{this.state.first}곱하기{this.state.second}는?</div>
                <form onSubmit={this.onSubmit}>
                    <input type="number"
                     value={this.state.value}
                     onChange={this.onChange}/>
                    <button>입력!</button>
                </form>
                <div>{this.state.answer}{this.state.result}</div>
            </React.Fragment>
        );
    }
}
export default Gugudan;