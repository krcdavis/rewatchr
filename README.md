# rewatchr
https://krcdavis.github.io/rewatchr/

A YouTube-based pseudo TV channel that plays selected videos on a schedule.

It has "programming blocks" of a sort, switching topics every 90 minutes.
Uses seeded randomness to pick videos, providing a random but deterministic schedule that will be the same for all users, imitating an actual TV channel.
Uses Youtube API functions to track state of currently playing video and load the next one when finished.
The ability to define start and end times for an embeded video is used as a rudimentary form of sponsor/intro skipping.

Further plans for the current version include:
- Fix the issue where the "commercial breaks" are fully random and replace main videos instead of going between them (more a design issue than a bug)
- Skip ahead in the line of videos based on how far it is into the programming block. eg, if it's 20 minutes past the start of a block and the first video is less than 20 minutes long, skip to the next one.
- Ability to select a specific topic as a "channel" and watch only videos from that list.
- Improvement of the RNG function.
- Some ability to skip sponsor spots in the middle of a video.

I'm also planning a more significant upgrade moving the project from storing data in an array to using an SQL database.

Plans for this upgraded version include:
- More complicated and nuanced video selection, eg selecting videos with a total length close to the 90 mibute block length
- Subtopics which can occasionally be picked. Eg, the site might play a crtain series of videos, or a collection of videos on the same subtopic or from the same creator.
- "on demand" feature to select videos to watch without just cycling through the scheduled videos. Eg, enter a topic and a length and you'll get some random results you can either select or dismiss, then play your new playlist.
