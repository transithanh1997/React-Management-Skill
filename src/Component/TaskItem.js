
import React,{Component} from "react";

class TaskItem extends Component{
    
   
    render(){
        return(
            
                
                
                 <tr>       
                            <td>1</td>
                            <td>Hoc Angular 4</td>
                            <td className="text-center">
                                <span className="label label-danger">Kich Hoat</span>
                            </td>
                            <td className="text-center">
                                
                                <button type="button" className="btn btn-warning">
                                    <span className="fa fa-pencil"></span>Edit
                                </button>
                                &nbsp;
                                <button type="button" className="btn btn-danger">
                                    <span className="fa fa-trash"></span>Delete
                                </button>
                            </td>
                        
                    
                
                </tr>
                  
                 
            
               
            
        )

    }
}
export default TaskItem