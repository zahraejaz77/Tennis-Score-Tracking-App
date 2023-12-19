import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function MatchTrackBallIn() {
  return (
    <View className="flex-col bottom-5 self-center">
      <View className="flex-row ">
        <View
          style={{
            width: 180,
            height: 155,
            borderColor: "#31da60",
            borderWidth: 4,
          }}
          className=" justify-center"
        >
          <TouchableOpacity>
            <Text className="text-center text-base font-bold text-green-700">
              Winner
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: 180,
            height: 155,
            borderColor: "#31da60",
            borderWidth: 4,
          }}
          className=" justify-center"
        >
          <TouchableOpacity>
            <Text className="text-center text-base font-bold text-green-700">
              Winner
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-row ">
        <View className="flex-col">
          <View
            style={{
              width: 180,
              height: 155,
              borderColor: "#31da60",
              borderWidth: 4,
            }}
            className=" justify-center"
          >
            <TouchableOpacity>
              <Text className="text-center  text-red-700 text-base font-bold">
                {" "}
                Forced Error
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: 180,
              height: 155,
              borderColor: "#31da60",
              borderWidth: 4,
            }}
            className=" justify-center"
          >
            <TouchableOpacity>
              <Text className="text-center text-base font-bold text-red-700">
                Unforced Error
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-col">
          <View
            style={{
              width: 180,
              height: 155,
              borderColor: "#31da60",
              borderWidth: 4,
            }}
            className=" justify-center"
          >
            <TouchableOpacity>
              <Text className="text-center  text-red-700 text-base font-bold">
                {" "}
                Forced Error
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: 180,
              height: 155,
              borderColor: "#31da60",
              borderWidth: 4,
            }}
            className=" justify-center"
          >
            <TouchableOpacity>
              <Text className="text-center text-base font-bold text-red-700">
                Unforced Error
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
