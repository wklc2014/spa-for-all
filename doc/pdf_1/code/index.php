<?php
function create_ad() {
  echo '<p class="ad">This is an anythine ad! This is an anythine ad! This is an anythine ad!</p>';
}
$page_title = 'Welcome to this site';
include('./includes/header.inc.html');
create_ad();
?>
<h1>Content Header</h1>
<p>This is where the page-specific content goes. This section, and the corresponding header, will change from one page to the next.</p>
<p>Volutpat at varius sed sollicitudin et, arcu. Vivamus viverra. Nullam turpis. Vestibulumsed etiam. Lorem ipsu, sit amet dolore. Nulla facilisi. Sed tortor.</p>
<p>Royal Ascot, one of the most prestigious events in the British horse racing calender is to allow men to wear dresses for the first time in a bid to appeal to transgender racegoers, reports the Daily Star.</p>
<p>And women will also be allowed to come in a tuxedo and a top hat as part of the l new dress code.</p>
<p>Britain's first transgender jockey Victoria Smith commented: “Racing is really starting to become more accepting of difference, so any changes that help really are welcome.”</p>
<p>Royal Ascot in Berkshire – which takes place in June – has operated a strict dress code since the early 19th century, dictating that men must wear black or grey morning dress with a waistcoat and tie and that ladies are not allowed to wear strapless and off-the-shoulder dresses, while midriffs have to be covered and fascinators are also banned.</p>
<?php
create_ad();
include('./includes/footer.inc.html');
?>