import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { ActivityIndicator, Card, TextInput } from "react-native-paper";

import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@store/index";
import { getUsers } from "@store/user/actions";

const PAGE_SIZE = 20;

const UserList = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state: RootState) => state.User);

  const [pageLoading, setPageLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [filterCountry, setFilterCountry] = useState("");

  const endCallback = () => {
    setPageLoading(false);
  };

  useEffect(() => {
    dispatch(getUsers(page, PAGE_SIZE, filterCountry, endCallback));
  }, [page, filterCountry]);

  if (pageLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        label="Filter by Country"
        value={filterCountry}
        onChangeText={(text) => {
          setPage(1);
          setFilterCountry(text);
        }}
        style={{ marginBottom: 10 }}
      />

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
        onEndReached={() => {
          setPage(page + 1);
        }}
        onEndReachedThreshold={1.5}
      />
    </View>
  );
};

export default UserList;
