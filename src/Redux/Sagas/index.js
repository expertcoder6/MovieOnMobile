import { takeEvery, put, all, takeLatest, call } from 'redux-saga/effects';
import axios from "axios";
const baseUrl = `https://api.themoviedb.org/3/`

export function* apiCall(data) {
try{

    const result = yield call(requestServer, data);
yield put({ type: "SERVER_RESPONSE", payload: result })

}catch(err){

}




// requestServer(data).then(function*(data_obj){
// yield put({ type: "SERVER_RESPONSE", payload: data_obj })

// }).catch((err)=>{})

//     // yield put({ type: "SERVER_ERROR" })

}


export function* productSaga(data) {
    console.log('=-=-=-=--=-=-=-=de')
    yield takeEvery("SERVER_REQUEST", apiCall)
}

 function requestServer(data) {
   return new Promise((res, rej) => {
        var data_obj = {}
        axios.get(`${baseUrl}${data?.payload?.endPoint}`)
            .then(function (response) {
                console.log("-------API_RESPONSE---------");
                data_obj = {
                    data: data?.payload?.responseType? response?.data:response?.data?.results,
                    key: data.payload.key,
                }
                // yield put({ type: "SERVER_RESPONSE", payload: data_obj })
                // return data_obj
                res(data_obj)
                
            })
            .catch(function (error) {
                data_obj = {
                    data: error,
                    key: data.payload.key,
                }
                console.log('------error-------');
                // return data_obj
                rej(data_obj)
            });
    });

}