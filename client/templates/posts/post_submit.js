Template.postSubmit.rendered = function(){
	  var mapOptions = {
	    zoom: 16,
	    center: new google.maps.LatLng(57.709046, 11.934954)
	  };
	  var map = new google.maps.Map(document.getElementById('map'),mapOptions);

	  google.maps.event.addListener(map, 'click', function(e) {
	    placeMarker(e.latLng, map);
	  });

	  if(this.data){
		  var position = new google.maps.LatLng(this.data.lat,this.data.lon);
		  function placeMarker(position, map) {	  	
		  	if(map.marker !== undefined){
		  		map.marker.setMap(null);
		  	}
		  	map.marker = new google.maps.Marker({
		    	position: position,
		    	map: map
		  	});
		  	map.panTo(position);
		  	
		  	$("#lat").val(position.k);
		  	$("#lon").val(position.D);
		  }
	  }

}

Template.postSubmit.events({
	'submit #myForm':function(e,template){
		e.preventDefault();
		var files = template.find(':file').files;
      	for (var i = 0, ln = files.length; i < ln; i++) {
	        console.log(files[i]);
	        var inserted_image = Images.insert(files[i], function (err, fileObj) {
	          if(err){
      			console.log("Error inserting image..."+err);
	      	  }
	      	  else{
	      	  	console.log(fileObj._id);
	      			Session.set("image",fileObj._id);
	      	  }
	        });
	      }
	},
	'submit #submitForm':function(e){
		e.preventDefault();
		/*Posts.insert({
			titel: 'Fixa parkbänk',
			nofcomplaints: 1,
			img:"/img/parkbank.jpg",
			lat:57.707876,
			lon:11.935942,
			progress:1,
			rapport:"Trasig parkbänk vid Lindholmsallén. Behöver ny sittbräda.",
			mottagen:"Ej mottagen.",
			atgardforslag: "Inget åtgärdsförslag finns.",
			atgardpoborjad: "Ingen åtgärd påbörjad.",
			atgardgenomford: "Ingen åtgärd genomförd."
		});*/

		var post = {
	      titel: $(e.target).find('[name=titel]').val(),
	      nofComplaints: 1,
	      img:Session.get("image"),
	      lat:$("#lat").val(),
	      lon:$("#lon").val(),
	      progress: 1,
	      rapport:$("#rapport").val(),
	      atgardforslag: "",
		  atgardpoborjad: "",
		  atgardgenomford: "",
		  mottagen: ""
	    };

	    var id = Meteor.call('insertPost',post,function(error,result){
	    	console.log(result);
	    	if(error){
	    		console.log("Error adding post: "+error);
	    	}
	    	else{
	    		Session.set("image",undefined);
	    		Router.go('postPage', {_id: result});	
	    	}
	    });
	    
	}
});

Template.postSubmit.helpers({
	getImage:function(){
		var imageId = Session.get("image");
		var image = Images.findOne(imageId);
		console.log(image);
		return image;
	},
	imageExists:function(){
		return Session.get("image") !== undefined ? true : false;
	}/*,
	getTitel:function(){
		var titel = Session.get("titel");
		console.log(titel);
		$('#titel').val(rapport);

	},
	getRapport:function(){
		var rapport = Session.get("rapport");
		console.log(rapport);
		$('#rapport').val(rapport);

	}*/
	/*getLat:function(){
		var lat = Session.get("lat");
		console.log("lat");
		
	},
	getLon:function(){
		var lon = Session.get("lon")
		
	}*/
});