
import React,{Component} from "react";
import TaskItem from "./TaskItem";
class ListDS extends Component{
    
   
    render(){
        return(
            <div>
                
                <table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Name</th>
                            <th>Trang Thai</th>
                            <th>Hanh Dong</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>
                                
                                <input 
                                    type="text" 
                                    name="filtername"  
                                    className="form-control" 

                                
                                />
                                
                            </td>
                            <td>
                                <select 
                                            className="form-control" 
                                            name="filterStatus">
                                        <option value={-1}>Tat ca</option>            
                                        <option value={0}> An</option>
                                        <option value={1}> Kich hoat</option>
                                </select>

                            </td>
                        </tr>
                        
                        <TaskItem></TaskItem>
                        <TaskItem></TaskItem>
                    </tbody>
                </table>
                
                  
                 
            
               
            </div>
        )

    }
}
export default ListDS