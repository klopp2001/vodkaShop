import { useCallback, createContext, useState, useEffect } from "react"
import { baseUrl, postRequest } from "../utils/services"

export const AuthContext = createContext(null)

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [registerError, setRegisterError] = useState(false)
  const [registerErrorMessage, setRegisterErrorMessage] = useState(null)
  const [isRegisterLoading, setIsRegisterLoading] = useState(false)

  const [registerInfo, setRegisterInfo] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    birthDate: "",
    phoneNumber: "",
  })

  const [loginError, setLoginError] = useState(false)
  const [loginErrorMessage, setLoginErrorMessage] = useState(null)
  const [loginInfo, setLoginInfo] = useState({
    name: "",
    password: "",
  })

  useEffect(() => {
    const user = localStorage.getItem("User")
    setUser(JSON.parse(user))
  }, [])

  const registerUser = useCallback(
    async (e) => {
      e.preventDefault()
      setIsRegisterLoading(true)
      const response = await postRequest(
        `${baseUrl}/user/register`,
        JSON.stringify(registerInfo)
      )
      console.log(response)

      if (response.error) {
        setRegisterError(true)
        setRegisterErrorMessage(response.message)
      } else {
        localStorage.setItem("User", JSON.stringify(response))
        localStorage.setItem("UserId", `${response.id}`)
        setUser(response)
      }
    },
    [registerInfo]
  )

  const loginUser = useCallback(
    async (e) => {
      e.preventDefault()
      const response = await postRequest(
        `${baseUrl}/user/login`,
        JSON.stringify(loginInfo)
      )
      if (response.error) {
        setLoginError(true)
        setLoginErrorMessage(response.message)
      } else {
        localStorage.setItem("User", JSON.stringify(response))
        localStorage.setItem("UserId", `${response.id}`)
        setUser(response)
      }
    },
    [loginInfo]
  )

  const logoutUser = useCallback(async () => {
    localStorage.removeItem("User")
    setUser(null)
  })
  const updateRegisterInfo = useCallback((info) => {
    setRegisterInfo(info)
  })
  const updateLoginInfo = useCallback((info) => {
    setLoginInfo(info)
  })
  return (
    <AuthContext.Provider
      value={{
        user,
        registerInfo,
        registerUser,
        registerError,
        registerErrorMessage,
        updateRegisterInfo,
        loginUser,
        loginInfo,
        updateLoginInfo,
        loginError,
        loginErrorMessage,
        isRegisterLoading,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
