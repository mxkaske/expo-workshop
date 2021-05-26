import React from "react";
import { NavigationContainer } from "./src/navigation";
import StackNavigation from "./src/navigation/StackNavigation";
import { ThemeProvider } from "./src/themes";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./src/store";

const fonts = {
  "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  "OpenSans-BoldItalic": require("./assets/fonts/OpenSans-BoldItalic.ttf"),
  "OpenSans-Light": require("./assets/fonts/OpenSans-Light.ttf"),
  "OpenSans-LightItalic": require("./assets/fonts/OpenSans-LightItalic.ttf"),
  "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
  "OpenSans-Italic": require("./assets/fonts/OpenSans-Italic.ttf"),
};

export default function App() {
  return (
    <Provider {...{ store }}>
      <PersistGate {...{ persistor }}>
        <ThemeProvider>
          <NavigationContainer {...{ fonts }}>
            <StackNavigation />
          </NavigationContainer>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
