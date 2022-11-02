


var chess = document.getElementsByClassName("Main");
  let rows = chess[0].getElementsByClassName("Row");
  for(let i =0; i<rows.length;i++) 
  {
    var x = rows[i].getElementsByTagName("div");
    for(let j = 0; j<x.length;j++) 
    {
        x[j].addEventListener("click", ()=> {console.log("hi");});
    }
    
    
  }
