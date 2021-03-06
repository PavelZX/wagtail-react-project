// services/actions/pages.js
// import axios from 'axios';
import { RSAA } from 'redux-api-middleware'

export const GET_HOME_REQUEST = '@@page/GET_HOME_REQUEST'
export const GET_HOME_SUCCESS = '@@page/GET_HOME_SUCCESS'
export const GET_HOME_FAILURE = '@@page/GET_HOME_FAILURE'

export const GET_MAIN_MENU_REQUEST = '@@page/GET_MAIN_MENU_REQUEST'
export const GET_MAIN_MENU_SUCCESS = '@@page/GET_MAIN_MENU_SUCCESS'
export const GET_MAIN_MENU_FAILURE = '@@page/GET_MAIN_MENU_FAILURE'

export const GET_PAGE_META_REQUEST = '@@page/GET_PAGE_META_REQUEST'
export const GET_PAGE_META_SUCCESS = '@@page/GET_PAGE_META_SUCCESS'
export const GET_PAGE_META_FAILURE = '@@page/GET_PAGE_META_FAILURE'

export const GET_PAGE_ID_REQUEST = '@@page/GET_PAGE_ID_REQUEST'
export const GET_PAGE_ID_SUCCESS = '@@page/GET_PAGE_ID_SUCCESS'
export const GET_PAGE_ID_FAILURE = '@@page/GET_PAGE_ID_FAILURE'

export const GET_PAGES_REQUEST = '@@page/GET_PAGES_REQUEST'
export const GET_PAGES_SUCCESS = '@@page/GET_PAGES_SUCCESS'
export const GET_PAGES_FAILURE = '@@page/GET_PAGES_FAILURE'

export const GET_PAGE_TYPE_REQUEST = '@@page/GET_PAGE_TYPE_REQUEST'
export const GET_PAGE_TYPE_SUCCESS = '@@page/GET_PAGE_TYPE_SUCCESS'
export const GET_PAGE_TYPE_FAILURE = '@@page/GET_PAGE_TYPE_FAILURE'

export const GET_PAGE_CHILDREN_REQUEST = '@@page/GET_PAGE_CHILDREN_REQUEST'
export const GET_PAGE_CHILDREN_SUCCESS = '@@page/GET_PAGE_CHILDREN_SUCCESS'
export const GET_PAGE_CHILDREN_FAILURE = '@@page/GET_PAGE_CHILDREN_FAILURE'

export const GET_DOCUMENT_REQUEST = '@@page/GET_DOCUMENT_REQUEST'
export const GET_DOCUMENT_SUCCESS = '@@page/GET_DOCUMENT_SUCCESS'
export const GET_DOCUMENT_FAILURE = '@@page/GET_DOCUMENT_FAILURE'

export const fetchHomePage = () => ({
  [RSAA]: {
    endpoint: '/api/v2/pages/?type=home.HomePage&fields=*',
    method: 'GET',
    headers: { 'Content-type': 'application/json' },
    types: [GET_HOME_REQUEST, GET_HOME_SUCCESS, GET_HOME_FAILURE]
  }
})

export const fetchMainMenu = () => ({
  [RSAA]: {
    endpoint: '/api/v2/pages/?child_of=3&format=json&show_in_menus=true',
    method: 'GET',
    headers: { 'Content-type': 'application/json' },
    types: [GET_MAIN_MENU_REQUEST, GET_MAIN_MENU_SUCCESS, GET_MAIN_MENU_FAILURE]
  }
})

export const fetchAllPages = () => ({
  [RSAA]: {
    endpoint: `/api/v2/pages/`,
    method: 'GET',
    headers: { 'Content-type': 'application/json' },
    types: [GET_PAGES_REQUEST, GET_PAGES_SUCCESS, GET_PAGES_FAILURE]
  }
})

export const fetchPageMeta = slug => ({
  [RSAA]: {
    endpoint: `/api/v2/pages/?slug=${slug}&fields=*`,
    method: 'GET',
    headers: { 'Content-type': 'application/json' },
    types: [
      GET_PAGE_META_REQUEST,
      { type: GET_PAGE_META_SUCCESS, meta: slug },
      GET_PAGE_META_FAILURE
    ]
  }
})

export const fetchPageType = (type, slug) => ({
  [RSAA]: {
    endpoint: `/api/v2/pages/?type=${type}&slug=${slug}&fields=*`,
    method: 'GET',
    headers: { 'Content-type': 'application/json' },
    types: [GET_PAGE_TYPE_REQUEST, GET_PAGE_TYPE_SUCCESS, GET_PAGE_TYPE_FAILURE]
  }
})

export const fetchPageWithId = id => ({
  [RSAA]: {
    endpoint: `/api/v2/pages/${id}/`,
    method: 'GET',
    headers: { 'Content-type': 'application/json' },
    types: [GET_PAGE_ID_REQUEST, GET_PAGE_ID_SUCCESS, GET_PAGE_ID_FAILURE]
  }
})

export const fetchPageChildren = (id, type) => ({
  [RSAA]: {
    endpoint: `/api/v2/pages/?type=${type}&child_of=${id}&fields=*`,
    method: 'GET',
    headers: { 'Content-type': 'application/json' },
    types: [
      GET_PAGE_CHILDREN_REQUEST,
      { type: GET_PAGE_CHILDREN_SUCCESS, meta: id },
      GET_PAGE_CHILDREN_FAILURE
    ]
  }
})

export const fetchDocumentDetails = id => ({
  [RSAA]: {
    endpoint: `/api/v2/documents/{id}/`,
    method: 'GET',
    headers: { 'Content-type': 'application/json' },
    types: [
      GET_DOCUMENT_REQUEST,
      { type: GET_DOCUMENT_SUCCESS, meta: id },
      GET_DOCUMENT_FAILURE
    ]
  }
})
