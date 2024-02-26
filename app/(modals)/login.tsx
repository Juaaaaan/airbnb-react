import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useOAuth } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";

enum Stragy {
  Google = "oauth_google",
  Apple = "oauth_apple",
  Facebook = "oauth_facebook",
}

const Page = () => {
  useWarmUpBrowser();

  const router = useRouter();

  const { startOAuthFlow: googleAuth } = useOAuth({
    strategy: Stragy.Google,
  });
  const { startOAuthFlow: appleAuth } = useOAuth({
    strategy: Stragy.Apple,
  });
  const { startOAuthFlow: facebookAuth } = useOAuth({
    strategy: Stragy.Facebook,
  });

  const onSelectAuth = async (strategy: Stragy) => {
    const selectAuth = {
      [Stragy.Apple]: appleAuth,
      [Stragy.Google]: googleAuth,
      [Stragy.Facebook]: facebookAuth,
    }[strategy];

    try {
      const { createdSessionId, setActive } = await selectAuth();
      console.log(createdSessionId);

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
        router.back();
      }
    } catch (error) {
      console.error("OAuth error", error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        placeholder="email"
        style={[defaultStyles.inputField, { marginBottom: 10 }]}
      ></TextInput>
      <Text
        style={{
          marginBottom: 30,
          fontFamily: "mon",
          fontSize: 12,
          color: Colors.grey,
        }}
      >
        We'll call or text you to confirm your number. Standard message and data
        rates apply.
      </Text>
      <TouchableOpacity style={defaultStyles.btn}>
        <Text style={defaultStyles.btnText}>Continue</Text>
      </TouchableOpacity>

      <View style={styles.separatorView}>
        <View
          style={{
            flex: 1,
            borderBottomColor: Colors.grey,
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        ></View>
        <Text style={styles.seperator}>or</Text>
        <View
          style={{
            flex: 1,
            borderBottomColor: Colors.grey,
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        ></View>
      </View>

      <View style={{ gap: 20 }}>
        <TouchableOpacity style={styles.btnOutline}>
          <Ionicons
            style={defaultStyles.btnIcon}
            name="call-outline"
            size={24}
          ></Ionicons>
          <Text style={styles.btnOutlineText}>Continue with phone</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnOutline}
          onPress={() => onSelectAuth(Stragy.Apple)}
        >
          <MaterialCommunityIcons
            style={defaultStyles.btnIcon}
            name="apple"
            size={24}
          ></MaterialCommunityIcons>
          <Text style={styles.btnOutlineText}>Continue with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnOutline}
          onPress={() => onSelectAuth(Stragy.Google)}
        >
          <MaterialCommunityIcons
            style={defaultStyles.btnIcon}
            name="google"
            size={24}
          ></MaterialCommunityIcons>
          <Text style={styles.btnOutlineText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnOutline}
          onPress={() => onSelectAuth(Stragy.Facebook)}
        >
          <MaterialCommunityIcons
            style={defaultStyles.btnIcon}
            name="facebook"
            size={24}
          ></MaterialCommunityIcons>
          <Text style={styles.btnOutlineText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 26,
  },
  separatorView: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginVertical: 30,
  },
  seperator: {
    fontFamily: "mon",
    color: Colors.grey,
  },

  btnOutline: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: Colors.grey,
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  btnOutlineText: {
    color: "#000",
    fontSize: 16,
    fontFamily: "mon",
  },
});

export default Page;
