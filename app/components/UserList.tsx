import { IUser } from "@typings/user.types";
import React from "react";
import { View, Text, FlatList } from "react-native";

import { Card } from "react-native-paper";

const UserList = () => {
  const users: IUser[] = [
    {
      createdAt: "2025-01-30T01:35:24.900Z",
      userName: "Meta.Boyer",
      country: "CM",
      id: "1",
    },
    {
      createdAt: "2025-01-29T20:44:09.561Z",
      userName: "London.Stehr43",
      country: "NG",
      id: "2",
    },
  ];

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
