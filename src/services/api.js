
import NetWorking from '@/utils/networking'
    
//获取验证码
const URL_POST_APPDEF = 'uidef/app';
 
export function createAppDef(title,layout){
 
  return NetWorking.doPost(URL_POST_APPDEF, 
                     null, 
                     {
                      'title': title,
                      'layout': layout
                     },
                     null
                    )
 
}

