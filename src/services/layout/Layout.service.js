import axios from 'axios';
import baseUrl from '../../enviroments';
import mockdata from '../../mockdata.json';

export const getHeader = async () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockdata['header']);
    }, 1000);
  });
var config = {
  method: 'get',
  url: 'http://65.0.141.49/rest/V1/webapi/footercms?storeId=24',
  headers: { 
    'Authorization': 'Bearer ttmfie899cunbdmdp21dkzoct8thnnds'
  }
};
export const getFooterCMS = async () => axios(config);

export const getFooter = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockdata["footer"]);
    }, 1000);
  });
};

export const getTopBrands = async () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockdata['topBrands']);
    }, 1000);
  });
