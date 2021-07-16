var i = 0;
const txt = `When one thinks about themselves, they tend to run into problems. "Do I actually work hard?" "Am I actually funny?" "Do aliens ever think about us?" All common questions that arise while trying to describe oneself. Thus, I will be blunt and straight to the point. I try to be funny. A lot.
I enjoy my laughs when I can get 'em in. I fancy myself a good writer (of code, of prose, of poetry, you name it). I am very much not good at drawing, but that's okay, there are other people for that. When it comes time to be professional, I am. There are times and places, and though I love to have fun at work, I know when to put a hold on the fun. However, this is my website, so I'll do as I please. Another thing I love: helping. If anyone I know (and usually people I don't know as well) asks for help with anything, I try my hardest to get them the help they need. I've always made the joke that I am my family's IT department because I love helping them, and I know way more about technology than them. Working for a company that helps people in need (or not, just helping is great as it is) is all I could ever ask for, and I couldn't utter a more truthful sentence if I said I stare at screens for my major.



That handsome fellow pictured above is Samuel D. Stieby, son of Jerome and Deborah, protector of my beautiful German shepherd Shaolin (she hates thunder), and master cheese hunter (I just really like cheese,okay?). I am a full-time computer science student at Rose-Hulman Institute of Technology, a full-time baseball player at Rose-Hulman Institute of Technology, a full-time member of the fraternity of Phi Gamma Delta, a full-time long distance boyfriend, and a part-time worker at theRose-Hulman Institute of Technology mailroom. If you think that sounds like a lot of time spent, wait until you hear how much I play video games.`;
var speed = 0.1; /* The speed/duration of the effect in milliseconds */

window.onload = function typeWriter() {
    if (i < txt.length) {
        document.getElementById("aboutP").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
// typeWriter();