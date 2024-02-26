import {
  View,
  Button,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { Link, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { defaultStyles } from "@/constants/Styles";

const Page = () => {
  const { signOut, isSignedIn } = useAuth();

  const signIn = () => {
    router.navigate("/(modals)/login");
  };

  const { user } = useUser();
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [email, setEmail] = useState(user?.emailAddresses[0].emailAddress);

  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (!user) return;

    setFirstName(user.firstName);
    setLastName(user.lastName);
    setEmail(user.emailAddresses[0].emailAddress);
  }, [user]);

  const onSaveUser = async () => {
    try {
      if (!firstName || !lastName) return;

      user?.update({
        firstName,
        lastName,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setEdit(false);
    }
  };

  const onCaptureImage = async () => {};

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    user
      ?.reload()
      .catch((err) => console.log(err))
      .finally(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={defaultStyles.container}>
      <View style={styles.headerComponent}>
        <Text style={styles.header}>Profile</Text>
        <Ionicons
          name="notifications-outline"
          size={26}
          color={Colors.dark}
        ></Ionicons>
      </View>

      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {user && (
          <View style={styles.card}>
            <TouchableOpacity onPress={onCaptureImage}>
              <Image
                source={{ uri: user.imageUrl }}
                style={styles.avatar}
              ></Image>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", gap: 6 }}>
              {edit ? (
                <View
                  style={{ flexDirection: "row", gap: 8, alignItems: "center" }}
                >
                  <TextInput
                    placeholder="First name"
                    value={firstName || ""}
                    onChangeText={setFirstName}
                    style={[defaultStyles.inputField, { width: 100 }]}
                  ></TextInput>
                  <TextInput
                    placeholder="Last name"
                    value={lastName || ""}
                    onChangeText={setLastName}
                    style={[defaultStyles.inputField, { width: 100 }]}
                  ></TextInput>
                  <TouchableOpacity onPress={() => onSaveUser()}>
                    <Ionicons
                      name="checkmark-outline"
                      size={24}
                      color={Colors.dark}
                    ></Ionicons>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={styles.editRow}>
                  <Text style={{ fontFamily: "mon", fontSize: 22 }}>
                    {firstName} {lastName}
                  </Text>
                  <TouchableOpacity onPress={() => setEdit(true)}>
                    <Ionicons
                      name="create-outline"
                      size={24}
                      color={Colors.dark}
                    ></Ionicons>
                  </TouchableOpacity>
                </View>
              )}
            </View>
            <Text>{email}</Text>
            <Text>Since {user.createdAt?.toLocaleDateString()}</Text>
          </View>
        )}
      </ScrollView>

      {isSignedIn && <Button title="log out" onPress={() => signOut()} />}
      {!isSignedIn && <Button title="log in" onPress={() => signIn()} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerComponent: {
    flexDirection: "row",
    padding: 24,
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    fontFamily: "mon",
    fontSize: 24,
  },
  card: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 16,
    marginHorizontal: 24,
    marginTop: 24,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    alignItems: "center",
    gap: 14,
    marginBottom: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.grey,
  },
  editRow: {
    flex: 1,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
});

export default Page;
