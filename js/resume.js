function toggle(context,obj){
    plus_icon_id=context+"_plus";
    minus_icon_id=context+"_minus";
    context_list_items_class=context+"_list_items";
    list_items_count=document.getElementsByClassName(context_list_items_class).length;

    if(obj.id==plus_icon_id){
        document.getElementById(plus_icon_id).style.display="none";
        document.getElementById(minus_icon_id).style.display="block";
        context_list_items_id_subStr=context+"_list_items_";
        for(var idx=1; idx<=list_items_count; idx++){
            listItemIdx=context_list_items_id_subStr+idx;
            listElement=document.getElementById(listItemIdx);
            listElement.style.display="block";
        }
    } else {
        document.getElementById(plus_icon_id).style.display="block";
        document.getElementById(minus_icon_id).style.display="none";
        context_list_items_id_subStr=context+"_list_items_";
        for(var idx=1; idx<=list_items_count; idx++){
            listItemIdx=context_list_items_id_subStr+idx;
            listElement=document.getElementById(listItemIdx);
            listElement.style.display="none";
        }
    }
}
