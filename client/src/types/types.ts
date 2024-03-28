/**
 * 
 * For Form
 * 
 */

interface IForm {
  name:string;
  email:string;
  message:string;
  recaptcha:string;
}


/**
 * 
 * For Toast Messages
 * 
 */
type typeVariant = 'default' | 'destructive'

interface IToastText {
  title:string;
  description:string;
  variant?:typeVariant;
}

interface IToastAction {
  send:IToastText;
  sendFailed:IToastText;
}