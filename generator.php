<?php
/**
 * dumpster

 */


$m = new MongoClient(); // connect

$collection = $m->selectCollection('dumpster', 'log');

function randomWords()
{
    $text = 'The sensor is cunningly spheroid. Always handle a processor. Crews die with rumour at the dead alpha quadrant! The sub-light creature surprisingly questions the crew.';
    $words = explode(' ', $text);
    shuffle($words);
    $words = array_slice($words, 0, rand(1, count($words)));
    return implode(' ', $words);
}

$source = rand(1, 100);

while(1) {
    $message = randomWords();
    $severity = rand(0, 4);

    $collection->insert(['source' => $source, 'severity' => $severity, 'message' => $message, 'time' => new MongoDate()], ['w' => 0]);
    sleep(1);
}

$m->close();
