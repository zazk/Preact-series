import { h, Component } from 'preact';
import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export default class Task extends Component{ 

    state = {data :[]}

    componentDidMount(){
        this.getPostData().then((data) => {
          this.setState({ data })
          console.log("Data Loaded", data,this);
        })
    }

    getPostData() {
      const url = `${BASE_URL}/posts`;
      return axios.get(url).then(response => response.data);
    }
    render ({},{data}){
        return (
            <div>
                <h3>Welcome Task Component</h3>
                {
                    data.map((item,index)=>(
                            <div>
                                <strong># {index}</strong> - 
                                {item.title}
                            </div>
                        ))
                }
            </div>
        )
    }
}
 