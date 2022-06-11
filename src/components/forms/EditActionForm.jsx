import { icons } from "../../constants/assets"

export const EditActionForm = ({values}) => {
  const { new_feedback_icon } = icons
  const { title_feedback, title } = values
  return (
    <>
      <figure className='action__image'>
        <img src={ new_feedback_icon } alt="add feedback" />
      </figure>
      <h2>{ title_feedback.length === 0 ? title : title_feedback }</h2>
    </>
  )
}
