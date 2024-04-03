function launch() {
  var popup = window.open("", "_blank", "width=500,height=300");
  popup.document.write("<script> fetch('https://raw.githubusercontent.com/TopG916/scripts/main/aboutblanker/blank.html').then(r => r.text()).then(r => document.write(r)) </script>")
}
