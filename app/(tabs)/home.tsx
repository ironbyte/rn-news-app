import React from "react";

import {
  StyleSheet,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Pressable,
  Image,
  StatusBar,
  useWindowDimensions,
  useColorScheme,
} from "react-native";
import { useFocusEffect } from "expo-router";
import { Text, View } from "@/components/Themed";

import { format } from "date-fns";

import {
  NewsDataPayload,
  fetchTopHeadlinesFromNewsApi,
} from "../services/news-api";

// Import your global CSS file
import "../../global.css";

function Loading({ colorScheme }: { colorScheme?: string }) {
  let color = "";

  if (colorScheme) {
    color = colorScheme === "dark" ? "#FFF" : "#000";
  }

  return (
    <ActivityIndicator
      color={color}
      size="large"
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    />
  );
}

export default function HomeTabScreen() {
  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<NewsDataPayload>();
  const colorScheme = useColorScheme();

  const { width, height } = useWindowDimensions();

  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;

      const getNewsHeadlines = async () => {
        try {
          const response = await fetchTopHeadlinesFromNewsApi({
            country: "us",
          });

          if (isActive) {
            setData(response);
          }
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

      getNewsHeadlines();

      return () => {
        isActive = false;
      };
    }, [])
  );

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <Loading colorScheme={colorScheme ?? "light"} />
      ) : (
        <FlatList
          nestedScrollEnabled
          data={data?.articles}
          keyExtractor={(item) => item.url}
          renderItem={({ item }) => (
            <Pressable
              style={{
                paddingHorizontal: 20,
                width: "100%",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 18,
                  width: "100%",
                }}
              >
                <Image
                  source={{ uri: item.urlToImage }}
                  resizeMode="cover"
                  style={{
                    width: width * 0.4,
                    height: height * 0.3,
                    borderRadius: 5,
                  }}
                />
                <View
                  className="px-3"
                  style={{
                    flex: 1,
                    paddingHorizontal: 12,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      lineHeight: 28,
                      marginBottom: 1,
                      fontWeight: "bold",
                    }}
                  >
                    {item.title.length > 100
                      ? item.title.slice(0, 47) + "..."
                      : item.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                    }}
                  >
                    {item.author}
                  </Text>
                  <Text
                    className="text-stone-500 text-sm"
                    style={{
                      fontSize: 10,
                      lineHeight: 20,
                    }}
                  >
                    {`Published ${format(
                      new Date(item.publishedAt),
                      "HH:mm aaa, E MMMM dd, yyyy"
                    )}`}
                  </Text>
                </View>
              </View>
            </Pressable>
          )}
        />
      )}
    </SafeAreaView>
  );
}

// flex flex-row items-center justify-between w-full mb-4 bg-white shadow-xl rounded-xl
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
