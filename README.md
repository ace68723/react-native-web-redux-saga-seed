# React Native Web Seed

**React Native 0.55**

**React Native Web 0.11.4**

![React Native Web Seed](https://user-images.githubusercontent.com/3387945/59630771-2a814880-9114-11e9-8672-c2b909bbe169.png)

## Quick start

```
yarn install 
```

### Running React Native Web

```
yarn start-web
```

### Running React Native Application

```
react-native run-ios
react-native run-android
```

Or open in Xcode and Android Studio

### Build 

```
yarn build-web
```

open ```web/index.html ``` in browser



## Troubleshooting

#### Xcode 10: third-party: 'config.h' file not found

Please check this answer: https://stackoverflow.com/a/48031932

1. Close Xcode.

2. Open Terminal, go to your project's root folder and run:

   ```
   cd node_modules/react-native/third-party/glog-0.3.4/
   ```

3. Run the configure script:

   ```
   ./configure
   ```

4. Open Xcode and try to run your app.


