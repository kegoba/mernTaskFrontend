import React, { Component} from "react"
import axios from "axios";

class AddItem extends Component{
    constructor(props){
        super(props)       
        this.state ={
            content : "",
            tittle : ""
          
        }
    }
   onchangeTittle = (e)=>{
       // alert(e.target.value)
        this.setState({ tittle : e.target.value
    })
   

    }
    onchangeContent=(e) => {
       // alert(e.target.value)
   
         this.setState({ content : e.target.value
    })
    }

handlePostContent = async (e) =>{
  e.preventDefault()
  let {content, tittle} = this.state
  if (content.length > 5 && tittle.length > 5){
      let postdata = {
        content :  content,
        tittle : tittle
      }

  await axios.post("http://localhost:8080/api/addtodo", postdata)
  .then((resp)=>{
    console.log(resp)
    if(resp.status ===200){
      console.log(resp.data)
      alert("record saved")
      this.setState({
        content : "",
        tittle : ""
      })
      //this.props.history.push("/addtodo")
    }else{
      alert("record not save")
    }
  })
  .catch((err)=>{
    alert(err)

  })
    alert("good")



  }else{
    alert("Please Enter a Valid Data")
    this.setState({
      content : " ",
      tittle : " "
    })
  }

}
  
    render(){
        return(
            <div className="container page-wraper">

        <div className="row align-items-center todo" >
        <div className="mx-auto col-10 col-md-8 col-lg-6">
 
          <form className="form-example" action="" method="post">
            <h1 className="text-center"> Add Todo </h1>
            <div className="form-group">
            
              <input
              onChange={this.onchangeTittle}
              value={this.state.tittle}
                type="text"
                className="form-control"
                placeholder="Enter Tittle"
              />
            </div>
            <div className="form-group">
              <textarea
              onChange={this.onchangeContent}
              value={this.state.content}
                type="text"
                className="form-control password"
                placeholder="Enter Content"
              />
            </div>

            <button type="submit" className="btn btn-primary btn-customized mt-4" onClick={this.handlePostContent}>
              Login
            </button>
          </form>
       
        </div>
      </div>


            </div>
        )
    }
}
export default AddItem;