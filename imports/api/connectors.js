import rp from 'request-promise';

export const OracleApiDemo = {
  getOne(){
    return rp('http://192.168.200.158:8080/query/email=oursonvie@qq.com')
    .then((res) => JSON.parse(res))
    .then((res) => {
      return res[0].OPENSTUNO;
    });
  }
}
