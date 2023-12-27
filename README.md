# Schedule Maker for St. John the Baptist 🇻🇦✝️

## Setup frontend locally

First clone the repository to your local machine.

1. `cd` into the project
2. Run `npm install` in the root directory of the project.
3. Run `npm run dev`

The frontend should be running now! Currently features such as the **Add Server** functionality will not work without the databse being setup. Please refer to the next section for setting that up.

Once your backend is setup, create a `.env` file in the root directory of the project. This currently only requires one variable for the connection to the backend.

```
VITE_DEV_URL = "Insert Pocketbase DB URL here"
```

This variable is called in the `~/db/pocketbase.js` file

## Backend

There is no dev backend, but there does exist _dummy data_ that can be used to test the drag and drop functionality and play around with the UI. This backend was originally using pocketbase, but the backend is now being created using express.js to build the API, and postgres.

## Background

I have been attending St. John's in Brooklyn, NY for my whole life. As I have striven to be an active member in my Parish community, I have become a co-leader/organizer for the group of altar servers that assist the priest during Sunday Mass[^1].

Creating schedules is standard at our parish. Every Sunday, there's a list of people scheduled for mass, so there is never a need to run around searching for last-minute volunteers, this includes the altar servers!📆

## The Issue ⚖️

Lately, assigning 12+ teens every Sunday has become a greater hassle. As my co-leader and I juggle full-time studies in our own respects, we have limited meaningful time dedicated to creating schedules. Being fair to our altar servers and their time requires balancing some rules:

1. Altar servers shouldn't serve more than 2 Sundays in a row or more than 1 mass a day to prevent burnout.
2. There must always be at least 3 altar servers per mass.
3. On Sundays with 2 masses[^2], English and Spanish, some kids can't understand Spanish, making serving both masses not viable for some kids. This clashes with rule 1 if there are not enough servers who speak Spanish.
4. Sunday Catechism classes prevent some kids from serving the Spanish mass, as it is held at the same time as Spanish mass. This needs to be taken into account as those in Sunday Catechism cannot physically be present for a Spanish mass.
5. Every mass needs at least one appointed "leader" to lead the younger ones and deal with unexpected hiccups in the mass such as missing materials.

**TLDR:** There are many rules and things to keep in mind when creating schedules. If we want to be fair to the altar servers and their volunteering time we have to balance these rules.

## The Solution! 🛠️

As you can imagine, creating schedules on a Google Doc hasn't been enjoyable. Automation became noticeably important as I tracked altar server rotations[^3], updating numbers on the side of the document using the comment feature. I would get really annoyed, "Why can't I automate this?" I thought to myself. Google Sheets could handle functions and automation, but it was more "geared toward numbers and data," I thought to myself. The irony hit me, that as a software engineer, I was facing technical hurdles. This got me to think, what if I simply created my own schedule creator? One doing visually what I wished Google Docs and Excel could.

## The Goal 🎯

The primary aim is to offer a specific and tailored UI experience benefiting me, as an organizer, as well as the future leaders of this ministry, simplifying schedule creation, and expediting the process. To achieve this, this tool will leverage React and CSS, providing live visual cues when rules are violated and helpful tips to move along the creation faster. As Jesus did with St. Peter, I aim to pass the 🔑's to the Kingdom of altar serving to whoever comes after me, that whatever they bound to the schedule will be bound on Sunday, and whatever they loose on the schedule will be loosed on Sunday 🤣[^4]

## The Future of this Project 🔮

There is so much that stems from this initial idea. Instead of sharing a Google Doc link every time the schedule is done for example, why not encourage altar servers to create accounts that give them instant access to schedules as they are completed? Having accounts through this website could also facilitate communication, such as when someone can no longer serve on a Sunday they are scheduled for. Through a simple yes or no response, altar servers can quickly respond to requests for substituting each other[^5].🤝🔄

Even if this project doesn't meet productivity goals, it's a chance for me to hone my ReactJS skills and explore new technologies and methodologies for project development. My hopes are high, and I pray it benefits the future of this ministry!

[^1]: **"Mass"** comes from the Latin word **"missa"**. If interested, read more about it [here](https://www.catholic.com/qa/why-do-we-call-it-the-mass). Spanish mass is first, at 10 am, with English mass following after, at 12 pm.
[^2]: The majority of Sundays unless a special mass occurs due to a liturgical celebration.
[^3]: To ensure fair rotations, I was tracking how many Sundays each person served, preventing one person from serving more days than others.
[^4]: Matthew 16:19 - "I will give you the keys of the kingdom of heaven; whatever you bind on earth will be bound in heaven, and whatever you loose on earth will be loosed in heaven.”
[^5]: Especially helpful for younger ones who may find interactions intimidating initially.
