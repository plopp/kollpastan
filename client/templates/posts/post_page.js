Template.postPage.rendered = function(){
	  var mapOptions = {
	    zoom: 16,
	    center: new google.maps.LatLng(-25.363882,131.044922)
	  };
	  var map = new google.maps.Map(document.getElementById('map'),mapOptions);

	  /*google.maps.event.addListener(map, 'click', function(e) {
	    placeMarker(e.latLng, map);
	  }); */
		//console.log("Map: "+this.data);
	  var position = new google.maps.LatLng(this.data.lat,this.data.lon);
	  var marker = new google.maps.Marker({
	  	position: position,
	  	map:map
	  });
	  map.panTo(position);
	/*function placeMarker(position, map) {
	  var marker = new google.maps.Marker({
	    position: position,
	    map: map
	  });
	  map.panTo(position);
	}	*/
}

Template.postPage.helpers({
	getImage:function(){
		var image = Images.findOne(this.img);
		return image;
	},
	hasMottagen: function(){
		return this.mottagen !== "" ? true : false;
	},
	hasForeslagenAtgard: function(){
		return this.atgardforslag !== "" ? true : false;
	},
	hasAtgardPoborjad: function(){
		return this.atgardpoborjad !== "" ? true : false;
	},
	hasAtgardGenomford: function(){
		return this.atgardgenomford !== "" ? true : false;
	}
});

Template.postPage.events({
	'click #butMottagen':function(){
		$('#addMottagenRow').show();
		$('#butMottagen').hide();
	},
	'click #butAtgardForslag':function(){
		$('#addAtgardForslagRow').show();
		$('#butAtgardForslag').hide();
	},
	'click #butAtgardPoborjad':function(){
		$('#addAtgardPoborjadRow').show();
		$('#butAtgardPoborjad').hide();
	},
	'click #butAtgardGenomford':function(){
		$('#addAtgardGenomfordRow').show();
		$('#butAtgardGenomford').hide();
	},
	'click #butAddMottagen':function(e){
		e.preventDefault();
		var newText = $('#addMottagen textarea').val();
		Posts.update(this._id,{$set: {mottagen: newText}});
		Posts.update(this._id,{$inc: {progress: 1}});
	},
	'click #butAddAtgardForslag':function(e){
		e.preventDefault();
		var newText = $('#addAtgardForslag textarea').val();
		Posts.update(this._id,{$set: {atgardforslag: newText}});
		Posts.update(this._id,{$inc: {progress: 1}});
	},
	'click #butAddAtgardPoborjad':function(e){
		e.preventDefault();
		var newText = $('#addAtgardPoborjad textarea').val();
		Posts.update(this._id,{$set: {atgardpoborjad: newText}});
		Posts.update(this._id,{$inc: {progress: 1}});
	},
	'click #butAddAtgardGenomford':function(e){
		e.preventDefault();
		var newText = $('#addAtgardGenomford textarea').val();
		Posts.update(this._id,{$set: {atgardgenomford: newText}});
		Posts.update(this._id,{$inc: {progress: 1}});
	},
	'click #butRemove':function(e){
		e.preventDefault();
		Posts.remove(this._id);
		Router.go('/');	
	}
});