import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from "react-native-vector-icons/FontAwesome5";
import FavoritesNavigation from "./FavoritesNavigation";
import PokedexNavigation from "./PokedexNavigation";
import AccountNavigation from "./AccountNavigation";
import { Image } from "react-native";

const Tab = createMaterialBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator initialRouteName='Pokedex'>
      <Tab.Screen name="Favorite"  component={FavoritesNavigation} options={{
        tabBarLabel: "Favoritos",
        tabBarIcon: ({ color, size }) => (
          <Icon name="heart" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Pokedex" component={PokedexNavigation} options={{
        tabBarLabel: "",
        tabBarIcon: () => renderPokeball(),
      }} />
      <Tab.Screen name="Account" component={AccountNavigation} options={{
        tabBarLabel: "Mi cuenta",
        tabBarIcon: ({ color, size }) => (
          <Icon name="user" color={color} size={size} />
        ),
      }} />
    </Tab.Navigator>
  );
}

function renderPokeball() {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{ width: 75, height: 75, top: -15 }}
    />
  );
}