import { useEffect, useState, useHistory } from "react"
import { useSelector, useDispatch} from "react-redux"
import { getComments, createComment} from '../../store/comment';

const AllComments = (songId) => {

    const dispatch = useDispatch();
    // const history = useHistory()
    const comments = useSelector(state=> Object.values(state.comment))
    console.log('state', comments)


    useEffect(()=> {

        dispatch(getComments())
    },[dispatch])


    // const onSubmit = (e) => {
    //   e.preventDefault()
    // }

    const addComment = event => {
      const formText = event.target.value
      dispatch(getComments(songId, formText))
    }



    return (
      <div>
          <h2>Comments</h2>
          <form onSubmit={addComment}>
            <textarea />
          </form>
          <ul>
            {comments.map(comment => (
              <li key={comment.id}>
                {comment.body}
              </li>
            ))}
          </ul>
          <button type='submit'>Submit</button>
      </div>
    );

}
export default AllComments;
