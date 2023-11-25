# Schedule maker for St. John the Baptist 🇻🇦✝️

## The Background
I have been attending St. John's in Brooklyn, NY for my whole life. As I have striven to be an active member in my Parish community, I have become a co-leader/organizer for the group of altar servers that assist the priest during Sunday Mass[^1].

At the moment creating schedules is the norm at our parish. Every Sunday there is a list of people scheduled to serve in the mass so there is never any running around to find people, this includes the altar servers!

## The Issue
Lately, the task of assigning 12+ teens every Sunday to serve has become much more of a hassle. With my co-leader/organizer and I becoming full-time students in our respects, there is very little meaningful time for us to work on creating schedules in one day. There is already so much to account for in being fair to the times of our altar servers as is, we have many rules in place:
1. Alter servers should never serve more than 2 Sundays in a row, or more than 1 mass a day, this gives them a break and avoids burnout.
2. On Sundays with 2 masses per day[^2], English and Spanish, we need to account for the kids who can't understand Spanish. They need to be able to know what's going on to know when and how to perform their roles. This means certain kids can't serve the Spanish Mass, which makes rule 1 difficult to follow with not many kids able to properly serve one mass or the other.
3. Sundays are when Cathecism classes are held, so on most Sundays, the kids who have to attend those classes can physically not serve the Spanish mass as they are being taught the faith during Spanish mass in a separate building and brought to church for the English mass. Some of our Spanish-speaking kids are included in this group, which makes rule 1 difficult to follow.
4. There needs to be at least one appointed "leader" for every mass served to lead the younger ones and deal with unexpected hiccups in the mass. Missing materials, the priest needs a new microphone and cannot leave in the middle of mass, etc.

**TLDR:** There are a lot of rules we follow when creating the schedules for the sake of being fair to the altar servers, their time deserves to be respected as volunteers, and some rules we follow to ensure this happens, often clash. There are other rules and situations not mentioned above that really hinder the creation of these schedules.

## The Solution!
As you can imagine, creating schedules on a Google Doc is not the most fun task. Trying to keep all these rules in mind as we create the next few months of Sunday schedules can be gruesome and more mentally exhausting than one might think, but it has to be done! One day I realized I was keeping count of how many times our altar servers were serving for the current schedule I was creating[^3]. As I would update the comment on the side every time I added a new altar server to the schedule, I was beginning to get annoyed. "Why can't I automate this?" I thought to myself. Then the gears really started to turn. I figured that Google Sheets provided some ability to create functions and do cool automation techniques, "but that's more for numbers and data" I thought to myself. Then it hit me the irony of me being a software engineer having technical issues. What if I just created my own schedule creator? One that did what I wished Google Docs and Google Excel could do for me visually to assist me in making my schedule creation process much easier.

## The Vision
There are a lot of ideas that flow from this initial idea. The main purpose is to provide a specific and tailored UI that could benefit the future leaders of the ministry I currently help run. To make the schedule creation as easy as possible for anyone who undertakes the role of leadership next, using the magic of React and CSS to give live visual cues that will inform the creator of the schedule whether or not they are violating a rule, and giving hints when needed to help create the schedule faster. As Jesus did with St. Peter, I want to hand the 🔑's to the Kingdom of altar serving to whoever comes after me, That whatever they bound to the schedule will be bound on Sunday, and whatever they loose on the schedule will be loosed on Sunday 🤣[^4]

## The Future of this Project
The possibilities with this project are endless. As it stands now we share a Google Document link that allows our altar servers to view their schedules digitally, but why can't we simply have them create an account and view the schedule we create through the use of this project? That way the altar servers see exactly what we see, as soon as the schedule is done. The creation of accounts also allows for other cool solutions. What if the altar servers use this website to communicate with each other, such as when someone needs a replacement for a Sunday that they can no longer serve, instead of being scared to ask an altar server they don't know, they can simply request through the webpage, and the person they request can affirm or deny, making interaction much less scary![^5]

Even if this project does not prove to be the productivity machine I intended for Sunday Mass, this venture will be a fun project for me to practice my abilities in ReactJS and explore new technologies and methodologies for creating a project. My hopes however are high for this project, and I pray it works out for the future of this ministry!

[^1]: **"Mass"**, comes from the Latin word **"missa"**. As Catholics, **"Mass"** is our Sunday form of worship, if interested read more on the naming of it here: https://www.catholic.com/qa/why-do-we-call-it-the-mass
[^2]: This is the majority of Sundays unless there is a special mass due to a liturgical celebration.
[^3]: I was doing this to make sure that there was no altar server serving more days than others, and others serving fewer days than others. For example, one person was serving 10 Sundays, while another serving 6, knowing these numbers I went back and evened out the numbers.
[^4]: Matthew 16:19 "I will give you the keys of the kingdom of heaven; whatever you bind on earth will be bound in heaven, and whatever you loose on earth will be loosed in heaven.”
[^5]: The interaction is a lot more scary for the younger ones, who often are nervous and don't know how to introduce themselves to others at first.
