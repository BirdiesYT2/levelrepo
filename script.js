function search() {
  // Declare variables
  var input, filter, ul, li, button, i, txtValue;
  input = document.getElementById('levels1');
  filter = input.value.toUpperCase();
  ul = document.getElementById("LevelDisplay");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("button")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

var links = new Array();
links[0] = "https://birdiesyt2.github.io/levelrepo/level/1";
links[1] = "https://birdiesyt2.github.io/levelrepo/level/2";
links[1] = "https://birdiesyt2.github.io/levelrepo/level/3";
links[1] = "https://birdiesyt2.github.io/levelrepo/level/4";

function openLink() {
  // Chooses a random link:
  var i = Math.floor(Math.random() * links.length);
  // Directs the browser to the chosen target:
  parent.location = links[i];
  return false;

}
