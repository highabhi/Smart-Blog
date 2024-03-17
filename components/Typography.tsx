import {
    StyleProp,
    StyleSheet,
    Text,
    TextProps,
    TextStyle,
  } from "react-native";
  import { ReactNode } from "react";
  import { Fonts } from "../constants/fonts";
  
  type TypographyProps = {
    children: ReactNode;
    style?: StyleProp<TextStyle>;
    size?: "small" | "medium" | "large" | "xs";
    weight?: "semibold" | "bold" | "regular";
    color?: string;
  } & TextProps;
  
  function Typography({
    children,
    style,
    weight = "regular",
    size = "medium",
    color,
    ...props
  }: TypographyProps) {
    return (
      <Text
        {...props}
        style={[styles[weight], styles[size], { color: color }, style]}
      >
        {children}
      </Text>
    );
  }
  export default Typography;
  
  const styles = StyleSheet.create({
    small: {
      fontSize: 14,
    },
    xs: {
      fontSize: 12,
    },
    medium: {
      fontSize: 16,
    },
    large: {
      fontSize: 20,
    },
    semibold: {
      fontFamily: Fonts.semiBold,
    },
    bold: {
      fontFamily: Fonts.bold,
    },
    regular: {
      fontFamily: Fonts.regular,
    },
  });