import React, { PureComponent, memo } from "react";

// const Try = memo((props) => {
//   const { tryInfo } = this.props;
//   return (
//     <div>
//       <div>{tryInfo.try}</div>
//       <div>{tryInfo.result}</div>
//     </div>
//   );
// });
// export default Try;

// Hook 사용할때는 pureComponent나 shouldComponentUpdate 사용못함
// 그래서 memo 를 사용해 컴포넌트를 감싸주면 똑같은 기능을 할 수 있다.

class Try extends PureComponent {
  render() {
      console.log('Try 랜더링',this.props);
      const { tryInfo } = this.props;
    return (
      <li>
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>
      </li>
    );
  }
}

export default Try;
