if (Meteor.isClient) {
	Meteor.subscribe('posts', 'bob-smith');
	Meteor.subscribe('images', 'bob-smith');
}

if (Meteor.isServer) {
  	Meteor.publish('posts', function() {
	  return Posts.find({}); 
	});
	Meteor.publish('images', function() {
	  return Images.find({}); 
	});
	Images.allow({
	  insert: function (userId, party) {
	    return true;
	  },
	  update: function (userId, party) {
	    return true;
	  },
	  download: function (userId, party) {
	    return true;
	  }
	});

	Posts.allow({
	  insert: function (userId, party) {
	    return true;
	  },
	  update: function (userId, party) {
	    return true;
	  },
	  remove: function (userId, party) {
	    return true;
	  }

	});

	Meteor.methods({
  		up: function (_id) {
  			Posts.update(_id,{$inc:{nofComplaints:1}});
  		},
  		down: function (_id) {
  			Posts.update(_id,{$inc:{nofComplaints:-1}});
  		},
  		insertPost: function(post) {
  			var inserted_post = Posts.insert(post);
  			return inserted_post;
  		},
  		insertImage: function(image) {
  			//var inserted_image = Images.insert(image);
  			//return inserted_image;
  			/*console.log(image.constructor.name);
  			var inserted_image = Images.insert(image, function (err, fileObj) {
	          
	          if(err){
	          	console.log("Error: "+err);
	          }
	          else{
	          	return fileObj;
	          }
	        });
			return inserted_image;*/

  		}
	});
}


Meteor.startup(function(){
	//if(Posts.) Kolla om posts är empty
	//Posts.remove({});
	console.log("Startup");
	console.log(Posts.find().count());
	
});