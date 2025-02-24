import request from '@/utils/request'
// 此处用于存放所有与登录相关的接口请求
export const getPicCode = () => {
  return request.get('/captcha/image')
}

// 获取短信验证码的接口
export const getMsgCode = (captchaCode, captchaKey, mobile) => {
  return request.post('/captcha/sendSmsCaptcha', {
    captchaCode,
    captchaKey,
    mobile
  })
}

// 手机验证码登录模块
export const msgLogin = (mobile, smsCode) => {
  return request.post('/passport/login', {
    form: {
      smsCode,
      mobile,
      isParty: false,
      partyData: {}
    }
  })
}
