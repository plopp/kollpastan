Template.postsList.rendered = function(){

}

Template.postsList.helpers({
  posts: function(){
    return Posts.find({},{sort:{nofComplaints: -1}});
  }
});