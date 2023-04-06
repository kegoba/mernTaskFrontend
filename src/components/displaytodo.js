import React, { Component} from "react"
import axios  from "axios";

class displayTodo extends Component{
    constructor(props){
        super(props)       
        this.state ={
            
            //for todo
            todoList : [],
            allSelectedTodo : [],
            //for email
            emailList : [],
            allSelectedEmail : [],
            Selected : false     
        }
    }
    async componentDidMount() {
    axios.all([
    await axios.get("http://localhost:8080/api/displaytodo"),
    await axios.get("http://localhost:8080/api/allemail")
    ])
    .then(axios.spread((resp_todo, resp_email) => {
        console.log(resp_email.data)
      this.setState({
        todoList: resp_todo.data,
        emailList : resp_email.data
      });

    }));
  }
   handleTittle = (e)=>{
       // alert(e.target.value)
   
    console.log(e.target.value)
    }
    handleContent=(e) => {
       // alert(e.target.value)
        console.log(e.target.value)
    }

    handleSubmit  = (e)=>{
        //do something 
    }
    handleSelectAll = ()=>{

    }
          //Select/ UnSelect Table rows

   async handleSelectTodo(index, e){
  	let newItems = this.state.todoList;
		newItems[index].checked = !newItems[index].checked
        
  	this.setState({
    	todoList : newItems
    })
     let allSelectedTodo = (this.state.todoList.filter(item => item.checked))
     console.log(allSelectedTodo)
     
     await this.setState({allSelectedTodo : allSelectedTodo})
  }

     async handleSelectEmail(index, e){
  	let newItems = this.state.emailList;
		newItems[index].checked = !newItems[index].checked
  	this.setState({
    	emailList : newItems
    })
     let allSelectedEmail = (this.state.emailList.filter(item => item.checked))
     await this.setState({allSelectedEmail : allSelectedEmail})
  }

  handleSubmit = async(e)=>{
     e.preventDefault()
     console.log("i am here")
    const {allSelectedEmail, allSelectedTodo} = this.state
    let postdata = {
        allSelectedEmail, allSelectedTodo
    }
    console.log(postdata)
 await axios.post("http://localhost:8080/api/sendemail", postdata)
    .then((resp)=>{
        console.log(resp)
        if(resp.status ===200){
        console.log(resp.data)
        alert("record saved")

        //this.props.history.push("/addtodo")
        }else{
        alert("record not save")
        }
    })
    .catch((err)=>{
        alert(err)

    })


  }

    render(){
        return(
            <div className="container page-wraper">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">
                    Check Boxes
                  </th>
                  <th scope="col">Tittle</th>
                  <th scope="col">Content</th>
                </tr>
              </thead>
              <tbody>
                {this.state.todoList.map((todo, index) => (
                  <tr key={todo.id}>
                    <th>
                      <input type="checkbox" onChange={this.handleSelectTodo.bind(this, index)} />
                    </th>
                    <td>{todo.tittle}</td>
                    <td>{todo.content}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h3> Selected Items</h3>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Tittle</th>
                  <th scope="col">Content</th>
                </tr>
              </thead>
              <tbody>
                {this.state.allSelectedTodo.map((todo, index) => (
                  <tr key={todo.id}>
                    <td>{todo.tittle}</td>
                    <td>{todo.content}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">
                    Check Boxes
                  </th>
                  <th scope="col">Emails</th>
                  
                </tr>
              </thead>
              <tbody>
                {this.state.emailList.map((todo, index) => (
                  <tr key={todo.id}>
                    <th>
                      <input type="checkbox" onChange={this.handleSelectEmail.bind(this, index)} />
                    </th>
                    <td>{todo.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Tittle</th>
                  <th scope="col">Content</th>
                </tr>
              </thead>
              <tbody>
                {this.state.allSelectedEmail.map((todo, index) => (
                  <tr key={todo.id}>
                    <td>{todo.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button type="submit" className=" btn-primary btn-send-notification" onClick={this.handleSubmit}>
              Send Notification
            </button>
            </div>
        )
    }
}
export default displayTodo;