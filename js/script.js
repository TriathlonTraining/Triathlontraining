$('a.media').media({width:600, height:800});

var handler = StripeCheckout.configure({
    key: 'pk_test_6pRNASCoBOKtIshFeQd4XMUh',
    image: '/square-image.png',
    token: function(token, args) {
      // Use the token to create the charge with a server-side script.
      // You can access the token ID with `token.id`
    }
  });

  document.getElementById('customButton').addEventListener('click', function(e) {
    // Open Checkout with further options
    handler.open({
      name: 'Triathlon Training',
      description: '     Training Plan',
      amount: 2000
    });
    e.preventDefault();
  });


