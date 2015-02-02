Template.postItem.rendered = function(){
	var progress = $('#progress_'+this.data._id);
	TweenLite.to(progress, 0.4, {width:this.data.progress*20+"px",
                       backgroundColor:"rgb("+51*(5-this.data.progress)+","+51*this.data.progress+",0)",
                       color:"white"});	
}

Template.postItem.events({
	'click #up':function(){
		Meteor.call('up',this._id);
	},
	'click #down':function(){
		Meteor.call('down',this._id);
	}
});