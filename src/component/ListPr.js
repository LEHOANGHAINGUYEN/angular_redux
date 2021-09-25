import React,{Component} from 'react';
import  { connect } from 'react-redux';
import AddPr from './AddPr';
class ListPr extends Component{
   render(){
    //    const {myReducer}=this.props;
    //    console.log(myReducer)
       return(
         <div>
             <AddPr></AddPr>
               {this.props.mang.map((elm,i)=>{
                  return (
                      <li key={i}>{elm}</li>
                  )
              })}
         </div>
       )
   }
}

export default connect(function(state){return{mang: state.addItem.mang}})(ListPr);