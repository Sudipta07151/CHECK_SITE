const slogans_header=["A journey of a thousand miles must begin with a single step",
"Don’t tell me how educated you are, tell me how much you’ve travelled",
"Travel is fatal to prejudice, bigotry and narrow-mindedness.", 
"To travel is to take a journey into yourself",
"Once a year, go someplace you've never been before",
"I dislike feeling at home when I am abroad",
"A ship in harbor is safe, but that is not what ships are built for",
"To live is the rarest thing in the world. Most people just exist",
"Life is short and the world is wide" ,
"Traveling tends to magnify all human emotions",
"If you come to a fork in the road, take it",
"Adventure is worthwhile",
"Experience, travel – these are as education in themselves",
"This wasn’t a strange place; it was a new one",
"Blessed are the curious for they shall have adventures",
"Wherever you go becomes a part of you somehow",
"Take only memories, leave only footprints",
"A wise man travels to discover himself",
"Embrace the detours",
"Travel is an investment in yourself",
"Live life with no excuses, travel with no regret",
"It is better to travel well than to arrive",
"All journeys have secret destinations of which the traveler is unaware"
];

const slogans_footer=["Lao Tzu","Mohammed","Mark Twain","Danny Kaye","Dalai Lama","George Bernard Shaw",
"John A. Shedd","Oscar Wilde","Simon Raven","Peter Hoeg","Yogi Berra","Amelia Earhart","Euripides","Paulo Coelho",
"Lovelle Drachman","Anita Desai","Chief Seattle","James Russell Lowell","Kevin Charbonneau","The Cultureur","Oscar Wilde","Buddha","Martin Buber"];



change_sub_header=function(header,footer)
{
    let random=Math.random();
    let len=header.length;
    const get_head=document.querySelector(".changing_primary_main");
    const get_foot=document.querySelector(".changing_primary_sub");
    console.log(get_head.innerText);
    let store=Math.round(random*(len-1));
    console.log(store);
    get_head.innerText="\""+header[store]+"\"";
    get_foot.innerText='~'+footer[store]+'~';
}
setTimeout(function(){ window.setInterval(change_sub_header,2000,slogans_header,slogans_footer) }, 3000);


