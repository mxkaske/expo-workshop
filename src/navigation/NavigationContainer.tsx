import React, {
  ReactElement,
  useCallback,
  useEffect,
  useState,
  useRef,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import {
  InitialState,
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";
import Constants from "expo-constants";
import { Box } from "../themes";

const NAVIGATION_STATE_KEY = `NAVIGATION_STATE_KEY-${Constants.manifest.sdkVersion}`;

export type FontSource = Parameters<typeof Font.loadAsync>[0];

const usePromiseAll = (
  promises: Promise<void | void[] | Asset[]>[],
  cb: () => void
) =>
  useEffect(() => {
    (async () => {
      await Promise.all(promises);
      cb();
    })();
  });

const useLoadAssets = (assets: number[], fonts: FontSource): boolean => {
  const [ready, setReady] = useState(false);
  usePromiseAll(
    [Font.loadAsync(fonts), ...assets.map((asset) => Asset.loadAsync(asset))],
    () => setReady(true)
  );
  return ready;
};

interface LoadAssetsProps {
  fonts?: FontSource;
  assets?: number[];
  children: ReactElement | ReactElement[];
}

const LoadAssets = ({ assets, fonts, children }: LoadAssetsProps) => {
  const [isNavigationReady, setIsNavigationReady] = useState(!__DEV__);
  const [initialState, setInitialState] = useState<InitialState | undefined>();

  const routeNameRef = useRef<string | undefined>();
  const navigationRef = useRef<NavigationContainerRef>(null);

  const ready = useLoadAssets(assets || [], fonts || {});

  useEffect(() => {
    const restoreState = async () => {
      try {
        const savedStateString = await AsyncStorage.getItem(
          NAVIGATION_STATE_KEY
        );
        const state = savedStateString
          ? JSON.parse(savedStateString)
          : undefined;
        setInitialState(state);
      } finally {
        setIsNavigationReady(true);
      }
    };
    if (!isNavigationReady) {
      restoreState();
    }
  }, [isNavigationReady]);

  const onStateChange = useCallback((state) => {
    AsyncStorage.setItem(NAVIGATION_STATE_KEY, JSON.stringify(state));
  }, []);

  const onReady = () => {
    routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name;
  };

  if (!ready || !isNavigationReady) {
    return null;
  }

  return (
    // needed - otherwise flicker happens on dark mode when screen is changed
    <Box flex={1} backgroundColor="mainBackground">
      <NavigationContainer
        ref={navigationRef}
        {...{
          onReady,
          onStateChange,
          initialState,
        }}
      >
        {children}
      </NavigationContainer>
    </Box>
  );
};

export default LoadAssets;
