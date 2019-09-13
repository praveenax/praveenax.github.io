function render(){

}


render.prototype.render_Items_Template = function(wireFrame_ID,target_ID,tData){
  var wireframe = $(wireFrame_ID).html();
    var template = _.template(wireframe);
    $(target_ID).html(template({
        items: tData
    }));

}


render.prototype.render_Item_Template = function(wireFrame_ID,target_ID,tData){
   var wireframe = $(wireFrame_ID).html();
    var template = _.template(wireframe);
      $(target_ID).html(template({
        item: tData
    }));

}

