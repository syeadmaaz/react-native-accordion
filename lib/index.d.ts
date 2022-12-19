import * as React from "react";
import { ViewStyle, TextStyle } from "react-native";
export interface AccordionProps {
    style?: ViewStyle;
    headerStyle?: ViewStyle;
    headerTitle: string;
    headerTitleStyle?: TextStyle;
    children: React.ReactNode;
    showButton?: boolean;
    buttonStyle?: ViewStyle;
    renderHeader?: () => React.ReactNode;
    renderButtonContent?: (showContent: boolean) => React.ReactNode;
}
export default function Accordion({ style, headerStyle, headerTitle, headerTitleStyle, children, showButton, buttonStyle, renderHeader, renderButtonContent, }: AccordionProps): JSX.Element;
