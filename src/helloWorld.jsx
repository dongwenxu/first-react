import React,{Component} from 'react';

class HelloWorld extends Component {

   clickHander = () => {
        console.log(this.refs);
   };

   componentDidMount(props){
        console.log(this.refs);
   };

   render(){
      return (
         <div className="container" onClick = {this.clickHander}>
            <div ref="hello" className="hello">hello</div>
            <div ref="world" className="world">world</div>
         </div> //将props挂载在实例对象上  this 因此不同    refs获取真实的dom
      )
   };
}


//单纯数据渲染选择这种方式更快
// const HelloWorld = (props) => {
//    console.log(props)
//    return(
//       <div>{ props.name } say:Hello World, 我今年 { props.age }</div>
//     )
// }

export default HelloWorld;


