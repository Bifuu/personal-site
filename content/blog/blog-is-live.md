---
path: blog
date: 2020-02-18T23:08:36.716Z
title: Blog is live!
description: It lives! dustins.tech is live!
---
Awesome, everything seems to be up and running smoothly now. 

As stated in my last post, I made that post on my PC in development mode to make sure the Netlify CMS was working as intended. Sure enough it was and I got to experience how it works with Github there. This is one part I am excited about because my scope of knowledge about Git and version control is limited and as a developer, that's no good at all.

So lets see what I learned about Git from that:

1. Pull before you push.

2. My commit methodologies are flawed.

Regarding point 1, all the times I've used git has been as a solo developer. I never really had to pull any changed made by anyone else before I commit any of my changes. So after making a blog post using Netlify CMS it makes its own push to the git repo that I had to pull down before git let me commit my own changes.

In point 2, I dont have a high number of commits yet, but if I keep commiting every little change to my code it will build up fast. This probably isn't a bad thing but it can be annoying if I had to roll back some code and needed to go through 100s of commits that were just 'Lol forgot a div' or 'missed some boilerplate titles again!' This probably will boil down to me just being a better developer and making sure my code is ready to go before I hit commit.

## Domain?!

So another fun feat I had with this blog was purchasing my 2nd domain name, but actually using one for the first time. I wont write much about it here, but it definitely was a bit easier than I imagined. It was how ever a bit fun to run around and fix all calls to my netlify provided url to my own domain however!



#### But Dustin what was that bug you touched on in the last post?!

Well I left siteurl as an empty string in my gatsby-config.js file because at the time I didn't know my auto generated netlify url, turns out you cant leave that blank to get the site to build! Also I just noticed, I need to update that URL one more time 👍
