
import React,{Component} from "react";

class Sort extends Component{
    
   
    render(){
        return(
            <div>
                
                  
                  
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                      <div className="dropdown">

                          <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                              Sort <span className="fa fa-caret-square-o-down ml-5"></span>
                                <span className="caret"></span></button>
                                    <ul className="dropdown-menu">
                                      <li>
                                        <a href="a" role="button" className="sort_selected">
                                          <span className="fa fa-sort-alpha-asc pr-5">
                                              A-Z
                                          </span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="a" role="button" className="sort_selected">
                                          <span className="fa fa-sort-alpha-desc pr-5">
                                              Z-A
                                          </span>
                                        </a>
                                      </li>
                                      <li role="separator" className="devider"></li>
                                      <li>
                                        <a href="a" role="button" className="sort_selected">
                                          <span className="fa fa-sort-alpha-asc pr-5">
                                              Trang thai Kich Hoat
                                          </span>
                                        </a>
                                      </li>
                                      
                                    </ul>
          
                      </div>
                    </div>
                  
                  
            
               
            </div>
        )

    }
}
export default Sort