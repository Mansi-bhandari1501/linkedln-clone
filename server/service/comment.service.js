import {commentModel}  from "../models/comment.model.js"

export const getCommentPaginated = async (page) => {
    let resultsPerPage = 1
  
    return await commentModel.find({})
      .sort({ createdAt: 'descending' })
      .lean()
      .limit(resultsPerPage)
      .skip(page * resultsPerPage)
  }

  const comment_service = {
    getCommentPaginated,
    
}

export default comment_service;