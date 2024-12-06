import React,{ Component} from "react";

class VirtualDom extends Component{
    constructor(){
        super();
        this.state={
            breakfast :[
                {id:102,name:'dosa',price:'20rs'  },
                {id:103,name:'poori',price:'40rs'  },
                {id:101,name:'idly',price:'30rs'},
                {id:104,name:'vada',price:'10rs' },
            ],
            courses:['js','python','java','reactjs','angular','dotnet']

        }
    }
    render(){
        const {breakfast,courses} =this.state;
        return(
            <div>
                <h1>this is virtual dom component</h1>
                <ul>
                    {
                        breakfast.length > 0 && breakfast.map((val,index)=>{
                            return <li key={val.id}> &#8377;{val.name}-{val.price}</li>
                        })
                    }
                </ul>
                <hr/>
                <label>select course:</label>
                <select>
                    {
                        courses.length > 0 && courses.map((val,index)=>{
                            return <option value={val} key={index}>{val}</option>

                        })
                    }
                </select>
            </div>
        )
    }
}
export default VirtualDom