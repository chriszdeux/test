import { useState } from "react"

export const useForm = () => {
  const [inputValues, setInputValues] = useState({
    post: '',
    reply: '',
    detail: '',
    title: ''
  })

  const [charactersLeft, setCharactersLeft] = useState(250)
  const handleOnChange = (e) => {
    const { nativeEvent: { inputType }} = e
    console.log(inputType)
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