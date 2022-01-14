import { fetchHeaderSuccess, fetchFooterSuccess, fetchTopBrands, fetchFooterCMSSuccess } from '.';
import {
  getHeader,
  getFooter,
  getTopBrands,
  getFooterCMS
} from '../../../services/layout/Layout.service';

export const fetchCommonData = () => async (dispatch) => {
  getHeader().then((header) => dispatch(fetchHeaderSuccess(header.data)));
  getFooter().then((footer) => dispatch(fetchFooterSuccess(footer.data)));
  getTopBrands().then((topBrands) => dispatch(fetchTopBrands(topBrands.data)));
  getFooterCMS().then((footer) => dispatch(fetchFooterCMSSuccess(footer.data)));
};
