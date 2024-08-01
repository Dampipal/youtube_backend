# YouTube Backend

Welcome to the **YouTube Backend** project! This repository contains the backend code for a YouTube-like application. Below is an overview of the folder structure and its contents.

## Folder Structure

- `models/`: Contains the Mongoose models for various entities in the application.
  - `channel/`: Models related to channels.
    - `channelModel.js`: Defines the schema and model for channels.
  - `comment/`: Models related to comments and replies.
    - `commentModel.js`: Defines the schema and model for comments.
    - `recommentModel.js`: Defines the schema and model for replies to comments.
  - `hashtag/`: Models related to hashtags.
    - `hashtagModel.js`: Defines the schema and model for hashtags.
  - `history/`: Models related to user history.
    - `historyModel.js`: Defines the schema and model for user history.
    - `savedModel.js`: Defines the schema and model for saved items.
  - `like/`: Models related to likes and dislikes.
    - `likeModel.js`: Defines the schema and model for likes.
    - `dislikeModel.js`: Defines the schema and model for dislikes.
  - `mention/`: Models related to mentions.
    - `mentionModel.js`: Defines the schema and model for mentions.
  - `notification/`: Models related to notifications.
    - `notificationModel.js`: Defines the schema and model for notifications.
  - `playlist/`: Models related to playlists.
    - `playlistModel.js`: Defines the schema and model for playlists.
  - `shere/`: Models related to shares.
    - `shereModel.js`: Defines the schema and model for shares.
  - `subscribe/`: Models related to subscriptions.
    - `subscribeModel.js`: Defines the schema and model for subscriptions.
  - `user/`: Models related to users.
    - `userModel.js`: Defines the schema and model for users.
  - `video/`: Models related to videos.
    - `videoModel.js`: Defines the schema and model for videos.

- `routes/`: Contains the route handlers for the application.
  - `index.js`: Entry point for defining and exporting all routes.

- `package.json`: Contains project metadata and dependencies.

- `.env`: Contains environment variables required for the application.

## Getting Started

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Dampipal/youtube_backend.git
2. **Install Node Pkg**
   ```bash
   npm i
1. **Run**
   ```bash
   npm start
## Basic HTML Boilerplate

The `index.html` file contains the basic HTML boilerplate code. Here is an example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
    </header>
    
    <main>
        <p>This is a basic HTML boilerplate.</p>
    </main>
    
    <footer>
        <p>&copy; 2024 My Website</p>
    </footer>

    <script src="js/scripts.js"></script>
</body>
</html>
