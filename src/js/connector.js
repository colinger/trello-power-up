var GRAY_ICON = 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/openmoji/252/top-arrow_1f51d.png';

var onSortBtnClick = function (t, opts) {
  console.log('Someone clicked the sort button');
  console.log(JSON.stringify(t));
};
var onDoneBtnClick = function (t, opts) {
    t.getRestApi()
        .getToken()
        .then(function(token) {
            if (!token) {
                // do auth instead
                console.log('error');
            }
            console.log(token);
            // make a request with token
    });
    return t.card('all').then(function (card){
        console.log(JSON.stringify(card, null, 2));
        //card.id
   });
};

window.TrelloPowerUp.initialize({
  'card-buttons': function (t, opts) {
    return t.getRestApi()
    	// We now have an instance of the API client.
      .isAuthorized()
      .then(function(isAuthorized) {
        if (isAuthorized) {
          return [{
            text: 'David\'s Power-Up',
            callback: showMenu
          }];
        } else {
          return [{
            text: 'David\'s Power-Up',
            callback: showIframe
          }];
        }
      });
  }
}, 
{
    appName: 'MyTool',
    appKey: '3223224f4dacfccedd728fac62c4352d'
});
