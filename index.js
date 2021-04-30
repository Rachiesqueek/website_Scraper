/*
Rachel Johnson
Project 2
CNN Web Scrapper

Get News on different sections of CNNThis code will actually go to the different sections 
(Entertainment, Buisness, Style) that CNN has 
For example, business gets information from cnn.com/business  
javascript and Node.js will be used in this project.

Using cherrio and request javascript can get elements from a HTML document.
 cheerio does the web scraping while request creates GET requests.

*/
const cheerio = require('cheerio');
const { exit } = require('process');
const request = require('request');

getEntertainment(); //function calls 
getBuisness();
getStyle();


function getBuisness()
{
// GET request to get the information from CNN
request({ 
    method: 'GET', //inform of request type
    url: 'https://www.cnn.com/business' //cnn website
}, function(err, res, body) { 

    if(err)
    {
        console.log("Error!"); // error was found when running
        console.error(err); // throw error to user
        exit;
    }
    let titles = []; // array to store the titles of the HTML
    let $ = cheerio.load(body); //pull the HTML page

    //when searching through the website tags for what CNN uses for titles 
    // CNN uses <span class ="cd__headline-text vid-left-enabled"> example </span> 
    $('article').find("span.cd__headline-text, span.cd--article").each(function(index, e) //article contains most titles so it used as a basis to find the titles
    {
        titles[index] = $(this).text(); //  set each #cd__headline-text vid-left-enabled text into the array
    });

    console.log("Business Titles: ");
    console.log(" ");
    console.log(titles); //print
})
}
function getEntertainment()
{
// GET request to get the information from CNN
request({ 
    method: 'GET', //inform of request type
    url: 'https://www.cnn.com/entertainment' //cnn website
}, function(err, res, body) { 

    if(err)
    {
        console.log("Error!"); // error was found when running
        console.error(err); // throw error to user
        exit;
    }
    let titles = []; // array to store the titles of the HTML
    let $ = cheerio.load(body); //pull the HTML page

    //when searching through the website tags for what CNN uses for titles 
    // CNN uses <span class ="cd__headline-text vid-left-enabled"> example </span> 
    $('article').find("span.cd__headline-text, span.cd--article").each(function(index, e)//article contains most titles so it used as a basis to find the titles
    {
        titles[index] = $(this).text(); //  set each #cd__headline-text vid-left-enabled text into the array
    });

    console.log(" ");
    console.log("Entertainment Titles: ");
    console.log(titles); //print
})
}

function getStyle()
{
    // GET request to get the information from CNN
request({ 
    method: 'GET', //inform of request type
    url: 'https://www.cnn.com/style' //cnn website
}, function(err, res, body) { 

    if(err)
    {
        console.log("Error!"); // error was found when running
        console.error(err); // throw error to user
        exit;
    }
    let titles = []; // array to store the titles of the HTML
    let $ = cheerio.load(body); //pull the HTML page

    //when searching through the website tags for what CNN uses for titles 
    // CNN uses many different tags for the style section so I found each title (exectiption of the rotating titles because they don't work well)

    $('div').find("a.CardBasic__title, a.CardHero__title,div.CardHeroDetailed__title, h1.CardSlide__title").each(function(index, e) // div functions are used to contain most of the titles
    {
        titles[index] = $(this).text(); //  set each #cd__headline-text vid-left-enabled text into the array
    });

    console.log(" ");
    console.log("Style Titles: ");
    console.log(titles); //print
})
}
