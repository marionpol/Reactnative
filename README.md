# File uploading application

   React Native + Expo + Appwrite

   Based on this youtube tutorial - installed all of the packages based on that video 
   https://www.youtube.com/watch?v=ZBCUegTZF7M

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

   ```bash
   npx create-expo-app@latest
   ```

2. Start the app

   ```bash
    npx expo start -c
   ```

   When the app starts use your phone to scan the QR code that is in the terminal
   (on IOS you can use your camera, on android you have to install the expo-go app and then scan the QR code).

3. Using Appwrite

   https://appwrite.io/ > create an account > create a project and choose either IOS or android

   Create a database with 2 tables and a few attributes - it is also shown in the video.
   Create a connection between the application and the database - creating the appwrite.js file in lib and adding the necessary keys.


 4. Erros and fixes

   Comparing to the video and what the reality is that in the video it automatically is transferred to js and jsx files however,
   in reality it installs typescript filetypes and you have to manually change them in the tsconfig.json file to match js and jsx files. 

   Using the android platform and an android phone to render videos from certain links, such as shown in the video tutorial,
   can cause the video to not render so they have to use different links which have the .mp4 at the end.

   


   
   


