
//const szApiKey='webCMSApiKey'
//const szDeviceId='webCMSApiKey'

import request from '@/common/request'

export async function login(memberNum) {
    return request({
        url: `http://47.244.166.242:37100/PUT/customers/:${memberNum}/login`,
        method: 'post',
        data:{
            "apiKey":"androidClientApiKey",
            "deviceId":"eZbz02SIc-Q:APA91bGVEdnfFjRApgD85sXRWKu2HDvMkJKKOooLqZT9dQsbVgTTE0pk44yEYpl-C0d9YNh8uyzDNI8CcPjYFzudCoXyjQ04SwCXKG-CDVj1iV671cNkaUO7e3s6vo5raHT0SVcNnScD",
            "passwordMD5":"afdd0b4ad2ec172c586e2150770fbf9e"
        }

    }
    );
  }

//  export async function login() {

//    return request({
//      url: `https://next.xuetangx.com/api/v1/lms/learn/course/chapter?cid=1515481&sign=THU05021000376`,
//      method: 'get',

//  })

//  }


//  export async function getLibraryTimeSlot(bookingDateStr, featureIds, hour, languageId, libraryId, typeId) {
//    return request({
//      url: `/cfm-admin-service/open-api/advancedBooking/getLibraryTimeSlot`,
//      method: 'post',
//      data: {
//        "bookingDateStr": bookingDateStr,
//        "featureIds": featureIds,
//        "hour": hour,
//        "languageId": languageId,
//        "libraryId": libraryId,
//        "typeId": typeId
//      }
//    });
//  }




//  export async function login(user,password) {
//    return request({
//      url: `/cfm-admin-service/open-api/advancedBooking/getLibraryTimeSlot`,
//      method: 'post',
//      data: {
//        "bookingDateStr": bookingDateStr,
//        "featureIds": featureIds,
//        "hour": hour,
//        "languageId": languageId,
//        "libraryId": libraryId,
//        "typeId": typeId
//      }
//    });
//  }




export async function healthcheck() {
    return request({
        url: `http://47.244.166.242:37100/healthcheck`,
        method: 'get',
        // params: 
    })
}