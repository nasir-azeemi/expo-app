import React from "react";
import { SafeAreaView } from "react-native";
import UserList from "./components/UserList";
import { Provider } from "react-redux";
import { store } from "./store/index";

export default function Index() {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <UserList />
      </SafeAreaView>
    </Provider>
  );
}
