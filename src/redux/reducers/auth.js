import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  GET_AUTHENTICATED_USER_START,
  GET_AUTHENTICATED_USER_SUCCESS,
  GET_AUTHENTICATED_USER_FAILURE
} from '../actions/types'

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  error: null,
  data: {}
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null
      }
    case REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case LOGIN_START:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: true,
        error: null
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        error: null,
        data: {
          ...state.data,
          ...action.payload
        }
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload
      }
    case LOGOUT_START:
      return {
        ...state,
        isLoading: true
      }
    case LOGOUT_SUCCESS:
      return {
        ...initialState
      }
    case LOGOUT_FAILURE:
      return {
        ...initialState
      }
    case GET_AUTHENTICATED_USER_START:
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case GET_AUTHENTICATED_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        data: {
          ...state.data,
          user: action.payload
        }
      }
    case GET_AUTHENTICATED_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default auth