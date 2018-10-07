import React, { Component } from 'react';
import axios from 'axios';

class Main extends Component {
  constructor() {
    super();
    this.state ={
    value: [],
    comment: '',
    readLater: []
    }
  }

componentDidMount() {
    axios.get('/api/articles').then(res => {
      console.log('step1', res.data)
      let tempArr =[]
      for (let i = 0; i < res.data.length; i++) {
        tempArr.push(res.data[i])
        
      }
      this.setState({value: tempArr})
    })
  
    axios.get('/api/readlater').then(res => {
      this.setState({readLater: res.data})
    })
  
  }

  handleClick3 = (title) => {
    axios.post('/api/readlater', {title}).then(res => {
      console.log(res)
      this.setState({readLater: res.data})
    }).catch(error => console.log(error))
  }
  

deleteArt = (id) => {
  axios.delete(`/api/readlater/${id}`).then(article => {
    this.setState({readLater: article.data})
  })
}

typeComment =(e) => {
  this.setState({comment: e.target.value})
}

addComment = (id,comment) => {
  axios.put(`/api/articles/${id}`, {id, comment:comment}).then(article => {
    this.setState({
      value: article.data,
      comment: ""
    })
  })
}


  render() {
    return (
      <div>
      {this.state.value.map(val => {
        return <div key={val.id} className="main-left">
        <h3><a href={val.url}>{val.title}</a></h3>
        <h5>{val.desc}</h5>
        <img src={val.image} alt="pics" />
        <p>{val.comment}</p>
        <input type="text" onChange={this.typeComment}/>
        <button onClick={() => this.addComment(val.id,this.state.comment)}>Add comment</button>
        <button key={val.id} onClick={() => this.handleClick3(val.title)}>Read Later</button>
        </div>
      })}

      <hr/><h1>Read Later</h1><hr/>
      {this.state.readLater.map(newArt => {
        return <div>
         <h1>{newArt.title}</h1>
         <button onClick={() => this.deleteArt(newArt.id)}>Delete</button>
        </div>
        
      })}
      </div>
    )
  }
}

export default Main
