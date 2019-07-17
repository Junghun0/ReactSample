import React , { useState, useRef } from "react";

export default function WordRelay() {
  const [word, setWord] = useState('테스트');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
      e.preventDefault();
      if (word[word.length - 1] === value[0]){
            setResult('정답');
            setWord(value);
            setValue('');
            inputRef.current.focus();
      } else{
          setResult('오답');
          setValue('');
          inputRef.current.focus();
      }
  }; 

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputRef}
          value={value}
          onChange={onChangeInput}
        />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </div>
  );
}
// class WordRelay extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             word: '테스트',
//             value: '',
//             result: ''
//         }
//     }

//     onSubmitForm = (e) =>{
//         e.preventDefault();
//         if (this.state.word[this.state.word.length - 1] === this.state.value[0]){
//             this.setState({
//                 result: '정답',
//                 word: this.state.value,
//                 value: '',
//             });
//             this.input.focus();
//         }else{
//             this.setState({
//                 result: '오답',
//                 value: ''
//             })
//         }
//     };

//     onChangeInput = (e) =>{
//         this.setState({value: e.target.value});
//     };

//     input;
//     onRefInput = (c) =>{
//         this.input = c;
//     };

//     render(){
//         return(
//             <div>
// <div>{this.state.word}</div>
// <form onSubmit={this.onSubmitForm}>
//     <input ref={this.onRefInput}
//      value={this.state.value}
//      onChange={this.onChangeInput}/>
//      <button>입력!</button>
// </form>
// <div>{this.state.result}</div>
//             </div>
//         );
//     }
// }

// export default WordRelay;
