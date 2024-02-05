
# HackerNews-Scraper

The HackerNews-Scraper aka Tech Pulse is a platform that give you the latest tech news.



## Tech Stack

**Client:** React, TailwindCSS

**Server:** Node, Express, Mongodb



## System Requirements

+ Node version >= 20
+ mongodb local or Atlas
    
## Installation

To setup the project localy

+ Fork the Repo

+ Clone the repository 
```bash
  git clone Your_repo_url   // Your Fork url
```
+ Go to the Client directory 

```bash
    yarn install
```
+ Do the same for the Server aswell

+ This will install the depencencies for the project

+ Create a .env file in the Server directory and Give the values as 

```bash
    PORT = 8000
    MONGODB_URI= 'Your Mongodb URI'
    SECRET_KEY= Set a random string // For development purpose Only 
```
+ To Start the Server 

```bash
    yarn run dev
```
+ The server will start at port 8000

+ In Start the Client 

```bash
    yarn run dev
```
+ The Client will start at port 5173



    
## Contributing Guidelines

Contributions are always welcome!

+ First thing you should do is to create a new branch localy

```bash
    git checkout -b bug
```
+ In the new branch solve the issue and commit . Then set the the remote url upstream 
 
```bash
    git remote add upstream https://github.com/Rajeshpatel07/Hackernews-Scraper.git
```
+ To create a Pull Request 

```bash
    git push origin bug
```
+ Then go to your Github and click on Create pull request.

