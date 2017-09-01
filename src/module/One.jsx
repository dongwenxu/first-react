import React,{Component} from 'react';
import ReactDOM from 'react-dom';

// const One = () => (
//     <div>
//         <h2>首页</h2>
//     </div>
// )

class One extends Component {

   state = {
      helloTo:"helloworld"
   };
   handleChange = (event) => {
      this.setState({
          helloTo:event.target.value
      });
   };


   submitHandler = (event) => {
      event.preventDefault();
      alert(this.state.helloTo);
   };

   render(){
       //将props挂载在实例对象上  this 因此不同    refs获取真实的dom
      return (
         <form onSubmit={this.submitHandler}>
             <input type="text" value={this.state.helloTo} onChange={this.handleChange}/><br/>
             <button type="submit">{this.state.helloTo}</button>
         </form>
      )
   };
}


export default One;