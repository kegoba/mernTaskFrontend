import React, { Component} from "react"
import axios from "axios";

class AddEmail extends Component{
    constructor(props){
        super(props)       
        this.state ={
            email : "",
            messageId : ""
        }
    }
    onchangeEmail=(e) => {
       this.setState({
        email: e.target.value
       })
        
    }
       handlePostEmail =  async (e) =>{
        e.preventDefault()

        const email = /\S+@\S+\.\S+/.test(this.state.email)
      if (email){
       let postdata ={
        email  : email
       }
        await axios.post("http://localhost:8080/api/addemail", postdata)
        .then((resp)=>{
            console.log(resp)
            if(resp.status ===200){
              console.log(resp.data)
              alert("record saved")
              this.setState({
                email : ""
              })
            //this.props.history.push("/addtodo")
          }else if(resp.status===409){
              alert("email exist")
          }else{
            alert("record not save")
          }
        })
      .catch((err)=>{
        alert(err)

      }) 

      } else{
        alert("email not valid")
        this.setState({
                email : ""
              })
      }
       

      }
    render(){
        return(
        <div className="container page-wraper">
        <div className="row align-items-center todo" >
        <div className="mx-auto col-10 col-md-8 col-lg-6">
 
          <form className="form-example">
            <h1 className="text-center"> Add Email </h1>
            <div className="form-group">      
              <input
              onChange={this.onchangeEmail}
              value={this.state.email}
                type="email"
                className="form-control text-center"
                placeholder="Enter Tittle"
              />
            </div>

            <button type="submit" className="btn btn-primary btn-customized mt-4 text-center" onClick={this.handlePostEmail}>
              Save Email
            </button>
          </form>
       
        </div>
      </div>


            </div>
        )
    }
}
export default AddEmail;