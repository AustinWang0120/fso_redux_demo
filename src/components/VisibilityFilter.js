import { useDispatch } from "react-redux"
import { filterChange } from "../reducers/filterReducer"

const VisibilityFilter = (props) => {
  const dispatch = useDispatch()

  return (
    <div>
      all<input type={"radio"} name="filter" onChange={() => dispatch(filterChange("ALL"))} /><br />
      important<input type={"radio"} name="filter" onChange={() => dispatch(filterChange("IMPORTANT"))} /><br />
      nonimportant<input type={"radio"} name="filter" onChange={() => dispatch(filterChange("NONIMPORTANT"))} />
    </div>
  )
}

export default VisibilityFilter
