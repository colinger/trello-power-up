var GRAY_ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-gray.svg';

var onSortBtnClick = function (t, opts) {
  console.log('Someone clicked the sort button');
  console.log(JSON.stringify(t));
};
var onDoneBtnClick = function (t, opts) {
   return t.card('all').then(function (card){
    console.log(JSON.stringify(card, null, 2));
   });
};

window.TrelloPowerUp.initialize({
  'card-buttons': function (t, opts) {
    return [{
      // usually you will provide a callback function to be run on button click
      // we recommend that you use a popup on click generally
      icon: GRAY_ICON, // don't use a colored icon here
      text: '排序',
      callback: onSortBtnClick,
      condition: 'edit'
    }, {
      // but of course, you could also just kick off to a url if that's your thing
      icon: GRAY_ICON,
      text: '完成',
      callback: onDoneBtnClick,
      condition: 'edit'
    }];
  }
}, 
{
    appName: 'MyTool',
    appKey: '3223224f4dacfccedd728fac62c4352d'
});
