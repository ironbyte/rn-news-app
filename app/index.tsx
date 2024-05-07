import React from "react";

import { ImageBackground, StatusBar, Pressable } from "react-native";
import { Text, View } from "@/components/Themed";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import Auth from "@/components/Auth";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      resizeMode="cover"
      source={require("../assets/images/background.jpg")}
      style={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: 10,
      }}
    >
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.9)"]}
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "100%",
        }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          paddingHorizontal: 16,
          backgroundColor: "rgba(52, 52, 52, 0.1)",
        }}
      >
        <Text
          style={{
            fontSize: 36,
            lineHeight: 40,
            color: "#FFF",
            textAlign: "center",
            marginBottom: 16,
          }}
        >
          Beyond Borders, Beyond News
        </Text>

        <Text
          style={{
            textAlign: "center",
            marginBottom: 24,
            color: "rgb(209 213 219)",
            fontSize: 20,
            lineHeight: 28,
          }}
        >
          See the world anew. Everything you need to stay connected and
          informed, in the palm of your hand.
        </Text>
      </View>
      <Pressable
        onPress={() => router.push("/home")}
        style={{
          backgroundColor: "rgb(68 64 60)",
          justifyContent: "center",
          alignItems: "center",
          padding: 16,
          borderRadius: 9999,
          width: "100%",
        }}
        className="bg-stone-700 "
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            lineHeight: 28,
            fontWeight: "bold",
          }}
        >
          Get Started
        </Text>
      </Pressable>
      <Auth />
      <StatusBar />
    </ImageBackground>
  );
}
