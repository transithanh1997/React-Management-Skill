import React,{Component} from "react";
import './App.css';
import TaskForm from "./Component/TaskForm";
import Control from "./Component/Control";
import ListDS from "./Component/ListDS";
class App extends Component{
    
  // constructor(props){
  //     super(props);
      
  // }
 
  render(){
      return(
        <div>
        <h2 className="headerH2">Working Manager</h2>
        <div className="row row-left" >
          
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <TaskForm></TaskForm>
          </div>
          
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            
            <button type="button" className="btn btn-primary">
                <span className="fa fa-plus mr-5"></span>&nbsp;Add Work
            </button><br/><br/>

            
            <Control></Control>
            <br/>
            
            <ListDS></ListDS>


          </div>
          
        </div>
        
        
        
        </div>
      )

  }
}
export default App
