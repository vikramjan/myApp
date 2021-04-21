import React, { Component } from 'react'
import PostData from '../data/annotations.json'

class PostAnnotations extends Component {
  render(){
    return(
      <div className="container" align="justify">
        <div className='container'>
            <div class="row">
              <div class="col-sm-4"><td><b>ID</b></td></div>
              <div class="col-sm-8"><td><b>CLASSIFICATION</b></td></div>
            </div>            
        </div>
        
        <div className="container">
          <div class="row">
            <div class="col-sm-4"><td>{PostData[0].pmid}</td></div>
            <div class="col-sm-8">
              <td>
                <div class="row">

                  <div class="col-sm-4">yCaseReport: {PostData[0].classification.caseReport.yCaseReport}</div>
                  <div class="col-sm-4">yCaseReport2: {PostData[0].classification.caseReport.yCaseReport2}</div>
                  <div class="col-sm-2">pHasAdr: {PostData[0].classification.hasAdr.pHasAdr}</div>
                  <div class="col-sm-2">pHasAdr2: {PostData[0].classification.hasAdr.pHasAdr2}</div>

                </div>
              </td>
            </div>
          </div>


          <div class="row">
            <div class="col-sm-4"><td>{PostData[1].pmid}</td></div>
            <div class="col-sm-8">
              <td>
                <div class="row">

                  <div class="col-sm-4">yCaseReport: {PostData[1].classification.caseReport.yCaseReport}</div>
                  <div class="col-sm-4">yCaseReport2: {PostData[1].classification.caseReport.yCaseReport2}</div>
                  <div class="col-sm-2">pHasAdr: {PostData[1].classification.hasAdr.pHasAdr}</div>
                  <div class="col-sm-2">pHasAdr2: {PostData[1].classification.hasAdr.pHasAdr2}</div>

                </div>
              </td>
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default PostAnnotations;
