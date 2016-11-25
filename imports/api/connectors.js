import rp from 'request-promise';

export const OracleApiDemo = {
  getOne(){
    return rp('http://192.168.200.158:8080/query/email=oursonvie@qq.com')
    .then((res) => JSON.parse(res))
    .then((res) => {
      return res[0].EMAIL;
    });
  }
}

export const APIOracle = {
  get(args) {
    // for some reason the args got passed in stays in the form of a dict
    // console.log(args.EMAIL)
    return rp(`http://192.168.200.158:8080/query/email=${args.EMAIL}`)
    .then((res) => JSON.parse(res))
    .then((res) => {
      return res;
    });
  }
}
