function htmly(value,id){
  let highlight = value.replace(/&lt;(.*?)&gt;/g,"<font class='leftancor'>&lt;</font><font class='tag'>$1</font><font class='rightancor'>&gt;</font>")
  return highlight
}

function cssy(value,id){
  value = value
  return value
}