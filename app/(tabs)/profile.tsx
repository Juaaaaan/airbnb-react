import { View, Button, Text } from "react-native";
import React from "react";
import { useAuth } from "@clerk/clerk-expo";
import { Link } from "expo-router";

const Page = () => {
  const { signOut, isSignedIn } = useAuth();

  return (
    <View>
      <Button title="log out" onPress={() => signOut()} />

      {!isSignedIn && (
        <Link href={"/(modals)/login"}>
          <Text>Log In</Text>
        </Link>
      )}
    </View>
  );
};

export default Page;
