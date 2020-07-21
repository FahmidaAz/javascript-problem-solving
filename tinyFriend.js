function friends(name){
    var tiny = name[0];

    for(var i = 0; i<name.length; i++){
        var tinyFriend = name[i];

        if(tinyFriend.length < tiny.length){
            tiny = tinyFriend;
        }
    }
    return tiny;
}
 var friendsName = ["Aniqa", "Rafa", "Faria", "Nishat", "Athoi","Piu"];
  
 var result = friends(friendsName);
 console.log(result);