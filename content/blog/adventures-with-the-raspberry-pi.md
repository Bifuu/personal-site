---
path: devops
date: 2020-02-24T23:08:36.716Z
title: Adventures with the Raspberry Pi
description: Attempting to get VPS experience without one!
---
So last night I had the idea to finally set up my Raspberry Pi 4B and use it as a 'VPS'. Yeah this is probably not a VPS in the slightest, its running its own hardware, but I can make it feel like one.

#### Driving Factors

My driving factors for this project are wanting to learn more Linux, gaining experience in DevOps, learning how to set up a server system, and having a good test bed for a database for my game-night project (and future projects too!).

A couple weeks ago I got my RPi 4B and promptly threw Ubuntu Server 19.10 on a micro SD card and installed it. I set up my router’s DHCP server to give the RPi a static internal IP and then just stared at it for a bit, because I was not ready to put anything on it.

Fast Forward to last night, I’m starting to need some juicy database action in game-night mostly to handle the data between game rooms. This is the last large hurdle I need to solve before some play tests can happen. So in effort to get something working quicker I move to use MongoDB because I have more experience with it. However I quickly found out, there isn’t any real documentation for installing MongoDB to Ubuntu 19.10 yet, and the docs only give commands for 18 and 16 LTS versions of Ubuntu Server. So I reinstalled Ubuntu to the latest LTS, 18.04. I think I could have made it work on 19.10 but with my limited knowledge on Linux I chose to just stick with the versions I could find the documentation for.

Following Mongo docs I got MongoDB installed pretty quickly, even to where it starts itself on startup. So I throw Mongo Compass on my Dev pc and connect to make sure it works. It doesn’t.

#### Fixing the Bug

Well this is less a bug and more of my lack of knowledge of how systems are designed I suppose, and at the time I even assumed I missed a step or something in the docs.

First I verified that the DB was still running on the server. SSHing in and running the ‘mongo’ command confirmed that it was. Second I double checked my static internal IP was still set via the ‘ip a’ command in ssh and even checking my router’s config and both of those were also still set and used. Third I did what any self respecting developer would do, I Googled it. A search of ‘cant connect to mongodb server on same lan’ quickly answered my question. MongoDB needs to be bound to the IP it works at. By default it is only bound to localhost so it only works when connecting to it as localhost, or on the same system. So I bound it to its own internal IP address and now I can access it from my dev system!

#### What did I learn:

1. LTS for the server is probably the smartest option
2. Some sweet linux commands
3. MongoDB Compass Utility exists
