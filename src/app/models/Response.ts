export interface Response{
  'code':string,
  'msg':Msg,
}

export interface  Msg{
  'success':string,
  'details'?:any,
}
