import { View } from "react-native";
import React, { useMemo, useState } from "react";
import { Stack } from "expo-router";
import ExploreHeader from "@/components/exploreHeader";
import Listings from "@/components/listings";

import listingData from "@/assets/mocks/listings/listings-airbnb.json";
import listingDataGeo from "@/assets/mocks/listings/airbnb-listings.geo.json";
import ListingsMaps from "@/components/listingsMaps";

const Page = () => {
  const [category, setCategory] = useState("Tiny homes");
  const items = useMemo(() => listingData as any, []);
  const onDataChanged = (category: string) => {
    setCategory(category);
  };

  return (
    <View style={{ flex: 1, marginTop: 100 }}>
      <Stack.Screen
        options={{
          header: () => (
            <ExploreHeader onCategoryChanged={onDataChanged}></ExploreHeader>
          ),
        }}
      ></Stack.Screen>
      {/* <Listings listings={items} category={category}></Listings> */}
      <ListingsMaps listings={listingDataGeo} />
    </View>
  );
};

export default Page;
