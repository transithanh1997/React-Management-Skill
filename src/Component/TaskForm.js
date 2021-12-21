
import React,{Component} from "react";

class TaskForm extends Component{
    
    constructor(props){
        super(props);
        this.state={
            txtUserName:''
        };
        
        
    }
   onCloseTaskform(){
       
   }
   onhandleChange=(event)=>{
       this.setState({
            txtUserName:event.target.value
       });
   }
   onhandelSubmit=(event)=>{
       event.preventDefault();
       console.log(this.state)
   }
    render(){
        return(
           <div>
               <div className="panel panel-warning">
                     <div className="panel-heading">
           
                        <div className="row">
             
                             <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <h3 className="panel-title">Add Work

                                        <span className="fa fa-times-circle text-right">
                                        
                                        </span>
                                    </h3>
                            </div>
             
                            
             
                        </div>
           
           
                    </div>
                     <div className="panel-body">
           
                        <form onSubmit={this.onhandelSubmit}>
                            
                        
                            <div className="form-group">
                                 <label>UserName:</label>
                                 <input type="text" className="form-control" name='txtUserName' onChange={this.onhandleChange} placeholder="Enter username"/>
                                 <br/>
                                 <label >Trang Thai:</label>
                                 <select name="txtTrangThai" id="input" className="form-control" >
                                 <option value="1">Kich hoat</option>
                                 <option value="2">An</option>
                                 </select>
                            </div>
           
             
                            <div className="spanAddCancle">
                                 <button type="submit" className="btn btn-primary">
                                        <span className="fa fa-plus"> Luu Lai</span>    
                                 </button>&nbsp;
                            
                                 <button type="button" className="btn btn-primary">
                                    <span className="fa fa-close">Cancle</span>
                                 </button>

                            </div>
                        </form>
                </div>
            </div>
        </div>
        )

    }
}
export default TaskForm