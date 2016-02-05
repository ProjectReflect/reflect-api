# Reflect API
This repository contains the code for the Reflect API that is used by the <a href="https://github.com/ProjectReflect/reflect">Reflect frontend application</a>.

Reflect superimposes information on a reflection of the user, allowing users to multitask. The user has access to the time, date, weather, their calendar, estimated time of arrival to work (Google Maps driven), estimated Uber cost, stocks, news headlines, measured weight, calculated body-mass index, calories burned throughout the day (Google Fit API driven, to be implemented), and an estimated energy level. The user can access all this information at a glance hands-free. The mirror uses a LEAP motion sensor to let the user switch between two panes with a simple swipe.

While you're brushing your teeth, fixing your tie, or doing your hair, you can focus on what's important - the day ahead.

# Downloads
- Download Node [here](https://nodejs.org/en/)

# Setting Up Guide
Please note that all of these commands are for a unix machine.
1. Clone the repository by running the command `git clone https://github.com/ProjectReflect/reflect-api` in your terminal
2. Go into the folder by doing `cd reflect-api`
3. Install all node dependencies by doing `npm install`
4. Run the app by doing `npm start`
5. If you are developing do `npm run dev` so the server automatically restarts whenever a change to the source code is detected
6. go to [localhost:4000/api](localhost:4000/api). If you see the words Reflect Backend, that means the backend is running
