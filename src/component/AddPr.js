import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as act from '../action/TodoActions.js'

class AddPr extends Component {
    handSubmit(e){
        // 
        e.preventDefault();
        const {dispatch}=this.props;
       dispatch(act.addPr(this.refs.txt.value));
       this.isToggle();
    //    dispatch({type:'ADD_PRODUCT',item: this.refs.txt.value})
    }
    isToggle=()=>{
        const {dispatch}=this.props;
        dispatch(act.action());
    }
   render(){
      const {addPr,isAdd}=this.props;
      console.log(isAdd.isAdding);
      if(isAdd.isAdding){
        return(
            <form onSubmit={this.handSubmit.bind(this)}>
                <input type="text" ref="txt"/>
                <button>ADD</button>
            </form>
           )
      }
      return <button onClick={this.isToggle}>+</button>
      
   }

}
export default connect(function(state){return{addPr: state.addItem,isAdd: state.isAdd}})(AddPr);// C1
