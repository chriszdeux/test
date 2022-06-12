import { useState } from "react"

export const useForm = () => {
  const [inputValues, setInputValues] = useState({
    post: '',
    reply_comment: '',
    detail: '',
    title_feedback: '',
    categories: [
      'ui',
      'ux',
      'enhancement',
      'bug',
      'feature',
    ],
    status: [
      'planned',
      'in-progess',
      'live',
    ]
  })

  const [charactersLeft, setCharactersLeft] = useState(250)


  const handleOnChange = (e) => {
    const { nativeEvent: { inputType }} = e
    // debugger
    inputType === 'insertText' && charactersLeft >= 0
      ? setCharactersLeft( charactersLeft - 1 )
      : setCharactersLeft( charactersLeft + 1 )
    e.preventDefault()

    if(charactersLeft === 0) {
      return 
    } else {
      setInputValues({
        ...inputValues,
        [e.target.name]:e.target.value
      })
    }
  }

  return { inputValues, handleOnChange, charactersLeft }
}