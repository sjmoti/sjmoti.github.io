const embedElement = document.querySelector('.target-dom-node-update-form') // NOTE: `.target-dom-node` is the target DOM element from your website or web app

typeformEmbed.makeWidget(
  embedElement,
  'https://davidalbnhidalgo.typeform.com/to/RsRmQf', // NOTE: Replace with your typeform URL
  {
    hideHeaders: true,
    hideFooter: true,
    opacity: 0,
    buttonText: "Get our updates",
    onSubmit: function () {
      console.log('Typeform successfully submitted')
    }
  }
)
