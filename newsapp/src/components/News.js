import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false

        }
    } 
    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e7a39ba7b8494599bd4dbff03d36a8ee";
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({articles: parseData.articles})

    }
  render() {
    console.log("render")
    return (
      <div className='container my-3'>
        <h2>NewsKabootr - Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem  title={element.title?element.title:''} description={element.description?element.description:''} 
            imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
        })}
        </div>
      </div>
    )
  }
}

export default News
