import React,  {Component } from "react";

const Users = [
  {
    id: 1,
    selected: false,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
  },
  {
    id: 2,
    selected: false,
    name: "Ervin Howell",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
  },
  {
    id: 3,
    selected: false,
    name: "Clementine Bauch",
    email: "Nathan@yesenia.net",
    phone: "1-463-123-4447",
    website: "ramiro.info",
  },
  {
    id: 4,
    selected: true,
    name: "Patricia Lebsack",
    email: "Julianne.OConner@kory.org",
    phone: "493-170-9623 x156",
    website: "kale.biz",
  },
  {
    id: 5,
    selected: false,
    name: "Chelsey Dietrich",
    email: "Lucio_Hettinger@annie.ca",
    phone: "(254)954-1289",
    website: "demarco.info",
  },
];

class DisplayEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      List: Users,
      selectedAll: false,
      SelectedList: [],
    };
  }
      //Select/ UnSelect Table rows
  handleSelectAll= (e) =>{
    let tempList = this.state.List;
    // Check/ UnCheck All Items
    tempList.map((user) => (user.selected = e.target.checked));

    //Update State
    this.setState({
    selectedAll: true,
      List: tempList,
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }

  // Update List Item's state and Master Checkbox State
  handleSelect(e, item) {
    let tempList = this.state.List;
    tempList.map((user) => {
      if (user.id === item.id) {
        user.selected = e.target.checked;
      }
      return user;
    });


    this.setState({
      List: tempList,
      SelectedList: this.state.List.filter((e) => e.selected),
    });
   
  }
  handleSendMail = (e)=>{
    const list_of_email = this.state.SelectedList
    console.log(list_of_email)
  }


  render() {
    return (
        <div className="container displayemail">
        <div className="row">
          <div className="col-md-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={this.state.selectedAll}
                      id="mastercheck"
                      onChange={this.handleSelectAll}
                    />
                  </th>
                 
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Website</th>
                </tr>
              </thead>
              <tbody>
                {this.state.List.map((user) => (
                  <tr key={user.id}>
                    <th>
                      <input
                        type="checkbox"
                        checked={user.selected}
                        className="form-check-input"
                        onChange={(e) => this.handleSelect(e, user)}
                      />
                    </th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">
                  </th>
                   <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Website</th>
                </tr>
              </thead>
              <tbody>
                {this.state.SelectedList.map((list) => (
                  <tr key={list.id} >
                    <th scope="row">
                    </th>
                    <td>{list.name}</td>
                    <td>{list.email}</td>
                    <td>{list.phone}</td>
                    <td>{list.website}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            
            <button type="submit" className=" btn-primary btn-send-notification"onClick={this.handleSendMail} >
              Send Notification
            </button>
          </div>
        </div>
      </div>
      
    );
  }
}

export default DisplayEmail;