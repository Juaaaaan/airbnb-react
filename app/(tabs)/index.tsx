import { View } from "react-native";
import React, { useMemo, useState } from "react";
import { Stack } from "expo-router";
import ExploreHeader from "@/components/exploreHeader";

import listingDataGeo from "@/assets/mocks/listings/airbnb-listings.geo.json";
import ListingsMaps from "@/components/listingsMaps";
import ListingsBottomSheet from "@/components/ListingsBottomSheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Page = () => {
  const [category, setCategory] = useState("Tiny homes");
  const items = useMemo(() => listingDataGeo as any, []);
  const onDataChanged = (category: string) => {
    setCategory(category);
  };

  return (
    <View style={{ flex: 1, marginTop: 80 }}>
      <Stack.Screen
        options={{
          header: () => (
            <ExploreHeader onCategoryChanged={onDataChanged}></ExploreHeader>
          ),
        }}
      ></Stack.Screen>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ListingsMaps listings={listingDataGeo} />
        <ListingsBottomSheet
          listings={items}
          category={category}
        ></ListingsBottomSheet>
      </GestureHandlerRootView>
    </View>
  );
};

export default Page;
