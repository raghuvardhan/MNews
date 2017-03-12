<?php
$news = simplexml_load_file('http://news.google.com/news?pz=1&cf=all&ned=us&hl=en&topic=n&output=rss');

$feeds = array();

$i = 0;

foreach ($news->channel->item as $item) 
{
    preg_match('@src="([^"]+)"@', $item->description, $match);
    $parts = explode('<font size="-1">', $item->description);

    $feeds[$i]['title'] = (string) $item->title;
    $feeds[$i]['link'] = (string) $item->link;


    $i++;
}

echo '<pre>';
print_r($feeds);
echo '</pre>';
?>