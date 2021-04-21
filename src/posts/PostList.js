import React, { Component } from 'react'
import PostData from '../data/articles.json'

class PostList extends Component {
  render(){
    return(
      <div className="container" align="justify">
        <div className='container'>
            <div class="row">
              <div class="col-sm"><td><b>ID</b></td></div>
              <div class="col-sm-6"><td><b>TITLE</b></td></div>
              <div class="col-sm"><td><b>PUBLICATION DATE</b></td></div>
            </div>            
        </div>
        
        <div className="container">
          <div class="row">
            <div class="col-sm"><td>{PostData[0].pmid}</td></div>
            <div class="col-sm-6"><td><a href="#00">{PostData[0].title}</a></td></div>
            <div class="col-sm"><td>{PostData[0].dates['pubmed']}</td></div>
          </div>

          <div class="row">
            <div class="col-sm"><td>{PostData[1].pmid}</td></div>
            <div class="col-sm-6"><td><a href="#01">{PostData[1].title}</a></td></div>
            <div class="col-sm"><td>{PostData[1].dates['pubmed']}</td></div>
          </div>

          <div class="row">
            <div class="col-sm"><td>{PostData[2].pmid}</td></div>
            <div class="col-sm-6"><td><a href="#02">{PostData[2].title}</a></td></div>
            <div class="col-sm"><td>{PostData[2].dates['pubmed']}</td></div>
          </div>

          <div class="row">
            <div class="col-sm"><td>{PostData[3].pmid}</td></div>
            <div class="col-sm-6"><td><a href="#03">{PostData[3].title}</a></td></div>
            <div class="col-sm"><td>{PostData[3].dates['pubmed']}</td></div>
          </div>

          <div class="row">
            <div class="col-sm"><td>{PostData[4].pmid}</td></div>
            <div class="col-sm-6"><td><a href="#04">{PostData[4].title}</a></td></div>
            <div class="col-sm"><td>{PostData[4].dates['pubmed']}</td></div>
          </div>

        </div>



        <div className="container">

          <div class="row" id='00'>
            <div class="col-sm-5"><p1><b>Title:</b> {PostData[0].journal['title']}</p1></div>
            <div class="col-sm-2"><p2><b>Author:</b> {PostData[0].authors[0].firstName}</p2></div>
            <div class="col-sm-5"><p3><b>Text:</b> {PostData[0].abstract['unassigned']}</p3></div>
          </div>

          <div class="row" id='01'>
            <div class="col-sm-5"><p1><b>Title:</b> {PostData[1].journal['title']}</p1></div>
            <div class="col-sm-2"><p2><b>Author:</b> {PostData[1].authors[0].firstName}</p2></div>
            <div class="col-sm-5"><p3><b>Text:</b> {PostData[1].abstract['unassigned']}</p3></div>
          </div>

          <div class="row" id='02'>
            <div class="col-sm-5"><p1><b>Title:</b> {PostData[2].journal['title']}</p1></div>
            <div class="col-sm-2"><p2><b>Author:</b> {PostData[2].authors[0].firstName}</p2></div>
            <div class="col-sm-5"><p3><b>Text:</b> {PostData[2].abstract['unassigned']}</p3></div>
          </div>

          <div class="row" id='03'>
            <div class="col-sm-5"><p1><b>Title:</b> {PostData[3].journal['title']}</p1></div>
            <div class="col-sm-2"><p2><b>Author:</b> {PostData[3].authors[0].firstName}</p2></div>
            <div class="col-sm-5"><p3><b>Text:</b> {PostData[3].abstract['unassigned']}</p3></div>
          </div>

          <div class="row" id='04'>
            <div class="col-sm-5"><p1><b>Title:</b> {PostData[4].journal['title']}</p1></div>
            <div class="col-sm-2"><p2><b>Author:</b> {PostData[4].authors[0].firstName}</p2></div>
            <div class="col-sm-5"><p3><b>Text:</b> {PostData[4].abstract['unassigned']}</p3></div>
          </div>

        </div>
      </div>
    )
  }
}

export default PostList;
