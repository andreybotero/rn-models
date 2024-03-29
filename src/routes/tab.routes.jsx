import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Form from "../screens/Form";
import  Planet  from "../screens/Planet";
import { planet } from "../data/Profile";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? "#2D2E47" : "#2F6C82"}
            />
          ),
          tabBarLabel: "Inicial",
          tabBarActiveTintColor: "#2D2E47",
          tabBarInactiveTintColor: "#2F6C82",
        }}
      />

      <Tab.Screen
        name="Planetas"
        component={Planet}
        initialParams={{ data: planet}}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="globe"
              size={24}
              color={focused ? "#2D2E47" : "#2F6C82"}
            />
          ),
          tabBarLabel: "Planetas",
          tabBarActiveTintColor: "#2D2E47",
          tabBarInactiveTintColor: "#2F6C82",
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={{ data: planet }}
        options={{
          tabBarItemStyle: {
            display: "none",
          },
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? "#2D2E47" : "#2F6C82"}
            />
          ),
          tabBarLabel: "Perfil",
          tabBarActiveTintColor: "#2D2E47",
          tabBarInactiveTintColor: "#2F6C82",
        }}
      />

      <Tab.Screen
        name="Form"
        component={Form}
        initialParams={{ planet: planet, edit: false }}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="list"
              size={24}
              color={focused ? "#2D2E47" : "#2F6C82"}
            />
          ),
          tabBarLabel: "Cadastro",
          tabBarActiveTintColor: "#2D2E47",
          tabBarInactiveTintColor: "#2F6C82",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
