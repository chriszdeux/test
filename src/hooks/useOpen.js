import { useState } from "react"

export const useOpen = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  return { isOpen, handleIsOpen }
}