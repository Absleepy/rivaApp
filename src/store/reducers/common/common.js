import * as DATA_TYPES from '../../types';

const initialState = {
  header: [],
  footer: [],
  topBrands: [],
  loading: false,
  error: null,
  footerCMS:[]
};

export default function common(state = initialState, action) {
  switch (action.type) {
    case DATA_TYPES.LOADER:
      return {
        ...state,
        loading: action.payload,
      };

    case DATA_TYPES.ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case DATA_TYPES.FETCH_HEADER_SUCCESS:
      return {
        ...state,
        loading: false,
        header: action.payload.data,
      };

    case DATA_TYPES.FETCH_FOOTER_SUCCESS:
      return {
        ...state,
        loading: false,
        footer: action.payload.data,
      };
   case DATA_TYPES.FETCH_FOOTER_CMS_SUCCESS:
        return {
          ...state,
          loading: false,
          footerCMS: action.payload.data,
        };
    case DATA_TYPES.FETCH_TOPBRANDS_SUCCESS:
      return {
        ...state,
        loading: false,
        topBrands: action.payload.data,
      };
    default:
      return state;
  }
}
