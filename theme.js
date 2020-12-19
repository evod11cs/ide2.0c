function htmly(value){
  let highlight = value.replace(/&lt;(.*?)&gt;/g,"<font class='leftancor'>&lt;</font><font class='tag'>$1</font><font class='rightancor'>&gt;</font>")

  return highlight
}

function cssy(value){
  return value
}