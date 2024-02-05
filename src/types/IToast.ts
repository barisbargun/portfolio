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