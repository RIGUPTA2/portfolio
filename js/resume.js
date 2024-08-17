function toggle(currID){
  var idsCompleteList=["sCO_Content", "sPE_Content", "sE_Content", "sC_Content", "sA_Content",
                      "sT_Content", "sW_Content", "sCrs_Content", "sP_Content", "sEC_Content",
                      "sH_Content", "sCon_Content"];
  var displayContentID=currID+"_Content";
  idsCompleteList = idsCompleteList.filter(function(item) {
    return item !== displayContentID;
  })
  for (let idx = 0; idx < idsCompleteList.length; idx++) {
    //alert(idsCompleteList[idx]);
    document.getElementById(idsCompleteList[idx]).style.display='none';
    document.getElementById(displayContentID).style.display='block';
  }
}