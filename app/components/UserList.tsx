import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { ActivityIndicator, Card } from "react-native-paper";

import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@store/index";
import { getUsers } from "@store/user/actions";

const UserList = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state: RootState) => state.User);

  const [pageLoading, setPageLoading] = useState(true);

  const endCallback = () => {
    setPageLoading(false);
  };

  useEffect(() => {
    dispatch(getUsers(endCallback));
  }, []);

  if (pageLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={{ padding: 16 }}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card style={{ marginVertical: 8, padding: 10 }}>
            <Text style={{ fontWeight: "bold" }}>{item.userName}</Text>
            <Text>{item.country}</Text>
            <Text>{new Date(item.createdAt).toLocaleDateString()}</Text>
          </Card>
        )}
      />
    </View>
  );
};

export default UserList;
